// Расширенные данные компонентов
const componentsData = {
    cpu: [
        {
            id: 1,
            name: "AMD Ryzen 5 8600G",
            specs: "6 ядер, 12 потоков, 4.3-5.0 ГГц, 65W TDP, Radeon Graphics",
            price: 18500,
            brand: "AMD",
            category: "cpu",
            rating: 4.5,
            stock: 15,
            featured: false
        },
        {
            id: 2,
            name: "AMD Ryzen 7 9700X",
            specs: "8 ядер, 16 потоков, 4.5-5.5 ГГц, 105W TDP, Без встроенной графики",
            price: 32500,
            brand: "AMD",
            category: "cpu",
            rating: 4.8,
            stock: 8,
            featured: true
        },
        {
            id: 3,
            name: "AMD Ryzen 9 9900X",
            specs: "12 ядер, 24 потока, 4.8-5.8 ГГц, 120W TDP, Без встроенной графики",
            price: 48500,
            brand: "AMD",
            category: "cpu",
            rating: 4.9,
            stock: 5,
            featured: true
        },
        {
            id: 4,
            name: "Intel Core i5-15600K",
            specs: "8 ядер, 16 потоков, 4.2-5.2 ГГц, 125W TDP, UHD Graphics 770",
            price: 21500,
            brand: "Intel",
            category: "cpu",
            rating: 4.6,
            stock: 12,
            featured: false
        },
        {
            id: 5,
            name: "Intel Core i7-15700K",
            specs: "12 ядер, 20 потоков, 4.5-5.6 ГГц, 150W TDP, UHD Graphics 770",
            price: 38500,
            brand: "Intel",
            category: "cpu",
            rating: 4.7,
            stock: 7,
            featured: false
        },
        {
            id: 6,
            name: "Intel Core i9-15900K",
            specs: "16 ядер, 24 потока, 4.8-6.0 ГГц, 165W TDP, UHD Graphics 770",
            price: 62500,
            brand: "Intel",
            category: "cpu",
            rating: 4.9,
            stock: 3,
            featured: true
        },
        {
            id: 7,
            name: "AMD Ryzen 5 8500G",
            specs: "6 ядер, 12 потоков, 4.1-5.0 ГГц, 65W TDP, Radeon 740M",
            price: 15500,
            brand: "AMD",
            category: "cpu",
            rating: 4.3,
            stock: 20,
            featured: false
        },
        {
            id: 8,
            name: "AMD Ryzen 3 8300G",
            specs: "4 ядра, 8 потоков, 4.0-4.9 ГГц, 65W TDP, Radeon 740M",
            price: 12500,
            brand: "AMD",
            category: "cpu",
            rating: 4.2,
            stock: 25,
            featured: false
        }
    ],
    gpu: [
        {
            id: 1,
            name: "NVIDIA RTX 5060 8GB",
            specs: "8GB GDDR6, 192-bit, 18 Gbps, 160W, DLSS 3.5",
            price: 42500,
            brand: "NVIDIA",
            category: "gpu",
            rating: 4.6,
            stock: 10,
            featured: false
        },
        {
            id: 2,
            name: "NVIDIA RTX 5070 12GB",
            specs: "12GB GDDR6, 256-bit, 20 Gbps, 200W, DLSS 3.5",
            price: 62500,
            brand: "NVIDIA",
            category: "gpu",
            rating: 4.8,
            stock: 6,
            featured: true
        },
        {
            id: 3,
            name: "NVIDIA RTX 5080 16GB",
            specs: "16GB GDDR6X, 320-bit, 22 Gbps, 285W, DLSS 3.5",
            price: 89500,
            brand: "NVIDIA",
            category: "gpu",
            rating: 4.9,
            stock: 4,
            featured: true
        },
        {
            id: 4,
            name: "NVIDIA RTX 5090 24GB",
            specs: "24GB GDDR6X, 384-bit, 24 Gbps, 450W, DLSS 3.5",
            price: 149900,
            brand: "NVIDIA",
            category: "gpu",
            rating: 5.0,
            stock: 2,
            featured: true
        },
        {
            id: 5,
            name: "AMD Radeon RX 8800 XT",
            specs: "16GB GDDR6, 256-bit, 20 Gbps, 230W, FSR 3",
            price: 58500,
            brand: "AMD",
            category: "gpu",
            rating: 4.7,
            stock: 8,
            featured: false
        },
        {
            id: 6,
            name: "AMD Radeon RX 8900 XTX",
            specs: "24GB GDDR6, 384-bit, 22 Gbps, 350W, FSR 3",
            price: 99900,
            brand: "AMD",
            category: "gpu",
            rating: 4.8,
            stock: 3,
            featured: true
        },
        {
            id: 7,
            name: "NVIDIA RTX 4060 Ti 16GB",
            specs: "16GB GDDR6, 128-bit, 18 Gbps, 165W, DLSS 3",
            price: 38500,
            brand: "NVIDIA",
            category: "gpu",
            rating: 4.5,
            stock: 15,
            featured: false
        },
        {
            id: 8,
            name: "AMD Radeon RX 7800 XT",
            specs: "16GB GDDR6, 256-bit, 19.5 Gbps, 263W, FSR 3",
            price: 45500,
            brand: "AMD",
            category: "gpu",
            rating: 4.6,
            stock: 12,
            featured: false
        }
    ],
    motherboard: [
        {
            id: 1,
            name: "ASUS ROG STRIX B650-A",
            specs: "AMD B650, DDR5, PCIe 5.0, Wi-Fi 6E, 2.5G LAN",
            price: 21500,
            brand: "ASUS",
            category: "motherboard",
            rating: 4.5,
            stock: 8,
            featured: false
        },
        {
            id: 2,
            name: "Gigabyte X670 AORUS Elite",
            specs: "AMD X670, DDR5, PCIe 5.0, 2.5G LAN, USB4",
            price: 32500,
            brand: "Gigabyte",
            category: "motherboard",
            rating: 4.7,
            stock: 5,
            featured: true
        },
        {
            id: 3,
            name: "MSI MPG Z790 Carbon",
            specs: "Intel Z790, DDR5, PCIe 5.0, Thunderbolt 4, Wi-Fi 7",
            price: 28900,
            brand: "MSI",
            category: "motherboard",
            rating: 4.6,
            stock: 6,
            featured: false
        },
        {
            id: 4,
            name: "ASRock B760 Steel Legend",
            specs: "Intel B760, DDR5, PCIe 5.0, 2.5G LAN, ARGB",
            price: 18500,
            brand: "ASRock",
            category: "motherboard",
            rating: 4.4,
            stock: 10,
            featured: false
        },
        {
            id: 5,
            name: "ASUS ROG Crosshair X670E",
            specs: "AMD X670E, DDR5, PCIe 5.0, 10G LAN, Wi-Fi 6E",
            price: 45500,
            brand: "ASUS",
            category: "motherboard",
            rating: 4.8,
            stock: 3,
            featured: true
        },
        {
            id: 6,
            name: "Gigabyte Z790 AORUS Master",
            specs: "Intel Z790, DDR5, PCIe 5.0, Wi-Fi 7, 10G LAN",
            price: 38500,
            brand: "Gigabyte",
            category: "motherboard",
            rating: 4.7,
            stock: 4,
            featured: true
        }
    ],
    ram: [
        {
            id: 1,
            name: "Kingston Fury 32GB DDR5",
            specs: "32GB (2x16) DDR5 5600MHz CL36, RGB",
            price: 12500,
            brand: "Kingston",
            category: "ram",
            rating: 4.5,
            stock: 20,
            featured: false
        },
        {
            id: 2,
            name: "Corsair Vengeance 64GB DDR5",
            specs: "64GB (2x32) DDR5 6000MHz CL30, RGB",
            price: 22500,
            brand: "Corsair",
            category: "ram",
            rating: 4.7,
            stock: 12,
            featured: true
        },
        {
            id: 3,
            name: "G.Skill Trident Z5 32GB DDR5",
            specs: "32GB (2x16) DDR5 6400MHz CL32, RGB",
            price: 15500,
            brand: "G.Skill",
            category: "ram",
            rating: 4.6,
            stock: 15,
            featured: false
        },
        {
            id: 4,
            name: "TeamGroup Delta 64GB DDR5",
            specs: "64GB (2x32) DDR5 7200MHz CL34, RGB",
            price: 28500,
            brand: "TeamGroup",
            category: "ram",
            rating: 4.8,
            stock: 8,
            featured: true
        },
        {
            id: 5,
            name: "Crucial Pro 32GB DDR5",
            specs: "32GB (2x16) DDR5 5200MHz CL42",
            price: 9500,
            brand: "Crucial",
            category: "ram",
            rating: 4.3,
            stock: 25,
            featured: false
        },
        {
            id: 6,
            name: "Patriot Viper 64GB DDR5",
            specs: "64GB (2x32) DDR5 6800MHz CL32, RGB",
            price: 24500,
            brand: "Patriot",
            category: "ram",
            rating: 4.7,
            stock: 10,
            featured: false
        }
    ],
    storage: [
        {
            id: 1,
            name: "Samsung 990 Pro 1TB",
            specs: "1TB NVMe PCIe 4.0, 7450/6900 MB/s, M.2",
            price: 9500,
            brand: "Samsung",
            category: "storage",
            rating: 4.8,
            stock: 15,
            featured: true
        },
        {
            id: 2,
            name: "WD Black SN850X 2TB",
            specs: "2TB NVMe PCIe 4.0, 7300/6600 MB/s, M.2",
            price: 15500,
            brand: "Western Digital",
            category: "storage",
            rating: 4.7,
            stock: 10,
            featured: false
        },
        {
            id: 3,
            name: "Crucial P5 Plus 4TB",
            specs: "4TB NVMe PCIe 4.0, 6600/5000 MB/s, M.2",
            price: 28500,
            brand: "Crucial",
            category: "storage",
            rating: 4.6,
            stock: 6,
            featured: true
        },
        {
            id: 4,
            name: "Seagate FireCuda 8TB",
            specs: "8TB NVMe PCIe 4.0, 7300/6000 MB/s, M.2",
            price: 49500,
            brand: "Seagate",
            category: "storage",
            rating: 4.9,
            stock: 3,
            featured: true
        },
        {
            id: 5,
            name: "Kingston KC3000 2TB",
            specs: "2TB NVMe PCIe 4.0, 7000/7000 MB/s, M.2",
            price: 13500,
            brand: "Kingston",
            category: "storage",
            rating: 4.7,
            stock: 12,
            featured: false
        },
        {
            id: 6,
            name: "Sabrent Rocket 4 Plus 4TB",
            specs: "4TB NVMe PCIe 4.0, 7100/6600 MB/s, M.2",
            price: 32500,
            brand: "Sabrent",
            category: "storage",
            rating: 4.8,
            stock: 5,
            featured: false
        }
    ],
    cooling: [
        {
            id: 1,
            name: "NZXT Kraken 360 RGB",
            specs: "360mm AIO, RGB, 3x120mm вентиляторы, LCD дисплей",
            price: 14500,
            brand: "NZXT",
            category: "cooling",
            rating: 4.7,
            stock: 8,
            featured: true
        },
        {
            id: 2,
            name: "Corsair iCUE H150i Elite",
            specs: "360mm AIO, RGB, 3x120mm вентиляторы, LCD",
            price: 16500,
            brand: "Corsair",
            category: "cooling",
            rating: 4.8,
            stock: 6,
            featured: true
        },
        {
            id: 3,
            name: "Noctua NH-D15",
            specs: "Двухбашенный кулер, 2x140mm вентиляторы",
            price: 8500,
            brand: "Noctua",
            category: "cooling",
            rating: 4.9,
            stock: 12,
            featured: false
        },
        {
            id: 4,
            name: "be quiet! Dark Rock Pro 4",
            specs: "Двухбашенный кулер, 2x135mm вентиляторы",
            price: 7500,
            brand: "be quiet!",
            category: "cooling",
            rating: 4.8,
            stock: 10,
            featured: false
        }
    ],
    psu: [
        {
            id: 1,
            name: "Corsair RM850x 850W",
            specs: "850W, 80 Plus Gold, Fully Modular, 140mm вентилятор",
            price: 12500,
            brand: "Corsair",
            category: "psu",
            rating: 4.8,
            stock: 15,
            featured: true
        },
        {
            id: 2,
            name: "Seasonic Prime TX-1000",
            specs: "1000W, 80 Plus Titanium, Fully Modular",
            price: 22500,
            brand: "Seasonic",
            category: "psu",
            rating: 4.9,
            stock: 5,
            featured: true
        },
        {
            id: 3,
            name: "be quiet! Straight Power 11 750W",
            specs: "750W, 80 Plus Platinum, Fully Modular",
            price: 11500,
            brand: "be quiet!",
            category: "psu",
            rating: 4.7,
            stock: 8,
            featured: false
        },
        {
            id: 4,
            name: "EVGA SuperNOVA 1200 P2",
            specs: "1200W, 80 Plus Platinum, Fully Modular",
            price: 28500,
            brand: "EVGA",
            category: "psu",
            rating: 4.8,
            stock: 3,
            featured: true
        }
    ],
    case: [
        {
            id: 1,
            name: "Lian Li O11 Dynamic EVO",
            specs: "Mid-Tower, Tempered Glass, RGB, поддержка 360mm радиаторов",
            price: 14500,
            brand: "Lian Li",
            category: "case",
            rating: 4.8,
            stock: 10,
            featured: true
        },
        {
            id: 2,
            name: "Fractal Design North",
            specs: "Mid-Tower, Mesh Front, Wood Accents, Tempered Glass",
            price: 12500,
            brand: "Fractal Design",
            category: "case",
            rating: 4.7,
            stock: 8,
            featured: true
        },
        {
            id: 3,
            name: "NZXT H9 Flow",
            specs: "Dual-Chamber, Tempered Glass, RGB Ready, Excellent Airflow",
            price: 13500,
            brand: "NZXT",
            category: "case",
            rating: 4.6,
            stock: 12,
            featured: false
        },
        {
            id: 4,
            name: "Corsair 5000D AIRFLOW",
            specs: "Mid-Tower, Mesh Front, Tempered Glass, Excellent Cooling",
            price: 11500,
            brand: "Corsair",
            category: "case",
            rating: 4.7,
            stock: 15,
            featured: false
        }
    ]
};

