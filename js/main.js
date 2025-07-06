// main.js

// 1. Анимация SVG-круга Tokenomics при прокрутке
document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector(".tokenomics-svg-wrapper");
  if (target) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.classList.add("animate");
          obs.disconnect();
        }
      });
    }, { threshold: 0.5 });
    observer.observe(target);
  }
});

// 2. Анимация монеты на главной секции (Hero)
document.addEventListener("DOMContentLoaded", function() {
  const heroSection = document.getElementById('home');
  const part1 = document.querySelector('.image-part.part1');
  const part2 = document.querySelector('.image-part.part2');
  if (heroSection && part1 && part2) {
    heroSection.addEventListener('mousemove', function(e) {
      const rect = heroSection.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const offsetX = ((mouseX - centerX) / centerX) * 10;
      const offsetY = ((mouseY - centerY) / centerY) * 10;
      part1.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      part2.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
    heroSection.addEventListener('mouseleave', function() {
      part1.style.transform = '';
      part2.style.transform = '';
    });
  }
});

// 3. FAQ: раскрытие вопросов
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const symbol = item.querySelector('.faq-toggle-symbol');
    if (!question || !symbol) return;
    question.addEventListener('click', function() {
      item.classList.toggle('active');
      symbol.textContent = item.classList.contains('active') ? "-" : "+";
    });
  });
});

// 4. Копирование адреса токена (если на странице есть mori-address)
window.copyContractAddress = function() {
  const addressEl = document.getElementById("mori-address");
  const icon = document.getElementById("copy-icon");
  if (!addressEl) return;
  const fullAddress = addressEl.getAttribute("data-full");
  if (!fullAddress) return;
  navigator.clipboard.writeText(fullAddress).then(() => {
    if (icon) {
      icon.innerHTML = "<i class='fas fa-check'></i>";
      setTimeout(() => {
        icon.innerHTML = "<i class='fas fa-copy'></i>";
      }, 1500);
    }
  });
};

// 5. Сокращение адреса токена (если есть mori-address)
document.addEventListener("DOMContentLoaded", () => {
  const addrEl = document.getElementById("mori-address");
  if (addrEl) {
    const full = addrEl.getAttribute("data-full") || "";
    if (full.length > 12) {
      addrEl.textContent = `${full.slice(0, 4)}...${full.slice(-3)}`;
    }
  }
});

// 6. Mobile Roadmap — простой слайдер текста
document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth <= 768) {
    const title = document.getElementById('mobileTitle');
    const text = document.getElementById('mobileText');
    if (!title || !text) return;
    const slides = [
      { title: "Сoming Soon", text: "" },
      { title: "Сoming Soon", text: "" },
      { title: "Сoming Soon", text: "" },
      { title: "Сoming Soon", text: "" },
      { title: "Сoming Soon", text: "" },
      { title: "Сoming Soon", text: "" }
    ];
    let current = 0;
    function updateSlide() {
      title.style.opacity = 0;
      title.style.transform = 'translateX(-50px)';
      text.style.opacity = 0;
      setTimeout(() => {
        title.textContent = slides[current].title;
        title.style.opacity = 1;
        title.style.transform = 'translateX(0)';
      }, 300);
      setTimeout(() => {
        text.innerHTML = slides[current].text;
        text.style.opacity = 1;
      }, 700);
    }
    setInterval(() => {
      current = (current + 1) % slides.length;
      updateSlide();
    }, 4000);
  }
});

