document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector("video");
    const playButton = document.createElement("button");
    playButton.classList.add("player__button");
    playButton.textContent = "►";
    document.querySelector(".wrapper").prepend(playButton);
    
    const rewindButton = document.createElement("button");
    rewindButton.textContent = "« 10s";
    document.querySelector(".wrapper").appendChild(rewindButton);
    
    const forwardButton = document.createElement("button");
    forwardButton.textContent = "25s »";
    document.querySelector(".wrapper").appendChild(forwardButton);
    
    const speedBar = document.querySelector(".speed-bar");
    
    playButton.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            playButton.textContent = "❚ ❚";
        } else {
            video.pause();
            playButton.textContent = "►";
        }
    });
    
    rewindButton.addEventListener("click", () => {
        video.currentTime -= 10;
    });
    
    forwardButton.addEventListener("click", () => {
        video.currentTime += 25;
    });
    
    const speedControl = document.querySelector(".speed");
    speedControl.addEventListener("mousemove", (e) => {
        const speed = ((e.offsetY / speedControl.offsetHeight) * 2).toFixed(2);
        video.playbackRate = speed;
        speedBar.textContent = `${speed}×`;
    });
});
