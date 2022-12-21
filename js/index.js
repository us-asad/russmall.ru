const handleSlider = () => {
  const prevBtn = $("#slide-left");
  const nextBtn = $("#slide-right");
  const slides = $All(".slider__img");
  const title = $(".slider__content-title")
  const text = $(".slider__content-text");
  const button = $(".slider__content-btn");
  const dotsContainer = $(".slider__dots");
  let slide = slides.length - 1;
  const content = [
    {
      title: "Микроволновые печи 5",
      text: "Современный дизайн и высокая мощность для повседневных задач или кулинарных шедевров 5",
      button: "Смотреть все 5"
    },
    {
      title: "Микроволновые печи 4",
      text: "Современный дизайн и высокая мощность для повседневных задач или кулинарных шедевров 4",
      button: "Смотреть все 4"
    },
    {
      title: "Микроволновые печи 3",
      text: "Современный дизайн и высокая мощность для повседневных задач или кулинарных шедевров 3",
      button: "Смотреть все 3"
    },
    {
      title: "Микроволновые печи 2",
      text: "Современный дизайн и высокая мощность для повседневных задач или кулинарных шедевров 2",
      button: "Смотреть все 2"
    },
    {
      title: "Микроволновые печи 1",
      text: "Современный дизайн и высокая мощность для повседневных задач или кулинарных шедевров 1",
      button: "Смотреть все 1"
    }
  ]

  content.forEach((_, i) => {
    const li = document.createElement("li")
    li.classList.add("slider__dot")
    if (i === slide) li.classList.add("active");
    li.addEventListener("click", () => {
      slide = i;
      doSlide();
    });

    dotsContainer.insertAdjacentElement("beforeend", li);
  })
  const dots = $All(".slider__dot");

  const doSlide = () => {
    if (slide < 0) slide = slides.length - 1;
    else if (slide > slides.length - 1) slide = 0;

    slides.forEach(item => item.classList.remove("active"));
    dots.forEach(item => item.classList.remove("active"));
    slides[slide].classList.add("active");
    dots[slide].classList.add("active");
    title.innerText = content[slide].title;
    text.innerText = content[slide].text;
    button.innerText = content[slide].button;

  }

  prevBtn.addEventListener("click", () => {
    slide--;
    doSlide();
  });

  nextBtn.addEventListener("click", () => {
    slide++;
    doSlide();
  });
}



window.addEventListener("DOMContentLoaded", () => {
  new Swiper('.swiper', {
    autoplay: {
      delay: 10000,
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // handleSlider();
});