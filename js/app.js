// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }

  const Pay1 = ()=> {
    window.open(`https://pay.h4b.dev/pl/Yq9SdZ/?stay=0&callbackurl=${encodeURIComponent('https://n1coapp.github.io/ProfessionalServiceDemo/')}`, '_blank'); 
}

  const Pay2 = ()=> {  
    window.open(`https://pay.h4b.dev/pl/dYXFjP/?stay=0&callbackurl=${encodeURIComponent('https://n1coapp.github.io/ProfessionalServiceDemo/')}`, '_self');
  }

    const Pay3 = ()=> {
    window.open(`https://pay.h4b.dev/pl/Lb7s53/?amount=0&callbackurl=${encodeURIComponent('https://n1coapp.github.io/ProfessionalServiceDemo/')}`, '_parent');
  }

