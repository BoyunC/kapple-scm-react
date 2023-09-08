import axios from "axios";
import { useEffect, useState } from "react";

const SearchCo = ({ supplierData, handleSupplierClick }) => {
	const [suppliers, setSuppliers] = useState([]);
	const [tabContract, setTabContract] = useState(0);
	const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태 추가

	useEffect(() => {
		axios
			.get(`http://localhost:8081/suppliers2`)
			.then((response) => {
				setSuppliers(response.data);
			})
			.catch((error) => {
				console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
			});
	}, []);

	useEffect(() => {
		console.log(supplierData);
	}, [supplierData]);

	const handleSearch = () => {
		const filteredSuppliers = suppliers.filter((supplier) => supplier.suppl_name.includes(searchKeyword));

		setSuppliers(filteredSuppliers);
	};

	const filteredSuppliers = suppliers.filter((supplier) => {
		if (tabContract === 1) {
			return supplier.is_contracted === "1";
		} else if (tabContract === 2) {
			return supplier.is_contracted === "0";
		}

		return true;
	});

	return (
		<div className="min-vh-70 border-end" style={{ width: "21%", height: "840px" }}>
			<div className="col-auto mb-5">
				<h2 className="mb-2">공급사 상세 조회</h2>
				<h5 className="text-700 fw-semi-bold">Search Supplier Detail</h5>
			</div>
			<div className="form-icon-container mb-5 mt-1 d-flex">
				<div className="flex-grow-1 me-1">
					<input
						className="form-control form-icon-input"
						type="text"
						placeholder="공급사명"
						value={searchKeyword}
						onChange={(e) => setSearchKeyword(e.target.value)} // 검색어 입력 상자의 값 변경 시 검색어 상태 업데이트
					/>
					<span className="fa-regular fa-building text-700 fs--1 form-icon"></span>
				</div>
				<button className="btn btn-primary btn-sm" onClick={handleSearch}>
					검색
				</button>{" "}
				{/* 검색 버튼 클릭 시 필터링 함수 호출 */}
			</div>
			<ul className="nav nav-phoenix-pills mb-3 d-sm-none d-xl-flex" id="contactListTab" data-chat-thread-tab="data-chat-thread-tab" role="tablist">
				<li className="nav-item" role="presentation">
					<a className={`nav-link cursor-pointer ${tabContract === 0 ? "active" : ""}`} data-bs-toggle="tab" data-chat-thread-list="all" role="tab" aria-selected={tabContract === 0} onClick={() => setTabContract(0)}>
						전체
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a className={`nav-link cursor-pointer ${tabContract === 1 ? "active" : ""}`} data-bs-toggle="tab" role="tab" data-chat-thread-list="read" aria-selected={tabContract === 1} onClick={() => setTabContract(1)}>
						계약
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a className={`nav-link cursor-pointer ${tabContract === 2 ? "active" : ""}`} data-bs-toggle="tab" role="tab" data-chat-thread-list="unread" aria-selected={tabContract === 2} onClick={() => setTabContract(2)}>
						미계약
					</a>
				</li>
			</ul>
			<div className="card h-75 overflow-auto" style={{ overflow: "scroll", "-webkit-overflow-scrolling": "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}>
				<div>
					{filteredSuppliers.map((supplier) => (
						<div className="item-center m-3" key={supplier.suppl_no} onClick={() => handleSupplierClick(supplier)}>
							<button className="btn btn-phoenix-info p-2 w-100 border-100">
								<div className="d-flex justify-content-between ms-3">
									<div className="col-12 col-sm-auto">
										<img className="rounded-circle border border-3" width="75px" height="75px" src={`/savedFile/logo/supplier/${supplier.responseLogo.logo_name || "default.png"}`} alt="" />
									</div>
									<div className="flex-grow-1 align-self-center">
										<p className="fs-sm--1 mb-1 text-secondary">{supplier.suppl_no}</p>
										<h5 className="mb-1 mt-2 text-primary">{supplier.suppl_name}</h5>
										<span className="fs-sm--2 text-secondary">{supplier.business_type}</span>
										<span className="fs-sm--2 text-secondary ms-2">{supplier.business_item}</span>
									</div>
								</div>
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchCo;
