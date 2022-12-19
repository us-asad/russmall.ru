const $ = s => document.querySelector(s);
const $All = s => document.querySelectorAll(s);

const handleResponsiveNavbar = () => {
  const openBtn = $("#open-nav");
  const navbar = $("#mobile-nav");

  openBtn.addEventListener("click", () => navbar.classList.toggle("closed"));
  navbar.addEventListener("click", e => {
    console.log(e.target);
    if (e.target.id === "mobile-nav" || e.target.classList.contains("close-nav")) {
      navbar.classList.toggle("closed");
    }
  })
}

const handleProductsSlide = () => {
  const productContainers = $All(".products");

  productContainers.forEach(prdContainer => {
    const items = prdContainer.querySelectorAll(".products__item");
    const prevBtn = prdContainer.querySelector("#products-moveleft");
    const nextBtn = prdContainer.querySelector("#products-moveright");
    const list = prdContainer.querySelector(".products__list");
    let activeSlide = Math.floor(list.clientWidth / items[0].clientWidth) - 1;
    const maxShow = Math.floor(list.clientWidth / items[0].clientWidth) - 1;

    const doSlide = () => {
      if (activeSlide < 0) activeSlide = list.length - 1;
      else if (activeSlide > items.length - 1) activeSlide = 0;

      if (activeSlide === items.length - 1) nextBtn.style.display = "none";
      else if (activeSlide !== items.length - 1) nextBtn.style.display = "block";

      if (activeSlide === 0) prevBtn.style.display = "none";
      else if (activeSlide !== 0) prevBtn.style.display = "block";

      list.style.transform = `translateX(-${(activeSlide - maxShow) * items[0].clientWidth}px)`;
    }
    
    prevBtn.addEventListener("click", () => {
      activeSlide--;
      doSlide();
    });

    nextBtn.addEventListener("click", () => {
      activeSlide++;
      doSlide();
    });
  });
}

const handleIncOrDecProduct = () => {
  const productIncOrDecs = $All(".product__qty");

  productIncOrDecs.forEach(prd => {
    const input = prd.querySelector(".product__qty-num");
    const incBtn = prd.querySelector(".product__qty-inc");
    const decBtn = prd.querySelector(".product__qty-dec");

    incBtn.addEventListener("click", () => input.value = input.value ? +input.value + 1 : 1);
    decBtn.addEventListener("click", () => input.value = input.value > 0 ? +input.value - 1 : 0);
  })
}

window.addEventListener("DOMContentLoaded", () => {
  handleResponsiveNavbar();
  handleProductsSlide();
  handleIncOrDecProduct();
});


