(() => {
    let elements = document.querySelectorAll(".expander-video")
    elements.forEach(element => {
        let video = element.querySelector("video")
        if (!video)
            return

        video.addEventListener("play", () => {
            element.classList.add("playing")
        })
        video.addEventListener("pause", () => {
            element.classList.remove("playing")
        })

        let playButton = document.createElement("button")
        playButton.classList.add("play")
        playButton.addEventListener("click", (e) => {
            if ( !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2) )
                video.pause()
            else
                video.play()
        })
        element.appendChild(playButton)

        let soundButton = document.createElement("button")
        soundButton.classList.add("sound")
        soundButton.addEventListener("click", (e) => {
            if (video.muted) {
                video.muted = false
                video.volume = 1
            } else if (video.volume < 1) {
                video.muted = true
            } else {
                video.volume = .5
            }
        })
        element.appendChild(soundButton)

        video.addEventListener("volumechange", () => {
            if (video.muted) {
                element.classList.add("sound-off")
                element.classList.remove("sound-half")
                element.classList.remove("sound-on")
            } else if (video.volume == 1) {
                element.classList.remove("sound-off")
                element.classList.remove("sound-half")
                element.classList.add("sound-on")
            } else {
                element.classList.remove("sound-off")
                element.classList.add("sound-half")
                element.classList.remove("sound-on")
            }
        })

        if (video.hasAttribute("data-volume-half")) {
            video.volume = .5
        }

        if (video.hasAttribute("autoplay")) {
            promise = video.play()
            if (promise) {
                promise.catch(() => {
                    // autoplay with sound didn't work, mute the video and try again
                    video.muted = true
                    video.play()
                })
            }
        }

    })
})()