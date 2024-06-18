const url1 = "cards-data.json";
async function fetchData(url) {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchData(url1);
  const productsBoxEl = document.querySelector(".products__cards");
  data.forEach((element) => {
    productsBoxEl.insertAdjacentHTML(
      "beforeend",
      `<div class="product__card">
        <a href="111" class="product__card-link">
          <img
            class="card__img"
            src="${element.img}"
            alt="${element.description}"
          />
          <div class="card__text-wrapper">
            <p class="card__name">${element.title}</p>
            <p class="card__descrip">${element.description}</p>
            <p class="card__price">${element.price}</p>
          </div>
        </a>
        <div class="add-box">
          <a href="222" class="add-link">
            <img src="images/add.svg" alt="add product icon" />
            <p class="add-text">Add to Cart</p>
          </a>
        </div>
      </div>`
    );
  });
});
