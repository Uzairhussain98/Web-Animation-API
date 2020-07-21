

        window.addEventListener("load", function (){
            var shapeElement = document.querySelector(".shape");
            var frames = [
                {background: "red", transform: "translateX(0px)"},
                {background: "blue"},
                {background: "yellow" , transform: "translateX(600px)"},
            ];

            var timing = {
                duration: 2000,
                iterations: Infinity,
                direction: "alternate"
            }
            var shapeAnimate = shapeElement.animate(frames,timing);

            document.querySelector(".play").addEventListener("click", function (){
                shapeAnimate.play(); 
            });
            document.querySelector(".pause").addEventListener("click", function (){
                shapeAnimate.pause();
            });
            document.querySelector(".reverse").addEventListener("click", function (){
                shapeAnimate.reverse();
            });
            document.querySelector(".updatePlaybackRate").addEventListener("click", function (){
                shapeAnimate.updatePlaybackRate(shapeAnimate.playbackRate * 1.2);
            });


        })

        

