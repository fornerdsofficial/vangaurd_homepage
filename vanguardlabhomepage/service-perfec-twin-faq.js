// FAQ 아코디언 기능을 위한 독립 자바스크립트 파일
window.addEventListener('load', function() {
  console.log('Window fully loaded - FAQ script running');
  
  // 모든 FAQ 항목 가져오기
  const faqItems = document.querySelectorAll('.faqlist .longcard');
  console.log('FAQ items found:', faqItems.length);
  
  // 초기에 모든 답변 숨기기
  faqItems.forEach(item => {
    const answer = item.querySelector('.a');
    if(answer) {
      answer.style.display = 'none';
      console.log('Hidden answer');
    }
  });
  
  // 각 FAQ 항목에 클릭 이벤트 추가
  faqItems.forEach((item, index) => {
    const question = item.querySelector('.q');
    const answer = item.querySelector('.a');
    
    if(question && answer) {
      console.log(`Setting up click for FAQ item #${index+1}`);
      
      // 클릭 이벤트 추가 (기존 이벤트 리스너 제거 후)
      question.removeEventListener('click', handleClick);
      question.addEventListener('click', handleClick);
      
      // 클릭 이벤트 핸들러 함수
      function handleClick(e) {
        console.log(`FAQ #${index+1} clicked`);
        e.preventDefault();
        
        // 현재 답변 표시/숨김 토글 (다른 FAQ는 영향 없음)
        if(answer.style.display === 'none') {
          console.log('Showing answer');
          answer.style.display = 'flex';
          question.classList.add('open');
          
          // 화살표 아이콘 회전
          const icon = question.querySelector('.chevron-right-icon1');
          if(icon) icon.style.transform = 'rotate(90deg)';
        } else {
          console.log('Hiding answer');
          answer.style.display = 'none';
          question.classList.remove('open');
          
          // 화살표 아이콘 원상태
          const icon = question.querySelector('.chevron-right-icon1');
          if(icon) icon.style.transform = 'rotate(0deg)';
        }
      }
    }
  });
  
  // 디버깅을 위한 추가 로그
  setTimeout(() => {
    console.log('Checking FAQ items after 1 second:');
    faqItems.forEach((item, index) => {
      const q = item.querySelector('.q');
      const a = item.querySelector('.a');
      console.log(`FAQ #${index+1} - Question found: ${!!q}, Answer found: ${!!a}, Answer display: ${a ? a.style.display : 'N/A'}`);
    });
  }, 1000);
});