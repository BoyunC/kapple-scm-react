import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import DetailCo from "../components/event/register/DetailCo";
import DetailItem from "../components/event/register/DetailItem";
import SearchBox from "../components/event/register/SearchBox";
import DraftOffcanvas from "../components/event/register/DraftOffcanvas";

export const ComponentDataContext = createContext();

const AddSupplier = () => {
	const { sppl_no } = useParams();
	const [selectedComponentName, setSelectedComponentName] = useState("");

	const [componentData, setComponentData] = useState({
		compo_no: "",
		compo_name: "",

		price: "",
		quantity: "",
		defective_rate: "",
		quality_grade: "",
		prod_period: "",
		pp_created_at: "",
		pp_updated_at: "",
		pp_status: "",

		suppl_no: "",
		suppl_name: "",
		business_no: "",
		phone_number: "",
		business_type: "",
		business_item: "",
		address: "",
		detail: "",
		is_contracted: "0",
		sp_created_at: "",
		sp_updated_at: "",

		representative: "",
		company_type: "",
		employee_quantity: "",
		establishment_date: "",

		supple_level: "",
		stock_type: "",
		profit: "",
		net_profit: "",
		debt_ratio: "",
		market_cap: "",

		created_at: new Date(),
		has_logo: false,
		has_file: false,
	});

	const [uploadedFiles, setUploadedFiles] = useState([]);

	useEffect(() => {
		console.log(componentData);
	}, [componentData]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`http://localhost:8081/suppliers2/${sppl_no}`);
				const supplierData = response.data;
				console.log(response.data);

				setComponentData((prevData) => ({
					...prevData,
					...supplierData,
				}));
			} catch (error) {
				console.error("Error fetching supplier data:", error);
			}
		};

		fetchData();
	}, [sppl_no]);

	const handleComponentClick = (componentName, compoId) => {
		setSelectedComponentName(componentName);

		setComponentData((prevData) => ({
			...prevData,
			compo_no: compoId,
			compo_name: componentName,
		}));
	};

	const updateComponentData = (newData) => {
		setComponentData({ ...componentData, ...newData });
		console.log(componentData);
	};

	const handleReset = () => {
		setComponentData({
			draft_no: "",

			compo_no: "",
			compo_name: "",
			price: "",
			quantity: "",
			defective_rate: "",
			quality_grade: "",
			prod_period: "",
			pp_created_at: "",
			pp_updated_at: "",
			pp_status: "",

			suppl_no: "",
			suppl_name: "",
			business_no: "",
			phone_number: "",
			business_type: "",
			business_item: "",
			address: "",
			detail: "",
			is_contracted: "0",
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

			created_at: new Date(),

			has_logo: false,
			has_file: false,
		});
	};

	// offcanvas
	const [showOffcanvas, setShowOffcanvas] = useState(false);
	const [drafts, setDrafts] = useState([]);

	const handleShow = () => {
		axios
			.get("http://localhost:8081/draft")
			.then((response) => {
				setDrafts(response.data);
				setShowOffcanvas(true);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	};

	const handleClose = () => setShowOffcanvas(false);

	const sendComponentDataToServer = () => {
		const serverUrl = "http://localhost:8081/draft";

		const dataToSend = {
			compo_no: componentData.compo_no,
			compo_name: componentData.compo_name,
			price: componentData.price,
			quantity: componentData.quantity,
			defective_rate: componentData.defective_rate,
			quality_grade: componentData.quality_grade,
			prod_period: componentData.prod_period,
			pp_created_at: componentData.pp_created_at,
			pp_updated_at: componentData.pp_updated_at,
			pp_status: componentData.pp_status,

			suppl_no: componentData.suppl_no,
			suppl_name: componentData.suppl_name,
			business_no: componentData.business_no,
			phone_number: componentData.phone_number,
			business_type: componentData.business_type,
			business_item: componentData.business_item,
			address: componentData.address,
			detail: componentData.detail,
			is_contracted: componentData.is_contracted,
			sp_created_at: componentData.sp_created_at,
			sp_updated_at: componentData.sp_created_at,

			representative: componentData.representative,
			company_type: componentData.company_type,
			employee_quantity: componentData.employee_quantity,
			establishment_date: componentData.establishment_date,

			suppl_level: componentData.suppl_level,
			stock_type: componentData.stock_type,
			profit: componentData.profit,
			net_profit: componentData.net_profit,
			debt_ratio: componentData.debt_ratio,
			market_cap: componentData.market_cap,
		};

		console.log(dataToSend);

		// Axios
		axios
			.post(serverUrl, dataToSend)
			.then((response) => {
				console.log("Data sent successfully:", response.data);
			})
			.catch((error) => {
				console.error("Error sending data:", error);
			});
	};

	return (
		<ComponentDataContext.Provider
			value={{
				selectedComponentName,
				componentData,
				uploadedFiles,
				handleComponentClick,
				updateComponentData,
				setUploadedFiles,
			}}
		>
			<div>
				<div className="max-vh-100">
					<div className="mx-lg-n4 mt-1">
						<div className="row g-3 flex-between-end mb-4 mx-3">
							<div className="col-auto">
								<h3 className="mb-2">부품별 공급사 등록</h3>
								<h6 className="text-700 fw-semi-bold">Registering as a Retailer for each product</h6>
							</div>
							<div className="col-auto">
								<button className="btn btn-outline-success  me-5 mb-1" type="button" onClick={handleShow}>
									임시 저장 목록
								</button>
								<button className="btn btn-outline-secondary  me-2 mb-1" type="button" onClick={sendComponentDataToServer}>
									임시 저장
								</button>
								<button className="btn btn-outline-danger  me-2 mb-1" type="button" onClick={handleReset}>
									초기화
								</button>
								<button className="btn btn-primary  me-1 mb-1" type="button">
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
								<DetailCo componentData={componentData} updateComponentData={updateComponentData} />
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

				{showOffcanvas && <DraftOffcanvas show={showOffcanvas} handleClose={handleClose} drafts={drafts} setComponentData={setComponentData} />}
			</div>
		</ComponentDataContext.Provider>
	);
};

export default AddSupplier;
