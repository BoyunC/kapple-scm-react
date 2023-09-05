import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import Graph from "./Graph";
import Star from "./Star";
import DefectiveRate from "./DefectiveRate";
import Table from "./Table";


const ComparsionChart = ({ retailer,item,supplNo,checked}) => {
	const suplHeaders = [
		{ accessor: "proposal_no", Header: "no" },
		{ accessor: "supplier.suppl_name", Header: "회사이름" },
		{ accessor: "component.compo_name", Header: "부품이름" },
		{ accessor: "price", Header: "가격" },
		{ accessor: "quantity", Header: "수량" },
		{ accessor: "defective_rate", Header: "불량률", Cell: ({ cell: { value } }) => <DefectiveRate defective={value} /> },
		{ accessor: "quality_grade", Header: "품질등급", Cell: ({ cell: { value } }) => <Star quality={value} /> },
		{ accessor: "prod_period", Header: "생산기간" },
	];
	const reHeaders = [
		{ accessor: "no", Header: "no" },
		{ accessor: "name", Header: "회사이름" },
		{ accessor: "productName", Header: "상품이름" },
		{ accessor: "predictAmount", Header: "예측판매수량" },
		{ accessor: "purchasingGrade", Header: "구매자등급" },
		{ accessor: "price", Header: "가격" },
		{ accessor: "transportGrade", Header: "운임등급" },
	];
	const columns = useMemo(() => (retailer ? reHeaders : suplHeaders), []);
	const [datas, setDatas] = useState([]);
	const data = useMemo(() => datas, [datas]);
	const [names,setNames]=useState([]);
	const [allProposals,setAllProposals] = useState([]);
	

	const getContract = () => {
		
		axios.get(`http://localhost:8081/proposal/${item}/${supplNo}`).then((res) => {
			console.log(res.data);
			let arr=[...datas];
			let name=[...names];
			let proposal=[];
			let p={};
			let proposals=[...allProposals];
			if(checked){
				arr.push(res.data);
				name.push(res.data.supplier.suppl_name);
				proposal.push(res.data.price);
				proposal.push(res.data.quantity);
				proposal.push(res.data.defective_rate);
				proposal.push(parseInt(res.data.quality_grade));
				proposal.push(parseInt(res.data.prod_period));
				p.value=proposal;
				p.name=res.data.supplier.suppl_name;
				proposals.push(proposal);
			}else{
				let index=arr.findIndex(e=>e.proposal_no===res.data.proposal_no);
				arr.splice(index,1);
				name.splice(index,1);
				proposals.splice(index,1);
			}
			//console.log(arr);
			setDatas(arr);
			setNames(name);
			setAllProposals(proposals);
		});
	};
	const getPredict = () => {
		axios.get("http://localhost:3010/predicts").then((res) => {
			setDatas(res.data);
		});
	};

	useEffect(() => {
		if(item!==''&&supplNo!==''){
			if (retailer) {
				getPredict();
			} else {
				getContract();
			}
		}
	}, [supplNo,checked]);

	return (

		<div className="mx-lg-n3 mt-3">
			<div className="row g-3">
				{/* ... */}
				<div className="col-12 col-6 col-6 min-vh-75">
					<div className="card h-100">
						<div className="card-body">
							<div className="card-title mb-1">
								<h3 className="text-1100">{retailer ? "판매 예측 " : "공급 제안 "}비교</h3>
							</div>
							<p className="text-700 mb-4">{retailer ? "판매 예측 " : "공급 제안 "}설명</p>

							<div id="tableComparsionS">
								<div className="table-responsive">
									<Table columns={columns} data={data} flag={true} />
								</div>
							</div>
							<div>
								<Graph retailer={retailer} names={names} proposals={allProposals}/>
							</div>
						</div>
					</div>
				</div>
				{/* ... */}
			</div>
		</div>

	);
};

export default ComparsionChart;
