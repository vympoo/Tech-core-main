// script.js - добавьте этот код в ваш существующий файл (заменив или дополнив)
// Проверка доступности DOM элементов
function checkDOM() {
    const requiredElements = [
        '.preloader',
        '.main-content',
        '.config-content',
        '#category-cpu'
    ];
    
    let missingElements = [];
    
    requiredElements.forEach(selector => {
        if (!document.querySelector(selector)) {
            missingElements.push(selector);
        }
    });
    
    if (missingElements.length > 0) {
        console.warn('Не найдены элементы:', missingElements);
        return false;
    }
    
    return true;
}

// Обновленная функция initConfigurator с проверкой
function initConfigurator() {
    console.log('Инициализация конфигуратора...');
    
    // Проверяем DOM
    if (!checkDOM()) {
        console.error('Не удалось найти необходимые DOM элементы');
        return;
    }
    
    try {
        // Загружаем процессоры по умолчанию
        loadComponents('cpu');
        
        // Настройка обработчиков для шагов
        setupStepNavigation();
        
        // Настройка обработчиков для кнопок
        setupEventHandlers();
        
        // Обновляем корзину из localStorage
        updateCartFromStorage();
        
        // Инициализируем корзину
        initCart();
        
        console.log('Конфигуратор успешно инициализирован');
    } catch (error) {
        console.error('Ошибка при инициализации конфигуратора:', error);
        throw error; // Пробрасываем ошибку дальше
    }
}
// Управление прелоадером
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.main-content');
    
    // Сначала показываем прелоадер
    preloader.style.display = 'flex';
    mainContent.style.display = 'none';
    
    // Инициализируем конфигуратор сразу
    try {
        initConfigurator();
        
        // Показываем основной контент через 1.5 секунды
        setTimeout(function() {
            preloader.style.opacity = '0';
            preloader.style.transition = 'opacity 0.5s ease';
            
            // Через 500ms скрываем прелоадер и показываем контент
            setTimeout(function() {
                preloader.style.display = 'none';
                mainContent.style.display = 'block';
            }, 500);
            
        }, 1500);
        
    } catch (error) {
        console.error('Ошибка инициализации:', error);
        
        // В случае ошибки все равно показываем контент
        setTimeout(function() {
            preloader.style.display = 'none';
            mainContent.style.display = 'block';
            alert('Произошла ошибка при загрузке. Пожалуйста, обновите страницу.');
        }, 2000);
    }
});
// Данные компонентов (мок-данные)
const componentsData = {
    cpu: [
        { id: 1, name: 'Intel Core i9-14900K', specs: '24 ядра, 5.8 GHz', price: 65000, image: 'cpu-intel.jpg' },
        { id: 2, name: 'AMD Ryzen 9 7950X', specs: '16 ядер, 5.7 GHz', price: 58000, image: 'cpu-amd.jpg' },
        { id: 3, name: 'Intel Core i7-14700K', specs: '20 ядер, 5.6 GHz', price: 42000, image: 'cpu-intel.jpg' },
        { id: 4, name: 'AMD Ryzen 7 7800X3D', specs: '8 ядер, 5.0 GHz', price: 38000, image: 'cpu-amd.jpg' }
    ],
    gpu: [
        { id: 5, name: 'NVIDIA RTX 4090', specs: '24GB GDDR6X', price: 180000, image: 'gpu-nvidia.jpg' },
        { id: 6, name: 'AMD RX 7900 XTX', specs: '24GB GDDR6', price: 120000, image: 'gpu-amd.jpg' },
        { id: 7, name: 'NVIDIA RTX 4080 SUPER', specs: '16GB GDDR6X', price: 95000, image: 'gpu-nvidia.jpg' },
        { id: 8, name: 'NVIDIA RTX 4070 Ti SUPER', specs: '16GB GDDR6X', price: 75000, image: 'gpu-nvidia.jpg' }
    ],
    motherboard: [
        { id: 9, name: 'ASUS ROG MAXIMUS Z790', specs: 'Intel Z790, ATX', price: 45000, image: 'motherboard.jpg' },
        { id: 10, name: 'GIGABYTE X670E AORUS', specs: 'AMD X670, ATX', price: 38000, image: 'motherboard.jpg' },
        { id: 11, name: 'MSI MPG B650', specs: 'AMD B650, ATX', price: 22000, image: 'motherboard.jpg' },
        { id: 12, name: 'ASRock Z790 PRO RS', specs: 'Intel Z790, ATX', price: 18000, image: 'motherboard.jpg' }
    ],
    ram: [
        { id: 13, name: 'Kingston Fury 32GB', specs: 'DDR5 6000MHz', price: 12000, image: 'ram.jpg' },
        { id: 14, name: 'Corsair Dominator 64GB', specs: 'DDR5 6400MHz', price: 28000, image: 'ram.jpg' },
        { id: 15, name: 'G.Skill Trident Z5 32GB', specs: 'DDR5 5600MHz', price: 10000, image: 'ram.jpg' },
        { id: 16, name: 'TeamGroup T-Force 16GB', specs: 'DDR5 5200MHz', price: 6000, image: 'ram.jpg' }
    ],
    storage: [
        { id: 17, name: 'Samsung 990 PRO 2TB', specs: 'PCIe 4.0 NVMe', price: 18000, image: 'ssd.jpg' },
        { id: 18, name: 'WD Black SN850X 2TB', specs: 'PCIe 4.0 NVMe', price: 16000, image: 'ssd.jpg' },
        { id: 19, name: 'Crucial P5 Plus 1TB', specs: 'PCIe 4.0 NVMe', price: 8000, image: 'ssd.jpg' },
        { id: 20, name: 'Kingston NV2 2TB', specs: 'PCIe 4.0 NVMe', price: 9000, image: 'ssd.jpg' }
    ]
};

