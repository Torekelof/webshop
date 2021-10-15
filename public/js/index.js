for (let i = 0; i < products.length; i++){

  var div = document.createElement('div')
  div.innerHTML = `
    <div class="image">
      <img src="public/images/${products[i].image}" alt="Product 2">
    </div>
    <div class="text">
      <span class="name">${products[i].name}</span>
      <span class="price">${products[i].price}kr</span>
    </div>
    <a href="/product.html?${products[i].id}" class="overlay"></a>
  `
  div.classList.add('product')
  document.querySelector('.product-container').appendChild(div)
}