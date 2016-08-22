$(document).foundation();

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
        triggerElement: "#trigger"
    })
    .setTween("#animate", 1, {
        backgroundColor: "blue"
    }) // trigger a TweenMax.to tween
    .addIndicators({
        name: "1 (duration: 0)"
    }) // add indicators (requires plugin)
    .addTo(controller);
