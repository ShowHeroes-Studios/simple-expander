(() => {
    let sliderElements = document.querySelectorAll(".expander-slider .slider")
    sliderElements.forEach(element => {
        let settings = element.dataset
        let slider = tns({
            container: element,
            items: settings.items || 3,
            autoplay: settings.autoplay !== undefined || false,
            autoplayButtonOutput: false,
            loop: settings.loop !== undefined || false,
            controls: settings.controls !== undefined || false,
            nav: settings.nav !== undefined || false
        })
    })
})()