// Текущая конфигурация
let currentConfig = {
    cpu: null,
    gpu: null,
    motherboard: null,
    ram: null,
    storage: null
};

// Цена сборки
const BUILD_PRICE = 5000;

// Инициализация конфигуратора
function initConfigurator() {
    // Загружаем процессоры по умолчанию
    loadComponents('cpu');
    
    // Настройка обработчиков для шагов
    setupStepNavigation();
    
    // Настройка обработчиков для кнопок
    setupEventHandlers();
    
    // Обновляем корзину из localStorage
    updateCartFromStorage();
    
    // Инициализируем корзину
    initCart();
}

// Загрузка компонентов для категории
function loadComponents(category) {
    const grid = document.querySelector(`#category-${category} .components-grid`);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    componentsData[category].forEach(component => {
        const card = document.createElement('div');
        card.className = 'component-card';
        card.dataset.id = component.id;
        card.dataset.category = category;
        
        card.innerHTML = `
            <div class="component-image">
                <span>${component.name.split(' ')[0]}</span>
            </div>
            <h4 class="component-name">${component.name}</h4>
            <p class="component-specs">${component.specs}</p>
            <div class="component-price">${formatPrice(component.price)} ₽</div>
        `;
        
        card.addEventListener('click', () => selectComponent(card, component));
        grid.appendChild(card);
    });
}

// Выбор компонента
function selectComponent(card, component) {
    const category = card.dataset.category;
    
    // Убираем выделение у всех карточек в этой категории
    document.querySelectorAll(`#category-${category} .component-card`).forEach(c => {
        c.classList.remove('selected');
    });
    
    // Выделяем выбранную карточку
    card.classList.add('selected');
    
    // Сохраняем выбор
    currentConfig[category] = component;
    
    // Обновляем сводку
    updateSummary(category, component);
    
    // Переходим к следующему шагу через 1 секунду
    setTimeout(() => goToNextStep(), 1000);
}

// Обновление сводки
function updateSummary(category, component) {
    const summaryItem = document.querySelector(`.summary-item[data-component="${category}"]`);
    if (summaryItem) {
        summaryItem.querySelector('.item-value').textContent = component.name;
        summaryItem.querySelector('.item-price').textContent = formatPrice(component.price) + ' ₽';
    }
    
    // Пересчитываем общую стоимость
    calculateTotal();
}

// Подсчет общей стоимости
function calculateTotal() {
    let componentsTotal = 0;
    
    // Суммируем стоимость всех выбранных компонентов
    Object.values(currentConfig).forEach(component => {
        if (component) {
            componentsTotal += component.price;
        }
    });
    
    // Обновляем отображение
    document.getElementById('components-total').textContent = formatPrice(componentsTotal) + ' ₽';
    
    const totalPrice = componentsTotal + BUILD_PRICE;
    document.getElementById('total-price').textContent = formatPrice(totalPrice) + ' ₽';
}

