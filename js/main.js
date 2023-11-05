/** @format */

let btn = document.querySelector(".header .container .links .icon");
let list = document.querySelector(".header .container .links ul");
let icon = document.querySelector(".header .links .icon span:nth-child(2)");
let header = document.querySelector(".header");
let onOff = 0;
btn.addEventListener("click", () => {
    if (onOff === 0) {
        onOff++;
        list.style.cssText = " transform: scaleY(1); opacity: 1;";
        icon.style.cssText = "width:100%";
    } else if (onOff === 1) {
        list.style.cssText = " transform: scaleY(0); opacity: 0;";
        icon.style.cssText = "width:60%";
        onOff = 0;
    }
});

let lastScrollTop = window.scrollY;

document.addEventListener("scroll", () => {
    let corrent = window.scrollY;

    if (corrent > lastScrollTop) {
        console.log("down");
        header.style.cssText = "top : -62px";
    } else if (corrent < lastScrollTop) {
        console.log("up");
        header.style.cssText = "top : 0";
    }
    lastScrollTop = corrent;
});
