var query = window.location.search.split('?')[1]


for (let i = 0; i < products.length; i++) {
  if (products[i].id == query) {
    var div = document.createElement('div')
    div.innerHTML = `
      <div class="left">
        <div class="image-container">
          <img src="public/images/${products[i].image}" alt="Product 1">
        </div>
      </div>
      <div class="right">
        <div class="text">
          <span class="name">${products[i].name}</span>
          <span class="price">${products[i].price}kr + frakt</span>
        </div>
        <select class="storlek" name="cars" id="cars">
          <option value="">Select a size</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
          <option value="46">46</option>
        </select>
        <div class="add-to-cart--btn">
          <button>ADD TO CART</button>
        </div>
      </div>
    `
    div.classList.add('product')
    document.querySelector('.product-container').appendChild(div)
  }
}


