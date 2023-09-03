const RetailerDetail = () => {
    return (
        <>
            <div>
                <div class=' max-vh-100'>
                    <div class='mx-lg-n4 mt-1'>
                        <div class='row g-3 flex-between-end mb-4 mx-3'>
                            <div class='col-auto'>
                                <h2 class='mb-2'>고객사 상세 조회</h2>
                                <h5 class='text-700 fw-semi-bold'>Search Supplier Detail</h5>
                            </div>
                            <div class='col-auto'>
                                <button class='btn btn-secondary  me-2 mb-1' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasWithBothOptions' aria-controls='offcanvasWithBothOptions'>
                                    수정
                                </button>
                                <button class='btn btn-danger  me-2 mb-1' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasWithBothOptions' aria-controls='offcanvasWithBothOptions'>
                                    삭제
                                </button>
                                <button class='btn btn-primary  me-1 mb-1' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasWithBothOptions' aria-controls='offcanvasWithBothOptions'>
                                    비교
                                </button>
                            </div>
                        </div>

                        <div class='row g-3 ms-3 mx-3'>
                            {/* 왼쪽카드 */}
                            <div class='min-vh-75' style={{ width: "21%" }}>
                                <div class='form-icon-container mb-3 mt-1 d-flex'>
                                    <div className='flex-grow-1 me-1'>
                                        <input class='form-control form-icon-input' type='text' placeholder='고객사명' />
                                        <span class='fa-regular fa-building text-700 fs--1 form-icon'></span>
                                    </div>
                                    <button className='btn btn-primary btn-sm'>검색</button>
                                </div>
                                <ul class='nav nav-phoenix-pills mb-2 d-sm-none d-xl-flex' id='contactListTab' data-chat-thread-tab='data-chat-thread-tab' role='tablist'>
                                    <li class='nav-item' role='presentation'>
                                        <a class='nav-link cursor-pointer active' data-bs-toggle='tab' data-chat-thread-list='all' role='tab' aria-selected='true'>
                                            전체
                                        </a>
                                    </li>
                                    <li class='nav-item' role='presentation'>
                                        <a class='nav-link cursor-pointer' data-bs-toggle='tab' role='tab' data-chat-thread-list='read' aria-selected='false'>
                                            계약
                                        </a>
                                    </li>
                                    <li class='nav-item' role='presentation'>
                                        <a class='nav-link cursor-pointer' data-bs-toggle='tab' role='tab' data-chat-thread-list='unread' aria-selected='false'>
                                            미계약
                                        </a>
                                    </li>
                                </ul>
                                <div className='card min-vh-75 max-vh-75 overflow-auto' style={{ overflow: "scroll", "-webkit-overflow-scrolling": "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}>
                                    <div>
                                        <div class='item-center m-3'>
                                            <button class='btn btn-phoenix-info p-2 w-100 border-100'>
                                                <div className='d-flex justify-content-between ms-3'>
                                                    <div class='col-12 col-sm-auto'>
                                                        <input class='d-none' id='avatarFile' type='file' />
                                                        <label class='cursor-pointer avatar avatar-3xl' for='avatarFile'>
                                                            <img class='rounded-circle border border-3' src='resources/assets/img/brand2/dell.png' alt='' />
                                                        </label>
                                                    </div>
                                                    <div className='flex-grow-1 align-self-center'>
                                                        <p class='fs-sm--1 mb-1 text-secondary'>SUP0001</p>
                                                        <h5 class='mb-1 mt-2 text-primary'>고객사명</h5>
                                                        <span class='fs-sm--2 text-secondary'>업태</span>
                                                        <span class='fs-sm--2 text-secondary ms-2'>종목</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div class='item-center m-3'>
                                            <button class='btn btn-phoenix-info p-2 w-100 border-100'>
                                                <div className='d-flex justify-content-between ms-3'>
                                                    <div class='col-12 col-sm-auto'>
                                                        <input class='d-none' id='avatarFile' type='file' />
                                                        <label class='cursor-pointer avatar avatar-3xl' for='avatarFile'>
                                                            <img class='rounded-circle border border-3' src='resources/assets/img/brand2/ibm.png' alt='' />
                                                        </label>
                                                    </div>
                                                    <div className='flex-grow-1 align-self-center'>
                                                        <p class='fs-sm--1 mb-1 text-secondary'>SUP0001</p>
                                                        <h5 class='mb-1 mt-2 text-primary'>고객사명</h5>
                                                        <span class='fs-sm--2 text-secondary'>업태</span>
                                                        <span class='fs-sm--2 text-secondary ms-2'>종목</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div class='item-center m-3'>
                                            <button class='btn btn-phoenix-info p-2 w-100 border-100'>
                                                <div className='d-flex justify-content-between ms-3'>
                                                    <div class='col-12 col-sm-auto'>
                                                        <input class='d-none' id='avatarFile' type='file' />
                                                        <label class='cursor-pointer avatar avatar-3xl' for='avatarFile'>
                                                            <img class='rounded-circle border border-3' src='resources/assets/img/brand2/hp.png' alt='' />
                                                        </label>
                                                    </div>
                                                    <div className='flex-grow-1 align-self-center'>
                                                        <p class='fs-sm--1 mb-1 text-secondary'>SUP0001</p>
                                                        <h5 class='mb-1 mt-2 text-primary'>고객사명</h5>
                                                        <span class='fs-sm--2 text-secondary'>업태</span>
                                                        <span class='fs-sm--2 text-secondary ms-2'>종목</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div class='item-center m-3'>
                                            <button class='btn btn-phoenix-info p-2 w-100 border-100'>
                                                <div className='d-flex justify-content-between ms-3'>
                                                    <div class='col-12 col-sm-auto'>
                                                        <input class='d-none' id='avatarFile' type='file' />
                                                        <label class='cursor-pointer avatar avatar-3xl' for='avatarFile'>
                                                            <img class='rounded-circle border border-3' src='resources/assets/img/brand2/oppo.png' alt='' />
                                                        </label>
                                                    </div>
                                                    <div className='flex-grow-1 align-self-center'>
                                                        <p class='fs-sm--1 mb-1 text-secondary'>SUP0001</p>
                                                        <h5 class='mb-1 mt-2 text-primary'>고객사명</h5>
                                                        <span class='fs-sm--2 text-secondary'>업태</span>
                                                        <span class='fs-sm--2 text-secondary ms-2'>종목</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div class='item-center m-3'>
                                            <button class='btn btn-phoenix-info p-2 w-100 border-100'>
                                                <div className='d-flex justify-content-between ms-3'>
                                                    <div class='col-12 col-sm-auto'>
                                                        <input class='d-none' id='avatarFile' type='file' />
                                                        <label class='cursor-pointer avatar avatar-3xl' for='avatarFile'>
                                                            <img class='rounded-circle border border-3' src='resources/assets/img/brand2/discord.png' alt='' />
                                                        </label>
                                                    </div>
                                                    <div className='flex-grow-1 align-self-center'>
                                                        <p class='fs-sm--1 mb-1 text-secondary'>SUP0001</p>
                                                        <h5 class='mb-1 mt-2 text-primary'>고객사명</h5>
                                                        <span class='fs-sm--2 text-secondary'>업태</span>
                                                        <span class='fs-sm--2 text-secondary ms-2'>종목</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 가운데 카드 */}
                            <div class='min-vh-75' style={{ width: "29%" }}>
                                <div className='card mb-3'>
                                    <div class='card-body'>
                                        <div class='row align-items-center g-3 text-center text-xxl-start'>
                                            <div class='col-auto col-xxl-auto'>
                                                <div class='avatar avatar-4xl'>
                                                    <img class='rounded-circle' src='resources/assets/img/brand2/dell.png' alt='' />
                                                </div>
                                            </div>
                                            <div class='col-12 col-sm-auto flex-1'>
                                                <h3 class='fw-bolder mb-2'>Samsung</h3>
                                                <p class='mb-0'>Mobile SPU Chips</p>
                                                <a class='fw-bold' href='#!'>
                                                    test
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class='card mb-3'>
                                    <div class='card-body'>
                                        <div className='border-bottom d-flex justify-content-between align-items-center '>
                                            <div>
                                                <h3 class='card-title mb-1 mt-2'>고객사 상세정보</h3>
                                                <p className='text-700 fs--1 ms-1'>Supplier Detail</p>
                                            </div>

                                            <button class='btn btn-primary btn-sm'>
                                                <span class='fa-solid fa-check me-2'></span>수정
                                            </button>
                                        </div>

                                        <ul class='nav nav-underline' id='myTab' role='tablist'>
                                            <li class='nav-item'>
                                                <a class='nav-link active' id='home-tab' data-bs-toggle='tab' href='#tab-home' role='tab' aria-controls='tab-home' aria-selected='true'>
                                                    기업 기초
                                                </a>
                                            </li>
                                            <li class='nav-item'>
                                                <a class='nav-link' id='profile-tab' data-bs-toggle='tab' href='#tab-profile' role='tab' aria-controls='tab-profile' aria-selected='false'>
                                                    기업 규모
                                                </a>
                                            </li>
                                            <li class='nav-item'>
                                                <a class='nav-link' id='contact-tab' data-bs-toggle='tab' href='#tab-contact' role='tab' aria-controls='tab-contact' aria-selected='false'>
                                                    계약 정보
                                                </a>
                                            </li>
                                        </ul>
                                        <div class='tab-content mt-3' id='myTabContent'>
                                            <div class='tab-pane fade show active' id='tab-home' role='tabpanel' aria-labelledby='home-tab'>
                                                <div class='mb-4 mt-3'>
                                                    <div class='d-flex align-items-center mb-1'>
                                                        <span class='me-2 uil uil-phone'> </span>
                                                        <h5 class='text-1000 mb-0'>Phone</h5>
                                                    </div>
                                                    <a href='tel:+1234567890'>+1234567890 </a>
                                                </div>
                                                <div class='mb-4'>
                                                    <div class='d-flex align-items-center mb-1'>
                                                        <span class='me-2 uil uil-globe'></span>
                                                        <h5 class='text-1000 mb-0'>Website</h5>
                                                    </div>
                                                    <a href='#!'>www.bb.ru.com </a>
                                                </div>
                                                <div class='mb-4'>
                                                    <div class='d-flex align-items-center mb-1'>
                                                        <span class='me-2 uil uil-building'></span>
                                                        <h5 class='text-1000 mb-0'>Industry</h5>
                                                    </div>
                                                    <p class='mb-0 text-800'>Large Enterprise</p>
                                                </div>
                                                <div class='mb-4'>
                                                    <div class='d-flex align-items-center mb-1'>
                                                        <span class='me-2 uil uil-postcard'></span>
                                                        <h5 class='text-1000 mb-0'>Number of employees</h5>
                                                    </div>
                                                    <p class='mb-0 text-800'>126</p>
                                                </div>
                                                <div class='mb-4'>
                                                    <div class='d-flex align-items-center mb-1'>
                                                        <span class='me-2 uil uil-dollar-alt'></span>
                                                        <h5 class='text-1000 mb-0'>Annual Revenue</h5>
                                                    </div>
                                                    <p class='mb-0 text-800'>$12000 </p>
                                                </div>
                                                <div class='mb-4'>
                                                    <div class='d-flex align-items-center mb-1'>
                                                        <span class='me-2 uil uil-clock'></span>
                                                        <h5 class='text-1000 mb-0'>Last contacted</h5>
                                                    </div>
                                                    <p class='mb-0 text-800'>12 November 2021, 10:54 AM</p>
                                                </div>
                                                <div class='mb-4'>
                                                    <div class='d-flex align-items-center mb-1'>
                                                        <span class='me-2 uil uil-file-check-alt'></span>
                                                        <h5 class='text-1000 mb-0'>Lead source</h5>
                                                    </div>
                                                    <p class='mb-0 text-800'>Advertisement</p>
                                                </div>
                                                <div>
                                                    <div class='d-flex align-items-center mb-1'>
                                                        <span class='me-2 uil uil-check-circle'></span>
                                                        <h5 class='text-1000 mb-0'>Lead status</h5>
                                                    </div>
                                                    <span class='badge badge-phoenix badge-phoenix-primary'>New Lead</span>
                                                </div>
                                            </div>
                                            <div class='tab-pane fade' id='tab-profile' role='tabpanel' aria-labelledby='profile-tab'></div>
                                            <div class='tab-pane fade' id='tab-contact' role='tabpanel' aria-labelledby='contact-tab'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 오른쪽 카드 */}
                            <div class='col-6 min-vh-75'>
                                <div className='card me-2 h-100'>
                                    <div className='ms-3 mx-3 mt-3 border-bottom d-flex justify-content-between align-items-center '>
                                        <div>
                                            <h3 class='card-title mb-1 mt-2'>제품 제안 리스트</h3>
                                            <p className='text-700 fs--1 ms-1'>List of Supplied Component</p>
                                        </div>

                                        <button class='btn btn-primary btn-sm'>
                                            <span class='fa-solid fa-plus me-2'></span>제안 추가
                                        </button>
                                    </div>
                                    <div class='m-3 mb-8'>
                                        <div class='border-bottom border-200' id='leadDetailsTable'>
                                            <div class='table-responsive scrollbar mx-n1 px-1'>
                                                <table class='table fs--1 mb-0'>
                                                    <thead>
                                                        <tr>
                                                            <th class='sort white-space-nowrap align-middle pe-3 ps-0 text-center text-uppercase' scope='col' data-sort='dealName'>
                                                                제품명
                                                            </th>
                                                            <th class='sort align-middle pe-6 text-uppercase text-center' scope='col' data-sort='amount'>
                                                                단가
                                                            </th>
                                                            <th class='sort align-middle text-center text-uppercase' scope='col' data-sort='stage'>
                                                                수량
                                                            </th>
                                                            <th class='sort align-middle text-center text-uppercase' scope='col' data-sort='probability'>
                                                                불량률
                                                            </th>
                                                            <th class='sort align-middle text-center text-uppercase' scope='col' data-sort='type'>
                                                                품질등급
                                                            </th>
                                                            <th class='sort align-middle ps-0 text-center text-uppercase' scope='col' data-sort='date'>
                                                                생산일자
                                                            </th>
                                                            <th class='sort align-middle ps-0 text-center text-uppercase' scope='col' data-sort='date'>
                                                                제안일자
                                                            </th>
                                                            <th class='sort align-middle text-center text-uppercase' scope='col' data-sort='type'>
                                                                계약상태
                                                            </th>
                                                            <th class='align-middle pe-0 text-center' scope='col'>
                                                                {" "}
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class='list' id='lead-details-table-body'>
                                                        <tr class='hover-actions-trigger btn-reveal-trigger position-static'>
                                                            <td class='dealName align-middle text-center white-space-nowrap py-2 ps-0'>
                                                                <a class='fw-semi-bold' href='#!'>
                                                                    카메라 모듈
                                                                </a>
                                                            </td>
                                                            <td class='amount align-middle white-space-nowrap text-center fw-bold text-700 py-2 text-end pe-6'>$680</td>
                                                            <td class='amount align-middle white-space-nowrap text-center fw-bold text-700 py-2 text-end pe-6'>1,000</td>

                                                            <td class='probability align-middle white-space-nowrap'>
                                                                <p class='text-800 fs--2 mb-0'>0.1%</p>
                                                                <div class='progress bg-primary-100' role='progressbar'>
                                                                    <div class='progress-bar bg-info' role='progressbar' aria-valuenow='0.1' aria-valuemin='0' aria-valuemax='1'></div>
                                                                </div>
                                                            </td>
                                                            <td class='type align-middle fw-semi-bold py-2 text-center'>
                                                                <span class='badge badge-phoenix fs--2 badge-phoenix-info'>A+</span>
                                                            </td>
                                                            <td class='date align-middle text-700 text-center py-2'>12일</td>
                                                            <td class='date align-middle text-700 text-center py-2'>23.08.24</td>
                                                            <td class='type align-middle fw-semi-bold py-2 text-center'>
                                                                <span class='badge badge-phoenix fs--2 badge-phoenix-info'>계약</span>
                                                            </td>
                                                            <td class='align-middle text-end white-space-nowrap pe-0 action py-2'>
                                                                <div class='font-sans-serif btn-reveal-trigger position-static'>
                                                                    <button class='btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal' type='button' data-bs-toggle='dropdown' data-boundary='window' aria-haspopup='true' aria-expanded='false' data-bs-reference='parent'>
                                                                        <span class='fas fa-ellipsis-h fs--2'></span>
                                                                    </button>
                                                                    <div class='dropdown-menu dropdown-menu-end py-2'>
                                                                        <a class='dropdown-item' href='#!'>
                                                                            이전 제안 보기
                                                                        </a>
                                                                        <a class='dropdown-item' href='#!'>
                                                                            제품 비교
                                                                        </a>
                                                                        <div class='dropdown-divider'></div>
                                                                        <a class='dropdown-item text-danger' href='#!'>
                                                                            계약
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr class='hover-actions-trigger btn-reveal-trigger position-static'>
                                                            <td class='dealName align-middle text-center white-space-nowrap py-2 ps-0'>
                                                                <a class='fw-semi-bold' href='#!'>
                                                                    카메라 모듈B
                                                                </a>
                                                            </td>
                                                            <td class='amount align-middle white-space-nowrap text-center fw-bold text-700 py-2 text-end pe-6'>$680</td>
                                                            <td class='amount align-middle white-space-nowrap text-center fw-bold text-700 py-2 text-end pe-6'>1,000</td>

                                                            <td class='probability align-middle white-space-nowrap'>
                                                                <p class='text-800 fs--2 mb-0'>0.3%</p>
                                                                <div class='progress bg-primary-100' role='progressbar'>
                                                                    <div class='progress-bar bg-info' role='progressbar' aria-valuenow='0.1' aria-valuemin='0' aria-valuemax='1'></div>
                                                                </div>
                                                            </td>
                                                            <td class='type align-middle fw-semi-bold py-2 text-center'>
                                                                <span class='badge badge-phoenix fs--2 badge-phoenix-success'>B+</span>
                                                            </td>
                                                            <td class='date align-middle text-700 text-center py-2'>12일</td>
                                                            <td class='date align-middle text-700 text-center py-2'>23.08.24</td>
                                                            <td class='type align-middle fw-semi-bold py-2 text-center'>
                                                                <span class='badge badge-phoenix fs--2 badge-phoenix-danger'>미계약</span>
                                                            </td>
                                                            <td class='align-middle text-end white-space-nowrap pe-0 action py-2'>
                                                                <div class='font-sans-serif btn-reveal-trigger position-static'>
                                                                    <button class='btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal' type='button' data-bs-toggle='dropdown' data-boundary='window' aria-haspopup='true' aria-expanded='false' data-bs-reference='parent'>
                                                                        <span class='fas fa-ellipsis-h fs--2'></span>
                                                                    </button>
                                                                    <div class='dropdown-menu dropdown-menu-end py-2'>
                                                                        <a class='dropdown-item' href='#!'>
                                                                            이전 제안 보기
                                                                        </a>
                                                                        <a class='dropdown-item' href='#!'>
                                                                            제품 비교
                                                                        </a>
                                                                        <div class='dropdown-divider'></div>
                                                                        <a class='dropdown-item text-danger' href='#!'>
                                                                            계약
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 토스트*/}
                        <div class='position-fixed ' style={{ zIndex: "5" }}>
                            <div class='toast show align-items-center text-white bg-info border-0' style={{ position: "fixed", top: "-10px", right: "20px", width: "auto", maxWidth: "500px" }} role='alert' data-bs-autohide='false' aria-live='assertive' aria-atomic='true' id='checkRegiToast'>
                                <div class='d-flex'>
                                    <div class='toast-body'>제품별 고객사가 정상적으로 등록되었습니다.</div>

                                    <button class='btn ms-2 p-0 btn-close-white' type='button' data-bs-dismiss='toast' aria-label='Close'>
                                        <span class='uil uil-times fs-1'></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 임시저장 오프캔버스 */}
                <div class='offcanvas offcanvas-end' data-bs-scroll='true' tabindex='-1' id='offcanvasWithBothOptions' aria-labelledby='offcanvasWithBothOptionsLabel'>
                    <div class='offcanvas-header'>
                        <h4 class='offcanvas-title' id='offcanvasWithBothOptionsLabel'>
                            임시 저장 목록
                        </h4>
                        <button type='button' class='btn-close text-reset' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                    </div>

                    <div class='offcanvas-body'>
                        <div class='mb-8'>
                            <div class='border-top border-bottom border-200' id='leadDetailsTable'>
                                <div class='table-responsive scrollbar mx-n1 px-1'>
                                    <table class='table fs--1 mb-0' id='suppl-draft-table'>
                                        <thead>
                                            <tr>
                                                <th class='sort white-space-nowrap align-middle pe-3 ps-0 text-uppercase' scope='col' data-sort='dealName' style={{ width: "15%", minWidth: "100px" }}>
                                                    고객사명
                                                </th>
                                                <th class='sort align-middle ps-0 text-center text-uppercase' scope='col' data-sort='date' style={{ width: "15%", minWidth: "60px" }}>
                                                    저장 날짜
                                                </th>
                                                <th class='sort align-middle text-end text-uppercase' scope='col' data-sort='type' style={{ width: "15%", minWidth: "70px" }}>
                                                    구분
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class='list' id='draft-details-table-body'>
                                            {/* <c:forEach items="${draftList}" var="draftList">
             <tr class="hover-actions-trigger btn-reveal-trigger position-static">
               <td class="offSuppleName align-middle white-space-nowrap py-2 ps-0"><a class="offEventA fw-semi-bold text-primary" href="#!">${draftList.suppl_name}</a></td>
               <td class="offDate align-middle text-700 text-center py-2"><fmt:formatDate value="${draftList.proposal_date}" pattern="MMM dd일 hh:mm:ss" /></td>
               <td class="offCompoName align-middle fw-semi-bold py-2 text-end"><span class="badge badge-phoenix fs--2 badge-phoenix-info">${draftList.compo_name}</span></td>
               <td hidden class="offCeoName">${draftList.ceo_name}</td>
               <td hidden class="offCategories">${draftList.categories}</td>
               <td hidden class="offPhone">${draftList.phone}</td>
               <td hidden class="offAddress">${draftList.address}</td>
               <td hidden class="offCompoNo">${draftList.compo_no}</td>
               <td hidden class="offPrice">${draftList.price}</td>
               <td hidden class="offQuantitiy">${draftList.quantity}</td>
               <td hidden class="offDefectiveRate">${draftList.defective_rate}</td>
               <td hidden class="offQualityGrede">${draftList.quality_grade}</td>
               <td hidden class="offProdPeriod">${draftList.prod_period}</td>
               <td hidden class="offAttachFile">${draftList.attachfile}</td>
               <td hidden class="offLogoPath">${draftList.logopath}</td>
             </tr>
           </c:forEach> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  모달창 : 제품 추가 모달창  */}
                <div class='modal fade' id='insertCompoentModal' tabindex='-1' aria-labelledby='RegisterCheckModalLabel' aria-hidden='true' style={{ display: "none" }}>
                    <div class='modal-dialog modal-dialog-centered'>
                        <div class='modal-content'>
                            <div class='modal-header'>
                                <h5 class='modal-title' id='RegisterCheckModalLabel'>
                                    제품 추가
                                </h5>
                                <button class='btn p-1' type='button' data-bs-dismiss='modal' aria-label='Close'>
                                    <svg class='svg-inline--fa fa-xmark fs--1' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='xmark' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' data-fa-i2svg=''>
                                        <path fill='currentColor' d='M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z'></path>
                                    </svg>
                                    {/* <span class="fas fa-times fs--1"></span> Font Awesome fontawesome.com */}
                                </button>
                            </div>
                            <div class='modal-body'>
                                <label class='col-sm-3 col-form-label fs-sm--1' for='compoName'>
                                    제품명
                                </label>
                                <div class='col-sm-12'>
                                    <input class='form-control text-center fs-sm--1' id='compoName' type='text' />
                                </div>
                                <label class='col-sm-3 col-form-label fs-sm--1' for='compoUnit'>
                                    단위
                                </label>
                                <div class='col-sm-12'>
                                    <input class='form-control text-center fs-sm--1' id='compoUnit' type='text' />
                                </div>
                                <label class='col-sm-3 col-form-label fs-sm--1' for='compoDetail'>
                                    제품상세
                                </label>
                                <div class='col-sm-12'>
                                    <input class='form-control text-center fs-sm--1' id='compoDetail' type='text' />
                                </div>
                            </div>
                            <div class='modal-footer'>
                                <button class='btn btn-primary' type='button' id='regiCompoBtn'>
                                    등록
                                </button>
                                <button class='btn btn-outline-primary' type='button' data-bs-dismiss='modal'>
                                    취소
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RetailerDetail;
