const handleRanges = () => {
  const ranges = $All(".filters__card-range");

  ranges.forEach(range => {
    const fromInput = range.querySelector(".from");
    const toInput = range.querySelector(".to");
    const values = {
      from: 0,
      to: 5000
    }

    const setValues = () => {
      range.querySelector(".from-number").value = values.from;
      range.querySelector(".to-number").value = values.to;
    }

    fromInput.addEventListener("input", () => {
      if (+fromInput.value > +toInput.value) return fromInput.disabled = true;
      values.from = fromInput.value;
      setValues();
    });

    toInput.addEventListener("input", () => {
      console.log(fromInput.value, toInput.value);
      if (+fromInput.value > +toInput.value) return toInput.disabled = true;
      values.to = toInput.value;
      setValues();
    });
    
  });


}

const handleToggleFilterVisibility = () => {
  const openBtn = $("#open-filters");
  const closeBtn = $("#close-filters");
  const filters = $(".filters");

  openBtn.addEventListener("click", () => filters.classList.toggle("open"));
  closeBtn.addEventListener("click", () => filters.classList.toggle("open"));
}


window.addEventListener("DOMContentLoaded", () => {
  handleRanges();
  handleToggleFilterVisibility();
})
