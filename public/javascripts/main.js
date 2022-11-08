window.onscroll = () => {
    document.querySelector("nav").classList.toggle("sticky", window.scrollY > 0)
};