// Переход к следующему шагу
function goToNextStep() {
    const currentStep = document.querySelector('.step.active');
    if (!currentStep) return;
    
    const currentStepNum = parseInt(currentStep.dataset.step);
    const nextStepNum = currentStepNum + 1;
    
    // Отмечаем текущий шаг как завершенный
    currentStep.classList.remove('active');
    currentStep.classList.add('completed');
    
    // Активируем следующий шаг
    const nextStep = document.querySelector(`.step[data-step="${nextStepNum}"]`);
    if (nextStep) {
        nextStep.classList.add('active');
        
        // Показываем соответствующую категорию компонентов
        switch(nextStepNum) {
            case 1:
                showCategory('cpu');
                break;
            case 2:
                showCategory('gpu');
                break;
            case 3:
                showCategory('motherboard');
                break;
            case 4:
                showCategory('ram');
                break;
            case 5:
                showCategory('storage');
                break;
        }
    }
}

// Показ категории компонентов
function showCategory(category) {
    // Скрываем все категории
    document.querySelectorAll('.component-category').forEach(cat => {
        cat.classList.remove('active');
    });
    
    // Показываем нужную категорию
    const targetCategory = document.getElementById(`category-${category}`);
    if (targetCategory) {
        targetCategory.classList.add('active');
        
        // Загружаем компоненты, если еще не загружены
        if (targetCategory.querySelector('.components-grid').children.length === 0) {
            loadComponents(category);
        }
    }
}

// Настройка навигации по шагам
function setupStepNavigation() {
    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', function() {
            const stepNum = parseInt(this.dataset.step);
            
            // Сбрасываем все шаги
            document.querySelectorAll('.step').forEach(s => {
                s.classList.remove('active');
            });
            
            // Активируем выбранный шаг и все предыдущие
            document.querySelectorAll('.step').forEach(s => {
                const sNum = parseInt(s.dataset.step);
                if (sNum <= stepNum) {
                    s.classList.add('completed');
                    if (sNum === stepNum) {
                        s.classList.add('active');
                    }
                } else {
                    s.classList.remove('completed');
                }
            });
            
            // Показываем соответствующую категорию
            switch(stepNum) {
                case 1:
                    showCategory('cpu');
                    break;
                case 2:
                    showCategory('gpu');
                    break;
                case 3:
                    showCategory('motherboard');
                    break;
                case 4:
                    showCategory('ram');
                    break;
                case 5:
                    showCategory('storage');
                    break;
            }
        });
    });
}

// Настройка обработчиков событий
function setupEventHandlers() {
    // Кнопка "Добавить в корзину"
    const addToCartBtn = document.getElementById('add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addConfigurationToCart);
    }
    
    // Кнопка "Сбросить"
    const resetBtn = document.getElementById('reset-config');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetConfiguration);
    }
    
    // Кнопка сохранения конфигурации
    const saveBtn = document.getElementById('save-config');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveConfiguration);
    }
    
    // Кнопка поделиться
    const shareBtn = document.getElementById('share-config');
    if (shareBtn) {
        shareBtn.addEventListener('click', shareConfiguration);
    }
    
    // Открытие корзины
    const cartButton = document.getElementById('cartButton');
    if (cartButton) {
        cartButton.addEventListener('click', openCart);
    }
    
    // Закрытие корзины
    const cartClose = document.getElementById('cartClose');
    if (cartClose) {
        cartClose.addEventListener('click', closeCart);
    }
    
    // Кнопка оформления заказа
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
    
    // Оверлей корзины
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }
}

// Добавление конфигурации в корзину
function addConfigurationToCart() {
    // Проверяем, что выбраны все компоненты
    const requiredComponents = ['cpu', 'gpu', 'motherboard', 'ram', 'storage'];
    const missingComponents = requiredComponents.filter(comp => !currentConfig[comp]);
    
    if (missingComponents.length > 0) {
        alert('Пожалуйста, выберите все компоненты перед добавлением в корзину.');
        return;
    }
    
    // Создаем объект конфигурации
    const config = {
        id: Date.now(),
        name: 'Конфигурация ПК',
        components: { ...currentConfig },
        totalPrice: calculateConfigTotal(),
        date: new Date().toLocaleString('ru-RU')
    };
    
    // Добавляем в корзину
    addToCart(config);
    
    // Показываем уведомление
    showNotification('Конфигурация добавлена в корзину!');
}

// Расчет стоимости конфигурации
function calculateConfigTotal() {
    let total = BUILD_PRICE;
    Object.values(currentConfig).forEach(component => {
        if (component) {
            total += component.price;
        }
    });
    return total;
}

