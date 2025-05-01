// Smart Report 페이지 전용 슬라이더 JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Smart Report 슬라이더 초기화
  const container = document.getElementById('smart-report-mokup-slider');
  if (!container) {
    console.error('스마트 리포트 슬라이더 컨테이너를 찾을 수 없습니다.');
    return;
  }
  
  // 슬라이더 요소 선택
  const mokupTrack = container.querySelector('.mokup-slider-track');
  const slides = container.querySelectorAll('.mokup-slide');
  
  // 좌우 버튼 요소 선택
  const prevBtn = container.querySelector('.chevronleft2 img');
  const nextBtn = document.getElementById('smart-report-next-btn');
  
  // 페이지 인디케이터 선택
  const dots = container.querySelectorAll('.pageindicator5 div');
  
  // 현재 슬라이드 인덱스 초기화
  let currentSlide = 0;
  const slideCount = slides.length;
  
  // 슬라이드 이동 함수
  function moveToSlide(index) {
    // 인덱스 범위 체크
    if (index < 0) {
      index = slideCount - 1;
    } else if (index >= slideCount) {
      index = 0;
    }
    
    // 슬라이드 이동
    mokupTrack.style.transform = `translateX(-${index * (100/slideCount)}%)`;
    
    // 현재 인디케이터 업데이트
    for (let i = 0; i < dots.length; i++) {
      if (i === index) {
        dots[i].className = 'on2';
      } else {
        dots[i].className = 'off14';
      }
    }
    
    // 현재 슬라이드 인덱스 업데이트
    currentSlide = index;
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
  
  // 초기화
  moveToSlide(0);
});