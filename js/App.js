function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    // start with new or original interval, stop current interval
    this.reset = function(newT = t) {
        t = newT;
        return this.stop().start();
    }
}




let count = 1;
document.getElementById("radio1").checked = true;

var slider = new Timer(function(){
    nextImage();
    console.log(count)
}, 5000);


function nextImage(){
    count++;
    if(count>5){
        count=1;
    }
    document.getElementById("radio"+count).checked = true;
}

function setCount(num){
    slider.stop;
    slider.start;
}