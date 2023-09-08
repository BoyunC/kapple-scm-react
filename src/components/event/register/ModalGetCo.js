import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SearchCo from "../select/SearchCo";
import axios from "axios";

const ModalGetCo = ({ show, handleClose }) => {
	const [searchKeyword, setSearchKeyword] = useState("");
	const [suppliers, setSuppliers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;

	const paginate = (items, pageNumber, pageSize) => {
		const startIndex = (pageNumber - 1) * pageSize;
		return items.slice(startIndex, startIndex + pageSize);
	};

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	const goToPreviousPage = () => {
		if (currentPage > 1) {
			handlePageChange(currentPage - 1);
		}
	};

	const goToNextPage = () => {
		const totalPages = Math.ceil(suppliers.length / itemsPerPage);
		if (currentPage < totalPages) {
			handlePageChange(currentPage + 1);
		}
	};

	const handleSearch = () => {};

	const [supplierData, setSupplierData] = useState({
		suppl_no: "",
		suppl_name: "",
		business_no: "",
		phone_number: "",
		business_type: "",
		business_item: "",
		address: "",
		detail: "",
		is_contracted: "",
		sp_created_at: "",
		sp_updated_at: "",

		representative: "",
		company_type: "",
		employee_quantity: "",
		establishment_date: "",

		suppl_level: "",
		stock_type: "",
		profit: "",
		net_profit: "",
		debt_ratio: "",
		market_cap: "",
		website: "",

		responseLogo: {},
	});

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

	const handleSupplierClick = (supplier) => {
		setSupplierData((prevData) => ({
			...prevData,
			...supplier,
		}));

		console.log(supplierData.suppl_no);
	};

	return (
		<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
			<Modal.Header closeButton>
				<Modal.Title>공급사 불러오기</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="form-icon-container mb-5 mt-1 d-flex">
					<div className="flex-grow-1 me-1">
						<input className="form-control form-icon-input" type="text" placeholder="공급사명" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
						<span className="fa-regular fa-building text-700 fs--1 form-icon"></span>
					</div>
					<button className="btn btn-primary btn-sm" onClick={handleSearch}>
						검색
					</button>
				</div>
				<div className="card h-75 overflow-auto" style={{ overflow: "scroll", "-webkit-overflow-scrolling": "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}>
					<div>
						{paginate(suppliers, currentPage, itemsPerPage).map((supplier) => (
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
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					닫기
				</Button>
				<Button variant="primary" onClick={handleClose}>
					완료
				</Button>
				<div className="d-flex align-items-center">
					<Button variant="outline-primary" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
						이전
					</Button>
					<span className="mx-2">
						페이지 {currentPage} / {Math.ceil(suppliers.length / itemsPerPage)}
					</span>
					<Button variant="outline-primary" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(suppliers.length / itemsPerPage)}>
						다음
					</Button>
				</div>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalGetCo;
