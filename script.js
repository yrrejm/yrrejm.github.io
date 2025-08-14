// 이미지 확대 모달 창 열기
function openModal(src, alt) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
}

// 모달 창 닫기
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
