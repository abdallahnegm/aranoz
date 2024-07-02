let bar = document.getElementById("bar")
let mobile = document.getElementById("mobile")
bar.onclick = function () {
    mobile.classList.toggle("mobile-open")
}
const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1120: {
            slidesPerView: 4,
            spaceBetween: 40
        },

    },
});

let mins = document.getElementById("minus")
let pluse = document.getElementById("plus")
let num = document.getElementById("num")
pluse.onclick = function () {
    num.innerHTML++
}
mins.onclick = function () {
    num.innerHTML--
}

let switcherLis = document.querySelectorAll(".switch li");
let boxes = Array.from(document.querySelectorAll('.box'))

switcherLis.forEach((li => {
    li.addEventListener('click', removeActive)
    li.addEventListener('click', manageboxes)
}))

function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

function manageboxes() {
    boxes.forEach((box) => {
        box.style.display = "none";
    });
    document.querySelectorAll(this.dataset.type).forEach((el) => {
        el.style.display = "block";
    });
}