// Глобальные переменные
let allComponents = [];
let filteredComponents = [];
let displayedComponents = [];
let cartItems = [];
let currentFilters = {
    category: 'all',
    brand: 'all',
    price: 'all',
    sort: 'default',
    search: ''
};
const itemsPerPage = 12;
let currentPage = 1;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initializePreloader();
    initializeData();
    initializeFilters();
    initializeCart();
    initializeEventListeners();
    loadComponents();
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

// Инициализация данных
function initializeData() {
    // Собираем все компоненты в один массив
    allComponents = [];
    Object.keys(componentsData).forEach(category => {
        allComponents = allComponents.concat(componentsData[category]);
    });
}

// Инициализация фильтров
function initializeFilters() {
    populateBrandFilter();
    initializeSearch();
}

function populateBrandFilter() {
    const brandFilter = document.getElementById('brandFilter');
    const brands = [...new Set(allComponents.map(component => component.brand))].sort();
    
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    
    searchInput.addEventListener('input', function() {
        currentFilters.search = this.value.toLowerCase();
        if (this.value) {
            searchClear.style.display = 'block';
        } else {
            searchClear.style.display = 'none';
        }
        applyFilters();
    });
    
    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        currentFilters.search = '';
        this.style.display = 'none';
        applyFilters();
    });
}

