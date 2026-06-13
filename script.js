const btnNo = document.getElementById('btnNo');
const btnYes = document.getElementById('btnYes');
const heartContainer = document.getElementById('heart-container');

// Hàm tạo trái tim bay lơ lửng trong background
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    
    // Tỉ lệ có nhiều màu khác nhau
    const colors = ['❤️', '💖', '💕', '💗', '💓'];
    heart.innerHTML = colors[Math.floor(Math.random() * colors.length)];
    
    // Random kích thước, vị trí và thời gian bay
    const size = Math.random() * 20 + 10;
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = size + 'px';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's'; // Bay trong 4-7 giây
    
    heartContainer.appendChild(heart);
    
    // Xóa trái tim sau khi bay xong để không nặng máy
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Tạo trái tim liên tục mỗi 300ms
setInterval(createHeart, 300);

// Nút KHÔNG chạy trốn mượt mà hơn
btnNo.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth) - window.innerWidth/2;
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight) - window.innerHeight/2;
    
    const safeX = Math.max(Math.min(x, 300), -300);
    const safeY = Math.max(Math.min(y, 300), -300);

    btnNo.style.transition = "all 0.2s ease";
    btnNo.style.transform = `translate(${safeX}px, ${safeY}px)`;
});

// Xử lý khi nhấn nút CÓ
btnYes.addEventListener('click', () => {
    // Bắn pháo giấy ăn mừng
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4b8b', '#ff758c', '#ffffff']
    });

    // Thay đổi nội dung thẻ container với hiệu ứng nảy (bounce)
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1 style="font-size: 3.5rem; animation: bounceIn 1s cubic-bezier(0.28, 0.84, 0.42, 1);">Anh biết mà! Yêu em nhiều lắmmm ❤️❤️❤️</h1>
        <p class="subtitle" style="margin-bottom: 20px;">Cảm ơn em đã đồng ý!</p>
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Kiss bear" style="border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); max-width: 100%; transition: transform 0.3s;">
    `;
});
