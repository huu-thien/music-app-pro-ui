/** 0. Load time -> OK
 * 1. Show / Hide Playlist -> OK
 * 2. Render  -> OK
 * 3. Play / Pause / Seek -> OK
 * 4. CD rotate ->OK
 * 5. Next / Previous -> OK
 * 6. Random -> OK
 * 7. Next / Repeat when ended -> OK
 * 8. Active song
 * 9. Scroll active song into
 * 10. Play song when click
 * 11. Volumn
 * 12. Change tooltip
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const myApp = $('.app')
const btnPlayList = $(".header-card__playlist");
const playlistCard = $(".playlist-card");
const btnClosePlaylist = $(".playlist-close");
const listSongs = $(".list-songs");

const imageCD = $(".image-cd");
const name = $(".name");
const author = $(".author");

const audio = $(".audio");
const btnPlay = $(".btn-play");
const btnPause = $(".btn-pause");
const btnNext = $(".btn-next");
const btnPrev = $(".btn-prev");
const btnRandom = $(".btn-random");
const btnRepeat = $(".btn-repeat");
const btnAddFavorite = $(".header-card__favorite");

const progressBar = $(".progress-bar");
const progressBarValue = $(".progress-bar__value");
const progressSection = $(".progress-section");

const songItems = $$('.song-item');


const volumeChange = $(".volume-section");
const btnVolume = $(".volume-control");
const volumeWrapper = $(".change-volume");
const volumeBar = $(".change-volume__bar");
const volumeValue = $(".change-volume__value")

const app = {
    previousIndex: 0,
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isReapeat: false,
    currentVolume: 100,
    isHoldProgressBar: false,
    isHoldVolumeChange: false,
    isMuted: false,
    songs: [
        {
          name: "Attention",
          author: "Charlie Puth",
          image: "./img/CharliePuth.jpg",
          path: "./music/Attention-CharliePuth-6429177.mp3",
        },
        {
          name: "Hymn For Weekend",
          author: "Cold Play",
          image: "./img/ColdPlay.jpg",
          path: "./music/HymnForTheWeekend-Coldplay-6426703.mp3",
        },
        {
          name: "The Lazy Song",
          author: "Bruno Mars",
          image: "./img/BrunoMars2.jpg",
          path: "./music/TheLazySong-BrunoMars-6435263.mp3",
        },
        {
          name: "Nevada",
          author: "MonsterCat",
          image: "./img/MonsterCat.jpg",
          path: "./music/Nevada-Monstercat-6983746.mp3",
        },
        {
          name: "Numb",
          author: "Linkin Park",
          image: "./img/LinkinPark.jpg",
          path: "./music/Numb-LinkinPark-6441286.mp3",
        },
        {
          name: "Treasure",
          author: "Bruno Mars",
          image: "./img/BrunoMars3.jpg",
          path: "./music/Treasure-BrunoMars-6426948.mp3",
        },
        {
          name: "Pay Phone",
          author: "Maroon 5",
          image: "./img/Maroon5.jpg",
          path: "./music/Payphone-Maroon5_498k.mp3",
        },
        {
          name: "See You Again",
          author: "Charlie Puth",
          image: "./img/CharliePuth3.jpg",
          path: "./music/SeeYouAgainFeatCharliePuth-WizKhalifa-6426109.mp3",
        },
        {
          name: "That Girl",
          author: "Olly Murs",
          image: "./img/OllyMurs.jpg",
          path: "./music/ThatGirl-OllyMurs-6560207.mp3",
        },
        {
          name: "Con Mua Ngang Qua",
          author: "Son Tung",
          image: "./img/SonTung1.jpg",
          path: "./music/ConMuaNgangQua-SonTungMTP-2944936.mp3",
        },
        {
          name: "That's What Like",
          author: "Bruno Mars",
          image: "./img/BrunoMars1.jpg",
          path: "./music/ThatSWhatILike-BrunoMars-6437811.mp3",
        },
        {
          name: "All Falls Down",
          author: "Alan Walker",
          image: "./img/AlanWalker.jpg",
          path: "./music/AllFallsDown-AlanWalkerNoahCyrusDigitalFarmAnimalsJuliander-5817723.mp3",
        },
    
        {
          name: "Closer",
          author: "Halsey",
          image: "./img/Halsey.jpg",
          path: "./music/Closer-TheChainsmokersHalsey-4419395.mp3",
        },
    
        {
          name: "Con Mua Ngang Qua 2",
          author: "Son Tung",
          image: "./img/SonTung2.jpg",
          path: "./music/ConMuaNgangQuaPart2-M-TP_3c26j.mp3",
        },
        {
          name: "Monody",
          author: "TheFatRat",
          image: "./img/TheFatRat.jpg",
          path: "./music/Monody-TheFatRatLauraBrehm-4174394.mp3",
        },
        {
          name: "Em Dung Di",
          author: "Son Tung",
          image: "./img/SonTung1.jpg",
          path: "./music/EmDungDi-M-TP_3j3w3.mp3",
        },
        {
          name: "Havana",
          author: "Camila Cabello",
          image: "./img/Camila1.jpg",
          path: "./music/Havana-CamilaCabelloYoungThug-5817730.mp3",
        },
        {
          name: "I Do",
          author: "911",
          image: "./img/911.jpg",
          path: "./music/IDo-911-2757427.mp3",
        },
        {
          name: "Con Mua Ngang Qua 3",
          author: "Son Tung",
          image: "./img/SonTung2.jpg",
          path: "./music/ConMuaNgangQuapart3-MTP-2427879.mp3",
        },
        {
          name: "Never Be Alone",
          author: "TheFatRat",
          image: "./img/TheFatRat.jpg",
          path: "./music/NeverBeAlone-TheFatRat-3770713.mp3",
        },
    
        {
          name: "Star Sky",
          author: "Two Step From Hell",
          image: "./img/TwoStep.jpg",
          path: "./music/StarSky-TwoStepsFromHell-3897684.mp3",
        },
        {
          name: "Symphony",
          author: "Clean Bandit",
          image: "./img/CleanBanDit.jpg",
          path: "./music/Symphony-CleanBanditZaraLarsson-4822950.mp3",
        },
        {
          name: "Waiting For You",
          author: "MoNo",
          image: "./img/mono.jpg",
          path: "./music/WaitingForYou-MONOOnionn-7733882.mp3",
        },
        {
          name: "Unity",
          author: "TheFatRat",
          image: "./img/TheFatRat.jpg",
          path: "./music/Unity-TheFatRat-3578590.mp3",
        },
        {
          name: "Until You",
          author: "Shayne Warrd",
          image: "./img/ShayNe.jpg",
          path: "./music/UntilYou-ShayneWard-1979790.mp3",
        },
        {
          name: "We Don't Talk Anymore",
          author: "CharliePuth",
          image: "./img/CharliePuth2.jpg",
          path: "./music/WeDonTTalkAnymoreFeatSelenaGomez-CharliePuth-6426101.mp3",
        },
        {
          name: "Lệ Anh Vẫn Rơi",
          author: "Son Tung",
          image: "./img/SonTung1.jpg",
          path: "./music/LeAnhVanRoi.mp3",
        },
    ],

    renderSongs: function () {
        var htmls = this.songs.map((song, index) => {
          return `<li class="song-item">
                <img src="${song.image}" alt="" class="song-img">
                <div class="playlist-song-info">
                    <h3 class="song-name icon-text-style">${song.name}</h3>
                    <p class="song-author icon-text-style">${song.author}</p>
                </div>
                <div class='waves-loading'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
                <span class="love icon-text-style">
                    <i class="fa-solid fa-heart"></i>
                </span>
            </li>`;
        });
        listSongs.innerHTML = htmls.join("\n");
      },
    defineProperties() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },
    loadCurrentSong() {
        audio.src = this.songs[this.currentIndex].path;
        imageCD.src = this.songs[this.currentIndex].image;
        name.textContent = this.songs[this.currentIndex].name;
        author.textContent = this.songs[this.currentIndex].author;
        progressBarValue.style.width = 0;
    },
    secondsToMinutes(time) {
        var minutes = Math.floor(time / 60);
        var seconds = time - minutes * 60;
        var formattedTime = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        return formattedTime;
        
    },
    nextSong() {
        this.previousIndex = this.currentIndex;
        this.currentIndex++;
        if(this.currentIndex > this.songs.length - 1) {
            this.currentIndex = 0;   
        }
        this.loadCurrentSong();
        this.activeSong();
    },
    prevSong() {
        this.previousIndex = this.currentIndex;
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;   
        }
        this.loadCurrentSong();
        this.activeSong();
    },
    randomSongs() {
        let newIndex;
        do {
            newIndex= Math.floor(Math.random() * this.songs.length);
        } while (newIndex == this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    repeatSong() {
        this.loadCurrentSong(this.currentIndex);
    },
    activeSong() {
        const songItems = $$('.song-item');
        const songActive = songItems[this.currentIndex];
        songActive.classList.add('active');
        this.scrollToActiveSong(songActive);
        songItems[this.previousIndex].classList.remove('active');
    },
    scrollToActiveSong(songActive) {
        songActive.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    },
    
    handlerEvents() {
        const _this = this;
        const songItems = $$('.song-item');
        songItems[this.currentIndex].classList.add('active');
        // CD rotate
        const imageCdRotate = imageCD.animate([
            {transform: 'rotate(360deg'}
        ], {duration: 10000, iterations: Infinity})
        imageCdRotate.pause();
        // Add favorite
        btnAddFavorite.onclick = () => {
            btnAddFavorite.classList.toggle('being-favorite')
        }
        // Show/hide playlist when click icon
        btnPlayList.onclick = () => {
          playlistCard.classList.add("playlist-open");
        };
        btnClosePlaylist.onclick = () => {
          playlistCard.classList.remove("playlist-open");
        };
    
        // Play / Pause / Seek
        btnPlay.onclick = () => {
            if(this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }
        audio.onplay = () => {
            this.isPlaying = true;
            btnPlay.classList.add('playing');
            imageCdRotate.play();
        }
        audio.onpause = () => {
            this.isPlaying = false;
            btnPlay.classList.remove('playing');
            imageCdRotate.pause();
        }
        // Khi het bài thì qua bài mới
        audio.onended = () => {
            
        }
        audio.onloadedmetadata = () => {
            const duration = Math.floor(audio.duration);
            if(duration) {$('.progress-time__duration').textContent = this.secondsToMinutes(duration);}
        }
        // Next bài hát
        btnNext.onclick = () => {
            if(this.isRandom) {
                this.randomSongs();
                console.log(this.currentIndex);
            } else {
                this.nextSong();
                // console.log(this.currentIndex);
            }
            audio.play();
        }
        // Prev bài hát
        btnPrev.onclick = () => {
            this.prevSong();
            audio.play();
        }
        // Click nút ranđom 
        btnRandom.onclick = () => {
            btnRepeat.classList.remove('being-repeat');
            this.isReapeat = false;

            this.isRandom = !this.isRandom;
            btnRandom.classList.toggle("being-random");

            
        }
        // click repeat btn -> turn off random
        btnRepeat.onclick = () => {
            btnRandom.classList.remove("being-random");
            this.isRandom = false;

            this.isReapeat = !this.isReapeat;
            btnRepeat.classList.toggle("being-repeat");
        }
        // Khi ket thuc bai hat
        audio.onended = () => {
            if(this.isReapeat) {
                this.loadCurrentSong();
            } else if(this.isRandom) {
                this.randomSongs();
            } else {
                this.nextSong();
            }
            audio.play();
        }
        // Load current time 
        audio.ontimeupdate = () => {
            $('.progress-time__current').textContent = this.secondsToMinutes(Math.floor(audio.currentTime));    
            if(this.isHoldProgressBar == false) {
                const percentProgress = (audio.currentTime / audio.duration) * 100;
                progressBarValue.style.width = percentProgress + '%';
            }
        }
        // Khi click để thay đổi tiến độ bài hát
        progressSection.onmousedown = (e) => {
            this.isHoldProgressBar = true;
        }
        // Khi giữ chuột, ProgressValue sẽ thay đổi theo vị trí mà chuột trỏ tới
        window.onmousemove = (e) => {
            console.log(1);
            if(this.isHoldProgressBar) {
                const rect = progressBar.getBoundingClientRect();
                let percentProgress = parseFloat(((e.pageX - rect.left) / progressBar.offsetWidth) * 100);
                if(percentProgress >= 0 && percentProgress <= 100) {
                    progressBarValue.style.width = percentProgress + '%';
                } else if (percentProgress < 1) {
                    progressBarValue.style.width = '1%'
                } else if (percentProgress > 100) {
                    progressBarValue.style.width = '99%'                   
                }
                myApp.classList.add('player-music--hover-progress')
            }
        }
        // Khi thả chuột thì thời gian bài hát thay đổi
        window.onmouseup = (e) => {
            if(this.isHoldProgressBar) {
                this.isHoldProgressBar = false;
                const rect = progressBar.getBoundingClientRect();

                let percentProgress = parseFloat(((e.pageX - rect.left) / progressBar.offsetWidth) * 100);
                if(percentProgress < 0) {
                    percentProgress = 0;
                }
                if (percentProgress > 100) {
                    percentProgress = 100;
                }
                audio.currentTime = (percentProgress / 100) * audio.duration;
                myApp.classList.remove('player-music--hover-progress')
            }
        }
        // Actice song in playlist
        songItems.forEach((song, index) => {
            song.onclick = (e) => {
                // Khi chọn bài hiện tại thì không ăn sự kiện
                if(this.currentIndex != index) {
                    this.previousIndex = this.currentIndex;
                    this.currentIndex = index;
                    this.loadCurrentSong();

                    this.activeSong();
                    audio.play();
                }
            }
        })
        // Handle when change volunm
        volumeWrapper.onmousedown = (e) => {
            this.isHoldVolumeChange = true;
        };
        window.addEventListener('mousemove', (e) =>{
            if (this.isHoldVolumeChange) {
                const rect = volumeWrapper.getBoundingClientRect();
                let percentVolume = parseFloat(((e.pageX - rect.left) / volumeWrapper.offsetWidth) * 100);
                if (percentVolume >= 0 && percentVolume <= 100) {
                    volumeValue.style.width = `${percentVolume}%`;
                } else if (percentVolume < 0) {
                    percentVolume = 0;
                    volumeValue.style.width = `1%`;
                } else if (percentVolume > 100) {
                    percentVolume = 100;
                    volumeValue.style.width = `99%`;
                }
                this.currentVolume = percentVolume;
                audio.volume = percentVolume / 100;
                if (audio.volume == 0) {
                    this.isMute = true;
                } else {
                    this.isMute = false;
                }
                myApp.classList.add("player-music--hover-volume");
            }
        });
        window.addEventListener('mouseup', (e) => {
            if (this.isHoldVolumeChange) {
                this.isHoldVolumeChange = false;
                const rect = volumeWrapper.getBoundingClientRect();
                var percentVolume = parseFloat(((e.pageX - rect.left) / volumeWrapper.offsetWidth) * 100);
                if (percentVolume < 0) {
                    percentVolume = 0;
                } else if (percentVolume > 100) {
                    percentVolume = 100;
                }
                this.currentVolume = percentVolume;
                volumeValue.style.width = `${this.currentVolume}%`;
                audio.volume = percentVolume / 100;
                myApp.classList.remove("player-music--hover-volume");
            }
        });
        btnVolume.onclick = (e) => {
            this.isMute = !this.isMute;
            volumeChange.classList.toggle("mute");
            if (this.isMute) {
                audio.volume = 0;
                volumeValue.style.width = `0%`;
            } else {
                volumeValue.style.width = `${this.currentVolume}%`;
                audio.volume = this.currentVolume / 100;
            }
        }
        audio.onvolumechange = (e) => {
            if (this.isMute) {
                volumeChange.classList.add("mute");
            } else {
                volumeChange.classList.remove("mute");
            }
        };
        // Handle when user Press space and arrow keys
        document.onkeydown = (e) => {
            console.log(e.which) ;
            switch(e.which) {
                case 32:
                    btnPlay.click();
                    break;
                case 39:
                    audio.currentTime += 5;
                    break;
                case 37:
                    audio.currentTime -= 5;
                    break;
            }
        }

        // Handle in Mobile
        // When touch don't hold mouse
        progressSection.addEventListener("touchstart", (e) => {
            this.isHoldProgressBar = true;
        });
        // When touch move, progressValue will change according to the position that the mouse points to
        window.addEventListener("touchmove", (e) => {
            if (_this.isHoldProgressBar) {
                const rect = progressBar.getBoundingClientRect();
                for (let i = 0; i < e.changedTouches.length; i++) {
                    const percentProgress = parseFloat(
                        ((e.changedTouches[i].pageX - rect.left) / progressBar.offsetWidth) * 100
                    );

                    if (percentProgress >= 0 && percentProgress <= 100) {
                        progressBarValue.style.width = `${percentProgress}%`;
                    } else if (percentProgress < 0) {
                        progressBarValue.style.width = `1%`;
                    } else if (percentProgress > 100) {
                        progressBarValue.style.width = `99%`;
                    }
                }
            }
        });
        // When you release touch, the time Current will be changed
        window.addEventListener("touchend", (e) => {
            if (_this.isHoldProgressBar) {
                _this.isHoldProgressBar = false;
                const rect = progressBar.getBoundingClientRect();

                let percentProgress = parseFloat(
                    ((e.changedTouches[0].pageX - rect.left) / progressBar.offsetWidth) * 100
                );
                if (percentProgress < 0) {
                    percentProgress = 0;
                }
                if (percentProgress > 100) {
                    percentProgress = 100;
                }
                audio.currentTime = (percentProgress / 100) * audio.duration;
            }
        });
        // Handle when touch change volume
        volumeWrapper.ontouchstart = (e) => {
            this.isHoldVolumeChange = true;
        };
        window.ontouchmove = (e) => {
            if (this.isHoldVolumeChange) {
                const rect = volumeWrapper.getBoundingClientRect();
                for (let i = 0; i < e.changedTouches.length; i++) {
                    var percentVolume = parseFloat(
                        ((e.changedTouches[i].pageX - rect.left) / volumeWrapper.offsetWidth) * 100
                    );
                    if (percentVolume >= 0 && percentVolume <= 100) {
                        volumeValue.style.width = `${percentVolume}%`;
                    } else if (percentVolume < 0) {
                        percentVolume = 0;
                        volumeValue.style.width = `1%`;
                    } else if (percentVolume > 100) {
                        percentVolume = 100;
                        volumeValue.style.width = `99%`;
                    }
                    this.currentVolume = percentVolume;
                    audio.volume = percentVolume / 100;
                    if (audio.volume == 0) {
                        this.isMute = true;
                    } else {
                        this.isMute = false;
                    }
                }
            }
        };
        window.ontouchend = (e) => {
            if (this.isHoldVolumeChange) {
                this.isHoldVolumeChange = false;
                const rect = volumeWrapper.getBoundingClientRect();
                var percentVolume = parseFloat(
                    ((e.changedTouches[0].pageX - rect.left) / volumeWrapper.offsetWidth) * 100
                );
                if (percentVolume < 0) {
                    percentVolume = 0;
                } else if (percentVolume > 100) {
                    percentVolume = 100;
                }
                this.currentVolume = percentVolume;
                volumeValue.style.width = `${this.currentVolume}%`;
                audio.volume = percentVolume / 100;
            }
        };
        
    },

    
    start() {
        // Định nghĩa property
        this.defineProperties();

        //Render playlist
        this.renderSongs();

        this.loadCurrentSong();

        // Xử lý sự kiện
        this.handlerEvents();

    },

};

app.start();






















// const btnPlaying = document.querySelector('.btn-play');
// const audio = document.querySelector('.audio')
// isPlaying = false;

// btnPlaying.onclick = (e) => {
//     if(isPlaying) {
//         audio.pause();
//     }
//     else {
//         audio.play();
//     }
// }
// audio.onplay = () => {
//     isPlaying = true;
//     document.querySelector('.btn-play').classList.add('playing');

// }
// audio.onpause = () => {
//     isPlaying = false;
//     document.querySelector('.btn-play').classList.remove('playing');
// }
// audio.ontimeupdate = () => {
//     var currentTime = Math.floor(audio.currentTime);
//     var audioDuration = Math.floor(audio.duration);
//     document.querySelector('.progress-time__current').textContent = changTime(currentTime);
//     document.querySelector('.progress-time__duration').textContent = changTime(audioDuration);
// }
// function changTime(time) {
//     var minutes = Math.floor(time / 60);
//     var seconds = time - minutes * 60;
//     var formattedTime = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
//     return formattedTime;
// }
