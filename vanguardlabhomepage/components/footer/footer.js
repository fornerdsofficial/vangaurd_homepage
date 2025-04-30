// footer Web Component 정의
class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Shadow DOM 대신 일반 DOM 사용 - 전역 CSS가 적용되도록 함
    this.innerHTML = `
      <div class="footer">
        <div class="footer-contents">
          <div class="footer-contain">
            <div class="footer-vanguardlab">Vanguardlab</div>
            <div class="footer-telfax-container">
              [08390] 서울시 구로구 디지털로32길 30.
              1201호(코오롱디지털타워빌란트 1차)
            </div>
          </div>
          <div class="footer-telfax-container">
            <p class="global-report">Tel/Fax: +82.2.2103.5567/5566</p>
            <p class="global-report">Email: contact@vanguardlab.net</p>
          </div>
        </div>
        <div class="footer-copyrights">
          <div class="footer-copyright-vanguardlab-all">
            @Copyright Vanguardlab. All Rights Reserved
          </div>
        </div>
      </div>
    `;
  }
}

// 커스텀 요소 등록
customElements.define('footer-component', FooterComponent);
