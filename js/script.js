// Получаем элементы
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');

// Открыть боковое меню
menuToggle.addEventListener('click', () => {
  sideMenu.classList.add('open');
});

// Закрыть боковое меню
closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('open');
});

// Функция копирования текста
function copyText(text) {
  return navigator.clipboard.writeText(text);
}

// Обработчик для кнопок копирования
document.querySelectorAll('.crypto-box__copy').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const addressElement = document.getElementById(targetId);
    if (addressElement) {
      copyText(addressElement.textContent.trim())
        .then(() => {
          const iconElement = btn.querySelector('i');
          if (iconElement) {
            iconElement.className = 'fas fa-check';
          }
          setTimeout(() => {
            if (iconElement) {
              iconElement.className = 'far fa-copy';
            }
          }, 2000);
        })
        .catch(err => {
          console.error('Ошибка копирования: ', err);
        });
    }
  });
});

// Вешаем обработчик на кнопку копирования
document.querySelectorAll('.crypto-box__copy').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const addressElement = document.getElementById(targetId);
    if (addressElement) {
      copyText(addressElement.textContent.trim());
    }
  });
});
