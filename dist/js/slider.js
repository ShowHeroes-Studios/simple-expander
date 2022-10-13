(() => {
    let sliderElements = document.querySelectorAll(".expander-slider .slider")
    sliderElements.forEach(element => {
        let settings = element.dataset
        let slider = tns({
            container: element,
            items: settings.items || 1,
            autoplay: settings.autoplay !== undefined || false,
            autoplayButtonOutput: false,
            loop: settings.loop !== undefined || false,
            controls: true,
            nav: true,
            gutter: settings.gap || 20,
            responsive: {
                480: {
                    items: settings.desktopItems || 3,
                }
            }
        })
    })
})()