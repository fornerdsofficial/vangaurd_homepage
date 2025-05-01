/**
 * Contact 페이지의 지도 관련 자바스크립트
 * Leaflet 라이브러리를 활용한 지도 초기화 코드
 */

document.addEventListener('DOMContentLoaded', function() {
  // 지도 컨테이너 찾기
  var mapContainer = document.getElementById('map');
  
  // mapContainer가 존재하는지 확인
  if (!mapContainer) {
    console.error('지도를 표시할 div 요소를 찾을 수 없습니다.');
    return;
  }
  
  // 코오롱디지털타워빌란트1차 정확한 좌표
  // 서울시 구로구 디지털로32길 30, 1201호
  var companyLocation = [37.483501, 126.896515];
  
  // 지도 초기화 (location, zoom level)
  var map = L.map('map').setView(companyLocation, 17);
  
  // OpenStreetMap 타일 레이어 추가 - 더 상세한 지도 형식 사용
  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);
  
  // 마커 추가
  var marker = L.marker(companyLocation).addTo(map);
  
  // 팝업 추가
  marker.bindPopup('<div style="padding:5px; width:150px; text-align:center; font-size:14px; font-weight:500;">뱅가드랩<br>서울시 구로구 디지털로32길 30</div>').openPopup();
  
  // 지도 클릭 하면 팝업 닫기
  map.on('click', function() {
    map.closePopup();
  });
  
  // 반응형 지도 처리
  window.addEventListener('resize', function() {
    map.invalidateSize();
  });
});