// Сброс конфигурации
function resetConfiguration() {
    if (confirm('Вы уверены, что хотите сбросить конфигурацию?')) {
        // Сбрасываем состояние
        currentConfig = {
            cpu: null,
            gpu: null,
            motherboard: null,
            ram: null,
            storage: null
        };
        
        // Сбрасываем выделение карточек
        document.querySelectorAll('.component-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Сбрасываем сводку
        document.querySelectorAll('.summary-item').forEach(item => {
            item.querySelector('.item-value').textContent = 'Не выбрано';
            item.querySelector('.item-price').textContent = '0 ₽';
        });
        
        // Сбрасываем общую стоимость
        document.getElementById('components-total').textContent = '0 ₽';
        document.getElementById('total-price').textContent = formatPrice(BUILD_PRICE) + ' ₽';
        
        // Возвращаемся к первому шагу
        document.querySelectorAll('.step').forEach((step, index) => {
            step.classList.remove('active', 'completed');
            if (index === 0) {
                step.classList.add('active');
            }
        });
        
        // Показываем процессоры
        showCategory('cpu');
    }
}

// Сохранение конфигурации
function saveConfiguration() {
    const config = {
        components: currentConfig,
        total: calculateConfigTotal(),
        date: new Date().toISOString()
    };
    
    // Сохраняем в localStorage
    const savedConfigs = JSON.parse(localStorage.getItem('savedConfigs') || '[]');
    savedConfigs.push(config);
    localStorage.setItem('savedConfigs', JSON.stringify(savedConfigs));
    
    showNotification('Конфигурация сохранена!');
}

// Поделиться конфигурацией
function shareConfiguration() {
    const configText = `Моя конфигурация ПК:\n` +
        `Процессор: ${currentConfig.cpu ? currentConfig.cpu.name : 'Не выбран'}\n` +
        `Видеокарта: ${currentConfig.gpu ? currentConfig.gpu.name : 'Не выбрана'}\n` +
        `Материнская плата: ${currentConfig.motherboard ? currentConfig.motherboard.name : 'Не выбрана'}\n` +
        `Оперативная память: ${currentConfig.ram ? currentConfig.ram.name : 'Не выбрана'}\n` +
        `Накопитель: ${currentConfig.storage ? currentConfig.storage.name : 'Не выбран'}\n` +
        `Итого: ${formatPrice(calculateConfigTotal())} ₽`;
    
    // Копируем в буфер обмена
    navigator.clipboard.writeText(configText)
        .then(() => {
            showNotification('Конфигурация скопирована в буфер обмена!');
        })
        .catch(err => {
            console.error('Ошибка копирования: ', err);
            alert('Не удалось скопировать конфигурацию');
        });
}

// Утилиты
function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU').format(price);
}

function showNotification(message) {
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ==================== Корзина ====================

let cartItems = [];

function initCart() {
    const savedCart = localStorage.getItem('pcCart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

function addToCart(item) {
    cartItems.push(item);
    localStorage.setItem('pcCart', JSON.stringify(cartItems));
    updateCartDisplay();
    closeCart(); // Закрываем корзину после добавления
}

function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    const cartEmpty = document.getElementById('cartEmpty');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    // Обновляем счетчик
    cartCount.textContent = cartItems.length;
    
    // Обновляем содержимое корзины
    if (cartItems.length === 0) {
        cartEmpty.style.display = 'block';
        cartItemsContainer.style.display = 'none';
        checkoutBtn.disabled = true;
    } else {
        cartEmpty.style.display = 'none';
        cartItemsContainer.style.display = 'block';
        checkoutBtn.disabled = false;
        
        // Очищаем и заполняем список товаров
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        cartItems.forEach((item, index) => {
            total += item.totalPrice;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.totalPrice)} ₽</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
        
        cartTotalPrice.textContent = formatPrice(total) + ' ₽';
    }
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('pcCart', JSON.stringify(cartItems));
    updateCartDisplay();
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
}

function checkout() {
    if (cartItems.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    
    const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    alert(`Заказ оформлен! Сумма: ${formatPrice(total)} ₽\nСпасибо за покупку!`);
    
    cartItems = [];
    localStorage.removeItem('pcCart');
    updateCartDisplay();
    closeCart();
}

function updateCartFromStorage() {
    const savedCart = localStorage.getItem('pcCart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// Добавляем CSS для анимации уведомлений
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .config-steps::before {
        transition: background 0.3s ease;
    }
    
    .step.completed .step-number {
        background: var(--success);
        border-color: var(--success);
    }
`;
document.head.appendChild(style);