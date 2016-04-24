
var element = document.getElementById('tempo-questao-atual');

var seconds = new ProgressBar.Circle(element, {
    duration: 200,
    color: "#266fb0",
    trailColor: "#ddd"
});

setInterval(function() {
    var second = new Date().getSeconds();
    seconds.animate(second / 60, function() {
        seconds.setText(second);
    });
}, 1000);