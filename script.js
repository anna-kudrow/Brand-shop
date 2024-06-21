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

const productsBoxEl = document.querySelector(".products__cards");
const purchasesBoxEl = document.querySelector(".bascket-box");
purchasesBoxEl.style.display = "none";

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchData(url1);
  data.forEach((element) => {
    productsBoxEl.insertAdjacentHTML(
      "beforeend",
      `<div class="product__card" id="${element.id}">
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
          <button class="add-button">
            <img src="images/add.svg" alt="add product icon" />
            <p class="add-text">Add to Cart</p>
          </button>
      </div>
      </div>`
    );
  });

  function addInfoToLS(card) {
    localStorage.setItem(
      JSON.stringify(card.id),
      JSON.stringify({ img: card.img, title: card.title, price: card.price })
    );
  }

  const productsCards = document.querySelectorAll(".product__card");

  productsCards.forEach((element) => {
    element.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("add-button")) {
        data.forEach((dataEl) => {
          if (dataEl.id == element.id) {
            localStorage.setItem(JSON.stringify(dataEl.id), [
              JSON.stringify(dataEl.title),
              JSON.stringify(dataEl.price),
              JSON.stringify.apply(dataEl.img),
            ]);
          }

          purchasesBoxEl.style.display = "block";
          purchasesBoxEl.insertAdjacentHTML(
            "afterbegin",
            `<div class="purchase">
                  <img
                    class="purchase__photo"
                    src=""
                    alt="purchase photo"
                  />
                  <div class="purchase__info">
                    <h3 class="purchase__name">Rebox Zane</h3>
                    <img class="rate-stars" src="images/stars.jpg" alt="stars" />
                    <p class="qnt-info">1 x $250</p>
                  </div>
                  <img
                    src="images/cancel.jpg"
                    alt="cancel"
                    class="purchase__cancel"
                  />
                </div>`
          );
        });
      }
    });
  });
});
