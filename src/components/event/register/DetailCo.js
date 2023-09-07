import { useState } from "react";
import ModalGetCo from "./ModalGetCo";
import LogoUpload from "./LogoUpload";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DetailCo = ({ componentData, updateComponentData }) => {
	const [showModal, setShowModal] = useState(false);
	const [selectedDate, setSelectedDate] = useState(null);

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const handleDateChange = (date) => {
		setSelectedDate(date);
		updateComponentData({ establishment_date: date });
	};

	const handleRateChange = (e) => {
		const rate = e.target.value;
		updateComponentData({ supple_level: rate });
	};

	// 각각의 항목에 대한 입력값 처리 함수들
	const handleCompanyNameChange = (e) => {
		const newCompanyName = e.target.value;
		updateComponentData({ suppl_name: newCompanyName });
	};

	const handleBusinessNumberChange = (e) => {
		const newBusinessNumber = e.target.value;
		updateComponentData({ business_no: newBusinessNumber });
	};

	const handlePhoneNumberChange = (e) => {
		const newPhoneNumber = e.target.value;
		updateComponentData({ phone_number: newPhoneNumber });
	};

	const handleBusinessTypeChange = (e) => {
		const newBusinessType = e.target.value;
		updateComponentData({ business_type: newBusinessType });
	};

	const handleIndustryChange = (e) => {
		const newIndustry = e.target.value;
		updateComponentData({ business_item: newIndustry });
	};

	const handleAddressChange = (e) => {
		const newAddress = e.target.value;
		updateComponentData({ address: newAddress });
	};

	const handleRepresentativeNameChange = (e) => {
		const newRepresentativeName = e.target.value;
		updateComponentData({ representative: newRepresentativeName });
	};

	const handleCompanyTypeChange = (e) => {
		const newCompanyType = e.target.value;
		updateComponentData({ company_type: newCompanyType });
	};

	const handleEmpQuantityChange = (e) => {
		const newEmpQuantity = e.target.value;
		updateComponentData({ employee_quantity: newEmpQuantity });
	};

	const handleStockTypeChange = (e) => {
		const newStockType = e.target.value;
		updateComponentData({ stock_type: newStockType });
	};

	const handleProfitChange = (e) => {
		const newProfit = e.target.value;
		updateComponentData({ profit: newProfit });
	};

	const handleNetProfitChange = (e) => {
		const NetProfit = e.target.value;
		updateComponentData({ net_profit: NetProfit });
	};

	const handleDebtRatioChange = (e) => {
		const DebtRatio = e.target.value;
		updateComponentData({ debt_ratio: DebtRatio });
	};

	const handleMarketCapChange = (e) => {
		const MarketCap = e.target.value;
		updateComponentData({ market_cap: MarketCap });
	};

	const handleContractRadioChange = (e, isContracted) => {
		console.log("here");
		if (isContracted) {
			updateComponentData({ is_contracted: "1" });
		}
	};

	const handleDetailChange = (e) => {
		const Detail = e.target.value;
		updateComponentData({ detail: Detail });
	};

	return (
		<div className="card me-2 " style={{ height: "760px" }}>
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<div className="">
						<h4 className="card-title mb-0">공급사 상세</h4>
						<p className="text-700 fs--1 mb-5 ms-1">Product Detail</p>
					</div>
					<div className="col-12 col-sm-auto">
						<LogoUpload componentData={componentData} updateComponentData={updateComponentData} />
					</div>
				</div>
				<div className="row gx-3">
					<div className="col-12 col-sm-6 col-xl-12">
						<div className="mb-4">
							<div className="d-flex flex-wrap mb-2">
								<h5 className="mb-0 text-1000 me-2">공급사명</h5>
								<a className="fw-bold fs--1" href="#!" onClick={openModal}>
									공급사 불러오기
								</a>
							</div>
							<input className="form-control mb-xl-3" type="text" placeholder="공급사명을 입력하세요." value={componentData.suppl_name} onChange={handleCompanyNameChange} />
						</div>
					</div>
					<div className="col-12 d-flex justify-content-between">
						<div className="w-50">
							<h5 className="text-1000 ">사업자번호</h5>
							<input className="form-control mb-xl-3" type="text" placeholder="사업자번호" value={componentData.business_no} onChange={handleBusinessNumberChange} />
						</div>
						<div className="w-50 ms-3">
							<h5 className="text-1000">대표번호</h5>
							<input className="form-control mb-xl-3" type="text" placeholder="전화번호" value={componentData.phone_number} onChange={handlePhoneNumberChange} />
						</div>
					</div>

					<div className="col-12 d-flex justify-content-between">
						<div className="w-50">
							<h5 className="text-1000">업태</h5>
							<input className="form-control mb-xl-3" type="text" placeholder="업태" value={componentData.business_type} onChange={handleBusinessTypeChange} />
						</div>
						<div className="w-50 ms-3">
							<h5 className="text-1000">종목</h5>
							<input className="form-control mb-xl-3" type="text" plsetComponentDataaceholder="종목" value={componentData.business_item} onChange={handleIndustryChange} />
						</div>
					</div>
					<div className="col-12 col-sm-6 col-xl-12">
						<div className="mb-4">
							<div className="d-flex flex-wrap mb-2">
								<h5 className="mb-0 text-1000 me-2">주소</h5>
							</div>
							<input className="form-control mb-xl-3" type="text" placeholder="주소" value={componentData.address} onChange={handleAddressChange} />
						</div>
					</div>
					<hr />
					<div className="d-flex flex-wrap mb-3 mt-2">
						<h5 className="mb-0 text-1000 me-2">
							추가 정보<span className="fs--1">(선택 기입)</span>
						</h5>
					</div>
					<div className="row g-0 border-top border-bottom border-300" style={{ height: "260px", maxHeight: "260px" }}>
						<div className="col-sm-2">
							<div className="nav flex-sm-column border-bottom border-bottom-sm-0 border-end-sm border-300 fs--1 vertical-tab h-100 justify-content-between" role="tablist" aria-orientation="vertical">
								<a className="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center active" id="pricingTab" data-bs-toggle="tab" data-bs-target="#pricingTabContent" role="tab" aria-controls="pricingTabContent" aria-selected="true">
									{" "}
									<span className="me-sm-2 fs-4 nav-icons" data-feather="tag"></span>
									<span className="d-none d-sm-inline">상세정보</span>
								</a>
								<a className="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="restockTab" data-bs-toggle="tab" data-bs-target="#restockTabContent" role="tab" aria-controls="restockTabContent" aria-selected="false">
									{" "}
									<span className="me-sm-2 fs-4 nav-icons" data-feather="package"></span>
									<span className="d-none d-sm-inline">금융정보</span>
								</a>
								<a className="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="shippingTab" data-bs-toggle="tab" data-bs-target="#shippingTabContent" role="tab" aria-controls="shippingTabContent" aria-selected="false">
									{" "}
									<span className="me-sm-2 fs-4 nav-icons" data-feather="truck"></span>
									<span className="d-none d-sm-inline">계약상태</span>
								</a>
							</div>
						</div>
						<div className="col-sm-10">
							<div className="tab-content py-3 ps-4 h-100">
								<div className="tab-pane fade show active" id="pricingTabContent" role="tabpanel">
									<div className="row g-3 mb-2">
										<div className="col-6">
											<h6 className="mb-2 text-1000">대표자</h6>
											<input className="form-control" type="text" placeholder="대표자명" value={componentData.representative} onChange={handleRepresentativeNameChange} />
										</div>
										<div className="col-6">
											<h6 className="mb-2 text-1000">기업유형</h6>
											<select className="form-select mb-3" aria-label="기업규모" value={componentData.company_type} onChange={handleCompanyTypeChange}>
												<option value="" selected disabled>
													기업규모
												</option>
												<option value="대기업">대기업</option>
												<option value="중견기업">중견기업</option>
												<option value="중소기업">중소기업</option>
												<option value="외국계">외국계</option>
												<option value="공기업">공기업</option>
												<option value="공사기업">공사기업</option>
											</select>
										</div>
									</div>
									<div className="row g-3 mb-4">
										<div className="col-6">
											<h6 className="mb-2 text-1000">직원수</h6>
											<input className="form-control" type="text" placeholder="직원수" value={componentData.employee_quantity} onChange={handleEmpQuantityChange} />
										</div>
										<div style={{ width: "48%" }}>
											<h6 className="mb-2 text-1000">설립일</h6>

											<div className="date-picker-div d-flex align-items-center">
												<i className="fas fa-calendar-alt"></i>
												<DatePicker selected={selectedDate} onChange={handleDateChange} value={componentData.establishment_date} dateFormat="yyyy/MM/dd" className="form-control mx-2" placeholderText="날짜 선택" />
											</div>
										</div>
									</div>
									<div className="row g-3">
										<div className="col-12">
											<h6 className="mb-2 text-1000">메모</h6>
											<input className="form-control" type="text" placeholder="관련 메모 및 소개" value={componentData.detail} onChange={handleDetailChange} />
										</div>
									</div>
								</div>

								<div className="tab-pane fade h-100" id="restockTabContent" role="tabpanel" aria-labelledby="restockTab">
									<div className="row g-3 mb-2">
										<div className="col-6">
											<h6 className="mb-2 text-1000">
												기업평가<span className="fs--1">(A~D)</span>
											</h6>
											<select className="form-select" aria-label="qualityGrade" value={componentData.supple_level} onChange={handleRateChange}>
												<option value="" selected disabled>
													기업 평가
												</option>
												<option value="A">A</option>
												<option value="B">B</option>
												<option value="C">C</option>
												<option value="D">D</option>
											</select>
										</div>
										<div className="col-6">
											<h6 className="mb-2 text-1000">상장 유형</h6>
											<select className="form-select mb-3" aria-label="상장 유형" value={componentData.stock_type} onChange={handleStockTypeChange}>
												<option value="" selected disabled>
													상장 유형
												</option>
												<option value="KOSPI">KOSPI</option>
												<option value="KOSDAQ">KOSDAQ</option>
												<option value="NASDAQ">NASDAQ</option>
												<option value="S&P">S&P</option>
												<option value="SHS">SHS</option>
												<option value="해당없음">해당없음</option>
											</select>
										</div>
									</div>
									<div className="row g-3 mb-4">
										<div className="col-6">
											<h6 className="mb-2 text-1000">
												영업이익<span className="fs--1">(억원)</span>
											</h6>
											<input className="form-control" type="text" placeholder="영업이익" value={componentData.profit} onChange={handleProfitChange} />
										</div>
										<div style={{ width: "48%" }}>
											<h6 className="mb-2 text-1000">
												당기순이익<span className="fs--1">(억원)</span>
											</h6>
											<input className="form-control" type="text" placeholder="당기순이익" value={componentData.net_profit} onChange={handleNetProfitChange} />
										</div>
									</div>
									<div className="row g-3">
										<div className="col-6">
											<h6 className="mb-2 text-1000">
												부채비율<span className="fs--1">(%)</span>
											</h6>
											<input className="form-control" type="text" placeholder="부채비율" value={componentData.debt_ratio} onChange={handleDebtRatioChange} />
										</div>
										<div style={{ width: "48%" }}>
											<h6 className="mb-2 text-1000">
												시가총액<span className="fs--1">(억원)</span>
											</h6>
											<input className="form-control" type="text" placeholder="시가총액" value={componentData.market_cap} onChange={handleMarketCapChange} />
										</div>
									</div>
								</div>
								<div className="tab-pane fade h-100" id="shippingTabContent" role="tabpanel" aria-labelledby="shippingTab">
									<div className="d-flex flex-column h-100">
										<div className="flex-1">
											<div className="mb-3">
												<div className="form-check mb-1 mt-4">
													<input className="form-check-input" type="radio" name="shippingRadio" id="notContractRadio" checked={!componentData.isContracted ? "checked" : ""} />
													<label className="form-check-label fs-0 text-900 d-flex align-items-center" htmlFor="notContractRadio">
														계약 미진행 <span className="badge badge-phoenix badge-phoenix-warning fs--1 ms-2">Default</span>
													</label>
												</div>
												<div className="ps-4">
													<p className="text-800 fs--1 mb-5">해당 부품에 대해 공급사와 계약이 확정되지 않은 경우에 선택하세요. 해당 설정은 기본값으로 설정되며 이후에 계약 확정시 자동으로 반영됩니다.</p>
												</div>
											</div>
											<div className="mb-2">
												<div className="form-check mb-1">
													<input className="form-check-input" type="radio" name="shippingRadio" id="contractRadio" onChange={(e) => handleContractRadioChange(e, true)} />
													<label className="form-check-label fs-0 text-900" htmlFor="contractRadio">
														계약 진행
													</label>
												</div>
												<div className="ps-4">
													<p className="text-800 fs--1 mb-0">해당 부품에 대해 공급사와 계약이 확정된 경우에 선택하세요. 해당 설정은 공급사 조회 페이지에서 수정이 가능합니다.</p>
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
			{showModal && <ModalGetCo show={showModal} handleClose={closeModal} />}
		</div>
	);
};

export default DetailCo;
