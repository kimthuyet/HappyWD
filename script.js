let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Chuyển ảnh sau mỗi 3 giây
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

// Đếm ngược thời gian
const countDownDate = new Date("May 21, 2025 00:00:00").getTime();

const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown-timer").innerHTML = "Chúc mừng ngày cưới!";
    }
}, 1000);
