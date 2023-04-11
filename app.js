
const btnPlaying = document.querySelector('.btn-play');
const audio = document.querySelector('.audio')
isPlaying = false;

btnPlaying.onclick = (e) => {
    if(isPlaying) {
        audio.pause();
    }
    else {
        audio.play();
    }
}
audio.onplay = () => {
    isPlaying = true;
    document.querySelector('.btn-play').classList.add('playing');
    
}
audio.onpause = () => {
    isPlaying = false;
    document.querySelector('.btn-play').classList.remove('playing');
}
audio.ontimeupdate = () => {
    var currentTime = Math.floor(audio.currentTime);
    var audioDuration = Math.floor(audio.duration);
    document.querySelector('.progress-time__current').textContent = changTime(currentTime);
    document.querySelector('.progress-time__duration').textContent = changTime(audioDuration);
}
function changTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    var formattedTime = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    return formattedTime;
}