const AddRetailer = () => {
	return (
		<div>
			<div className="max-vh-100">
				<div className="mx-lg-n4 mt-1">
					<div className="row g-3 flex-between-end mb-4 mx-3">
						<div className="col-auto">
							<h3 className="mb-2">제품별 고객사 등록</h3>
							<h6 className="text-700 fw-semi-bold">Registering as a Retailer for each product</h6>
						</div>
						<div className="col-auto">
							<button className="btn btn-outline-success  me-5 mb-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
								임시 저장 목록
							</button>
							<button className="btn btn-outline-secondary  me-2 mb-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
								임시 저장
							</button>
							<button className="btn btn-outline-danger  me-2 mb-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
								초기화
							</button>
							<button className="btn btn-primary  me-1 mb-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
								고객사 등록
							</button>
						</div>
					</div>

					<div className="row g-3 ms-3 mx-3">
						{/* 왼쪽카드 */}
						<div className="col-3 h-50">
							<select className="form-select mb-1 " aria-label="category">
								<option value="부품명">부품명</option>
								<option value="부품번호">부품번호</option>
								<option value="부품설명">부품설명</option>
								<option value="부품분류">부품분류</option>
							</select>
							<div className="form-icon-container mb-3 mt-1 d-flex">
								<div className="flex-grow-1 me-1">
									<input className="form-control form-icon-input" type="text" placeholder="제품검색" />
									<span className="fa-solid fa-mobile-screen text-700 fs--1 form-icon"></span>
								</div>
								<button className="btn btn-primary btn-sm">검색</button>
							</div>
							<div className="card  overflow-auto" style={{ overflow: "scroll", "-webkit-overflow-scrolling": "touch", scrollbarWidth: "none", msOverflowStyle: "none", height: "700px" }}>
								<div>
									<div className="item-center m-3">
										<button className="btn btn-phoenix-info p-2 w-100 border-100">
											<p className="fs-sm--1 mb-1 text-secondary">COMP1234</p>
											<h5 className="mb-1 mt-2 text-primary">카메라모듈</h5>
											<p className="fs-sm--2 mb-0 text-secondary">1EA</p>
											<p className="mb-0 text-secondary">카메라모듈A</p>
										</button>
									</div>
									<div className="item-center m-3">
										<button className="btn btn-phoenix-info p-2 w-100 border-100">
											<p className="fs-sm--1 mb-1 text-secondary">COMP1234</p>
											<h5 className="mb-1 mt-2 text-primary">카메라모듈</h5>
											<p className="fs-sm--2 mb-0 text-secondary">1EA</p>
											<p className="mb-0 text-secondary">카메라모듈A</p>
										</button>
									</div>
									<div className="item-center m-3">
										<button className="btn btn-phoenix-info p-2 w-100 border-100">
											<p className="fs-sm--1 mb-1 text-secondary">COMP1234</p>
											<h5 className="mb-1 mt-2 text-primary">카메라모듈</h5>
											<p className="fs-sm--2 mb-0 text-secondary">1EA</p>
											<p className="mb-0 text-secondary">카메라모듈A</p>
										</button>
									</div>
									<div className="item-center m-3">
										<button className="btn btn-phoenix-info p-2 w-100 border-100">
											<p className="fs-sm--1 mb-1 text-secondary">COMP1234</p>
											<h5 className="mb-1 mt-2 text-primary">카메라모듈</h5>
											<p className="fs-sm--2 mb-0 text-secondary">1EA</p>
											<p className="mb-0 text-secondary">카메라모듈A</p>
										</button>
									</div>
									<div className="item-center m-3">
										<button className="btn btn-phoenix-info p-2 w-100 border-100">
											<p className="fs-sm--1 mb-1 text-secondary">COMP1234</p>
											<h5 className="mb-1 mt-2 text-primary">카메라모듈</h5>
											<p className="fs-sm--2 mb-0 text-secondary">1EA</p>
											<p className="mb-0 text-secondary">카메라모듈A</p>
										</button>
									</div>
									<div className="item-center m-3">
										<button className="btn btn-phoenix-info p-2 w-100 border-100">
											<p className="fs-sm--1 mb-1 text-secondary">COMP1234</p>
											<h5 className="mb-1 mt-2 text-primary">카메라모듈</h5>
											<p className="fs-sm--2 mb-0 text-secondary">1EA</p>
											<p className="mb-0 text-secondary">카메라모듈A</p>
										</button>
									</div>
									<div className="item-center m-3">
										<button className="btn btn-phoenix-info p-2 w-100 border-100">
											<p className="fs-sm--1 mb-1 text-secondary">COMP1234</p>
											<h5 className="mb-1 mt-2 text-primary">카메라모듈</h5>
											<p className="fs-sm--2 mb-0 text-secondary">1EA</p>
											<p className="mb-0 text-secondary">카메라모듈A</p>
										</button>
									</div>
									<div className="item-center m-3">
										<button className="btn btn-phoenix-info p-2 w-100 border-100">
											<p className="fs-sm--1 mb-1 text-secondary">COMP1234</p>
											<h5 className="mb-1 mt-2 text-primary">카메라모듈</h5>
											<p className="fs-sm--2 mb-0 text-secondary">1EA</p>
											<p className="mb-0 text-secondary">카메라모듈A</p>
										</button>
									</div>
									<div className="item-center m-3">
										<button className="btn btn-phoenix-info p-2 w-100 border-100">
											<p className="fs-sm--1 mb-1 text-secondary">COMP1234</p>
											<h5 className="mb-1 mt-2 text-primary">카메라모듈</h5>
											<p className="fs-sm--2 mb-0 text-secondary">1EA</p>
											<p className="mb-0 text-secondary">카메라모듈A</p>
										</button>
									</div>
									<div className="item-center m-3">
										<button className="btn btn-phoenix-info p-2 w-100 border-100">
											<p className="fs-sm--1 mb-1 text-secondary">COMP1234</p>
											<h5 className="mb-1 mt-2 text-primary">카메라모듈</h5>
											<p className="fs-sm--2 mb-0 text-secondary">1EA</p>
											<p className="mb-0 text-secondary">카메라모듈A</p>
										</button>
									</div>
								</div>
							</div>
						</div>

						{/* 가운데 카드 */}
						<div className="col-4 min-vh-75 ">
							<div className="card h-100">
								<div className="card-body">
									<h4 className="card-title mb-0">제품 상세</h4>
									<p className="text-700 fs--1 mb-5 ms-1">Product Detail</p>
									<div className="row gx-3">
										<div className="col-12 col-sm-6 col-xl-12">
											<div className="mb-4">
												<div className="d-flex flex-wrap mb-2">
													<h5 className="mb-0 text-1000 me-2">제품명</h5>
													<a className="fw-bold fs--1" href="#!">
														제품 추가하기
													</a>
												</div>
												<input className="form-control mb-xl-3" type="text" placeholder="제품명은 왼쪽 제품 버튼을 클릭하면 자동으로 설정됩니다." readOnly disabled />
											</div>
										</div>
										<div className="col-12 col-sm-6 col-xl-12">
											<div className="mb-4">
												<div className="d-flex flex-wrap mb-2">
													<h5 className="mb-0 text-1000 me-2">단가</h5>
												</div>
												<input className="form-control mb-xl-3" type="text" placeholder="단가는 숫자만 입력 가능합니다." readOnly />
											</div>
										</div>
										<div className="col-12 col-sm-6 col-xl-12">
											<div className="mb-4">
												<h5 className="mb-2 text-1000">수량</h5>
												<input className="form-control mb-xl-3" type="text" placeholder="수량은 숫자만 입력 가능합니다." />
											</div>
										</div>
										<div className="col-12 col-sm-6 col-xl-12 mb-4">
											<div className="d-flex flex-wrap mb-2">
												<h5 className="mb-0 text-1000 me-2">불량률</h5>
											</div>
											<input className="form-control mb-xl-3" type="text" placeholder="불량률" />
										</div>
										<div className="col-12 col-sm-6 col-xl-12 mb-4">
											<div className="d-flex flex-wrap mb-2">
												<h5 className="mb-0 text-1000 me-2">품질등급</h5>
											</div>
											<select className="form-select mb-3" aria-label="category">
												<option value="A+">A+</option>
												<option value="A">A</option>
												<option value="B+">B+</option>
												<option value="B">B</option>
												<option value="C+">C+</option>
												<option value="C">C</option>
												<option value="D+">D+</option>
												<option value="D">D</option>
											</select>
										</div>
										<div className="col-12 col-sm-6 col-xl-12 mb-4">
											<div className="d-flex flex-wrap mb-2">
												<h5 className="mb-0 text-1000 me-2">생산기간(일)</h5>
											</div>
											<input className="form-control mb-xl-3" type="text" placeholder="생산기간" />
										</div>
										<div className="col-12 col-sm-6 col-xl-12">
											<div className="d-flex flex-wrap mb-2">
												<h5 className="mb-0 text-1000 me-2">제안서</h5>
											</div>
											<form className="dropzone dropzone-multiple p-0 bg-white mb-3" id="proposal-dropzone" data-dropzone="data-dropzone" action="/upload-proposal">
												<div className="dz-message text-center mt-2" data-dz-message="data-dz-message">
													<img className="me-2" src="resources/assets/img/icons/cloud-upload.svg" width="25" alt="" />
													Drop your files here
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* 오른쪽 카드 */}
						<div className="col-5 min-vh-75">
							<div className="card me-2 h-100">
								<div className="card-body">
									<div className="d-flex justify-content-between">
										<div className="">
											<h4 className="card-title mb-0">고객사 상세</h4>
											<p className="text-700 fs--1 mb-5 ms-1">Product Detail</p>
										</div>
										<div className="col-12 col-sm-auto">
											<input className="d-none" id="avatarFile" type="file" />
											<label className="cursor-pointer avatar avatar-3xl" for="avatarFile">
												<img className="rounded-circle border border-3" src="resources/assets/img/brand2/dell.png" alt="" />
											</label>
										</div>
									</div>
									<div className="row gx-3">
										<div className="col-12 col-sm-6 col-xl-12">
											<div className="mb-4">
												<div className="d-flex flex-wrap mb-2">
													<h5 className="mb-0 text-1000 me-2">고객사명</h5>
													<a className="fw-bold fs--1" href="#!">
														고객사 불러오기
													</a>
												</div>
												<input className="form-control mb-xl-3" type="text" placeholder="고객사명을 입력하세요." />
											</div>
										</div>
										<div className="col-12 col-sm-6 col-xl-12">
											<div className="mb-4">
												<div className="d-flex flex-wrap mb-2">
													<h5 className="mb-0 text-1000 me-2">사업자번호</h5>
												</div>
												<input className="form-control mb-xl-3" type="text" placeholder="사업자번호" />
											</div>
										</div>
										<div className="col-12 col-sm-6 col-xl-12">
											<div className="mb-4">
												<div className="d-flex flex-wrap mb-2">
													<h5 className="mb-0 text-1000 me-2">대표 젼화번호</h5>
												</div>
												<input className="form-control mb-xl-3" type="text" placeholder="전화번호" />
											</div>
										</div>
										<div className="col-12 d-flex justify-content-between">
											<div className="w-50">
												<h5 className="text-1000">업태</h5>
												<input className="form-control mb-xl-3" type="text" placeholder="업태" />
											</div>
											<div className="w-50 ms-3">
												<h5 className="text-1000">종목</h5>
												<input className="form-control mb-xl-3" type="text" placeholder="종목" />
											</div>
										</div>
										<div className="col-12 col-sm-6 col-xl-12">
											<div className="mb-4">
												<div className="d-flex flex-wrap mb-2">
													<h5 className="mb-0 text-1000 me-2">주소</h5>
												</div>
												<input className="form-control mb-xl-3" type="text" placeholder="주소" />
											</div>
										</div>
										<hr />
										<div className="d-flex flex-wrap mb-3 mt-2">
											<h5 className="mb-0 text-1000 me-2">추가 정보</h5>
										</div>
										<div className="row g-0 border-top border-bottom border-300">
											<div className="col-sm-2">
												<div className="nav flex-sm-column border-bottom border-bottom-sm-0 border-end-sm border-300 fs--1 vertical-tab h-100 justify-content-between" role="tablist" aria-orientation="vertical">
													<a className="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center active" id="pricingTab" data-bs-toggle="tab" data-bs-target="#pricingTabContent" role="tab" aria-controls="pricingTabContent" aria-selected="true">
														{" "}
														<span className="me-sm-2 fs-4 nav-icons" data-feather="tag"></span>
														<span className="d-none d-sm-inline">기업정보</span>
													</a>
													<a className="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="restockTab" data-bs-toggle="tab" data-bs-target="#restockTabContent" role="tab" aria-controls="restockTabContent" aria-selected="false">
														{" "}
														<span className="me-sm-2 fs-4 nav-icons" data-feather="package"></span>
														<span className="d-none d-sm-inline">매출정보</span>
													</a>
													<a className="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="shippingTab" data-bs-toggle="tab" data-bs-target="#shippingTabContent" role="tab" aria-controls="shippingTabContent" aria-selected="false">
														{" "}
														<span className="me-sm-2 fs-4 nav-icons" data-feather="truck"></span>
														<span className="d-none d-sm-inline">계약상태</span>
													</a>
													<a className="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="productsTab" data-bs-toggle="tab" data-bs-target="#productsTabContent" role="tab" aria-controls="productsTabContent" aria-selected="false">
														{" "}
														<span className="me-sm-2 fs-4 nav-icons" data-feather="globe"></span>
														<span className="d-none d-sm-inline">기타설정</span>
													</a>
													<a className="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="attributesTab" data-bs-toggle="tab" data-bs-target="#attributesTabContent" role="tab" aria-controls="attributesTabContent" aria-selected="false">
														{" "}
														<span className="me-sm-2 fs-4 nav-icons" data-feather="sliders"></span>
														<span className="d-none d-sm-inline">추가설정</span>
													</a>
												</div>
											</div>
											<div className="col-sm-10">
												<div className="tab-content py-3 ps-sm-4 h-100">
													<div className="tab-pane fade show active" id="pricingTabContent" role="tabpanel">
														<div className="row g-3 mb-4">
															<div className="col-12 col-lg-6">
																<h5 className="mb-2 text-1000">대표자명</h5>
																<input className="form-control" type="text" placeholder="대표자명" />
															</div>
															<div className="col-12 col-lg-6">
																<h5 className="mb-2 text-1000">기업규모</h5>
																<input className="form-control" type="text" placeholder="기업규모" />
															</div>
														</div>
														<div className="col-12 col-sm-6 col-xl-12">
															<div className="mb-4">
																<div className="d-flex flex-wrap mb-2">
																	<h5 className="mb-0 text-1000 me-2">주소</h5>
																</div>
																<input className="form-control mb-xl-3" type="text" placeholder="주소" />
															</div>
														</div>
													</div>

													<div className="tab-pane fade h-100" id="restockTabContent" role="tabpanel" aria-labelledby="restockTab">
														<div className="d-flex flex-column h-100">
															<h5 className="mb-3 text-1000">매출 정보 추가</h5>
															<div className="row g-3 flex-1 mb-4">
																<div className="col-sm-7">
																	<input className="form-control" type="number" placeholder="Quantity" />
																</div>
																<div className="col-sm">
																	<button className="btn btn-primary" type="button">
																		<span className="fa-solid fa-check me-1 fs--2"></span>Confirm
																	</button>
																</div>
															</div>
															<table>
																<thead>
																	<tr>
																		<th></th>
																		<th></th>
																	</tr>
																</thead>
																<tbody></tbody>
															</table>
														</div>
													</div>
													<div className="tab-pane fade h-100" id="shippingTabContent" role="tabpanel" aria-labelledby="shippingTab">
														<div className="d-flex flex-column h-100">
															<h5 className="mb-3 text-1000">계약 상태</h5>
															<div className="flex-1">
																<div className="mb-4">
																	<div className="form-check mb-1">
																		<input className="form-check-input" type="radio" name="shippingRadio" id="fullfilledBySeller" />
																		<label className="form-check-label fs-0 text-900" for="fullfilledBySeller">
																			계약 진행
																		</label>
																	</div>
																	<div className="ps-4">
																		<p className="text-800 fs--1 mb-0">
																			해당 제품에 대해 고객사와 계약이 확정된 경우에 선택하세요. <br />
																			해당 설정은 고객사 조회 페이지에서 수정이 가능합니다.
																		</p>
																	</div>
																</div>
																<div className="mb-4">
																	<div className="form-check mb-1">
																		<input className="form-check-input" type="radio" name="shippingRadio" id="fullfilledByPhoenix" checked="checked" />
																		<label className="form-check-label fs-0 text-900 d-flex align-items-center" for="fullfilledByPhoenix">
																			계약 미진행 <span className="badge badge-phoenix badge-phoenix-warning fs--2 ms-2">Default</span>
																		</label>
																	</div>
																	<div className="ps-4">
																		<p className="text-800 fs--1 mb-0">
																			해당 제품에 대해 고객사와 계약이 확정되지 않은 경우에 선택하세요.
																			<br />
																			해당 설정은 기본값으로 설정되며 이후에 계약 확정시 자동으로 반영됩니다.
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="tab-pane fade" id="productsTabContent" role="tabpanel" aria-labelledby="productsTab"></div>
													<div className="tab-pane fade" id="attributesTabContent" role="tabpanel" aria-labelledby="attributesTab"></div>
													<div className="tab-pane fade" id="advancedTabContent" role="tabpanel" aria-labelledby="advancedTab"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* 토스트*/}
					<div className="position-fixed " style={{ zIndex: "5" }}>
						<div className="toast show align-items-center text-white bg-info border-0" style={{ position: "fixed", top: "-10px", right: "20px", width: "auto", maxWidth: "500px" }} role="alert" data-bs-autohide="false" aria-live="assertive" aria-atomic="true" id="checkRegiToast">
							<div className="d-flex">
								<div className="toast-body">제품별 고객사가 정상적으로 등록되었습니다.</div>

								<button className="btn ms-2 p-0 btn-close-white" type="button" data-bs-dismiss="toast" aria-label="Close">
									<span className="uil uil-times fs-1"></span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 임시저장 오프캔버스 */}
			<div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
				<div className="offcanvas-header">
					<h4 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
						임시 저장 목록
					</h4>
					<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>

				<div className="offcanvas-body">
					<div className="mb-8">
						<div className="border-top border-bottom border-200" id="leadDetailsTable">
							<div className="table-responsive scrollbar mx-n1 px-1">
								<table className="table fs--1 mb-0" id="suppl-draft-table">
									<thead>
										<tr>
											<th className="sort white-space-nowrap align-middle pe-3 ps-0 text-uppercase" scope="col" data-sort="dealName" style={{ width: "15%", minWidth: "100px" }}>
												고객사명
											</th>
											<th className="sort align-middle ps-0 text-center text-uppercase" scope="col" data-sort="date" style={{ width: "15%", minWidth: "60px" }}>
												저장 날짜
											</th>
											<th className="sort align-middle text-end text-uppercase" scope="col" data-sort="type" style={{ width: "15%", minWidth: "70px" }}>
												구분
											</th>
										</tr>
									</thead>
									<tbody className="list" id="draft-details-table-body"></tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*  모달창 : 제품 추가 모달창  */}
			<div className="modal fade" id="insertCompoentModal" tabindex="-1" aria-labelledby="RegisterCheckModalLabel" aria-hidden="true" style={{ display: "none" }}>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="RegisterCheckModalLabel">
								제품 추가
							</h5>
							<button className="btn p-1" type="button" data-bs-dismiss="modal" aria-label="Close">
								<svg className="svg-inline--fa fa-xmark fs--1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
									<path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path>
								</svg>
								{/* <span className="fas fa-times fs--1"></span> Font Awesome fontawesome.com */}
							</button>
						</div>
						<div className="modal-body">
							<label className="col-sm-3 col-form-label fs-sm--1" for="compoName">
								제품명
							</label>
							<div className="col-sm-12">
								<input className="form-control text-center fs-sm--1" id="compoName" type="text" />
							</div>
							<label className="col-sm-3 col-form-label fs-sm--1" for="compoUnit">
								단위
							</label>
							<div className="col-sm-12">
								<input className="form-control text-center fs-sm--1" id="compoUnit" type="text" />
							</div>
							<label className="col-sm-3 col-form-label fs-sm--1" for="compoDetail">
								제품상세
							</label>
							<div className="col-sm-12">
								<input className="form-control text-center fs-sm--1" id="compoDetail" type="text" />
							</div>
						</div>
						<div className="modal-footer">
							<button className="btn btn-primary" type="button" id="regiCompoBtn">
								등록
							</button>
							<button className="btn btn-outline-primary" type="button" data-bs-dismiss="modal">
								취소
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddRetailer;
