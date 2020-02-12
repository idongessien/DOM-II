// Your code goes here


// DBL CLICK

let imgZoom = document.querySelector('img ');

imgZoom.addEventListener('dblclick', function () {
        imgZoom.style.transform = "scale(1.3)";
        imgZoom.style.transition = "transform 1s";
    });

    imgZoom.addEventListener('mouseout', function () {
        imgZoom.style.transform = "scale(1)";
        imgZoom.style.transition = "transform 1s";
    });

    let redHead = document.querySelector("h2");
    
    redHead.addEventListener("select", function() {
        redHead.style.color = "red";
    });
