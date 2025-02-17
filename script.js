const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const playButton = player.querySelector('.toggle');
const volumeSlider = player.querySelector('input[name="volume"]');
const speedSlider = player.querySelector('input[name="playbackSpeed"]');
const skipButtons = player.querySelectorAll('[data-skip]');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');

// Play/Pause Function
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚❚';
    } else {
        video.pause();
        playButton.textContent = '►';
    }
}

// Update Progress Bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

// Scrub (Click on progress bar)
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Volume Control
function handleVolumeChange() {
    video.volume = volumeSlider.value;
}

// Playback Speed Control
function handleSpeedChange() {
    video.playbackRate = speedSlider.value;
}

// Skip Function
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Event Listeners
video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
volumeSlider.addEventListener('input', handleVolumeChange);
speedSlider.addEventListener('input', handleSpeedChange);
skipButtons.forEach(button => button.addEventListener('click', skip));
progress.addEventListener('click', scrub);
