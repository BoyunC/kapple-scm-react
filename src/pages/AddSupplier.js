import { useState } from "react";
import DetailCo from "../components/event/register/DetailCo";
import DetailItem from "../components/event/register/DetailItem";
import SearchBox from "../components/event/register/SearchBox";

const AddSupplier = () => {
	const [selectedComponentName, setSelectedComponentName] = useState("");

	const [componentData, setComponentData] = useState({
		price: "",
		quantity: "",
		defectRate: "",
		qualityGrade: "A+",
		productionPeriod: "",
	});

	const [uploadedFiles, setUploadedFiles] = useState([]);

	const handleComponentClick = (componentName) => {
		setSelectedComponentName(componentName);
	};

	const updateComponentData = (newData) => {
		setComponentData({ ...componentData, ...newData });
	};

	return (
		<div>
			<div className="max-vh-100">
				<div className="mx-lg-n4 mt-1">
					<div className="row g-3 flex-between-end mb-4 mx-3">
						<div className="col-auto">
							<h3 className="mb-2">부품별 공급사 등록</h3>
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
								공급사 등록
							</button>
						</div>
					</div>

					<div className="row g-3 ms-3 mx-3">
						{/* 왼쪽카드 */}
						<div className="col-3 min-vh-75">
							<SearchBox onComponentClick={handleComponentClick} />
						</div>

						{/* 가운데 카드 */}
						<div className="col-4 min-vh-75 ">
							<DetailItem componentName={selectedComponentName} componentData={componentData} updateComponentData={updateComponentData} setUploadedFiles={setUploadedFiles} />
						</div>

						{/* 오른쪽 카드 */}
						<div className="col-5 min-vh-75">
							<DetailCo />
						</div>
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

export default AddSupplier;
