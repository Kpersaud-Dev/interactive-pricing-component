const priceSlider = document.getElementById('price-slider'),
      price = document.getElementById('updated-price'),
      pageViews = document.getElementById('pageviews'),
      billingBox = document.getElementById('checkbox');
let newPrice = Math.floor(priceSlider.value / 1000);

// Event Listeners

// Slider Event Listener

document.addEventListener('DOMContentLoaded', function() {
    pageViews.innerText = priceSlider.value;
    price.innerText = ` $ ${newPrice}`;

  priceSlider.addEventListener('input', function() {
    let newPrice = Math.floor(priceSlider.value / 1000);
    pageViews.innerText = priceSlider.value;
    price.innerText = ` $ ${newPrice}`;
    
    // Monthly/Yearly Billing Toggle 
  
    billingBox.addEventListener('change', function() {
  
      if(billingBox.checked) {
        let checkedPrice = newPrice - (newPrice / 4);
        price.innerText = `$ ${checkedPrice}`;
      } else {
        price.innerText = ` $ ${Math.floor(priceSlider.value / 1000)}`;
      }
    })
  })
  

})




