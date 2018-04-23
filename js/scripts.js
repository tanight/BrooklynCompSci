$(window).on("load", function () {

  $(".main").fadeIn(1000);

});

$(window).on("load", function () {

  $(".load-screen").delay(2500).fadeOut(500).queue(function () {

    $(this).dequeue();
    $(".main").fadeIn(400);
    $(".intro-img").addClass("slideup-animation");
    $(".intro-heading").addClass("slideup-animation");
    $(".intro-p").addClass("slideup-animation");
    $(".intro-link").addClass("slideup-animation");
  });

});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{
        text: 'Learn JavaScript'
      },
      {
        text: 'Learn Vue'
      },
      {
        text: 'Build something awesome'
      }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'HELLO CS!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

let ufo = document.querySelector('.ufo');

ufo.addEventListener('mousemove', (e) => {
  let eyes = document.querySelector('.eyes');
  let mouseX = (eyes.getBoundingClientRect().left);
  let mouseY = (eyes.getBoundingClientRect().top);
  let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
  let rotationDegrees = (radianDegrees * (180 / Math.PI) * -1) + 180;
  eyes.style.transform = `rotate(${rotationDegrees}deg)`
});