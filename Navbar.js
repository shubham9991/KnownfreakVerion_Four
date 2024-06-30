var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline()

tl.to("#full", {
    top: "0",
    duration: 0.6
})
tl.from("#full a", {
    // y: 150,
    duration: 0.7,
    stagger: 0.3,
    opacity: 0
})
tl.from("#full i", {
    opacity: 0
})

tl.pause()
menu.addEventListener("click", function () {
    tl.play()
})
cross.addEventListener("click", function () {
    tl.reverse()
})