// Корзина
function initializeCart() {
    const cartButton = document.getElementById('cartButton');
    const cartClose = document.getElementById('cartClose');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartSidebar = document.getElementById('cartSidebar');
    
    cartButton.addEventListener('click', toggleCart);
    cartClose.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
}

function toggleCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    const cartSidebar = document.getElementById('cartSidebar');
    
    cartOverlay.classList.toggle('active');
    cartSidebar.classList.toggle('active');
    
    if (cartSidebar.classList.contains('active')) {
        updateCartDisplay();
    }
}

// Загрузка компонентов
function loadComponents() {
    applyFilters();
}

function applyFilters() {
    // Применяем фильтры
    filteredComponents = allComponents.filter(component => {
        // Фильтр по категории
        if (currentFilters.category !== 'all' && component.category !== currentFilters.category) {
            return false;
        }
        
        // Фильтр по бренду
        if (currentFilters.brand !== 'all' && component.brand !== currentFilters.brand) {
            return false;
        }
        
        // Фильтр по цене
        if (currentFilters.price !== 'all') {
            const [min, max] = currentFilters.price.split('-').map(Number);
            if (component.price < min || component.price > max) {
                return false;
            }
        }
        
        // Поиск
        if (currentFilters.search) {
            const searchTerm = currentFilters.search.toLowerCase();
            const searchableText = `${component.name} ${component.brand} ${component.specs}`.toLowerCase();
            if (!searchableText.includes(searchTerm)) {
                return false;
            }
        }
        
        return true;
    });
    
    // Сортировка
    sortComponents();
    
    // Обновляем активные фильтры
    updateActiveFilters();
    
    // Отображаем компоненты
    currentPage = 1;
    displayComponents();
}

