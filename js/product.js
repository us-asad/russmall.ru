const handleProductSlider = () => {
  const prevBtn = $("#slide-left");
  const nextBtn = $("#slide-right");
  let activeSlide = 0;
  const slide_images = ["./images/product-full.png", "./images/product-full-2.webp", "./images/product-full-3.webp"];
  const dotsContainer = $(".product__gallery-images");
  const mainImg = $(".product__gallery-main");

  const doSlide = () => {
    if (activeSlide < 0) activeSlide = list.length - 1;
    else if (activeSlide > slide_images.length - 1) activeSlide = 0;

    if (activeSlide === slide_images.length - 1) nextBtn.disabled = true;
    else if (activeSlide !== slide_images.length - 1) nextBtn.disabled = false;

    if (activeSlide === 0) prevBtn.disabled = true;
    else if (activeSlide !== 0) prevBtn.disabled = false;

    const dots = $All(".product__gallery-image");
    dots.forEach(item => item.classList.remove("active"));
    dots[activeSlide].classList.add("active")
    mainImg.src = slide_images[activeSlide];
  }

  slide_images.forEach((img, i) => {
    const image = document.createElement("img");
    image.src = img
    image.alt = "Product"
    image.classList.add("product__gallery-image");
    if (activeSlide === i) image.classList.add("active");

    image.addEventListener("click", () => {
      activeSlide = i;
      doSlide();
    });

    dotsContainer.insertAdjacentElement("beforeend", image);
  })


  prevBtn.addEventListener("click", () => {
    activeSlide--;
    doSlide();
  });

  nextBtn.addEventListener("click", () => {
    activeSlide++;
    doSlide();
  });
}

const handleCommentSlider = () => {
  const items = $All(".reviews__item");
  const prevBtn = $(".reviews-left-btn");
  const nextBtn = $(".reviews-right-btn");
  const list = $(".reviews__list");
  let activeSlide = Math.ceil(list.clientWidth / items[0].clientWidth) - 1;
  const maxShow = Math.ceil(list.clientWidth / items[0].clientWidth) - 1;
  console.log(list.clientWidth, items[0].clientWidth);
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
}


window.addEventListener("DOMContentLoaded", () => {
  handleProductSlider();
  handleCommentSlider();
});