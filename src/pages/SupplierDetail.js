import { useState } from "react";
import SearchCo from "../components/event/select/SearchCo";
import SuggestList from "../components/event/select/SuggestList";
import CoDetail from "../components/event/select/CoDetail";
import axios from "axios";
import { async } from "q";

const SupplierDetail = () => {
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

	const [proposals, setProposals] = useState([]);

	const updateSupplierData = (newData) => {
		setSupplierData((prevData) => ({
			...prevData,
			...newData,
		}));
	};

	const handleSupplierClick = (supplier) => {
		//setSelectedComponentName(supplier.);

		setSupplierData((prevData) => ({
			...prevData,
			...supplier,
		}));

		console.log(supplierData.suppl_no);

		axios
			.get(`http://localhost:8081/proposal2/${supplierData.suppl_no}`)
			.then((response) => {
				setProposals(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
			});
	};

	return (
		<div>
			<div className="max-vh-100">
				<div className="mx-lg-n4 mt-1">
					<div className="row g-3 ms-3 mx-3">
						{/* 왼쪽카드 */}
						<SearchCo supplierData={supplierData} handleSupplierClick={handleSupplierClick} />

						{supplierData.suppl_no !== "" ? (
							<>
								{/* 가운데 카드 */}
								<CoDetail supplierData={supplierData} updateSupplierData={updateSupplierData} />

								{/* 오른쪽 카드 */}
								<SuggestList suppl_no={supplierData.suppl_no} proposals={proposals} handleSupplierClick={handleSupplierClick} />
							</>
						) : (
							<div style={{ width: "79%" }}>
								<div className="card mb-2" style={{ height: "830px" }}>
									<div className="card-body text-center">
										<img height={"50%"} src={"/resources/assets/img/spot-illustrations/22_2.png"} alt="" style={{ marginTop: "100px" }} />
										<div className="w-100 mt-2 row align-items-center g-3 text-center text-xxl-start">
											<p className="text-center">왼쪽의 검색 기능을 이용해 조회하고자 하는 공급사를 선택해주세요.</p>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>

					{/* 토스트*/}
					<div className="position-fixed " style={{ zIndex: "5" }}>
						<div className="toast show align-items-center text-white bg-info border-0" style={{ position: "fixed", top: "-10px", right: "20px", width: "auto", maxWidth: "500px" }} role="alert" data-bs-autohide="false" aria-live="assertive" aria-atomic="true" id="checkRegiToast">
							<div className="d-flex">
								<div className="toast-body">부품별 공급사가 정상적으로 등록되었습니다.</div>

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
												공급사명
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

			{/*  모달창 : 부품 추가 모달창  */}
			<div className="modal fade" id="insertCompoentModal" tabindex="-1" aria-labelledby="RegisterCheckModalLabel" aria-hidden="true" style={{ display: "none" }}>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="RegisterCheckModalLabel">
								부품 추가
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
								부품명
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
								부품상세
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

export default SupplierDetail;
