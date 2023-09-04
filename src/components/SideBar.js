import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../Context";

const SideBar = () => {
	const { navbarCollapsed, setNavbarCollapsed } = useAppContext();

	const handleNavbaToggler = () => {
		setNavbarCollapsed((prev) => !prev);
	};

	useEffect(() => {
		const html = document.querySelector("html");
		const content = document.querySelector(".content");

		if (html && content) {
			if (navbarCollapsed) {
				html.classList.add("navbar-vertical-collapsed");
				content.style.marginLeft = "0px";
				content.style.paddingRight = "10px";
				content.style.paddingLeft = "10px";
			} else {
				html.classList.remove("navbar-vertical-collapsed");
				content.style.marginLeft = "254px";
			}
		}
	}, [navbarCollapsed]);

	return (
		<nav className="navbar navbar-vertical navbar-vertical-collapsed navbar-expand-lg badge-light" style={{ minHeight: "100%", height: "1050px", position: "fixed" }}>
			<div className="collapse navbar-collapse" id="navbarVerticalCollapse">
				<div className="navbar-vertical-content">
					<ul className="navbar-nav flex-column" id="navbarVerticalNav">
						<li className="nav-item">
							<h6 className="navbar-vertical-label text-info">SCM</h6>

							<div className="nav-item-wrapper">
								<a className="nav-link dropdown-indicator label-1" href="#nv-register" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-register">
									<div className="d-flex align-items-center">
										<div className="dropdown-indicator-icon">
											<span className="fas fa-caret-right"></span>
										</div>
										<span className="nav-link-icon ms-1">
											<i className="fa-regular fa-pen-to-square"></i>
										</span>
										<span className="nav-link-text">등록(Registration)</span>
									</div>
								</a>
								<div className="parent-wrapper label-1">
									<ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-register">
										<li className="collapsed-nav-item-title d-none">등록(Registration)</li>
										<li className="nav-item">
											<Link className="nav-link" to="/addSupplier" data-bs-toggle="" aria-expanded="false">
												<div className="d-flex align-items-center">
													<span className="nav-link-text">부품-공급사 등록</span>
												</div>
											</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" to="/addRetailer" data-bs-toggle="" aria-expanded="false">
												<div className="d-flex align-items-center">
													<span className="nav-link-text">제품-고객사 등록</span>
												</div>
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div className="nav-item-wrapper">
								<a className="nav-link dropdown-indicator label-1" href="#nv-search" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-e-commerce">
									<div className="d-flex align-items-center">
										<div className="dropdown-indicator-icon">
											<span className="fas fa-caret-right"></span>
										</div>
										<span className="nav-link-icon ms-1">
											<i className="fa-regular fa-rectangle-list"></i>
										</span>
										<span className="nav-link-text">조회(Search)</span>
									</div>
								</a>
								<div className="parent-wrapper label-1">
									<ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-search">
										<li className="collapsed-nav-item-title d-none">조회(Registration)</li>
										<li className="nav-item">
											<Link className="nav-link" to="/supplierDetail" data-bs-toggle="" aria-expanded="false">
												<div className="d-flex align-items-center">
													<span className="nav-link-text">공급사 조회</span>
												</div>
											</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" to="/retailerDetail" data-bs-toggle="" aria-expanded="false">
												<div className="d-flex align-items-center">
													<span className="nav-link-text">고객사 조회</span>
												</div>
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div className="nav-item-wrapper">
								<a className="nav-link dropdown-indicator label-1" href="#nv-compare" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-CRM">
									<div className="d-flex align-items-center">
										<div className="dropdown-indicator-icon">
											<span className="fas fa-caret-right"></span>
										</div>
										<span className="nav-link-icon ms-1">
											<i className="fa-solid fa-scale-unbalanced-flip"></i>
										</span>
										<span className="nav-link-text">비교분석(Comparison)</span>
									</div>
								</a>

								<div className="parent-wrapper label-1">
									<ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-compare">
										<li className="collapsed-nav-item-title d-none">비교분석(Comparison)</li>
										<li className="nav-item">
											<Link className="nav-link" to="/compareSupplier" data-bs-toggle="" aria-expanded="false">
												<div className="d-flex align-items-center">
													<span className="nav-link-text">공급 제안 비교</span>
												</div>
											</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" to="/compareRetailer" data-bs-toggle="" aria-expanded="false">
												<div className="d-flex align-items-center">
													<span className="nav-link-text">판매 예측 비교</span>
												</div>
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div className="nav-item-wrapper">
								<a className="nav-link dropdown-indicator label-1" href="#nv-statistics" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-project-management">
									<div className="d-flex align-items-center">
										<div className="dropdown-indicator-icon">
											<span className="fas fa-caret-right"></span>
										</div>
										<span className="nav-link-icon ms-1">
											<i className="fa-solid fa-chart-line"></i>
										</span>
										<span className="nav-link-text">통계(Statistics)</span>
									</div>
								</a>
								<div className="parent-wrapper label-1">
									<ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-statistics">
										<li className="collapsed-nav-item-title d-none">통계(Statistics)</li>
										<li className="nav-item">
											<Link className="nav-link" to="/showChart" data-bs-toggle="" aria-expanded="false">
												<div className="d-flex align-items-center">
													<span className="nav-link-text">통합 통계</span>
												</div>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</li>

						<hr className="navbar-vertical-line" />
					</ul>
				</div>
			</div>

			<div className="navbar-vertical-footer">
				<button className="btn navbar-vertical-toggle fw-bold w-100 white-space-nowrap d-flex align-items-center" onClick={handleNavbaToggler} id="NavbarToggleBtn">
					<span className="uil uil-left-arrow-to-left fs-0"></span>
					<span className="uil uil-arrow-from-right fs-0"></span>
					<span className="navbar-vertical-footer-text ms-2">사이드바 접기</span>
				</button>
			</div>
		</nav>
	);
};

export default SideBar;