function sortComponents() {
    switch(currentFilters.sort) {
        case 'price-asc':
            filteredComponents.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredComponents.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filteredComponents.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredComponents.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'popular':
            filteredComponents.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // По умолчанию - featured first, then by rating
            filteredComponents.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return b.rating - a.rating;
            });
    }
}

function updateActiveFilters() {
    const activeFiltersContainer = document.getElementById('activeFilters');
    activeFiltersContainer.innerHTML = '';
    
    if (currentFilters.category !== 'all') {
        addActiveFilter('category', `Категория: ${getCategoryName(currentFilters.category)}`);
    }
    
    if (currentFilters.brand !== 'all') {
        addActiveFilter('brand', `Бренд: ${currentFilters.brand}`);
    }
    
    if (currentFilters.price !== 'all') {
        addActiveFilter('price', `Цена: ${getPriceRangeName(currentFilters.price)}`);
    }
    
    if (currentFilters.search) {
        addActiveFilter('search', `Поиск: "${currentFilters.search}"`);
    }
}

function addActiveFilter(type, text) {
    const activeFiltersContainer = document.getElementById('activeFilters');
    const filterTag = document.createElement('div');
    filterTag.className = 'filter-tag';
    filterTag.innerHTML = `
        ${text}
        <button type="button" data-filter-type="${type}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    `;
    
    filterTag.querySelector('button').addEventListener('click', function() {
        removeFilter(type);
    });
    
    activeFiltersContainer.appendChild(filterTag);
}

