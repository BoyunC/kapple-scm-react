import SearchBar from "../components/event/compare/SearchBar";
import CompanyChart from "../components/event/compare/CompanyChart";
import ComparsionChart from "../components/event/compare/ComparsionChart";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../components/event/compare/Modal";
import { useParams } from "react-router";

const CompareSupplier = () => {
	const [searchContents, setSearchContents] = useState("");
	const [checked, setChecked] = useState("");
	const [comNo, setComNo] = useState("");
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [contract, setContract] = useState({});

	const { compo_name } = useParams();
	const { compo_no } = useParams();

	useEffect(() => {}, [searchContents]);
	// useEffect(()=>{
	// },[comNo]);

	useEffect(() => {
		setSearchContents(compo_name);
		setComNo(compo_no);

		// const fetchData = async () => {
		// 	searchContents(compo_name);
		// 	setComNo(compo_no);
		// 	try {
		// 		const response = await axios.get(`http://localhost:8081/suppliers2/${compo_name}/${compo_no}`);
		// 		const supplierData = response.data;
		// 		console.log(response.data);

		// 		setComponentData((prevData) => ({
		// 			...prevData,
		// 			...supplierData,

		// 		}));
		// 	} catch (error) {
		// 		console.error("Error fetching supplier data:", error);
		// 	}
		// };

		// fetchData();
	}, [compo_name, compo_no]);

	return (
		<div className="container mt-100">
			<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} proposal_no={contract} />
			<SearchBar title={"공급 제안"} setSrch={setSearchContents} />
			<div className="row">
				<div className="col-lg">
					<CompanyChart retailer={false} item={searchContents} setChecked={setChecked} setComNo={setComNo} />
				</div>
				<div className="col-lg">
					<ComparsionChart retailer={false} item={searchContents} comNo={comNo} checked={checked} setModalIsOpen={setModalIsOpen} setContract={setContract} />
					{/* <Table columns={columns} data={data}/> */}
				</div>
			</div>
		</div>
	);
};

export default CompareSupplier;
