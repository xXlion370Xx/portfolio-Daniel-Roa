window.onscroll = () => {
    document.querySelector("header").classList.toggle("sticky", window.scrollY > 0)
};