function removeFilter(type) {
    switch(type) {
        case 'category':
            currentFilters.category = 'all';
            document.getElementById('categoryFilter').value = 'all';
            break;
        case 'brand':
            currentFilters.brand = 'all';
            document.getElementById('brandFilter').value = 'all';
            break;
        case 'price':
            currentFilters.price = 'all';
            document.getElementById('priceFilter').value = 'all';
            break;
        case 'search':
            currentFilters.search = '';
            document.getElementById('searchInput').value = '';
            document.getElementById('searchClear').style.display = 'none';
            break;
    }
    applyFilters();
}

function getCategoryName(category) {
    const categoryNames = {
        'cpu': 'Процессоры',
        'gpu': 'Видеокарты',
        'motherboard': 'Материнские платы',
        'ram': 'Оперативная память',
        'storage': 'Накопители',
        'cooling': 'Охлаждение',
        'psu': 'Блоки питания',
        'case': 'Корпуса'
    };
    return categoryNames[category] || category;
}

function getPriceRangeName(priceRange) {
    const ranges = {
        '0-10000': 'До 10 000 ₽',
        '10000-25000': '10 000 - 25 000 ₽',
        '25000-50000': '25 000 - 50 000 ₽',
        '50000-100000': '50 000 - 100 000 ₽',
        '100000-999999': 'От 100 000 ₽'
    };
    return ranges[priceRange] || priceRange;
}

