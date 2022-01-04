var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  let des = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap{ border-left: 0.08em solid #fff}";
  css.innerHTML = ".typewrite > .wrap{ color:#000}";
  css.innerHTML = ".typewrite > .wrap{width:fixed}";
  des.innerHTML = ".des > .wrap{font-size:1rem}";
  document.body.appendChild(css);
};
// when click on nav tabs 
const list = {
  ABOUT:["OUR HISTORY","OUR CORE VALUES"," OUR LEADERSHIP"],
  BUSINESS: ["POWER",
             "CARBON BLACK",
             "IT-ENABLED SERVICES",
             "CONSUMER & RETAIL",
             "MEDIA & ENTERTAINMENT",
             "SPORTS",
             "EDUCATION AND INFRASTRUCTURE","PLANTATAIONS"],
}
$(document).ready(function(){
  $("#about_us").click(function(){
    document.getElementById("panel").innerHTML = "";
    $("#panel").append("<ul></ul>");
    $("#panel").slideToggle("slow");
    list["ABOUT"].forEach(function(item) {
      $("#panel ul").append("<li>" + item + "</li>");
    })
  });
  $("#business_").click(function(){
     document.getElementById("panel").innerHTML = "";
     $("#panel").append("<ul></ul>");
     $("#panel").slideToggle("slow");
     list["BUSINESS"].forEach(function(item) {
       $("#panel ul").append("<li>" + item + "</li>");
     })
  });
});
// carsoul of what is new :
