// Rectangle 슬라이더 JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Rectangle 슬라이더 요소 선택
  const sliderTrack = document.querySelector('.rectangle-parent .banner-slider-track');
  const slides = document.querySelectorAll('.rectangle-parent .banner-slide');
  const prevBtn = document.querySelector('.rectangle-parent .banner-prev-btn');
  const nextBtn = document.querySelector('.rectangle-parent .banner-next-btn');
  const indicators = document.querySelectorAll('.rectangle-parent .banner-indicator');
  
  // 슬라이더가 존재하는지 확인
  if (!sliderTrack || slides.length === 0) return;
  
  let currentSlide = 0;
  const slideCount = slides.length;
  let slideInterval;
  
  // 슬라이드 이동 함수
  function moveToSlide(index) {
    if (index < 0) {
      index = slideCount - 1;
    } else if (index >= slideCount) {
      index = 0;
    }
    
    // 슬라이드 이동
    sliderTrack.style.transform = `translateX(-${index * 100 / slideCount}%)`;
    
    // 현재 인디케이터 업데이트
    indicators.forEach(indicator => indicator.classList.remove('active'));
    if (indicators[index]) {
      indicators[index].classList.add('active');
    }
    
    // 현재 슬라이드 인덱스 업데이트
    currentSlide = index;
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
  
  // 슬라이더 초기화
  moveToSlide(0);
  startInterval();
});