function displayComponents() {
    const container = document.getElementById('componentsContainer');
    const countElement = document.getElementById('componentsCount');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    // Обновляем счетчик
    countElement.textContent = filteredComponents.length;
    
    // Определяем, какие компоненты показывать
    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    displayedComponents = filteredComponents.slice(startIndex, endIndex);
    
    // Очищаем контейнер
    container.innerHTML = '';
    
    if (displayedComponents.length === 0) {
        container.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--gray);">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" style="margin-bottom: 20px; opacity: 0.5;">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2"/>
                </svg>
                <h3>Ничего не найдено</h3>
                <p>Попробуйте изменить параметры фильтрации</p>
            </div>
        `;
        loadMoreBtn.style.display = 'none';
        return;
    }
    
    // Отображаем компоненты
    displayedComponents.forEach(component => {
        const card = createComponentCard(component);
        container.appendChild(card);
    });
    
    // Показываем/скрываем кнопку "Показать еще"
    if (endIndex < filteredComponents.length) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

function createComponentCard(component) {
    const card = document.createElement('div');
    card.className = `component-card ${component.featured ? 'featured' : ''}`;
    
    const ratingStars = generateRatingStars(component.rating);
    const stockText = component.stock > 0 ? 
        `В наличии: ${component.stock} шт.` : 
        'Нет в наличии';
    const stockClass = component.stock > 0 ? 'component-stock' : 'component-stock out-of-stock';
    
    card.innerHTML = `
        ${component.featured ? '<div class="component-badge">ХИТ</div>' : ''}
        <div class="component-image">
            <div class="placeholder">${component.name}</div>
        </div>
        <div class="component-category">${getCategoryName(component.category)}</div>
        <div class="component-name">${component.name}</div>
        <div class="component-specs">${component.specs}</div>
        <div class="component-meta">
            <div class="component-rating">
                ${ratingStars}
                <span>${component.rating}</span>
            </div>
            <div class="${stockClass}">${stockText}</div>
        </div>
        <div class="component-price">
            <div>
                <span class="price-main">${component.price.toLocaleString()} ₽</span>
            </div>
            <button class="btn btn-primary ${component.stock === 0 ? 'disabled' : ''}" 
                    ${component.stock === 0 ? 'disabled' : ''}
                    onclick="addToCart(${component.id})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="8" cy="21" r="1" stroke="currentColor" stroke-width="2"/>
                    <circle cx="19" cy="21" r="1" stroke="currentColor" stroke-width="2"/>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                В корзину
            </button>
        </div>
    `;
    
    return card;
}

function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Полные звезды
    for (let i = 0; i < fullStars; i++) {
        stars += '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
    
    // Половина звезды
    if (hasHalfStar) {
        stars += '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.5"/></svg>';
    }
    
    // Пустые звезды
    for (let i = 0; i < emptyStars; i++) {
        stars += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="2"/></svg>';
    }
    
    return stars;
}

// ... (остальной код остается без изменений до функции addToCart)

// Функции корзины - ИСПРАВЛЕННАЯ ВЕРСИЯ
function addToCart(componentId, componentName, componentPrice, componentCategory) {
    // Находим компонент по ID и категории
    let component = null;
    
    // Ищем компонент во всех категориях
    Object.keys(componentsData).forEach(category => {
        const foundComponent = componentsData[category].find(c => c.id === componentId && c.category === componentCategory);
        if (foundComponent) {
            component = foundComponent;
        }
    });
    
    if (!component) {
        console.error('Компонент не найден:', componentId, componentCategory);
        showNotification('Ошибка добавления товара в корзину', 'error');
        return;
    }
    
    // Проверяем, есть ли уже такой компонент в корзине
    const existingItem = cartItems.find(item => item.id === componentId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            ...component,
            quantity: 1
        });
    }
    
    updateCartCount();
    showNotification(`${component.name} добавлен в корзину!`, 'success');
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cartItems.length === 0) {
        cartItemsContainer.style.display = 'none';
        cartEmpty.style.display = 'block';
        checkoutBtn.disabled = true;
    } else {
        cartEmpty.style.display = 'none';
        cartItemsContainer.style.display = 'block';
        checkoutBtn.disabled = false;
        
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        cartItems.forEach((item, index) => {
            total += item.price * item.quantity;
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <div class="placeholder">${item.name.substring(0, 2)}</div>
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toLocaleString()} ₽ × ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        cartTotalPrice.textContent = total.toLocaleString() + ' ₽';
    }
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartCount();
    updateCartDisplay();
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
    }, 4000);
}

function closeNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Обработчики событий
function initializeEventListeners() {

    // Фильтры
    document.getElementById('categoryFilter').addEventListener('change', function() {
        currentFilters.category = this.value;
        applyFilters();
    });
    
    document.getElementById('brandFilter').addEventListener('change', function() {
        currentFilters.brand = this.value;
        applyFilters();
    });
    
    document.getElementById('priceFilter').addEventListener('change', function() {
        currentFilters.price = this.value;
        applyFilters();
    });
    
    document.getElementById('sortFilter').addEventListener('change', function() {
        currentFilters.sort = this.value;
        applyFilters();
    });
}
    // Кнопка "Показать еще"
    document.getElementById('loadMoreBtn').addEventListener('click', function() {
        currentPage++;
        displayComponents();
    });

    // Оформление заказа
document.getElementById('checkoutBtn').addEventListener('click', function() {
    if (cartItems.length === 0) {
        showNotification('Корзина пуста!', 'error');
        return;
    }
    
    // Рассчитываем итоговую сумму
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Создаем сообщение с деталями заказа
    let orderDetails = 'Ваш заказ:\n\n';
    cartItems.forEach((item, index) => {
        orderDetails += `${index + 1}. ${item.name}\n`;
        orderDetails += `   Количество: ${item.quantity}\n`;
        orderDetails += `   Цена: ${item.price.toLocaleString()} ₽ × ${item.quantity} = ${(item.price * item.quantity).toLocaleString()} ₽\n\n`;
    });
    orderDetails += `Итого: ${total.toLocaleString()} ₽\n\n`;
    orderDetails += 'Для оформления заказа свяжитесь с нами:\n';
    orderDetails += 'Телефон: +7 (962) 772-29-98\n';
    orderDetails += 'Email: max705800@mail.ru';
    
    // Показываем диалог оформления
    const userConfirmed = confirm(`Подтвердите оформление заказа на сумму ${total.toLocaleString()} ₽\n\nНажмите "ОК" для продолжения.`);
    
    if (userConfirmed) {
        // Отправляем данные на почту (имитация)
        const emailSubject = `Новый заказ TECH CORE ${new Date().toLocaleDateString()}`;
        const emailBody = orderDetails.replace(/\n/g, '%0D%0A');
        
        // Показываем инструкции
        alert(`Спасибо за заказ!\n\nСкопируйте детали заказа и отправьте на наш email:\n\n${orderDetails}\n\nИли позвоните нам по телефону: +7 (962) 772-29-98\n\nМы свяжемся с вами в течение 30 минут для подтверждения заказа.`);
        
        // Очищаем корзину
        cartItems = [];
        updateCartCount();
        updateCartDisplay();
        closeCart();
        
        showNotification('Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.', 'success');
    }
});

// Глобальные функции для использования в HTML
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
// ... (остальной код остается без изменений до функции addToCart)

// Функции корзины - ИСПРАВЛЕННАЯ ВЕРСИЯ
function addToCart(componentId, componentName, componentPrice, componentCategory) {
    // Находим компонент по ID и категории
    let component = null;
    
    // Ищем компонент во всех категориях
    Object.keys(componentsData).forEach(category => {
        const foundComponent = componentsData[category].find(c => c.id === componentId && c.category === componentCategory);
        if (foundComponent) {
            component = foundComponent;
        }
    });
    
    if (!component) {
        console.error('Компонент не найден:', componentId, componentCategory);
        showNotification('Ошибка добавления товара в корзину', 'error');
        return;
    }
    
    // Проверяем наличие товара
    if (component.stock === 0) {
        showNotification('Товар временно отсутствует на складе', 'error');
        return;
    }
    
    // Проверяем, есть ли уже такой компонент в корзине
    const existingItemIndex = cartItems.findIndex(item => 
        item.id === component.id && item.category === component.category
    );
    
    if (existingItemIndex !== -1) {
        // Увеличиваем количество существующего товара
        cartItems[existingItemIndex].quantity += 1;
    } else {
        // Добавляем новый товар
        cartItems.push({
            id: component.id,
            name: component.name,
            price: component.price,
            category: component.category,
            brand: component.brand,
            quantity: 1,
            specs: component.specs
        });
    }
    
    updateCartCount();
    showNotification(`${component.name} добавлен в корзину!`, 'success');
    
    // Обновляем отображение корзины если она открыта
    if (document.getElementById('cartSidebar').classList.contains('active')) {
        updateCartDisplay();
    }
}

// Обновляем функцию createComponentCard для передачи правильных параметров
function createComponentCard(component) {
    const card = document.createElement('div');
    card.className = `component-card ${component.featured ? 'featured' : ''}`;
    
    const ratingStars = generateRatingStars(component.rating);
    const stockText = component.stock > 0 ? 
        `В наличии: ${component.stock} шт.` : 
        'Нет в наличии';
    const stockClass = component.stock > 0 ? 'component-stock' : 'component-stock out-of-stock';
    
    card.innerHTML = `
        ${component.featured ? '<div class="component-badge">ХИТ</div>' : ''}
        <div class="component-image">
            <div class="placeholder">${component.name}</div>
        </div>
        <div class="component-category">${getCategoryName(component.category)}</div>
        <div class="component-name">${component.name}</div>
        <div class="component-specs">${component.specs}</div>
        <div class="component-meta">
            <div class="component-rating">
                ${ratingStars}
                <span>${component.rating}</span>
            </div>
            <div class="${stockClass}">${stockText}</div>
        </div>
        <div class="component-price">
            <div>
                <span class="price-main">${component.price.toLocaleString()} ₽</span>
            </div>
            <button class="btn btn-primary ${component.stock === 0 ? 'disabled' : ''}" 
                    ${component.stock === 0 ? 'disabled' : ''}
                    onclick="addToCart(${component.id}, '${component.name.replace(/'/g, "\\'")}', ${component.price}, '${component.category}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="8" cy="21" r="1" stroke="currentColor" stroke-width="2"/>
                    <circle cx="19" cy="21" r="1" stroke="currentColor" stroke-width="2"/>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                В корзину
            </button>
        </div>
    `;
    
    return card;
}

// Обновляем функцию updateCartDisplay для правильного отображения
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cartItems.length === 0) {
        cartItemsContainer.style.display = 'none';
        cartEmpty.style.display = 'block';
        checkoutBtn.disabled = true;
    } else {
        cartEmpty.style.display = 'none';
        cartItemsContainer.style.display = 'block';
        checkoutBtn.disabled = false;
        
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        cartItems.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <div class="placeholder">${item.name.substring(0, 2)}</div>
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-specs">${item.specs}</div>
                    <div class="cart-item-price">
                        ${item.price.toLocaleString()} ₽ × ${item.quantity} = ${itemTotal.toLocaleString()} ₽
                    </div>
                </div>
                <div class="cart-item-actions">
                    <button class="quantity-btn" onclick="changeQuantity(${index}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="changeQuantity(${index}, 1)">+</button>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        cartTotalPrice.textContent = total.toLocaleString() + ' ₽';
    }
}

// Добавляем функцию изменения количества
function changeQuantity(index, change) {
    const item = cartItems[index];
    const newQuantity = item.quantity + change;
    
    if (newQuantity < 1) {
        removeFromCart(index);
        return;
    }
    
    // Проверяем наличие на складе
    const component = findComponentInData(item.id, item.category);
    if (component && newQuantity > component.stock) {
        showNotification(`Максимальное количество: ${component.stock} шт.`, 'error');
        return;
    }
    
    item.quantity = newQuantity;
    updateCartCount();
    updateCartDisplay();
}

// Вспомогательная функция для поиска компонента в данных
function findComponentInData(id, category) {
    return componentsData[category]?.find(component => component.id === id);
}

// Обновляем функцию removeFromCart
function removeFromCart(index) {
    const itemName = cartItems[index].name;
    cartItems.splice(index, 1);
    updateCartCount();
    updateCartDisplay();
    showNotification(`${itemName} удален из корзины`, 'info');
}

// Обновляем функцию updateCartCount
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Сохраняем корзину в localStorage
        localStorage.setItem('techcore_cart', JSON.stringify(cartItems));
    }
}

// Добавляем функцию загрузки корзины из localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('techcore_cart');
    if (savedCart) {
        try {
            cartItems = JSON.parse(savedCart);
            updateCartCount();
        } catch (e) {
            console.error('Ошибка загрузки корзины:', e);
            cartItems = [];
        }
    }
}

// Обновляем инициализацию для загрузки корзины
document.addEventListener('DOMContentLoaded', function() {
    initializePreloader();
    initializeData();
    initializeFilters();
    initializeCart();
    initializeEventListeners();
    loadCartFromStorage(); // Загружаем корзину при старте
    loadComponents();
});

// ... (остальной код остается без изменений)

// Обновляем глобальные функции
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQuantity = changeQuantity;
// Функция для закрытия корзины
function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
}