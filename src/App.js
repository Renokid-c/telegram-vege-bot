import React, { useState } from 'react';

// Иконки из lucide-react
// Убедитесь, что эта библиотека установлена: npm install lucide-react или yarn add lucide-react
import { ShoppingCart, XCircle, Package, User, Phone, MapPin, NotebookPen, Plus, Minus } from 'lucide-react';

// Главный компонент приложения
export default function App() {
  // Список продуктов (фрукты и овощи)
  // Цены указаны за 1 кг или за пучок (для зелени)
  const [products] = useState([
    { id: 1, name: 'Яблоко', price: 300, category: 'Фрукты', imageUrl: '🍎', unit: 'кг' },
    { id: 2, name: 'Абрикос', price: 240, category: 'Фрукты', imageUrl: '�', unit: 'кг' },
    { id: 3, name: 'Авокадо', price: 500, category: 'Фрукты', imageUrl: '🥑', unit: 'кг' },
    { id: 4, name: 'Банан', price: 200, category: 'Фрукты', imageUrl: '🍌', unit: 'кг' },
    { id: 5, name: 'Кокос', price: 600, category: 'Фрукты', imageUrl: '🥥', unit: 'кг' },
    { id: 6, name: 'Инжир', price: 360, category: 'Фрукты', imageUrl: '🫐', unit: 'кг' },
    { id: 7, name: 'Киви', price: 320, category: 'Фрукты', imageUrl: '🥝', unit: 'кг' },
    { id: 8, name: 'Лимон', price: 180, category: 'Фрукты', imageUrl: '🍋', unit: 'кг' },
    { id: 9, name: 'Лайм', price: 220, category: 'Фрукты', imageUrl: '🟢', unit: 'кг' },
    { id: 10, name: 'Манго', price: 560, category: 'Фрукты', imageUrl: '🥭', unit: 'кг' },
    { id: 11, name: 'Апельсин', price: 260, category: 'Фрукты', imageUrl: '🍊', unit: 'кг' },
    { id: 12, name: 'Персик', price: 340, category: 'Фрукты', imageUrl: '🍑', unit: 'кг' },
    { id: 13, name: 'Груша', price: 280, category: 'Фрукты', imageUrl: '🍐', unit: 'кг' },
    { id: 14, name: 'Ананас', price: 440, category: 'Фрукты', imageUrl: '🍍', unit: 'кг' },
    { id: 15, name: 'Слива', price: 230, category: 'Фрукты', imageUrl: '🟣', unit: 'кг' },
    { id: 16, name: 'Грейпфрут', price: 330, category: 'Фрукты', imageUrl: '🍊', unit: 'кг' },
    { id: 17, name: 'Дыня', price: 380, category: 'Фрукты', imageUrl: '🍈', unit: 'кг' },
    { id: 18, name: 'Гранат', price: 420, category: 'Фрукты', imageUrl: '🔴', unit: 'кг' },
    { id: 19, name: 'Хурма', price: 390, category: 'Фрукты', imageUrl: '🟠', unit: 'кг' },
    { id: 20, name: 'Мандарин', price: 250, category: 'Фрукты', imageUrl: '🍊', unit: 'кг' },
    { id: 21, name: 'Арбуз', price: 460, category: 'Фрукты', imageUrl: '🍉', unit: 'кг' },
    { id: 22, name: 'Клубника', price: 480, category: 'Фрукты', imageUrl: '🍓', unit: 'кг' },
    { id: 23, name: 'Малина', price: 520, category: 'Фрукты', imageUrl: '🍓', unit: 'кг' },
    { id: 24, name: 'Виноград', price: 400, category: 'Фрукты', imageUrl: '🍇', unit: 'кг' },
    { id: 25, name: 'Вишня/Черешня', price: 540, category: 'Фрукты', imageUrl: '🍒', unit: 'кг' },
    { id: 61, name: 'Ежевика', price: 500, category: 'Фрукты', imageUrl: '🫐', unit: 'кг' },
    { id: 62, name: 'Голубика', price: 540, category: 'Фрукты', imageUrl: '🫐', unit: 'кг' },

    { id: 26, name: 'Картофель', price: 140, category: 'Овощи', imageUrl: '🥔', unit: 'кг' },
    { id: 27, name: 'Помидор', price: 360, category: 'Овощи', imageUrl: '🍅', unit: 'кг' },
    { id: 28, name: 'Морковь', price: 160, category: 'Овощи', imageUrl: '🥕', unit: 'кг' },
    { id: 29, name: 'Капуста', price: 190, category: 'Овощи', imageUrl: '🥬', unit: 'кг' },
    { id: 30, name: 'Перец', price: 280, category: 'Овощи', imageUrl: '🌶️', unit: 'кг' },
    { id: 31, name: 'Баклажан', price: 320, category: 'Овощи', imageUrl: '🍆', unit: 'кг' },
    { id: 32, name: 'Цветная капуста', price: 270, category: 'Овощи', imageUrl: '🥦', unit: 'кг' },
    { id: 33, name: 'Лук', price: 120, category: 'Овощи', imageUrl: '🧅', unit: 'кг' },
    { id: 34, name: 'Чеснок', price: 220, category: 'Овощи', imageUrl: '🧄', unit: 'кг' },
    { id: 37, name: 'Редиска', price: 170, category: 'Овощи', imageUrl: '⚪', unit: 'кг' },
    { id: 38, name: 'Огурец', price: 180, category: 'Овощи', imageUrl: '🥒', unit: 'кг' },
    { id: 39, name: 'Тыква', price: 300, category: 'Овощи', imageUrl: '🎃', unit: 'кг' },
    { id: 40, name: 'Кабачок', price: 240, category: 'Овощи', imageUrl: '🥒', unit: 'кг' },
    { id: 41, name: 'Горох', price: 130, category: 'Овощи', imageUrl: '🫛', unit: 'кг' },
    { id: 43, name: 'Брокколи', price: 260, category: 'Овощи', imageUrl: '🥦', unit: 'кг' },
    { id: 44, name: 'Кукуруза', price: 200, category: 'Овощи', imageUrl: '🌽', unit: 'кг' },
    { id: 46, name: 'Свекла', price: 160, category: 'Овощи', imageUrl: '🔴', unit: 'кг' },
    { id: 55, name: 'Редька', price: 180, category: 'Овощи', imageUrl: '⚪', unit: 'кг' },
    { id: 56, name: 'Нут', price: 220, category: 'Овощи', imageUrl: '🫘', unit: 'кг' },
    { id: 57, name: 'Чечевица', price: 210, category: 'Овощи', imageUrl: '🫘', unit: 'кг' },
    { id: 58, name: 'Сладкий картофель', price: 180, category: 'Овощи', imageUrl: '🍠', unit: 'кг' },
    { id: 59, name: 'Батат', price: 190, category: 'Овощи', imageUrl: '🍠', unit: 'кг' },
    { id: 60, name: 'Имбирь', price: 360, category: 'Овощи', imageUrl: '🫚', unit: 'кг' },

    { id: 35, name: 'Петрушка', price: 25, category: 'Зелень', imageUrl: '🌿', unit: 'пучок' },
    { id: 36, name: 'Сельдерей', price: 40, category: 'Зелень', imageUrl: '🌱', unit: 'пучок' },
    { id: 42, name: 'Зеленый лук', price: 30, category: 'Зелень', imageUrl: '🧅', unit: 'пучок' },
    { id: 45, name: 'Шпинат', price: 50, category: 'Зелень', imageUrl: '🍃', unit: 'пучок' },
    { id: 47, name: 'Укроп', price: 25, category: 'Зелень', imageUrl: '🌿', unit: 'пучок' },
    { id: 48, name: 'Кинза', price: 30, category: 'Зелень', imageUrl: '🌿', unit: 'пучок' },
    { id: 49, name: 'Салат', price: 50, category: 'Зелень', imageUrl: '🥬', unit: 'пучок' },
    { id: 50, name: 'Руккола', price: 60, category: 'Зелень', imageUrl: '🥬', unit: 'пучок' },
    { id: 51, name: 'Базилик', price: 60, category: 'Зелень', imageUrl: '🌿', unit: 'пучок' },
    { id: 52, name: 'Щавель', price: 40, category: 'Зелень', imageUrl: '🌿', unit: 'пучок' },
    { id: 53, name: 'Тимьян', price: 50, category: 'Зелень', imageUrl: '🌿', unit: 'пучок' },
    { id: 54, name: 'Мята', price: 40, category: 'Зелень', imageUrl: '🌿', unit: 'пучок' },
  ]);

  // Состояние корзины
  const [cart, setCart] = useState([]);
  // Состояние отображения корзины
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Состояние отображения формы заказа
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  // Состояние сообщения о заказе
  const [orderMessage, setOrderMessage] = useState('');
  // Данные формы заказа
  const [orderFormData, setOrderFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '', // Поле для примечаний
  });
  // Ошибки формы
  const [formErrors, setFormErrors] = useState({});
  // Выбранная категория для фильтрации продуктов
  const [selectedCategory, setSelectedCategory] = useState('Все'); // По умолчанию показывать все
  // Состояние для отображения обратной связи "Добавлено!"
  const [addedToCartFeedback, setAddedToCartFeedback] = useState({});
  // Состояние для поискового запроса
  const [searchQuery, setSearchQuery] = useState('');
  // Состояние для временного количества товара на карточке
  const [tempProductQuantities, setTempProductQuantities] = useState({});


  // Функция добавления товара в корзину из карточки
  const addItemToCartFromCard = (product) => {
    const quantityToAdd = tempProductQuantities[product.id] || (product.unit === 'пучок' ? 1 : 0.5); // Use temp quantity or default
    if (quantityToAdd <= 0) return; // Don't add if quantity is 0

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: quantityToAdd }];
      }
    });

    // Reset temp quantity for this product after adding to cart
    setTempProductQuantities((prev) => ({ ...prev, [product.id]: 0 }));

    // Устанавливаем обратную связь "Добавлено!"
    setAddedToCartFeedback((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedToCartFeedback((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };


  // Функция для увеличения количества на карточке продукта
  const incrementProductQuantity = (productId, unit) => {
    setTempProductQuantities((prev) => {
      const currentQuantity = prev[productId] || 0;
      return {
        ...prev,
        [productId]: currentQuantity + (unit === 'пучок' ? 1 : 0.5),
      };
    });
  };

  // Функция для уменьшения количества на карточке продукта
  const decrementProductQuantity = (productId, unit) => {
    setTempProductQuantities((prev) => {
      const currentQuantity = prev[productId] || 0;
      // Минимальное количество 1 для пучка, 0.5 для кг
      const minQuantity = unit === 'пучок' ? 1 : 0.5;
      // Уменьшаем только если текущее количество больше минимального
      return {
        ...prev,
        [productId]: Math.max(minQuantity, currentQuantity - (unit === 'пучок' ? 1 : 0.5)),
      };
    });
  };

  // Функция удаления товара из корзины (в модальном окне корзины)
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Функция изменения количества товара в корзине (в модальном окне корзины)
  const updateCartQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          const minQuantity = item.unit === 'пучок' ? 1 : 0.5;
          return { ...item, quantity: Math.max(minQuantity, newQuantity) };
        }
        return item;
      })
    );
  };

  // Вычисление общей стоимости корзины
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Обработка перехода к форме заказа
  const proceedToOrderForm = () => {
    if (cart.length === 0) {
      setOrderMessage('Ваша корзина пуста. Добавьте товары перед оформлением заказа.');
      return;
    }
    setIsCartOpen(false); // Закрываем корзину
    setIsOrderFormOpen(true); // Открываем форму заказа
    setFormErrors({}); // Очищаем предыдущие ошибки формы
  };

  // Обработка ввода данных в форму
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setOrderFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Обработка отправки формы заказа
  const submitOrder = () => {
    const errors = {};
    if (!orderFormData.name.trim()) {
      errors.name = 'Пожалуйста, введите ваше имя.';
    }
    if (!orderFormData.phone.trim()) {
      errors.phone = 'Пожалуйста, введите ваш номер телефона.';
    }
    if (!orderFormData.address.trim()) {
      errors.address = 'Пожалуйста, введите адрес доставки.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // В реальном приложении здесь будет отправка заказа на сервер
    console.log('Оформлен заказ:', {
      items: cart,
      totalPrice: getTotalPrice(),
      customerInfo: orderFormData,
    });

    setOrderMessage('Ваш заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.');
    setCart([]); // Очищаем корзину
    setOrderFormData({ name: '', phone: '', address: '', notes: '' }); // Очищаем форму, включая примечания
    setIsOrderFormOpen(false); // Закрываем форму заказа
  };

  // Фильтрация продуктов по выбранной категории и поисковому запросу
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Все' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Общее количество единиц в корзине для отображения
  const totalCartUnits = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col items-center p-4 pb-20 sm:p-6 sm:pb-24 md:p-8 md:pb-28"> {/* Added padding-bottom for fixed button */}
      {/* Шапка */}
      <header className="w-full max-w-4xl bg-green-700 shadow-xl rounded-b-xl p-4 sm:p-6 mb-6 sm:mb-8 flex justify-between items-center transform -translate-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-300 font-['Inter'] drop-shadow-lg">
          Овощи и фрукты 🌿
        </h1>
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 sm:p-3 bg-green-300 text-green-800 rounded-full shadow-md hover:bg-green-400 transition duration-300 transform hover:scale-110"
        >
          <ShoppingCart size={20} />
          {totalCartUnits > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-0.5 sm:px-2.5 sm:py-1.5 text-xs sm:text-sm font-extrabold leading-none text-white bg-red-600 rounded-full">
              {/* Показываем общее количество единиц (кг или пучки) */}
              {totalCartUnits.toFixed(1).replace(/\.0$/, '')} ед.
            </span>
          )}
        </button>
      </header>

      {/* Кнопки фильтрации по категориям */}
      <div className="w-full max-w-4xl flex flex-wrap justify-center space-x-1 sm:space-x-2 md:space-x-4 mb-6 sm:mb-8">
        {['Все', 'Фрукты', 'Овощи', 'Зелень'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base font-semibold transition duration-300 transform hover:scale-105 mb-2
              ${selectedCategory === category ? 'bg-green-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Поисковая строка */}
      <div className="w-full max-w-md mb-8 px-4 sm:px-0">
        <input
          type="text"
          placeholder="Найти продукт..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-500 transition duration-200 text-lg"
        />
      </div>

      {/* Список продуктов */}
      <main className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 border-4 border-green-400 relative overflow-hidden group"
          >
            {/* Overlay для визуального эффекта при наведении */}
            <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>

            <div className="text-5xl sm:text-6xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">{product.imageUrl}</div>
            <h2 className="text-xl sm:text-2xl font-extrabold mb-1 sm:mb-2 text-gray-900">{product.name}</h2>
            <p className="text-xl sm:text-2xl font-black text-green-600 mb-3 sm:mb-4">{product.price} сом/{product.unit}</p>

            {/* Кнопки +/- и количество на карточке товара */}
            <div className="flex items-center justify-center space-x-2 mb-4">
              <button
                onClick={() => decrementProductQuantity(product.id, product.unit)}
                className="p-2 rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
              >
                <Minus size={20} />
              </button>
              <span className="text-lg font-bold w-16 text-center">
                {tempProductQuantities[product.id] === undefined || tempProductQuantities[product.id] === 0
                  ? (product.unit === 'пучок' ? '0 пуч.' : '0.0 кг')
                  : `${tempProductQuantities[product.id].toFixed(product.unit === 'пучок' ? 0 : 1)} ${product.unit}`}
              </span>
              <button
                onClick={() => incrementProductQuantity(product.id, product.unit)}
                className="p-2 rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
              >
                <Plus size={20} />
              </button>
            </div>

            <button
              onClick={() => addItemToCartFromCard(product)}
              className="w-full py-2 sm:py-3 px-3 sm:px-4 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-300 flex items-center justify-center border-b-4 border-green-700 active:border-b-0 active:translate-y-1 text-base sm:text-lg"
            >
              {addedToCartFeedback[product.id] ? (
                <span className="flex items-center text-base sm:text-lg">Добавлено! 🎉</span>
              ) : (
                <>
                  В корзину <ShoppingCart size={18} className="ml-1 sm:ml-2" />
                </>
              )}
            </button>
          </div>
        ))}
      </main>

      {/* Фиксированная кнопка "Заказать" внизу экрана */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 w-11/12 max-w-sm py-3 sm:py-4 bg-yellow-500 text-green-800 font-black rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105 flex items-center justify-center text-lg sm:text-xl border-b-4 border-yellow-700 active:border-b-0 active:translate-y-1 z-30"
        >
          Заказать: {getTotalPrice()} сом <ShoppingCart size={24} className="ml-2" />
        </button>
      )}

      {/* Сообщение о заказе */}
      {orderMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl text-center max-w-sm sm:max-w-md w-full animate-fade-in-up border-4 border-green-700">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">Статус Заказа</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6">{orderMessage}</p>
            <button
              onClick={() => setOrderMessage('')}
              className="py-2 sm:py-3 px-6 sm:px-8 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 text-base sm:text-lg"
            >
              ОК
            </button>
          </div>
        </div>
      )}

      {/* Модальное окно корзины */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40 p-4">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-2xl max-w-sm sm:max-w-lg w-full max-h-[90vh] overflow-y-auto animate-slide-in-right relative border-4 border-green-400">
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1 sm:p-2 rounded-full hover:bg-gray-100 transition duration-200 text-green-700"
            >
              <XCircle size={24} />
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-6 border-b-4 border-green-200 pb-2 sm:pb-3">Ваша Корзина</h2>

            {cart.length === 0 ? (
              <p className="text-base sm:text-xl text-gray-500 text-center py-6 sm:py-8">Корзина пуста. Добавьте что-нибудь!</p>
            ) : (
              <>
                <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  {cart.map((item) => (
                    <li key={item.id} className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <div className="flex items-center flex-grow">
                        <span className="text-3xl sm:text-4xl mr-2 sm:mr-3">{item.imageUrl}</span>
                        <div>
                          <p className="font-bold text-base sm:text-lg">{item.name}</p>
                          <p className="text-xs sm:text-sm text-gray-600">{item.price} сом/{item.unit}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - (item.unit === 'пучок' ? 1 : 0.5))}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200 text-base sm:text-lg font-bold"
                        >
                          -
                        </button>
                        <span className="mx-1 sm:mx-2 w-14 sm:w-16 text-center border-2 border-gray-300 rounded-md py-0.5 sm:py-1 font-semibold text-sm sm:text-base">
                            {item.quantity.toFixed(item.unit === 'пучок' ? 0 : 1)} {item.unit}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + (item.unit === 'пучок' ? 1 : 0.5))}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200 text-base sm:text-lg font-bold"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-2 sm:ml-4 p-0.5 sm:p-1 text-red-500 hover:text-red-700 transition duration-200"
                        >
                          <XCircle size={20} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="text-right text-2xl sm:text-3xl font-black text-green-800 mb-4 sm:mb-6 pt-2 sm:pt-4 border-t-4 border-green-200">
                  Итого: {getTotalPrice()} сом
                </div>

                <button
                  onClick={proceedToOrderForm}
                  className="w-full py-3 sm:py-4 bg-green-600 text-white font-black rounded-lg shadow-lg hover:bg-green-700 transition duration-300 flex items-center justify-center text-lg sm:text-xl border-b-4 border-green-800 active:border-b-0 active:translate-y-1"
                >
                  Оформить Заказ <Package size={20} className="ml-1 sm:ml-2" />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Модальное окно формы заказа */}
      {isOrderFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40 p-4">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl max-w-sm sm:max-w-md w-full animate-fade-in-up relative border-4 border-green-400">
            <button
              onClick={() => setIsOrderFormOpen(false)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1 sm:p-2 rounded-full hover:bg-gray-100 transition duration-200 text-green-700"
            >
              <XCircle size={24} />
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-6 text-center">Данные для Доставки</h2>

            <div className="space-y-3 sm:space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={orderFormData.name}
                  onChange={handleFormChange}
                  className={`w-full pl-10 pr-4 py-2 sm:py-3 rounded-lg border-2 text-base sm:text-lg ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-green-500 transition duration-200`}
                />
                {formErrors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{formErrors.name}</p>}
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Номер телефона"
                  value={orderFormData.phone}
                  onChange={handleFormChange}
                  className={`w-full pl-10 pr-4 py-2 sm:py-3 rounded-lg border-2 text-base sm:text-lg ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-green-500 transition duration-200`}
                />
                {formErrors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{formErrors.phone}</p>}
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-4 transform -translate-y-1/2 text-gray-400" size={18} />
                <textarea
                  name="address"
                  placeholder="Адрес доставки"
                  value={orderFormData.address}
                  onChange={handleFormChange}
                  rows="3"
                  className={`w-full pl-10 pr-4 py-2 sm:py-3 rounded-lg border-2 text-base sm:text-lg ${formErrors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-green-500 transition duration-200 resize-none`}
                ></textarea>
                {formErrors.address && <p className="text-red-500 text-xs sm:text-sm mt-1">{formErrors.address}</p>}
              </div>

              {/* Поле для примечаний */}
              <div className="relative">
                <NotebookPen className="absolute left-3 top-4 transform -translate-y-1/2 text-gray-400" size={18} />
                <textarea
                  name="notes"
                  placeholder="Примечания к заказу (например: укажите сорт яблок, домофон не работает )"
                  value={orderFormData.notes}
                  onChange={handleFormChange}
                  rows="3"
                  className="w-full pl-10 pr-4 py-2 sm:py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-500 transition duration-200 resize-none text-base sm:text-lg"
                ></textarea>
              </div>
            </div>

            <button
              onClick={submitOrder}
              className="w-full mt-6 sm:mt-8 py-3 sm:py-4 bg-green-600 text-white font-black rounded-lg shadow-lg hover:bg-green-700 transition duration-300 flex items-center justify-center text-lg sm:text-xl border-b-4 border-green-800 active:border-b-0 active:translate-y-1"
            >
              Подтвердить Заказ <Package size={20} className="ml-1 sm:ml-2" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}