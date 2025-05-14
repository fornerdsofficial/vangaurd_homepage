// GRS 페이지 전용 슬라이더 JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // GRS 슬라이더 초기화
  const container = document.getElementById('grs-mokup-slider');
  if (!container) {
    console.error('GRS 슬라이더 컨테이너를 찾을 수 없습니다.');
    return;
  }
  
  // 슬라이더 요소 선택
  const mokupTrack = container.querySelector('.mokup-slider-track');
  const slides = container.querySelectorAll('.mokup-slide');
  
  // 좌우 버튼 요소 선택
  const prevBtn = container.querySelector('.chevronleft1 img');
  const nextBtn = document.getElementById('grs-next-btn');
  
  // 페이지 인디케이터 선택
  const dots = container.querySelectorAll('.pageindicator3 div');
  
  // 현재 슬라이드 인덱스 초기화
  let currentSlide = 0;
  const slideCount = slides.length;
  
  // 모바일 환경 체크
  const isMobile = () => window.innerWidth <= 768;
  
  // 슬라이드 이동 함수
  function moveToSlide(index) {
    // 인덱스 범위 체크
    if (index < 0) {
      index = slideCount - 1;
    } else if (index >= slideCount) {
      index = 0;
    }
    
    // 현재 슬라이드 인덱스 업데이트
    currentSlide = index;
    
    // 슬라이드 이동 (모바일 환경이든 데스크톱 환경이든 transform 사용)
    mokupTrack.style.transform = `translateX(-${index * (100/slideCount)}%)`;
    
    // 현재 인디케이터 업데이트
    for (let i = 0; i < dots.length; i++) {
      if (i === index) {
        dots[i].className = 'on1';
      } else {
        dots[i].className = 'off10';
      }
    }
  }
  
  // 이벤트 리스너 등록
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      moveToSlide(currentSlide - 1);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      moveToSlide(currentSlide + 1);
    });
  }
  
  // 인디케이터 클릭 이벤트
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      moveToSlide(index);
    });
  });
  
  // 모바일에서 터치 스와이프 구현
  let touchStartX = 0;
  let touchEndX = 0;
  
  container.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  container.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const minSwipeDistance = 50;
    if (touchStartX - touchEndX > minSwipeDistance) {
      // 왼쪽으로 스와이프 - 다음 슬라이드
      moveToSlide(currentSlide + 1);
    } else if (touchEndX - touchStartX > minSwipeDistance) {
      // 오른쪽으로 스와이프 - 이전 슬라이드
      moveToSlide(currentSlide - 1);
    }
  }
  
  // 윈도우 리사이즈 이벤트
  window.addEventListener('resize', function() {
    // 화면 크기 변경 시 현재 슬라이드 위치로 이동
    moveToSlide(currentSlide);
  });
  
  // 초기화
  moveToSlide(0);
});