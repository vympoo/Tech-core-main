// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initializePreloader();
    initializeFAQ();
    initializeContactForm();
    initializeChat();
});

// Прелоадер
function initializePreloader() {
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.main-content');
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        mainContent.style.display = 'block';
        
        setTimeout(() => {
            preloader.style.display = 'none';
            mainContent.style.opacity = '1';
        }, 500);
    }, 1500);
}

// FAQ функционал
function initializeFAQ() {
    // Переключение категорий FAQ
    const categoryTabs = document.querySelectorAll('.category-tab');
    const faqCategories = document.querySelectorAll('.faq-category');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Убираем активный класс у всех табов
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Добавляем активный класс текущему табу
            this.classList.add('active');
            
            // Скрываем все категории
            faqCategories.forEach(cat => cat.classList.remove('active'));
            // Показываем выбранную категорию
            document.getElementById(category).classList.add('active');
        });
    });
    
    // Открытие/закрытие вопросов
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Закрываем все вопросы
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Если вопрос не был активен, открываем его
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// Контактная форма
function initializeContactForm() {
    const form = document.getElementById('supportForm');
    const fileInput = document.getElementById('attachment');
    const fileList = document.getElementById('fileList');
    
    // Обработка загрузки файлов
    fileInput.addEventListener('change', function() {
        fileList.innerHTML = '';
        
        Array.from(this.files).forEach((file, index) => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.innerHTML = `
                <span>${file.name}</span>
                <button type="button" onclick="removeFile(${index})">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            `;
            fileList.appendChild(fileItem);
        });
    });
    
    // Отправка формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Валидация формы
        if (validateForm()) {
            submitForm();
        }
    });
}

function validateForm() {
    const form = document.getElementById('supportForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = 'var(--danger)';
            isValid = false;
        } else {
            field.style.borderColor = 'var(--gray-dark)';
        }
    });
    
    // Валидация email
    const emailField = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value && !emailRegex.test(emailField.value)) {
        emailField.style.borderColor = 'var(--danger)';
        isValid = false;
        showNotification('Пожалуйста, введите корректный email адрес', 'error');
    }
    
    return isValid;
}

function submitForm() {
    const form = document.getElementById('supportForm');
    const formData = new FormData(form);
    
    // Имитация отправки формы
    showNotification('Ваше сообщение отправлено! Мы ответим вам в ближайшее время.', 'success');
    
    // Очистка формы
    form.reset();
    document.getElementById('fileList').innerHTML = '';
    
    // Сброс стилей полей
    const fields = form.querySelectorAll('input, select, textarea');
    fields.forEach(field => {
        field.style.borderColor = 'var(--gray-dark)';
    });
}

function removeFile(index) {
    const fileInput = document.getElementById('attachment');
    const files = Array.from(fileInput.files);
    files.splice(index, 1);
    
    // Создаем новый FileList (нельзя напрямую изменить files)
    const dt = new DataTransfer();
    files.forEach(file => dt.items.add(file));
    fileInput.files = dt.files;
    
    // Обновляем список файлов
    const event = new Event('change');
    fileInput.dispatchEvent(event);
}

// Чат виджет
function initializeChat() {
    // Автоматическое открытие чата через 30 секунд
    setTimeout(() => {
        if (!localStorage.getItem('chatOpened')) {
            openChat();
            localStorage.setItem('chatOpened', 'true');
        }
    }, 30000);
}

function openChat() {
    const chatWidget = document.getElementById('chatWidget');
    chatWidget.classList.add('active');
    
    // Добавляем приветственное сообщение
    setTimeout(() => {
        addBotMessage('Добро пожаловать в чат поддержки TECH CORE! Чем могу помочь?');
    }, 1000);
}

function closeChat() {
    const chatWidget = document.getElementById('chatWidget');
    chatWidget.classList.remove('active');
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (message) {
        // Добавляем сообщение пользователя
        addUserMessage(message);
        chatInput.value = '';
        
        // Имитация ответа бота
        setTimeout(() => {
            const botResponse = generateBotResponse(message);
            addBotMessage(botResponse);
        }, 1000 + Math.random() * 2000);
    }
}

