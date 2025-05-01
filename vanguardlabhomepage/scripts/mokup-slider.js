// 모컵 슬라이더 JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // mokupcontents 슬라이더 기능 구현
  function initMokupSlider(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const mokupTrack = container.querySelector('.mokup-slider-track');
    const slides = container.querySelectorAll('.mokup-slide');
    const prevBtn = container.querySelector('.chevronleft-icon, .chevronleft img, .chevronleft1 img, .chevronleft2 img');
    const nextBtn = container.querySelector('.chevronright-icon, .chevronright-icon1, .chevronright-icon2');
    
    // 페이지 인디케이터(점) 요소 수집
    // 모든 가능한 클래스 이름으로 시도 (.off, .off10, .off14, .on, .on1, .on2)
    const dots = Array.from(container.querySelectorAll('.pageindicator .off, .pageindicator .off10, .pageindicator .off14, .pageindicator .on, .pageindicator .on1, .pageindicator .on2, .pageindicator2 .off10, .pageindicator2 .on1, .pageindicator4 .off14, .pageindicator4 .on2'));
    
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
      mokupTrack.style.transform = `translateX(-${index * 100 / slideCount}%)`;
      
      // 현재 인디케이터 업데이트
      updateDots(index);
      
      // 현재 슬라이드 인덱스 업데이트
      currentSlide = index;
    }
    
    // 인디케이터 점 업데이트 함수
    function updateDots(index) {
      // 인디케이터 점이 slide 수와 일치하는지 확인
      const visibleDots = dots.slice(0, slideCount);
      
      // 모든 점 비활성화
      visibleDots.forEach((dot, i) => {
        // 클래스명 확인
        if (dot.classList.contains('on') || dot.classList.contains('on1') || dot.classList.contains('on2')) {
          // on 클래스를 off로 변경
          dot.classList.remove('on', 'on1', 'on2');
          
          if (dot.parentNode.querySelector('.off')) {
            dot.classList.add('off');
          } else if (dot.parentNode.querySelector('.off10')) {
            dot.classList.add('off10');
          } else if (dot.parentNode.querySelector('.off14')) {
            dot.classList.add('off14');
          }
        }
      });
      
      // 현재 슬라이드의 점 활성화
      const currentDot = visibleDots[index];
      if (currentDot) {
        currentDot.classList.remove('off', 'off10', 'off14');
        
        // 부모 요소 확인하여 적절한 on 클래스 추가
        if (container.querySelector('.on')) {
          currentDot.classList.add('on');
        } else if (container.querySelector('.on1')) {
          currentDot.classList.add('on1');
        } else if (container.querySelector('.on2')) {
          currentDot.classList.add('on2');
        } else {
          // 기본값으로 on 클래스 추가
          currentDot.classList.add('on');
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
    dots.slice(0, slideCount).forEach((dot, index) => {
      dot.addEventListener('click', () => {
        moveToSlide(index);
      });
    });
    
    // 초기화
    moveToSlide(0);
  }
  
  // GRS 페이지 슬라이더 초기화
  initMokupSlider('grs-mokup-slider');
  
  // Smart Report 페이지 슬라이더 초기화
  initMokupSlider('smart-report-mokup-slider');
});