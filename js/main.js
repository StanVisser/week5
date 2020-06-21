var video = document.querySelector(".video-js");
var play = $(".video-js");

video.addEventListener("timeupdate", function(){
var time = video.currentTime;

if (time > 4){
    video.pause();
    console.log("pauze");

    play.append('<div class="kijk"> <p>Wil je verder kijken?</p> </div>');
}
console.log(time);
});

