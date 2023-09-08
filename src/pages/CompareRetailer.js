import SearchBar from "../components/event/compare/SearchBar";
import CompanyChart from "../components/event/compare/CompanyChart";
import ComparsionChart from "../components/event/compare/ComparsionChart";
import { useState,useEffect } from "react";

const CompareRetailer = () => {
	const [searchContents,setSearchContents] = useState('');
	const [checked,setChecked] =useState('')
	const [comNo,setComNo] = useState('');
	const [contract,setContract] =useState({});
	useEffect(()=>{
	},[searchContents]);
	return (
		<div className="container-fluid">
			<SearchBar title={"판매 예측"} setSrch={setSearchContents}/>
			<div className="row">
				<div className="col-lg">
					<CompanyChart classification={"상품"} retailer={true} item={searchContents} setChecked={setChecked} setComNo={setComNo}/>
				</div>
				<div className="col-lg">
					<ComparsionChart retailer={true} item={searchContents} comNo={comNo} checked={checked}/>
				</div>
			</div>
		</div>
	);
};

export default CompareRetailer;
