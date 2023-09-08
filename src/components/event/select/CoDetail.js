import GoogleMapReact from "google-map-react";

const CoDetail = ({ supplierData, updateSupplierData }) => {
	function getColorBySupplLevel(supplLevel) {
		switch (supplLevel) {
			case "A":
				return "badge-phoenix-primary";
			case "B":
				return "badge-phoenix-success";
			case "C":
				return "badge-phoenix-warning";
			case "D":
				return "badge-phoenix-danger";
			default:
				return "badge-phoenix-secondary";
		}
	}

	return (
		<div style={{ width: "29%", maxHeight: "800px", height: "800px" }}>
			<div className="card mb-2" style={{ maxHeight: "150px" }}>
				<div className="card-body">
					<div className="row align-items-center g-3 text-center text-xxl-start">
						<div className="col-auto col-xxl-auto">
							<div className="avatar avatar-3xl">
								<img className="rounded-circle border border-3" width="75px" height="75px" src={`/savedFile/logo/supplier/${supplierData.responseLogo.logo_name || "default.png"}`} alt="" />
							</div>
						</div>
						<div className="col-12 col-sm-auto flex-1">
							<h3 className="fw-bolder mb-2">{supplierData.suppl_name}</h3>
							<p className="mb-0 fs--1">{supplierData.detail}</p>
							<a className="fw-bold" href="#!">
								{supplierData.website}
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="card mb-3" style={{ maxHeight: "700px", height: "700px" }}>
				<div className="card-body">
					<div className="border-bottom d-flex justify-content-between align-items-center ">
						<div>
							<h4 className="card-title mb-1 mt-2 mb-3">공급사 상세정보</h4>
						</div>

						<button className="btn btn-primary btn-sm">
							<span className="fa-solid fa-check me-2"></span>수정
						</button>
					</div>

					<ul className="nav nav-underline" id="myTab" role="tablist">
						<li className="nav-item">
							<a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#tab-home" role="tab" aria-controls="tab-home" aria-selected="true">
								기본 정보
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#tab-profile" role="tab" aria-controls="tab-profile" aria-selected="false">
								상세 정보
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#tab-contact" role="tab" aria-controls="tab-contact" aria-selected="false">
								금융 정보
							</a>
						</li>
					</ul>
					<div className="tab-content mt-3" id="myTabContent">
						<div className="tab-pane fade show active" id="tab-home" role="tabpanel" aria-labelledby="home-tab">
							<div className="mb-4 mt-5">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-phone"> </span>
									<h5 className="text-1000 mb-0">전화번호</h5>
								</div>
								<a href="tel:+1234567890">{supplierData.phone_number}</a>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-globe"></span>
									<h5 className="text-1000 mb-0">사업자번호</h5>
								</div>
								<p className="mb-0 text-800">{supplierData.business_no}</p>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-building"></span>
									<h5 className="text-1000 mb-0">기업 구분</h5>
								</div>
								<div className="mb-2">
									<span className="badge badge-phoenix badge-phoenix-primary p-1 me-2">업태</span>
									<span className="mb-0 text-800 me-5">{supplierData.business_type}</span>
									<span className="badge badge-phoenix badge-phoenix-success p-1 me-2">종목</span>
									<span className="mb-0 text-800">{supplierData.business_item} </span>
								</div>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-map-marker-alt"></span>
									<h5 className="text-1000 mb-0">주소</h5>
								</div>
								<p className="mb-0 text-800">{supplierData.address}</p>
								<img className="border border-3 ms-2 mt-2" height="250px" src={`/resources/assets/img/map/samsung.png`} alt="" />
							</div>

							{/* <GoogleMapReact bootstrapURLKeys={{ key: "" }} defaultCenter={this.props.center} defaultZoom={this.props.zoom} yesIWantToUseGoogleMapApiInternals onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}>
								<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
							</GoogleMapReact> */}

							{/* <div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-dollar-alt"></span>
									<h5 className="text-1000 mb-0">Annual Revenue</h5>
								</div>
								<p className="mb-0 text-800">$12000 </p>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-clock"></span>
									<h5 className="text-1000 mb-0">Last contacted</h5>
								</div>
								<p className="mb-0 text-800">12 November 2021, 10:54 AM</p>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-file-check-alt"></span>
									<h5 className="text-1000 mb-0">Lead source</h5>
								</div>
								<p className="mb-0 text-800">Advertisement</p>
							</div>
							<div>
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-check-circle"></span>
									<h5 className="text-1000 mb-0">Lead status</h5>
								</div>
								<span className="badge badge-phoenix badge-phoenix-primary">New Lead</span>
							</div> */}
						</div>
						<div className="tab-pane fade" id="tab-profile" role="tabpanel" aria-labelledby="profile-tab">
							<div className="mb-4 mt-5">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-document-layout-left"> </span>
									<h5 className="text-1000 mb-0">기업 설명</h5>
								</div>
								<p>{supplierData.detail}</p>
							</div>
							<div className="mb-4 mt-3">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-check-circle"> </span>
									<h5 className="text-1000 mb-0">대표자</h5>
								</div>
								<p>{supplierData.representative}</p>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-building"></span>
									<h5 className="text-1000 mb-0">기업유형</h5>
								</div>
								<p className="mb-0 text-800">{supplierData.company_type}</p>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-lightbulb"></span>
									<h5 className="text-1000 mb-0">직원수</h5>
								</div>
								<p className="mb-0 text-800">{supplierData.employee_quantity}명</p>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-calender"></span>
									<h5 className="text-1000 mb-0">설립일</h5>
								</div>
								{new Intl.DateTimeFormat("ko-KR", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit",
								}).format(new Date(supplierData.establishment_date))}
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-calendar-alt"></span>
									<h5 className="text-1000 mb-0">공급사 등록일</h5>
								</div>
								{new Intl.DateTimeFormat("ko-KR", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit",
								}).format(new Date(supplierData.sp_created_at))}
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-calendar-alt"></span>
									<h5 className="text-1000 mb-0">공급사 최종 수정일</h5>
								</div>
								{new Intl.DateTimeFormat("ko-KR", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit",
								}).format(new Date(supplierData.sp_updated_at))}
							</div>
						</div>
						<div className="tab-pane fade" id="tab-contact" role="tabpanel" aria-labelledby="contact-tab">
							<div className="mb-4 mt-5">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-gold"> </span>
									<h5 className="text-1000 mb-0">기업 금융 평가</h5>
								</div>
								<span className={`badge badge-phoenix ${getColorBySupplLevel(supplierData.suppl_level)} px-4 me-2`}>{supplierData.suppl_level}</span>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-money-stack"></span>
									<h5 className="text-1000 mb-0">매출액</h5>
								</div>
								<p className="mb-0 text-800">{supplierData.market_cap.toLocaleString()}억원</p>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-money-withdraw"></span>
									<h5 className="text-1000 mb-0">영업이익</h5>
								</div>
								<p className="mb-0 text-800">
									{supplierData.profit.toLocaleString()}억원 {supplierData.net_profit <= supplierData.market_cap * 0.1 ? <span className="badge badge-phoenix badge-phoenix-danger p-1 me-2">10% ↓</span> : <span className="badge badge-phoenix badge-phoenix-primary p-1 me-2">10% ↑</span>}
								</p>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-money-bill"></span>
									<h5 className="text-1000 mb-0">당기순이익</h5>
								</div>
								<p className="mb-0 text-800">
									{supplierData.net_profit.toLocaleString()}억원 {supplierData.net_profit <= supplierData.market_cap * 0.1 ? <span className="badge badge-phoenix badge-phoenix-danger p-1 me-2">10% ↓</span> : <span className="badge badge-phoenix badge-phoenix-primary p-1 me-2">10% ↑</span>}
								</p>
							</div>

							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-percentage"></span>
									<h5 className="text-1000 mb-0">부채비율</h5>
								</div>
								<p className="mb-0 text-800">
									{supplierData.debt_ratio} {supplierData.debt_ratio >= 30 ? <span className="badge badge-phoenix badge-phoenix-danger p-1 me-2">위험</span> : <span className="badge badge-phoenix badge-phoenix-success p-1 me-2">안전</span>}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoDetail;
