document.addEventListener('DOMContentLoaded', function() {
  // 슬라이드 요소
  const slides = document.querySelectorAll('.slide-item');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.getElementById('prevSlide');
  const nextButton = document.getElementById('nextSlide');
  
  let currentSlide = 0;
  const totalSlides = slides.length;
  
  // 슬라이드 이동 함수
  function goToSlide(index) {
    // 범위 체크
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    // 현재 활성화된 슬라이드와 닷 비활성화
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // 새 슬라이드와 닷 활성화
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }
  
  // 이전 슬라이드로 이동
  if (prevButton) {
    prevButton.addEventListener('click', function() {
      goToSlide(currentSlide - 1);
    });
  }
  
  // 다음 슬라이드로 이동
  if (nextButton) {
    nextButton.addEventListener('click', function() {
      goToSlide(currentSlide + 1);
    });
  }
  
  // 닷 클릭 이벤트
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      goToSlide(index);
    });
  });
  
  // 자동 슬라이드 기능
  let slideInterval = setInterval(function() {
    goToSlide(currentSlide + 1);
  }, 5000); // 5초마다 다음 슬라이드로 이동
  
  // 사용자가 상호작용할 때 자동 슬라이드 일시 중지
  const slidesContainer = document.querySelector('.slides-container');
  
  if (slidesContainer) {
    function pauseSlideshow() {
      clearInterval(slideInterval);
    }
    
    function resumeSlideshow() {
      slideInterval = setInterval(function() {
        goToSlide(currentSlide + 1);
      }, 5000);
    }
    
    // 마우스 이벤트
    slidesContainer.addEventListener('mouseenter', pauseSlideshow);
    slidesContainer.addEventListener('mouseleave', resumeSlideshow);
    
    if (prevButton) {
      prevButton.addEventListener('mouseenter', pauseSlideshow);
      prevButton.addEventListener('mouseleave', resumeSlideshow);
    }
    
    if (nextButton) {
      nextButton.addEventListener('mouseenter', pauseSlideshow);
      nextButton.addEventListener('mouseleave', resumeSlideshow);
    }
    
    // 터치 이벤트 지원
    let touchStartX = 0;
    let touchEndX = 0;
    
    slidesContainer.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
      pauseSlideshow();
    });
    
    slidesContainer.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      resumeSlideshow();
    });
    
    function handleSwipe() {
      const threshold = 50; // 스와이프 감지 임계값
      
      if (touchEndX < touchStartX - threshold) {
        // 왼쪽으로 스와이프 - 다음 슬라이드
        goToSlide(currentSlide + 1);
      } else if (touchEndX > touchStartX + threshold) {
        // 오른쪽으로 스와이프 - 이전 슬라이드
        goToSlide(currentSlide - 1);
      }
    }
  }
}); 