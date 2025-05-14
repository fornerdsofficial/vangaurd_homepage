// 호버 효과를 위한 자바스크립트
document.addEventListener('DOMContentLoaded', function() {
  // 스크롤 이벤트에 따라 헤더 스타일 변경
  const headerComponent = document.querySelector('header-component');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      headerComponent.classList.add('scrolled');
    } else {
      headerComponent.classList.remove('scrolled');
    }
  });
  
  // 초기 로드 시 스크롤 위치에 따른 헤더 스타일 처리
  if (window.scrollY > 50) {
    headerComponent.classList.add('scrolled');
  }
  
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

  // 메인 슬라이더 구현
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  let currentSlide = 0;
  let prevSlide = slides.length - 1;
  let slideInterval;
  const slideDuration = 5000; // 슬라이드 간 간격(ms)

  // 슬라이드 초기화
  function initSlider() {
    slides[0].classList.add('active');
    startSlideTimer();
    
    // 인디케이터 클릭 이벤트
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        if (index !== currentSlide) {
          // 슬라이드 인덱스가 다를 때만 슬라이드 변경
          goToSlide(index);
          resetSlideTimer();
        }
      });
    });
  }

  // 특정 슬라이드로 이동
  function goToSlide(index) {
    // 현재 활성화된 슬라이드의 클래스 변경
    slides[prevSlide].classList.remove('prev');
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    // 이전 슬라이드를 저장
    prevSlide = currentSlide;
    
    // 새 슬라이드 활성화
    currentSlide = index;
    
    // 이전 슬라이드는 왼쪽으로 이동
    slides[prevSlide].classList.add('prev');
    
    // 새 슬라이드는 오른쪽에서 중앙으로 이동
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  }

  // 다음 슬라이드로 이동
  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
  }

  // 슬라이드 타이머 시작
  function startSlideTimer() {
    // 일정 간격으로 다음 슬라이드로 이동
    slideInterval = setInterval(() => {
      nextSlide();
    }, slideDuration);
  }

  // 슬라이드 타이머 리셋
  function resetSlideTimer() {
    clearInterval(slideInterval);
    startSlideTimer();
  }

  // 슬라이더 초기화
  initSlider();
  
  
  // 파트너사 로고 슬라이더 구현
  const partnersWrapper = document.querySelector('.partners-logos-wrapper');
  const partnerLogos = document.querySelectorAll('.partner-logo-container');
  const originalPartnerLogos = partnerLogos; // 원본 로고 배열(클론 요소 추가 전)
  const partnerIndicators = document.querySelectorAll('.partners-indicator');
  const prevBtn = document.querySelector('.partners-nav-btn.prev');
  const nextBtn = document.querySelector('.partners-nav-btn.next');
  const sliderContainer = document.querySelector('.partners-slider');
  
  let currentPartnerIndex = 0;
  let prevPartnerIndex = 0; // 이전 파트너 인덱스 추가
  const logosPerView = 5; // 한 화면에 보이는 로고 수 (고정)
  const totalPartnerLogos = originalPartnerLogos.length; // 총 로고 수 (원본만)
  let partnerSlideInterval;
  const partnerSlideDuration = 3000; // 파트너 슬라이드 간 간격(ms)
  const logoWidth = 25; // 각 로고 너비(%)
  
  // 드래그 관련 변수
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = 0;
  
  // 파트너 슬라이더 초기화
  function initPartnerSlider() {
    if (partnerLogos.length === 0) return; // 로고가 없으면 함수 종료
    
    // 클론 요소가 이미 있는지 확인
    const existingClones = document.querySelectorAll('.partner-logo-container.clone');
    
    // 클론 요소가 없는 경우에만 추가
    if (existingClones.length === 0) {
      // 무한 순환을 위한 클론 요소 추가
      createCloneElements();
    }
    
    // 트랜지션 설정
    partnersWrapper.style.transition = 'transform 0.5s ease';
    
    // 첫 번째 인디케이터 활성화 (처음 4개 로고가 보이도록)
    partnerIndicators[0].classList.add('active');
    
    // 초기 위치 설정
    resetPosition();
    
    // 인디케이터 클릭 이벤트 설정
    setupIndicatorEvents();
    
    // 드래그 이벤트 설정
    setupDragEvents();
    
    // 자동 슬라이드 시작
    setTimeout(() => {
      startPartnerSlideTimer();
    }, 500);
  }
  
  // 클론 요소 생성
  function createCloneElements() {
    // 처음에 마지막 4개 로고를 추가 (앞에)
    for (let i = totalPartnerLogos - logosPerView; i < totalPartnerLogos; i++) {
      const clone = originalPartnerLogos[i].cloneNode(true);
      clone.classList.add('clone');
      partnersWrapper.insertBefore(clone, partnersWrapper.firstChild);
    }
    
    // 끝에 처음 4개 로고를 추가 (뒤에)
    for (let i = 0; i < logosPerView; i++) {
      const clone = originalPartnerLogos[i].cloneNode(true);
      clone.classList.add('clone');
      partnersWrapper.appendChild(clone);
    }
  }
  
  // 인디케이터 이벤트 설정
  function setupIndicatorEvents() {
    partnerIndicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        goToPartnerSlide(index);
      });
    });
  }
  
  // 파트너 슬라이드 타이머 시작
  function startPartnerSlideTimer() {
    // 기존 타이머 제거
    clearInterval(partnerSlideInterval);
    
    partnerSlideInterval = setInterval(() => {
      nextPartnerSlide();
    }, partnerSlideDuration);
  }
  
  // 파트너 슬라이드 타이머 리셋
  function resetPartnerSlideTimer() {
    clearInterval(partnerSlideInterval);
    startPartnerSlideTimer();
  }
  
  // 자동 다음 슬라이드
  function nextPartnerSlide() {
    // 다음 인덱스 계산 (마지막이면 0으로)
    const nextIndex = (currentPartnerIndex + 1) % totalPartnerLogos;
    
    // 슬라이드 이동
    goToPartnerSlide(nextIndex);
  }
  
  // 특정 파트너 슬라이드로 이동
  function goToPartnerSlide(index) {
    // 이미 활성화된 인디케이터면 무시
    if (index === currentPartnerIndex) return;
    
    // 인디케이터 상태 업데이트
    partnerIndicators[currentPartnerIndex].classList.remove('active');
    partnerIndicators[index].classList.add('active');
    
    // 이전 인덱스 저장 및 현재 인덱스 업데이트
    prevPartnerIndex = currentPartnerIndex;
    currentPartnerIndex = index;
    
    // 마지막에서 첫 번째로 이동 시 특별 처리
    if (prevPartnerIndex === totalPartnerLogos - 1 && currentPartnerIndex === 0) {
      // 먼저 마지막 슬라이드에서 클론으로 이동
      const lastToFirstValue = -(totalPartnerLogos * logoWidth);
      partnersWrapper.style.transform = `translateX(${lastToFirstValue}%)`;
      
      // 트랜지션이 끝나면 위치 리셋
      partnersWrapper.addEventListener('transitionend', function onTransitionEnd() {
        partnersWrapper.removeEventListener('transitionend', onTransitionEnd);
        resetPosition();
      }, { once: true });
    }
    // 첫 번째에서 마지막으로 이동 시
    else if (prevPartnerIndex === 0 && currentPartnerIndex === totalPartnerLogos - 1) {
      // 먼저 첫 번째 슬라이드에서 이전 클론으로 이동
      partnersWrapper.style.transform = `translateX(0%)`;
      
      // 트랜지션이 끝나면 위치 리셋
      partnersWrapper.addEventListener('transitionend', function onTransitionEnd() {
        partnersWrapper.removeEventListener('transitionend', onTransitionEnd);
        
        // 트랜지션 없이 마지막 슬라이드 클론으로 이동
        partnersWrapper.style.transition = 'none';
        partnersWrapper.style.transform = `translateX(-${totalPartnerLogos * logoWidth}%)`;
        // 강제 리플로우
        partnersWrapper.offsetHeight;
        // 트랜지션 복원
        partnersWrapper.style.transition = 'transform 0.5s ease';
      }, { once: true });
    }
    // 일반적인 이동
    else {
      const translateValue = -((index + logosPerView) * logoWidth);
      partnersWrapper.style.transform = `translateX(${translateValue}%)`;
    }
    
    // 타이머 리셋
    resetPartnerSlideTimer();
  }
  
  // 슬라이더 위치 초기화 (처음에 실제 첫 번째 슬라이드가 보이도록)
  function resetPosition() {
    partnersWrapper.style.transition = 'none';
    partnersWrapper.style.transform = `translateX(-${logosPerView * logoWidth}%)`;
    // 강제 리플로우를 통해 트랜지션 없이 즉시 적용
    partnersWrapper.offsetHeight;
    // 트랜지션 복원
    partnersWrapper.style.transition = 'transform 0.5s ease';
  }
  
  // 드래그 이벤트 설정
  function setupDragEvents() {
    // 마우스 이벤트 제거
    // sliderContainer.addEventListener('mousedown', dragStart);
    // sliderContainer.addEventListener('mouseup', dragEnd);
    // sliderContainer.addEventListener('mouseleave', dragEnd);
    // sliderContainer.addEventListener('mousemove', drag);
    
    // 터치 이벤트 (모바일 지원)
    sliderContainer.addEventListener('touchstart', dragStart);
    sliderContainer.addEventListener('touchend', dragEnd);
    sliderContainer.addEventListener('touchmove', drag);
    
    // 마우스 휠 이벤트 방지
    sliderContainer.addEventListener('wheel', preventScroll, { passive: false });
  }
  
  // 마우스 휠 스크롤 방지
  function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  
  // 드래그 시작
  function dragStart(e) {
    // 마우스 이벤트 체크 제거
    // if (e.type === 'mousedown') {
    //   e.preventDefault();
    // }
    
    // 터치 이벤트만 처리
    if (!e.touches) return;
    
    // 터치 이벤트 또는 마우스 이벤트 구분
    startPos = getPositionX(e);
    isDragging = true;
    
    // 자동 슬라이드 중지
    clearInterval(partnerSlideInterval);
    
    // 슬라이더의 현재 transform 값 저장
    const transformMatrix = window.getComputedStyle(partnersWrapper).getPropertyValue('transform');
    if (transformMatrix !== 'none') {
      const values = transformMatrix.split('(')[1].split(')')[0].split(',');
      const translateXValue = parseFloat(values[4]);
      const containerWidth = sliderContainer.offsetWidth;
      
      // 픽셀 값을 퍼센트로 변환
      prevTranslate = (translateXValue / containerWidth) * 100;
    } else {
      prevTranslate = 0;
    }
    
    // 슬라이더 클래스 추가
    sliderContainer.classList.add('dragging');
    
    // 자연스러운 드래그를 위해 트랜지션 효과 제거
    partnersWrapper.style.transition = 'none';
    
    // 애니메이션 시작
    animationID = requestAnimationFrame(animation);
  }
  
  // 드래그 진행
  function drag(e) {
    if (!isDragging) return;
    
    const currentPosition = getPositionX(e);
    const sliderWidth = sliderContainer.offsetWidth;
    const moveRatio = (currentPosition - startPos) / sliderWidth;
    const movePercent = moveRatio * 100;
    
    // 현재 슬라이드 위치(%) + 이동 거리(%)
    currentTranslate = prevTranslate + movePercent;
    
    // 슬라이더 이동
    partnersWrapper.style.transform = `translateX(${currentTranslate}%)`;
    
    // 이벤트 전파 방지
    e.preventDefault();
  }
  
  // 드래그 종료
  function dragEnd(e) {
    if (!isDragging) return;
    
    cancelAnimationFrame(animationID);
    isDragging = false;
    
    // 슬라이더 클래스 제거
    sliderContainer.classList.remove('dragging');
    
    // 트랜지션 효과 복원
    partnersWrapper.style.transition = 'transform 0.5s ease';
    
    // 드래그 방향 및 거리에 따라 다음/이전 슬라이드로 이동
    const dragDistance = currentTranslate - prevTranslate;
    
    if (dragDistance > 10) { // 왼쪽으로 드래그 (이전 슬라이드)
      if (currentPartnerIndex === 0) {
        goToPartnerSlide(totalPartnerLogos - 1);
      } else {
        goToPartnerSlide(currentPartnerIndex - 1);
      }
    } else if (dragDistance < -10) { // 오른쪽으로 드래그 (다음 슬라이드)
      if (currentPartnerIndex >= totalPartnerLogos - 1) {
        goToPartnerSlide(0);
      } else {
        goToPartnerSlide(currentPartnerIndex + 1);
      }
    } else {
      // 원래 위치로 복귀
      const translateValue = -((currentPartnerIndex + logosPerView) * logoWidth);
      partnersWrapper.style.transform = `translateX(${translateValue}%)`;
    }
    
    // 자동 슬라이드 재시작
    resetPartnerSlideTimer();
  }
  
  // 애니메이션 함수
  function animation() {
    if (isDragging) {
      setSliderPosition();
      animationID = requestAnimationFrame(animation);
    }
  }
  
  // 슬라이더 위치 설정
  function setSliderPosition() {
    partnersWrapper.style.transform = `translateX(${currentTranslate}%)`;
  }
  
  // 이벤트에서 X 좌표 가져오기 (터치 이벤트만 지원)
  function getPositionX(e) {
    return e.touches[0].pageX;
  }
  
  // 파트너 슬라이더 초기화 실행
  initPartnerSlider();
});