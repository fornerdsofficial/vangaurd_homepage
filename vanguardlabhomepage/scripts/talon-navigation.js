document.addEventListener('DOMContentLoaded', function() {
  // 페이지 이동 기능
  var vanguardlabText = document.getElementById("vanguardlabText");
  if (vanguardlabText) {
    vanguardlabText.addEventListener("click", function (e) {
      window.location.href = "../../index.html";
    });
  }
  
  var tapContainer3 = document.getElementById("tapContainer3");
  if (tapContainer3) {
    tapContainer3.addEventListener("click", function (e) {
      window.location.href = "../references/references.html";
    });
  }
  
  var tapContainer1 = document.getElementById("tapContainer1");
  if (tapContainer1) {
    tapContainer1.addEventListener("click", function (e) {
      window.location.href = "../contact/contact.html";
    });
  }

  // 브로셔 다운로드 버튼 클릭 이벤트 설정
  const brochureBtn = document.querySelector('.texticon-wrapper');
  if (brochureBtn) {
    brochureBtn.addEventListener('click', function() {
      // 현재는 GRS 파일로 대체
      window.open('../../public/files/grs.pdf', '_blank');
    });
    // 커서 스타일 추가
    brochureBtn.style.cursor = 'pointer';
  }
}); 