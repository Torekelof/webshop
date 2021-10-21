window.addEventListener('click', function(event){
  if (event.target.classList[0] == 'search-btn') {
    document.querySelector('.search-box').style.display = 'flex'
    this.document.querySelector('.search-bar').focus()
  } else if (event.target.classList[0] != 'search-bar'){
    document.querySelector('.search-box').style.display = 'none'
  }
})

var products = [
  {
    id: 7530489,
    name: "Jordan 4 taupe haze",
    price: 1899,
    image: "jordan-4.png"
  },
  {
    id: 9584957,
    name: "Loose sweater",
    price: 700,
    image: "stussy-loose-sweater.png"
  },
  {
    id: 1156394,
    name: "Stussy T-shirt svart",
    price: 700,
    image: "stussy-t-svart.png"
  },
  {
    id: 2343524,
    name: "Stripe puffer jacket",
    price: 4899,
    image: "stussy-stripe-puffer-jacket.png"
  },
  {
    id: 8343254,
    name: "Wool jacket",
    price: 3300,
    image: "stussy-wool.png"
  },
  {
    id: 0242456,
    name: "Leopard pants",
    price: 2800,
    image: "stussy-leopard-pants.png"
  },
  {
    id: 4234543,
    name: "Sweater svart ",
    price: 2350,
    image: "stussy-sweater.png"
  },
  {
    id: 543267,
    name: "Sweater mohair ",
    price: 1700,
    image: "stussy-sweater-mohair.png"
  },
  {
    id: 9524257,
    name: "Stussy T-shirt grå",
    price: 2700,
    image: "stussy-t-grå.png"
  },
  {
    id: 832489,
    name: "Stussy T-shirt vit",
    price: 999,
    image: "stussy-t-vit.png"
  },
  {
    id: 834329,
    name: "Filmore sherpa vest",
    price: 1299,
    image: "fillmore-sherpa-vest.png"
  },
  {
    id: 453234,
    name: "Number 8 Cap",
    price: 499,
    image: "Number-8-cap.png"
  },
  {
  id: 786238,
    name: "Rick owens bag",
    price: 5999,
    image: "rick-owens.png"
  }
]

function getCookie(name) {
  var nameEQ = name + "="
  var ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length) 
  }
  return null;
}



function getCartLength(){
  var cookies = JSON.parse(getCookie("cart"))
  return cookies.length
}

var cartLength = getCartLength()
document.querySelector('.nav-cart-length').innerHTML = cartLength