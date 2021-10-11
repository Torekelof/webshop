window.addEventListener('click', function(event){
  if (event.target.classList[0] == 'search-btn') {
    document.querySelector('.search-box').style.display = 'flex'
    this.document.querySelector('.search-bar').focus()
  } else if (event.target.classList[0] != 'search-bar'){
    document.querySelector('.search-box').style.display = 'none'
  }
})


var query = document.querySelector('.search-bar').value

var database = [
  {
    id: "1",
    name: "stussy-t-vit",
    price: "7982kr"
  },
  {
    id: "2",
    name: "stuss",
    price: "7982kr"
  },
  {
    id: "3",
    name: "-t-vit",
    price: "7982kr"
  }
]


for (let i = 0; i < database.length; i++) {
  const product = database[i];
  if (product.name == query) {
    console.log(product)
  }
}