window.onscroll = function() {
  var scrollButton = document.getElementById("scrollToTop");
  if (window.scrollY > 400) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo(0,0);
  console.log('Scrolled');
}
