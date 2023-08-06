var z = document.querySelectorAll("button").length;
for (var i = 0; i < z; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var abhi = this.innerHTML;
    makesound(abhi);
  });
}

document.addEventListener("keypress", function (event) {
  makesound(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var one = new Audio("sounds/crash.mp3");
      one.play();
      break;

    case "a":
      var two = new Audio("sounds/kick-bass.mp3");
      two.play();
      break;

    case "s":
      var three = new Audio("sounds/snare.mp3");
      three.play();
      break;

    case "d":
      var four = new Audio("sounds/tom-1.mp3");
      four.play();
      break;

    case "j":
      var five = new Audio("sounds/tom-2.mp3");
      five.play();
      break;

    case "k":
      var six = new Audio("sounds/tom-3.mp3");
      six.play();
      break;

    case "l":
      var seven = new Audio("sounds/tom-4.mp3");
      seven.play();
      break;

    default:
  }
}
