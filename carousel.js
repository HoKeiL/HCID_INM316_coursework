const carousel = new Carousel({
  elem: "carousel", // id of the carousel container
  autoplay: false, // starts the rotation automatically
  infinite: true, // enables infinite mode
  interval: 2500, // interval between slide changes
  initial: 0, // slide to start with
  dots: true, // show navigation dots
  arrows: true, // show navigation arrows
  buttons: false, // hide <play>/<stop> buttons,
  btnStopText: "Pause", // <stop> button text
});
