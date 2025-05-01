// header Web Component 정의
class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Shadow DOM 대신 일반 DOM 사용 - 전역 CSS가 적용되도록 함
    
    // HTML 템플릿 생성
    this.innerHTML = `
      <div class="header1" id="headerMain">
        <div class="vanguardlab" id="vanguardlabText">Vanguardlab</div>
        <div class="nav-container">
          <div class="taps">
            <div class="contain">
              <div class="tap" id="companyBtn">
                <div class="company">Company</div>
              </div>
              <div class="tap" id="serviceBtn">
                <div class="company">Service</div>
              </div>
              <div class="tap" id="solutionBtn">
                <div class="company">Solution</div>
              </div>
              <div class="tap" id="referencesBtn">
                <div class="company">References</div>
              </div>
            </div>
            <div class="contain22">
              <div class="divider"></div>
              <div class="contain1">
                <div class="tap" id="blogBtn">
                  <div class="company">Blog</div>
                </div>
                <div class="tap" id="contactBtn">
                  <div class="company">Contact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mega-dropdown" id="megaDropdown">
        <div class="mega-dropdown-container">
          <div class="dropdown-menu-row">
            <!-- Company 드롭다운 메뉴 -->
            <div class="dropdown-menu" id="companyDropdown">
              <div class="category-links">
                <a href="../company-overview/company-overview.html">Overview</a>
                <a href="../company-ceo/company-ceo.html">CEO Message</a>
                <a href="../company-history/company-history.html">History</a>
              </div>
            </div>
            <!-- Service 드롭다운 메뉴 -->
            <div class="dropdown-menu" id="serviceDropdown">
              <div class="category-links">
                <a href="../service-mendix/service-mendix.html">Mendix</a>
                <a href="../service-perfec-twin/service-perfec-twin.html">Perfectwin</a>
                <a href="../service-system-integration/service-system-integration.html">System Integration</a>
              </div>
            </div>
            <!-- Solution 드롭다운 메뉴 -->
            <div class="dropdown-menu" id="solutionDropdown">
              <div class="category-links">
                <a href="../solution-grs/solution-grs.html">Global Report System</a>
                <a href="../solution-smart-report/solution-smart-report.html">Smart System</a>
                <a href="../solution-talon/solution-talon.html">TALON</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- header-bg div 제거 -->
    `;
    
    // 이벤트 리스너 추가
    const vanguardlabText = document.getElementById("vanguardlabText");
    if (vanguardlabText) {
      vanguardlabText.addEventListener("click", () => {
        // 현재 페이지가 main.html이 아닌 경우에만 이동
        if (!window.location.href.includes('main.html')) {
          window.location.href = "../main/main.html";
        }
      });
    }
    
    // 메뉴 클릭 이벤트 추가
    const referencesBtn = document.getElementById("referencesBtn");
    if (referencesBtn) {
      referencesBtn.addEventListener("click", () => {
        window.location.href = "../references/references.html";
      });
    }
    
    const contactBtn = document.getElementById("contactBtn");
    if (contactBtn) {
      contactBtn.addEventListener("click", () => {
        window.location.href = "../contact/contact.html";
      });
    }
    
    // 드롭다운 메뉴 동작 처리
    const megaDropdown = document.getElementById('megaDropdown');
    const headerMain = document.getElementById('headerMain');
    const menuItems = document.querySelectorAll('#companyBtn, #serviceBtn, #solutionBtn');
    
    // 초기에는 드롭다운 숨기기
    megaDropdown.style.display = 'none';
    headerMain.classList.remove('header-active');
    
    // 마우스 오버 이벤트
    menuItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        // 버튼에 active 클래스 추가
        menuItems.forEach(btn => btn.classList.remove('active'));
        item.classList.add('active');
        
        // 헤더 배경 활성화
        headerMain.classList.add('header-active');
        
        // 해당 버튼 ID 확인용
        const btnId = item.id;
        if (['companyBtn', 'serviceBtn', 'solutionBtn'].includes(btnId)) {
          // 메가메뉴 표시
          megaDropdown.style.display = 'block';
          
          // 모든 드롭다운 메뉴 표시
          document.getElementById('companyDropdown').style.display = 'block';
          document.getElementById('serviceDropdown').style.display = 'block';
          document.getElementById('solutionDropdown').style.display = 'block';
        } else {
          // 다른 메뉴는 메가메뉴 숨김
          megaDropdown.style.display = 'none';
        }
      });
    });
    
    // 헤더 메뉴 전체 호버 시 배경 표시
    const navItems = document.querySelectorAll('.tap');
    navItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        // 메뉴 아이템이 Company, Service, Solution인 경우에만 헤더 배경 활성화
        if (['companyBtn', 'serviceBtn', 'solutionBtn'].includes(item.id)) {
          headerMain.classList.add('header-active');
        }
      });
    });
    
    // 드롭다운에 마우스 온
    megaDropdown.addEventListener('mouseenter', () => {
      megaDropdown.style.display = 'block';
      headerMain.classList.add('header-active');
    });
    
    // 드롭다운에서 마우스 아웃
    megaDropdown.addEventListener('mouseleave', (e) => {
      megaDropdown.style.display = 'none';
      headerMain.classList.remove('header-active');
      menuItems.forEach(item => item.classList.remove('active'));
    });
    
    // 헤더에서 마우스 아웃
    const header = document.querySelector('.header1');
    header.addEventListener('mouseleave', (e) => {
      // 마우스가 드롭다운으로 이동하는 경우 제외
      if (!megaDropdown.contains(e.relatedTarget)) {
        megaDropdown.style.display = 'none';
        headerMain.classList.remove('header-active');
        menuItems.forEach(item => item.classList.remove('active'));
      }
    });
  }
}

// 커스텀 요소 등록
customElements.define('header-component', HeaderComponent);
