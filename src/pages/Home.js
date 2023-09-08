const Home = () => {
	return (
		<div>
			<div className="pb-2">
				<div className="card mb-5">
					<div className="card-header hover-actions-trigger d-flex justify-content-center align-items-end position-relative mb-7 mb-xxl-0" style={{ minHeight: "214px" }}>
						<div className="bg-holder rounded-top" style={{ backgroundImage: "url(/resources/assets/img/generic/cover-photo.png)" }}></div>
						<input className="d-none" id="upload-cover-image" type="file" />
						<label className="cover-image-file-input" htmlFor="upload-cover-image"></label>
						<div className="hover-actions end-0 bottom-0 pe-1 pb-2 text-white">
							<span className="fa-solid fa-camera me-2 overlay-icon"></span>
						</div>

						<input className="d-none" id="upload-porfile-picture" type="file" />
						<div className="hoverbox feed-profile" style={{ width: "150px", height: "150px" }}>
							<div className="hoverbox-content bg-black rounded-circle d-flex flex-center z-index-1" style={{ "--phoenix-bg-opacity": ".56" }}>
								<span className="fa-solid fa-camera fs-7 text-300 light"></span>
							</div>
							<div className="position-relative bg-400 rounded-circle cursor-pointer d-flex flex-center mb-xxl-7">
								<div className="avatar avatar-5xl">
									<img className="rounded-circle rounded-circle bg-white img-thumbnail shadow-sm" src="/resources/assets/img/team/9.webp" alt="" />
								</div>
								<label className="w-100 h-100 position-absolute z-index-1" htmlFor="upload-porfile-picture"></label>
							</div>
						</div>
					</div>
					<div className="card-body">
						<div className="row justify-content-xl-between">
							<div className="col-auto">
								<div className="d-flex flex-wrap mb-3 align-items-center">
									<h2 className="me-2">김지수(Kim Jisoo)</h2>
									<span className="fw-semi-bold fs-1 text-500">개발부서 /전자 결재 솔루션팀</span>
								</div>
								<div className="mb-5">
									<div className="d-md-flex align-items-center">
										<div className="d-flex align-items-center">
											<span className="fa-solid fa-user-group fs--1 text-700 me-2 me-lg-1 me-xl-2"></span>
											<a className="text-1100" href="#!">
												<span className="fs-1 fw-bold text-600 hover-text-1100">
													17 <span className="fw-semi-bold ms-1 me-4">Followers</span>
												</span>
											</a>
										</div>
										<div className="d-flex align-items-center">
											<span className="fa-solid fa-user-check fs--1 text-700 me-2 me-lg-1 me-xl-2"></span>
											<a className="text-1100" href="#!">
												<span className="fs-1 fw-bold text-600 hover-text-1100">
													21 <span className="fw-semi-bold ms-1 me-4">Following</span>
												</span>
											</a>
										</div>
										<div className="d-flex align-items-center">
											<span className="fa-solid fa-location-dot fs--1 text-700 me-2 me-lg-1 me-xl-2"></span>
											<a className="text-1100" href="#!">
												<span className="fs-1 fw-semi-bold text-600 hover-text-1100">강남구, 서울</span>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-auto">
								<div className="row g-2">
									<div className="col-auto order-xxl-1">
										<button className="btn btn-phoenix-primary lh-1">
											<span className="fa-solid fa-message me-2"></span>메세지 확인
										</button>
									</div>
									<div className="col-auto">
										<div className="position-static">
											<button className="btn btn-phoenix-secondary lh-1" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
												<span className="fa-solid fa-chevron-down me-2"></span> 더보기
											</button>
											<div className="dropdown-menu dropdown-menu-end py-2">
												<a className="dropdown-item" href="#!">
													프로필 공유
												</a>
												<a className="dropdown-item" href="#!">
													계정 정보 수정
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<hr className="my-1 mb-3" />
						<div className="d-flex flex-wrap">
							<div className="d-flex flex-column flex-lg-row align-items-center me-5">
								<h4 className="me-lg-3">메신저</h4>
								<a href="#!">@Jisoo</a>
							</div>
							<div className="d-flex flex-column flex-lg-row align-items-center me-5">
								<h4 className="me-lg-3">이메일</h4>
								<a href="#!">Jisoo@kapple.com</a>
							</div>
							<div className="d-flex flex-column flex-lg-row align-items-center">
								<h4 className="me-lg-3">근무위치</h4>
								<span className="text-700">삼성캠퍼스 5층 전자 결재 솔루션팀</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="card p-5">
				<div className="ms-4 col-4">
					<h3 className="text-1000 mb-4 fw-bold">활동 및 근무 내역</h3>
					<div className="timeline-vertical timeline-with-details">
						<div className="timeline-item position-relative">
							<div className="row g-md-3">
								<div className="col-12 col-md-auto d-flex">
									<div className="timeline-item-date order-1 order-md-0 me-md-4">
										<p className="fs--2 fw-semi-bold text-600 text-end">
											01 DEC, 2023
											<br className="d-none d-md-block" /> 10:30 AM
										</p>
									</div>
									<div className="timeline-item-bar position-md-relative me-3 me-md-0 border-400">
										<div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-100">
											<span className="fa-solid fa-chess text-primary-600 fs--2 dark__text-primary-300"></span>
										</div>
										<span className="timeline-bar border-end border-dashed border-400"></span>
									</div>
								</div>
								<div className="col">
									<div className="timeline-item-content ps-6 ps-md-3">
										<h5 className="fs--1 lh-sm">전자 결재 결재 라인 설계 2차 회의</h5>
										<p className="fs--1">
											by{" "}
											<a className="fw-semi-bold" href="#!">
												Shantinon Mekalan
											</a>
										</p>
										<a className="fs--1 mb-5">회의록 보기</a>
									</div>
								</div>
							</div>
						</div>
						<div className="timeline-item position-relative">
							<div className="row g-md-3">
								<div className="col-12 col-md-auto d-flex">
									<div className="timeline-item-date order-1 order-md-0 me-md-4">
										<p className="fs--2 fw-semi-bold text-600 text-end">
											05 DEC, 2023
											<br className="d-none d-md-block" /> 12:30 AM
										</p>
									</div>
									<div className="timeline-item-bar position-md-relative me-3 me-md-0 border-400">
										<div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-100">
											<span className="fa-solid fa-dove text-primary-600 fs--2 dark__text-primary-300"></span>
										</div>
										<span className="timeline-bar border-end border-dashed border-400"></span>
									</div>
								</div>
								<div className="col">
									<div className="timeline-item-content ps-6 ps-md-3">
										<h5 className="fs--1 lh-sm">부서 총괄 회의 : 연간 기획 안내</h5>
										<p className="fs--1">
											by{" "}
											<a className="fw-semi-bold" href="#!">
												Bookworm22
											</a>
										</p>
										<a className="fs--1 mb-5">자료 보기</a>
									</div>
								</div>
							</div>
						</div>
						<div className="timeline-item position-relative">
							<div className="row g-md-3">
								<div className="col-12 col-md-auto d-flex">
									<div className="timeline-item-date order-1 order-md-0 me-md-4">
										<p className="fs--2 fw-semi-bold text-600 text-end">
											15 DEC, 2023
											<br className="d-none d-md-block" /> 2:30 AM
										</p>
									</div>
									<div className="timeline-item-bar position-md-relative me-3 me-md-0 border-400">
										<div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-100">
											<span className="fa-solid fa-dungeon text-primary-600 fs--2 dark__text-primary-300"></span>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="timeline-item-content ps-6 ps-md-3">
										<h5 className="fs--1 lh-sm">전자 결재 신규 프로젝트에 팀원으로 등록되었습니다.</h5>
										<p className="fs--1">
											by{" "}
											<a className="fw-semi-bold" href="#!">
												Sharuka Nijibum
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
