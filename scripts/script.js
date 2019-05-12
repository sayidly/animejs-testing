//var selector = document.getElementById("clickArea");
var demos = document.getElementsByClassName("demo");

for (var i=0; i<demos.length; i++) {
  demos[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    cssSelector();
  });
}

var cssSelector = function() {
  anime({
    targets: '.active .item',
    translateX: 250
  });
};

//document.getElementById("itemID").addEventListener("click", cssSelector);
