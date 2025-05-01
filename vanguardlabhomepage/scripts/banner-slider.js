// 배너 슬라이더 JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const sliderTrack = document.querySelector('.banner-slider-track');
  const slides = document.querySelectorAll('.banner-slide');
  const prevBtn = document.querySelector('.banner-prev-btn');
  const nextBtn = document.querySelector('.banner-next-btn');
  const indicators = document.querySelectorAll('.banner-indicator');
  
  let currentSlide = 0;
  const slideCount = slides.length;
  let slideInterval;
  
  // 텍스트 요소 선택
  const textElements = document.querySelectorAll('.service-partner, .it-consulting, .enterprise');
  
  // 슬라이드 이동 함수
  function moveToSlide(index) {
    if (index < 0) {
      index = slideCount - 1;
    } else if (index >= slideCount) {
      index = 0;
    }
    
    // 먼저 모든 텍스트 요소를 페이드 아웃
    textElements.forEach(el => {
      el.style.opacity = 0;
    });
    
    // 슬라이드 이동
    sliderTrack.style.transform = `translateX(-${index * 100 / slideCount}%)`;
    
    // 현재 인디케이터 업데이트
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[index].classList.add('active');
    
    // 현재 슬라이드 인덱스 업데이트
    currentSlide = index;
    
    // 텍스트 요소 페이드 인 (순차적으로 애니메이션)
    // 현재 슬라이드에 있는 텍스트 요소만 선택
    const currentTextElements = slides[index].querySelectorAll('.service-partner, .it-consulting, .enterprise');
    
    // 텍스트 요소를 순차적으로 나타나게 함
    setTimeout(() => {
      if (currentTextElements[0]) {
        currentTextElements[0].style.opacity = 1;
      }
    }, 300); // 첫 번째 텍스트 - 300ms 후
    
    setTimeout(() => {
      if (currentTextElements[1]) {
        currentTextElements[1].style.opacity = 1;
      }
    }, 600); // 두 번째 텍스트 - 600ms 후
    
    setTimeout(() => {
      if (currentTextElements[2]) {
        currentTextElements[2].style.opacity = 1;
      }
    }, 900); // 세 번째 텍스트 - 900ms 후
  }
  
  // 이벤트 리스너 등록
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      moveToSlide(currentSlide - 1);
      resetInterval();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      moveToSlide(currentSlide + 1);
      resetInterval();
    });
  }
  
  // 인디케이터 클릭 이벤트
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      moveToSlide(index);
      resetInterval();
    });
  });
  
  // 자동 슬라이드 타이머 리셋
  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }
  
  // 자동 슬라이드 시작
  function startInterval() {
    slideInterval = setInterval(() => {
      moveToSlide(currentSlide + 1);
    }, 5000); // 5초마다 슬라이드 변경
  }
  
  // 초기화: 모든 텍스트 숨기기 & 첫 번째 슬라이드 텍스트 표시
  textElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transition = 'opacity 0.5s ease';
  });
  
  // 슬라이더 초기화
  moveToSlide(0);
  startInterval();
});