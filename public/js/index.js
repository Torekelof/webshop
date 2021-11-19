for (let i = 0; i < products.length; i++){
  if (products[i].name == "Jordan 4 taupe haze" || products[i].name == "stussy T gul") {
    var theme = ""
    if (products[i].hasOwnProperty('theme')) {
      theme = " " + products[i].theme
    }
    var div = document.createElement('div')
    div.innerHTML = `
      <div class="image">
        <img src="public/images/${products[i].image}" alt="Product 1">
      </div>
      <div class="text">
        <span class="name">${products[i].name}</span>
        <span class="price">${products[i].price}kr</span>
        <a href="/product.html?${products[i].id}" class="buy-btn${theme}">Buy</a>
      </div>
    `
    div.classList.add('product')
    document.querySelector('.product-container').appendChild(div)
  }
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}