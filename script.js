var swiper = new Swiper(".list-slide.mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});
var swiper = new Swiper(".reviews.mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".reviews.swiper-pagination",
        clickable: true,
    },
});
const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });
// Hàm để toggle hiển thị search-box
function showSearch() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Hàm để ẩn search-box
function hideSearch() {
    const searchBox = document.getElementById("myDropdown");
    if (searchBox.classList.contains("show")) {
        searchBox.classList.remove("show");
    }
}

// Sự kiện click trên search-button để toggle search-box
document.getElementById("search-button").addEventListener("click", function (event) {
    event.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
    showSearch();
});

// Sự kiện click trên document để ẩn search-box nếu click ra ngoài
document.addEventListener("click", function (event) {
    const searchBox = document.getElementById("myDropdown");
    const searchButton = document.getElementById("search-button");
    if (!searchBox.contains(event.target) && !searchButton.contains(event.target)) {
        hideSearch();
    }
});


function filterFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const form = document.getElementById("myDropdown");
};
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
    // Do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.02) {
        // Show button
        scrollToTopBtn.classList.add("showBtn");
    } else {
        // Hide button
        scrollToTopBtn.classList.remove("showBtn");
    }
}

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
