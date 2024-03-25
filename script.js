function loader(){
      document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut(){
      setInterval(loader, 3000);
  }

  window.onload = fadeOut();

  

  document.querySelector("form.form-alert").addEventListener("submit", function() {
    alert("Your order has been placed.");
  }, false);
  
 // cart
 let cartIcon = document.querySelector('#cart-icon');
 let cart = document.querySelector('.cart');
 let closeCart = document.querySelector('#close-cart');
// Open Cart
 cartIcon.onclick = () => {
   cart.classList.add("active");
 };
// Close Cart
 closeCart.onclick = () => {
  cart.classList.remove("active");
};