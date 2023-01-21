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