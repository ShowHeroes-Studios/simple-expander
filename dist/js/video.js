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

        if (video.hasAttribute("autoplay")) {
            promise = video.play()
            if (promise) {
                promise.catch(() => {
                    // autoplay with sound didn't work, mute the video and try again
                    video.muted = true
                    video.play()
                    // add unmute button
                    let soundButton = document.createElement("button")
                    soundButton.classList.add("sound")
                    soundButton.addEventListener("click", (e) => {
                        if (video.muted) {
                            video.muted = false
                            soundButton.classList.add("mute")
                        } else {
                            video.muted = true
                            soundButton.classList.remove("mute")
                        }
                    })
                    element.appendChild(soundButton)
                })
            }
        }

    })
})()