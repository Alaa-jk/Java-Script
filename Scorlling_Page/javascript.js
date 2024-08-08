let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let sky_view = document.querySelector(".sky-view");
window.onscroll = function () {
    let value = scrollY;
    // Move Moon, and Stars, Mountains and River with Scrolling
    stars.style.bottom = value + "px";
    moon.style.top = value * 4 + "px";
    mountains3.style.top = value * 2 + "px";
    mountains4.style.top = value * 1.5 + "px";
    river.style.top = value + "px";
    boat.style.top = value + "px";
    boat.style.left = value * 4 + "px";
    sky_view.style.fontSize = value + "px";
    if (scrollY >= 60) {
        sky_view.style.fontSize = 60 + "px";
        sky_view.style.position = 'fixed';
        if (scrollY >= 520) {
            sky_view.style.display = 'none';
        } else {
            sky_view.style.display = 'block';
        }
        if (scrollY >= 120) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)'
        } else {
            document.querySelector('.main').style.background = 'linear-gradient( #200020, #10001f)'
        }
    }
};