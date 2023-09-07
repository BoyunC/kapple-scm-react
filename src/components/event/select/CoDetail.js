import GoogleMapReact from "google-map-react";

const CoDeatail = () => {
	// const AnyReactComponent = ({ text }) => <div>{text}</div>;
	// const handleApiLoaded = (map, maps) => {
	// 	// use map and maps objects
	// };

	return (
		<div style={{ width: "29%", height: "760px" }}>
			<div className="card mb-2">
				<div className="card-body">
					<div className="row align-items-center g-3 text-center text-xxl-start">
						<div className="col-auto col-xxl-auto">
							<div className="avatar avatar-3xl">
								<img className="rounded-circle" src="resources/assets/img/brand2/dell.png" alt="" />
							</div>
						</div>
						<div className="col-12 col-sm-auto flex-1">
							<h3 className="fw-bolder mb-2">공급사명</h3>
							<p className="mb-0">기업설명</p>
							<a className="fw-bold" href="#!">
								웹사이트
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="card mb-3" style={{ height: "680px" }}>
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
							<div className="mb-4 mt-3">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-phone"> </span>
									<h5 className="text-1000 mb-0">전화번호</h5>
								</div>
								<a href="tel:+1234567890">+1234567890 </a>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-globe"></span>
									<h5 className="text-1000 mb-0">사업자번호</h5>
								</div>
								<a href="#!">www.bb.ru.com </a>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-building"></span>
									<h5 className="text-1000 mb-0">기업 구분</h5>
								</div>
								<div className="mb-2">
									<span className="badge badge-phoenix badge-phoenix-primary p-2 me-2">업태</span>
									<span className="mb-0 text-800 me-5">Large</span>
									<span className="badge badge-phoenix badge-phoenix-success p-2 me-2">종목</span>
									<span className="mb-0 text-800">Large </span>
								</div>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-postcard"></span>
									<h5 className="text-1000 mb-0">주소</h5>
								</div>
								<p className="mb-0 text-800">126</p>
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
						<div className="tab-pane fade" id="tab-profile" role="tabpanel" aria-labelledby="profile-tab"></div>
						<div className="tab-pane fade" id="tab-contact" role="tabpanel" aria-labelledby="contact-tab"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoDeatail;
