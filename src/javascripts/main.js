const animation = bodymovin.loadAnimation({
  container: document.getElementById("bm"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  rendererSettings: {
    progressiveLoad: false,
    preserveAspectRatio: "xMidYMid slice"
  },
  path: "../data.json"
});

window.onscroll = function() {
  var scrollPercent =
    (100 * $(window).scrollTop()) / ($(document).height() - $(window).height());
  scrollPercentRounded = Math.round(scrollPercent);
  animation.goToAndStop((scrollPercentRounded / 100) * 4000);
};
