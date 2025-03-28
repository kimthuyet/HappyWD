function createHeart() {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("falling-heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);