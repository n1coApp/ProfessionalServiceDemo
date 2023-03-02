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
  const exampleBtn = document.getElementById('btn-submit');
  exampleBtn.addEventListener('click', () => {
    window.open(`https://pay.h4b.dev/pl/V2rcoq/?amount=10&stay=0&callbackurl=${encodeURIComponent('http://127.0.0.1:5555/index.html')}`, '_blank');
  });
}