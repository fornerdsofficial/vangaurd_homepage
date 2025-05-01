// 호버 효과를 위한 자바스크립트
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.servicecard2');
  const cardsContainer = document.querySelector('.servicecard2variant');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // 현재 호버된 카드 크기 증가
      this.style.width = '450px';
      
      // 다른 카드들 크기 감소
      cards.forEach(otherCard => {
        if (otherCard !== this) {
          otherCard.style.width = '334px';
        }
      });
    });
    
    card.addEventListener('mouseleave', function() {
      // 모든 카드 크기 초기화
      cards.forEach(card => {
        card.style.width = '373px';
      });
    });
  });
});