function addUserMessage(text) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = createMessageElement(text, 'user');
    chatMessages.appendChild(messageElement);
    scrollChatToBottom();
}

function addBotMessage(text) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = createMessageElement(text, 'bot');
    chatMessages.appendChild(messageElement);
    scrollChatToBottom();
}

function createMessageElement(text, type) {
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ':' + 
                 now.getMinutes().toString().padStart(2, '0');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${text}</p>
        </div>
        <span class="message-time">${time}</span>
    `;
    
    return messageDiv;
}

function scrollChatToBottom() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('гарантия') || lowerMessage.includes('гарантию')) {
        return 'Мы предоставляем гарантию 3 года на все сборки. На отдельные компоненты действуют гарантии производителей: процессоры - 3 года, видеокарты - 2-3 года, материнские платы - 3 года.';
    } else if (lowerMessage.includes('доставка') || lowerMessage.includes('доставку')) {
        return 'Доставка осуществляется по всей России через СДЭК, Boxberry и DPD. В Москве и СПб - бесплатная доставка в день заказа от 50 000 рублей. Срок доставки 1-7 дней в зависимости от региона.';
    } else if (lowerMessage.includes('сборка') || lowerMessage.includes('собрать')) {
        return 'Стандартный срок сборки компьютера - 2-3 рабочих дня. Все компоненты проходят тестирование, сборка осуществляется опытными инженерами. Можем установить ОС и необходимое ПО.';
    } else if (lowerMessage.includes('цена') || lowerMessage.includes('стоимость')) {
        return 'Стоимость сборки зависит от выбранных компонентов. Рекомендую воспользоваться нашим конфигуратором на главной странице для точного расчета. Также доступна рассрочка и кредит.';
    } else if (lowerMessage.includes('совместимость') || lowerMessage.includes('подойдет')) {
        return 'Наш конфигуратор автоматически проверяет совместимость компонентов. Если нужна помощь с подбором - опишите ваши требования, и я помогу выбрать оптимальную конфигурацию.';
    } else if (lowerMessage.includes('ремонт') || lowerMessage.includes('сломался')) {
        return 'При возникновении неисправности обратитесь в нашу службу поддержки по телефону +7 (962) 772-29-98. Мы проведем диагностику и выполним гарантийный ремонт. На время сложного ремонта предоставляем подменное оборудование.';
    } else {
        const responses = [
            'Понял ваш вопрос. Для более точного ответа могу подключить специалиста. Хотите продолжить общение с техническим экспертом?',
            'Спасибо за вопрос! Рекомендую обратиться к нашему специалисту по телефону +7 (962) 772-29-98 для детальной консультации.',
            'Это интересный вопрос. Для получения наиболее точной информации советую написать нам на email max705800@gmail.com с подробным описанием ситуации.',
            'По этому вопросу лучше проконсультироваться с нашим техническим специалистом. Могу организовать обратный звонок?'
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Уведомления
function showNotification(message, type = 'info') {
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--dark);
                border: 1px solid var(--gray-dark);
                border-left: 4px solid var(--primary);
                border-radius: 8px;
                padding: 15px 20px;
                max-width: 400px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                transform: translateX(400px);
                opacity: 0;
                transition: all 0.3s ease;
                z-index: 1000;
            }
            
            .notification.show {
                transform: translateX(0);
                opacity: 1;
            }
            
            .notification-success {
                border-left-color: var(--success);
            }
            
            .notification-error {
                border-left-color: var(--danger);
            }
            
            .notification-info {
                border-left-color: var(--primary);
            }
            
            .notification-message {
                color: var(--light);
                font-weight: 500;
            }
        `;
        document.head.appendChild(styles);
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-message">${message}</div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        closeNotification(notification);
    }, 5000);
}

function closeNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Глобальные функции для использования в HTML
window.openChat = openChat;
window.closeChat = closeChat;
window.sendMessage = sendMessage;
window.removeFile = removeFile;

// Обработка нажатия Enter в чате
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});