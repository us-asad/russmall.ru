const $ = s => document.querySelector(s);
const $All = s => document.querySelectorAll(s);

const handleResponsiveNavbar = () => {
  const openBtn = $("#open-nav");
  const navbar = $("#mobile-nav");

  openBtn.addEventListener("click", () => navbar.classList.toggle("closed"));
  navbar.addEventListener("click", e => {
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

const handleProductsSwiper = () => {
  const swiperProducts = $All(".swiper__products");

  swiperProducts.forEach(slider => {
    console.log(slider.id);
    new Swiper(`#${slider.id}`, {
      autoplay: true,
      loop: true,
      navigation: {
        nextEl: `#${slider.id} .products__movebtn.right`,
        prevEl: `#${slider.id} .products__movebtn.left`,
      },
      slidesPerView: 5,
      spaceBetween: 20,
      breakpoints: {
        1250: {
          slidesPerView: 4
        },
        1020: {
          slidesPerView: 3
        },
        900: {
          slidesPerView: 2
        },
        620: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
  })
}

const handleSublinksDropDown = () => {
  const dropDownBtns = document.querySelectorAll("button.header__mobile-link.drop-down");
  dropDownBtns.forEach(btn => {
    const dropDownIcon = btn.querySelector("i.bi-arrow-right");
    const ul = btn.nextElementSibling.querySelector(".header__mobile-sublinks");

    btn.addEventListener("click", () => {
      if (btn.nextElementSibling.style.height) {
        btn.nextElementSibling.style.height = ""
        dropDownIcon.classList.remove("active");
      } else {
        btn.nextElementSibling.style.height = ul.clientHeight + "px"
        dropDownIcon.classList.add("active");
      }
    });
  })
}

const handleSublinksChange = () => {
  const subLinks = $All(".header__links-sublinks > .col-8");
  const sublinkBtns = $All(".header__links-sublink");

  sublinkBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      const activeBtn = $(".header__links-sublink.active");
      const activeSubLinks = $(".header__links-sublinks > .col-8.active");
      activeBtn.classList.remove("active");
      activeSubLinks.classList.remove("active");
      btn.classList.add("active");
      subLinks[i].classList.add("active");
    })
  })
}

window.addEventListener("DOMContentLoaded", () => {
  handleResponsiveNavbar();
  // handleProductsSlide();
  handleIncOrDecProduct();
  handleProductsSwiper();
  handleSublinksDropDown();
  handleSublinksChange();
});


