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

    document.querySelector('body').addEventListener('click', function(){
        this.style.background = "lightblue";
    })

    document.querySelector('body').addEventListener('copy', function(){
        this.style.background = "red";
    })

    document.querySelector('body').addEventListener('paste', function(){
        this.style.opacity = 0.5;
    })

    document.querySelector('body').addEventListener('mouseleave', function(){
        this.style.opacity = 1;
    })

    document.querySelector('body').addEventListener('keyup', function(){
        this.style.opacity = 0.3;
    })

    document.querySelector('body').addEventListener('keydown', function(){
        this.style.opacity = 0;
    })

    document.querySelector('body').addEventListener('dragstart', function(){
        alert("Dragged me !")
    })

  window.addEventListener('keypress', function(){
        alert('Key pressed!');
    })

    let stopRefresh = document.querySelector('nav');
    stopRefresh.addEventListener('click', (event) => {
        event.preventDefault();
        alert('stopped the refresh');
    })