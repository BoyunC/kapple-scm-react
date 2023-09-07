import SearchBar from "../components/event/compare/SearchBar";
import CompanyChart from "../components/event/compare/CompanyChart";
import ComparsionChart from "../components/event/compare/ComparsionChart";
import { useState,useEffect } from "react";
import axios from 'axios';
import Modal from "../components/event/compare/Modal";

const CompareSupplier = () => {
	const [searchContents,setSearchContents] = useState('');
	const [checked,setChecked] =useState('')
	const [supplNo,setSupplNo] = useState('');
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [contract,setContract] =useState({});

	useEffect(()=>{
	},[searchContents]);
	// useEffect(()=>{
	// },[supplNo]);

	return (
		<div className="container mt-100">
			<Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} proposal_no={contract}/>
			<SearchBar title={"공급 제안"} setSrch={setSearchContents}/>
			<div className="row">
				<div className="col-lg">
						<CompanyChart retailer={false} item={searchContents} setChecked={setChecked} setSupplNo={setSupplNo} />
				</div>
				<div className="col-lg">
						<ComparsionChart retailer={false} item={searchContents} supplNo={supplNo} checked={checked} setModalIsOpen={setModalIsOpen} setContract={setContract}/>
					{/* <Table columns={columns} data={data}/> */}
				</div>
			</div>
		</div>
	);
};

export default CompareSupplier;
