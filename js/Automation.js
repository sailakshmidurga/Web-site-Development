
var myCards = [{
  "Image":"../images/banner1.png",
  "price":1200,
  "Brand":"Puma",
},
{
  "Image":"../images/6.jpg",
  "price":500,
  "Brand":"UK",
},
{
  "Image":"../images/banner1.png",
  "price":800,
  "Brand":"Rare Rabit",
},
{
  "Image":"../images/banner1.png",
  "price":1800,
  "Brand":"Paragon",
}
]
var cards = myCards.map((ele)=>
{
   return(`<div class="card-parent">
    <div class="card">
      <div class="image-section">
        <img src="${ele.Image}" alt="">
      </div>
      <div class="info-section">
        <div class="price">Price:${ele.price}</div>
        <div class="brand">Brand:${ele.Brand}</div>
      </div>
    </div>
  </div>`)
})

 cards = cards.join(' ');
var parent = document.getElementsByClassName('card-parent')[0];
parent.innerHTML = cards;