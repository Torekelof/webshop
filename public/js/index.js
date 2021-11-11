for (let i = 0; i < 1; i++){

  var div = document.createElement('div')
  div.innerHTML = `
    <div class="image">
      <img src="public/images/${products[i].image}" alt="Product 1">
      
    </div>
    <div class="text">
      <span class="name">${products[i].name}</span>
      <span class="price">${products[i].price}kr</span>
      <a href="/product.html?${products[i].id}" class="buy-btn">Buy</a>
    </div>
  `
  div.classList.add('product')
  document.querySelector('.product-container').appendChild(div)
}