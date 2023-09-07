import axios from "axios";
import { useEffect, useState } from "react";

const SearchCo = ({ supplierData, setSupplierData, onComponentClick }) => {
	const [suppliers, setSuppliers] = useState([]);

	const handleSupplierClick = (selectedSupplier) => {
		setSupplierData(selectedSupplier);
	};

	useEffect(() => {
		axios
			.get(`http://localhost:8081/suppliers2`)
			.then((response) => {
				setSuppliers(response.data);
				console.log(suppliers);
			})
			.catch((error) => {
				console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
			});
	}, [supplierData]);

	return (
		<div className="min-vh-70 border-end" style={{ width: "21%", height: "780px" }}>
			<div className="col-auto mb-5">
				<h2 className="mb-2">공급사 상세 조회</h2>
				<h5 className="text-700 fw-semi-bold">Search Supplier Detail</h5>
			</div>
			<div className="form-icon-container mb-5 mt-1 d-flex">
				<div className="flex-grow-1 me-1">
					<input className="form-control form-icon-input" type="text" placeholder="공급사명" />
					<span className="fa-regular fa-building text-700 fs--1 form-icon"></span>
				</div>
				<button className="btn btn-primary btn-sm">검색</button>
			</div>
			<ul className="nav nav-phoenix-pills mb-3 d-sm-none d-xl-flex" id="contactListTab" data-chat-thread-tab="data-chat-thread-tab" role="tablist">
				<li className="nav-item" role="presentation">
					<a className="nav-link cursor-pointer active" data-bs-toggle="tab" data-chat-thread-list="all" role="tab" aria-selected="true">
						전체
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a className="nav-link cursor-pointer" data-bs-toggle="tab" role="tab" data-chat-thread-list="read" aria-selected="false">
						계약
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a className="nav-link cursor-pointer" data-bs-toggle="tab" role="tab" data-chat-thread-list="unread" aria-selected="false">
						미계약
					</a>
				</li>
			</ul>
			<div className="card h-75 overflow-auto" style={{ overflow: "scroll", "-webkit-overflow-scrolling": "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}>
				<div>
					<div className="item-center m-3">
						<button className="btn btn-phoenix-info p-2 w-100 border-100">
							<div className="d-flex justify-content-between ms-3">
								<div className="col-12 col-sm-auto">
									<input className="d-none" id="avatarFile" type="file" />
									<label className="cursor-pointer avatar avatar-3xl" for="avatarFile">
										<img className="rounded-circle border border-3" src="resources/assets/img/brand2/dell.png" alt="" />
									</label>
								</div>
								<div className="flex-grow-1 align-self-center">
									<p className="fs-sm--1 mb-1 text-secondary">SUP0001</p>
									<h5 className="mb-1 mt-2 text-primary">공급사명</h5>
									<span className="fs-sm--2 text-secondary">업태</span>
									<span className="fs-sm--2 text-secondary ms-2">종목</span>
								</div>
							</div>
						</button>
					</div>
					<div className="item-center m-3">
						<button className="btn btn-phoenix-info p-2 w-100 border-100">
							<div className="d-flex justify-content-between ms-3">
								<div className="col-12 col-sm-auto">
									<input className="d-none" id="avatarFile" type="file" />
									<label className="cursor-pointer avatar avatar-3xl" for="avatarFile">
										<img className="rounded-circle border border-3" src="resources/assets/img/brand2/ibm.png" alt="" />
									</label>
								</div>
								<div className="flex-grow-1 align-self-center">
									<p className="fs-sm--1 mb-1 text-secondary">SUP0001</p>
									<h5 className="mb-1 mt-2 text-primary">공급사명</h5>
									<span className="fs-sm--2 text-secondary">업태</span>
									<span className="fs-sm--2 text-secondary ms-2">종목</span>
								</div>
							</div>
						</button>
					</div>
					<div className="item-center m-3">
						<button className="btn btn-phoenix-info p-2 w-100 border-100">
							<div className="d-flex justify-content-between ms-3">
								<div className="col-12 col-sm-auto">
									<input className="d-none" id="avatarFile" type="file" />
									<label className="cursor-pointer avatar avatar-3xl" for="avatarFile">
										<img className="rounded-circle border border-3" src="resources/assets/img/brand2/hp.png" alt="" />
									</label>
								</div>
								<div className="flex-grow-1 align-self-center">
									<p className="fs-sm--1 mb-1 text-secondary">SUP0001</p>
									<h5 className="mb-1 mt-2 text-primary">공급사명</h5>
									<span className="fs-sm--2 text-secondary">업태</span>
									<span className="fs-sm--2 text-secondary ms-2">종목</span>
								</div>
							</div>
						</button>
					</div>
					<div className="item-center m-3">
						<button className="btn btn-phoenix-info p-2 w-100 border-100">
							<div className="d-flex justify-content-between ms-3">
								<div className="col-12 col-sm-auto">
									<input className="d-none" id="avatarFile" type="file" />
									<label className="cursor-pointer avatar avatar-3xl" for="avatarFile">
										<img className="rounded-circle border border-3" src="resources/assets/img/brand2/oppo.png" alt="" />
									</label>
								</div>
								<div className="flex-grow-1 align-self-center">
									<p className="fs-sm--1 mb-1 text-secondary">SUP0001</p>
									<h5 className="mb-1 mt-2 text-primary">공급사명</h5>
									<span className="fs-sm--2 text-secondary">업태</span>
									<span className="fs-sm--2 text-secondary ms-2">종목</span>
								</div>
							</div>
						</button>
					</div>
					<div className="item-center m-3">
						<button className="btn btn-phoenix-info p-2 w-100 border-100">
							<div className="d-flex justify-content-between ms-3">
								<div className="col-12 col-sm-auto">
									<input className="d-none" id="avatarFile" type="file" />
									<label className="cursor-pointer avatar avatar-3xl" for="avatarFile">
										<img className="rounded-circle border border-3" src="resources/assets/img/brand2/discord.png" alt="" />
									</label>
								</div>
								<div className="flex-grow-1 align-self-center">
									<p className="fs-sm--1 mb-1 text-secondary">SUP0001</p>
									<h5 className="mb-1 mt-2 text-primary">공급사명</h5>
									<span className="fs-sm--2 text-secondary">업태</span>
									<span className="fs-sm--2 text-secondary ms-2">종목</span>
								</div>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchCo;
