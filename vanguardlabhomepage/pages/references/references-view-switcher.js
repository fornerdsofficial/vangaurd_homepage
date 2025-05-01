// 레퍼런스 페이지에서 그리드/리스트 뷰 전환 기능
document.addEventListener('DOMContentLoaded', function() {
    // 필요한 요소 찾기
    const gridViewIcon = document.getElementById('gridViewBtn');
    const listViewIcon = document.getElementById('listViewBtn');
    
    // 초기 상태 설정 - 그리드뷰가 기본 (references.html 스타일)
    let currentView = 'grid';
    
    // 컨텐츠 컨테이너와 테이블 헤더 식별
    const contentContainer = document.querySelector('.referencesbox2-parent');
    const tableHeader = document.querySelector('.table-header');
    
    // 카드 뷰(그리드) 형식의 HTML
    function getGridViewHTML() {
        // 기존 references.html의 카드 형식 컨텐츠
        return `
        <div class="referencesbox2">
            <div class="contain66">
                <div class="title57">
                    <div class="client">
                        <img class="x-icon" alt="" src="../../public/2x@2x.png" />
                    </div>
                    <div class="tag">
                        <div class="mendix34">Mendix</div>
                    </div>
                </div>
                <div class="contents31">
                    <div class="div170">
                        <span class="txt4">
                            <p class="telfax-82221035567556610">전북은행 책무구조도 이행점검</p>
                            <p class="telfax-82221035567556610">시스템 구축</p>
                        </span>
                    </div>
                </div>
                <div class="date7">
                    <div class="div171">2025.01 - 2025.04</div>
                </div>
            </div>
        </div>
        <!-- 추가 카드들... -->
        `;
    }
    
    // 테이블 뷰(리스트) 형식의 HTML
    function getListViewHTML() {
        // 수정된 테이블 형식(태그 제거, 가운데 정렬, 모든 데이터 포함)
        return `
        <div class="tabletitle-group">
            <div class="tabletitle1">
                <div class="textbox">
                    <b class="b">발주기관</b>
                </div>
                <div class="textbox">
                    <b class="b1">사업명</b>
                </div>
                <div class="textbox">
                    <b class="b2">기간</b>
                </div>
            </div>
            <div class="table-parent">
                <div class="table8">
                    <div class="textbox">
                        <div class="b">전북은행</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">전북은행 책무구조도 이행점검시스템 구축</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2025.01 ~ 2025.04</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">JB금융지주</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">JB금융지주 책무구조도 이행점검시스템 구축</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.11 ~ 2025.02</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">IBK기업은행</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">기업은행 데이터센터이관사업관련 컨설팅</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.09 ~ 2025.02</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">광주은행</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">광주은행 준법·내부통제시스템 구축</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.08 ~ 2025.02</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">SGI서울보증</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">SGI서울보증보험 차세대시스템 이지스 구축</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.07 ~ 2025.01</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">대한항공</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">대한항공 ERP 운영 기술 지원</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.04 ~ 2024.07</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">국민연금관리공단</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">국민연금공단 주거래은행 시스템 개선 PMO</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.03 ~ 2024.08</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">LG CNS</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">DevOn Enterprise Framework 개발</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.02 ~ 2025.02</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">LG U+</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">LG U+ 상담시스템 유지보수</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.01 ~ 2024.05</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">NH농협</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">NH농협 디지털금융 플렛폼 전환 프로젝트</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2023.10 ~ 2025.02</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">하나금융그룹</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">하나금융그룹 데이터 분석 시스템 최적화</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.12 ~ 2025.05</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">신한은행</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">신한은행 모바일 뱅킹 시스템 리뉴얼</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.11 ~ 2025.03</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">우리은행</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">우리은행 고객 관리 시스템 개선 프로젝트</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.10 ~ 2025.04</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">부산은행</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">부산은행 자산 관리 시스템 구축</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.09 ~ 2025.01</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">하나카드</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">하나카드 결제 시스템 개발</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.08 ~ 2025.02</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">농협중앙회</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">농협중앙회 디지털 서비스 플랫폼 개발</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.07 ~ 2025.01</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">KB국민은행</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">KB국민은행 리스크 관리 시스템 개선</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.06 ~ 2025.03</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">신한금융투자</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">신한금융투자 글로벌 투자 플랫폼 구축</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.05 ~ 2025.06</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">신협중앙회</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">신협중앙회 내부 관리 시스템 혁신</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.04 ~ 2025.01</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">하나증권</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">하나증권 데이터 분석 및 리포트 시스템 개선</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.03 ~ 2025.02</div>
                    </div>
                </div>
                <div class="table9">
                    <div class="textbox">
                        <div class="b">NH투자증권</div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox4">
                        <div class="text105">
                            <div class="pmo1">NH투자증권 고객 경험 향상 프로젝트</div>
                        </div>
                    </div>
                    <div class="line18"></div>
                    <div class="textbox">
                        <div class="b2">2024.02 ~ 2025.05</div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    
    // 그리드 아이콘 클릭 이벤트
    gridViewIcon.addEventListener('click', function() {
        if (currentView !== 'grid') {
            // 그리드 뷰로 전환
            switchToGridView();
        }
    });
    
    // 리스트 아이콘 클릭 이벤트
    listViewIcon.addEventListener('click', function() {
        if (currentView !== 'list') {
            // 리스트 뷰로 전환
            switchToListView();
        }
    });
    
    // 그리드 뷰로 전환하는 함수
    function switchToGridView() {
        // 뷰 상태 업데이트
        currentView = 'grid';
        
        // 아이콘 활성화 상태 변경
        updateIconStates();
        
        // 스타일시트 제거
        const listViewStyles = document.getElementById('list-view-styles');
        if (listViewStyles) {
            listViewStyles.remove();
        }
        
        // 페이지 새로고침 (원래 그리드 뷰로 돌아가기)
        location.reload();
    }
    
    // 리스트 뷰로 전환하는 함수
    function switchToListView() {
        // 뷰 상태 업데이트
        currentView = 'list';
        
        // 아이콘 활성화 상태 변경
        updateIconStates();
        
        // 컨테이너 클래스 변경
        contentContainer.classList.remove('grid-view');
        contentContainer.classList.add('table-view');
        
        // CSS 적용
        applyListViewStyles();
        
        // references1.html의 테이블 데이터로 내용 변경
        contentContainer.innerHTML = getListViewHTML();
        
        // 테이블 뷰에 필요한 스타일 추가 (references1.css의 스타일)
        addListViewStyles();
    }
    
    // 아이콘 활성화 상태 업데이트
    function updateIconStates() {
        // 그리드 아이콘 이미지
        const gridIcon = document.querySelector('.grid-icon');
        // 리스트 아이콘 이미지
        const listIcon = document.querySelector('.list-icon');
        
        if (currentView === 'grid') {
            // 그리드 아이콘 활성화
            gridViewIcon.classList.add('active');
            listViewIcon.classList.remove('active');
            
            // 아이콘 이미지 경로 변경
            if (gridIcon && gridIcon.dataset.activeSrc) {
                gridIcon.src = gridIcon.dataset.activeSrc; // 진한 색상 아이콘
            }
            
            if (listIcon && listIcon.dataset.inactiveSrc) {
                listIcon.src = listIcon.dataset.inactiveSrc; // 연한 색상 아이콘
            }
        } else {
            // 리스트 아이콘 활성화
            gridViewIcon.classList.remove('active');
            listViewIcon.classList.add('active');
            
            // 아이콘 이미지 경로 변경
            if (gridIcon && gridIcon.dataset.inactiveSrc) {
                gridIcon.src = gridIcon.dataset.inactiveSrc; // 연한 색상 아이콘
            }
            
            if (listIcon && listIcon.dataset.activeSrc) {
                listIcon.src = listIcon.dataset.activeSrc; // 진한 색상 아이콘
            }
        }
    }
    
    // 그리드 뷰 스타일 적용
    function applyGridViewStyles() {
        // 스타일시트 동적 변경 또는 클래스 토글을 통한 스타일 변경
        document.body.classList.remove('list-view');
        document.body.classList.add('grid-view');
        
        // 테이블 헤더 숨김
        if (tableHeader) {
            tableHeader.style.display = 'none';
            // 테이블 헤더 셀 요소 스타일 초기화
            const headerCells = tableHeader.querySelectorAll('.client-cell, .project-cell, .date-cell, .line-separator');
            headerCells.forEach(cell => {
                cell.style.display = 'none';
            });
        }
        
        // 선택적: 추가 요소 스타일 조정
        const allCards = document.querySelectorAll('.referencesbox2');
        allCards.forEach(card => {
            // 그리드 뷰용 요소 표시
            const gridContainer = card.querySelector('.contain66');
            if (gridContainer) gridContainer.style.display = 'flex';
            
            // 리스트 뷰용 요소 숨김
            const clientCell = card.querySelector('.client-cell');
            const projectCell = card.querySelector('.project-cell');
            const dateCell = card.querySelector('.date-cell');
            const lineSeps = card.querySelectorAll('.line-separator');
            
            if (clientCell) clientCell.style.display = 'none';
            if (projectCell) projectCell.style.display = 'none';
            if (dateCell) dateCell.style.display = 'none';
            lineSeps.forEach(sep => { if (sep) sep.style.display = 'none'; });
        });
    }
    
    // 리스트 뷰 스타일 적용
    function applyListViewStyles() {
        // 스타일시트 동적 변경 또는 클래스 토글을 통한 스타일 변경
        document.body.classList.remove('grid-view');
        document.body.classList.add('list-view');
        
        // 테이블 헤더 숨기기 (테이블 데이터가 자체 헤더를 포함하므로)
        if (tableHeader) {
            tableHeader.style.display = 'none';
        }
        
        // .icon71 요소를 모두 숨기기 (태그 요소를 포함하는 컨테이너)
        const iconElements = document.querySelectorAll('.icon71');
        if (iconElements) {
            iconElements.forEach(el => {
                el.style.display = 'none';
            });
        }
        
        // 태그 요소 숨기기
        const tagElements = document.querySelectorAll('.tag17, .tag18, .tag27');
        if (tagElements) {
            tagElements.forEach(el => {
                el.style.display = 'none';
            });
        }
    }
    
    // 리스트 뷰에 필요한 추가 스타일 적용
    function addListViewStyles() {
        // 수정된 스타일 (태그 제거 및 정렬 조정)
        const listViewStyles = document.createElement('style');
        listViewStyles.id = 'list-view-styles';
        listViewStyles.textContent = `
            /* 테이블 헤더 스타일 */
            .tabletitle1 {
                width: 1160px;
                border-radius: 8px 8px 0 0;
                background-color: var(--Color-Black);
                height: 54px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 10px 20px;
                box-sizing: border-box;
                color: white;
            }
            
            /* 테이블 행 스타일 */
            .table8, .table9 {
                align-self: stretch;
                background-color: var(--color-white);
                border: 1px solid var(--ColorLine2);
                box-sizing: border-box;
                height: 70px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 10px 20px;
                gap: 0;
            }
            
            .table9 {
                margin-top: -1px;
                position: relative;
            }
            
            /* 테이블 셀 스타일 */
            .textbox {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                text-align: center;
            }
            
            .textbox4 {
                width: 565px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start; /* 사업명은 왼쪽 정렬로 변경 */
                text-align: left;
            }
            
            /* 텍스트 스타일 */
            .b, .b1, .b2 {
                position: relative;
                line-height: 130%;
                display: inline-block;
                flex-shrink: 0;
                font-size: 16px; /* 포트 크기 일관성 유지 */
            }
            
            .b {
                width: 200px;
                text-align: center;
            }
            
            .b1 {
                width: 558px;
                text-align: center;
            }
            
            .b2 {
                width: 240px;
                text-align: center;
            }
            
            /* 선 스타일 */
            .line18 {
                width: 1px;
                position: relative;
                border-right: 1px solid var(--ColorLine2);
                box-sizing: border-box;
                height: 71px;
            }
            
            /* 태그 숨김 - display none으로 설정 */
            .tag17, .tag18, .tag27, .icon71 {
                display: none !important;
            }
            
            /* 프로젝트 이름 스타일 */
            .pmo1 {
                width: 462px;
                position: relative;
                line-height: 130%;
                display: inline-block;
                flex-shrink: 0;
                text-align: left; /* 사업명 왼쪽 정렬 */
                font-size: 16px; /* 포트 크기 일관성 유지 */
                padding-left: 20px; /* 왼쪽 여백 추가 */
            }
            
            .text105 {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start; /* 왼쪽 정렬 */
                font-size: 16px;
                color: var(--Color-Black);
                font-family: var(--font-pretendard-variable);
                text-align: left;
                width: 100%;
            }
            
            /* 테이블 부모 컨테이너 */
            .table-parent {
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                font-size: 16px;
                color: var(--Color-Black);
            }
            
            .tabletitle-group {
                width: 1160px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
            }
            
            /* 테이블 헤더 텍스트 스타일 */
            .tabletitle1 b {
                font-size: 16px; /* 헤더 텍스트 크기 조정 */
                font-weight: bold;
                text-align: center;
            }
            
            /* 헤더의 사업명 열만 가운데 정렬 */
            .tabletitle1 .b1 {
                text-align: center;
            }
        `;
        
        // 이미 추가된 스타일이 있으면 제거
        const existingStyles = document.getElementById('list-view-styles');
        if (existingStyles) {
            existingStyles.remove();
        }
        
        document.head.appendChild(listViewStyles);
    }
    
    // 초기 뷰 설정
    updateIconStates();
    applyGridViewStyles(); // 초기화시 그리드 뷰 스타일 적용

    // 리스트 뷰 요소들 초기에 모두 숨기기
    const allCards = document.querySelectorAll('.referencesbox2');
    allCards.forEach(card => {
        const clientCell = card.querySelector('.client-cell');
        const projectCell = card.querySelector('.project-cell');
        const dateCell = card.querySelector('.date-cell');
        const lineSeps = card.querySelectorAll('.line-separator');
        
        if (clientCell) clientCell.style.display = 'none';
        if (projectCell) projectCell.style.display = 'none';
        if (dateCell) dateCell.style.display = 'none';
        lineSeps.forEach(sep => { if (sep) sep.style.display = 'none'; });
    });

    // 테이블 헤더도 숨기기
    if (tableHeader) {
        tableHeader.style.display = 'none';
        const headerCells = tableHeader.querySelectorAll('.client-cell, .project-cell, .date-cell, .line-separator');
        headerCells.forEach(cell => {
            cell.style.display = 'none';
        });
    }
});
