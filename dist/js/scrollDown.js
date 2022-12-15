(() => {
    let button = document.querySelector(".scroll-down-button")
    if (!button)
        return
    button.addEventListener("click", () => {
        window.scrollBy({
            top: window.innerHeight * .75,
            behavior: "smooth"
        })
    })

    window.addEventListener("scroll", () => {
        button.classList.add("scrolled")
    })
})()