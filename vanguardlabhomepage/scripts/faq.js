// FAQ 항목 클릭 이벤트 처리
document.addEventListener('DOMContentLoaded', function() {
  // FAQ 항목 선택
  const faqItems = document.querySelectorAll('.faqlist .longcard');
  
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const question = item.querySelector('.q');
      const answer = item.querySelector('.a');
      const icon = item.querySelector('.chevron-right-icon1');
      
      // 초기 상태 - 모든 FAQ 닫혀있음
      if (answer) {
        answer.style.display = 'none';
        
        // 클릭 이벤트 추가
        question.addEventListener('click', function() {
          // 답변 표시/숨김 토글
          if (answer.style.display === 'none') {
            answer.style.display = 'flex';
            question.classList.add('open');
            if (icon) {
              icon.style.transform = 'rotate(90deg)';
            }
          } else {
            answer.style.display = 'none';
            question.classList.remove('open');
            if (icon) {
              icon.style.transform = 'rotate(0deg)';
            }
          }
        });
      }
    });
  }
}); 