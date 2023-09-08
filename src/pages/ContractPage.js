import { Card } from "react-bootstrap";
import FileUpload from "../components/event/register/FileUpload";
import axios from "axios";
import { useLocation, useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";


const ContractPage = () =>{
	const {proposal_no} = useParams();
	//const p = new URLSearchParams(proposal_no.search);
	// let pro=proposal_no.search.substr(1);
	//console.log(proposal_no);
	const history =useHistory();
	const [proposal,setProposal] = useState({
		component:{
			compo_name: "",
			compo_no: "",
			detail: "",
			unit: ""
		},
		defective_rate:0,
		price:0,
		prod_period:"",
		proposal_date:0,
		proposal_no:"",
		quality_grade:"",
		quantity: 0,
		supplier:{
			category: "",
			ceo_name: "",
			phone: "",
			suppl_name: "",
			suppl_no: "",
		},
		transport:{
			additional_condition: null,
			transport_category: null,
			transport_charge: null,
			transport_no: ""
		}
	});
	const [contract,setContract]=useState({
		contract_no:"",
		suppl_no:"",
		compo_no:"",
		start_date:"",
		end_date:"",
		contract_date:"",
		proposal_no:"",
	})
	const sDateHandler = (e)=>{
		
		setContract({...contract,start_date:e.target.value});
	}
	const eDateHandler = (e)=>{
		setContract({...contract,end_date:e.target.value});
	}
	const cDateHandler = (e)=>{
		setContract({...contract,contract_date:e.target.value});
	}
	const submitContract =()=>{
		setContract({...contract,
			contract_no:"",
			suppl_no:proposal.supplier.suppl_no,
			compo_no:proposal.component.compo_no,
			proposal_no:proposal.proposal_no
		})
		if(contract.suppl_no!==''){
			if(contract.contract_date!==''&&contract.start_date!==''&&contract.end_date!==''){
				axios.post(`http://localhost:8081/contract`,contract).then(()=>{
					console.log("완료");
					alert("완료");
					history.push('/contracts');
	
				})
			}else{
				alert("날짜를 입력해주세요");
			}

		}
		

	}
	const getProposal =() =>{
		axios.get(`http://localhost:8081/contract/${proposal_no}`).then((res)=>{
			setProposal(res.data);
			//console.log(res.data);
		})
	}
	useEffect(()=>{
		console.log(contract);

	},[contract])
	useEffect(()=>{
		if(proposal_no!==''){
			getProposal();
		}
	},[])
	
    return(
        <div className="container mt-100">   
		<div className="mb-4">
			<div className="d-flex flex-wrap gap-3">

					<div className="col-auto">
						<h3 className="mb-2">계약 체결</h3>
						<h6 className="text-700 fw-semi-bold">Sign a proposal</h6>
					</div>
					<div className="ms-auto">
						<button className="btn btn-primary" id="addSupplierBtn" onClick={submitContract}>
							<span className="fas fa-plus me-2"></span>계약
						</button>
						<button className="btn btn-primary ms-2" id="addProdutBtn">
							<span className="fas fa-plus me-2"></span>수정
						</button>
					</div>

			</div>
		</div>
			<div className="row g-3 ms-3 mx-3">
			<div className="col-6 min-vh-75 ">
            <Card style={{ height: "700px" }}>
			<div className="card-body ">
				<h4 className="card-title mb-0">부품 상세</h4>
				<p className="text-700 fs--1 mb-5 ms-1">Component Detail</p>
				<div className="row gx-3">

					<div className="col-12 d-flex justify-content-between">
						<div className="w-50">
							<h5 className="text-1000">부품번호</h5>
							<input className="form-control mb-xl-3" type="text"  value={proposal_no!==undefined?proposal.component.compo_no:''} readOnly={proposal_no===undefined?false:true} disabled={proposal_no===undefined?false:true}  />
						</div>
						<div className="w-50 ms-3">
							<h5 className="text-1000">부품이름</h5>
							<input className="form-control mb-xl-3" type="text" value={proposal_no!==undefined?proposal.component.compo_name:''} readOnly={proposal_no===undefined?false:true} disabled={proposal_no===undefined?false:true}/>
						</div>
						
					</div>
					<div className="col-12 d-flex justify-content-between">
						<div className="w-50">
							<h5 className="text-1000">단가</h5>
							<input className="form-control mb-xl-3" type="text"  value={proposal_no!==undefined?proposal.price:''} readOnly={proposal_no===undefined?false:true} disabled={proposal_no===undefined?false:true}/>
						</div>
						<div className="w-50 ms-3">
							<h5 className="text-1000">수량</h5>
							<input className="form-control mb-xl-3" type="text"  value={proposal_no!==undefined?proposal.quantity:''} readOnly={proposal_no===undefined?false:true} disabled={proposal_no===undefined?false:true}/>
						</div>
					</div>
					<div className="col-12 d-flex justify-content-between">
						<div className="w-50">
							<h5 className="text-1000">불량률</h5>
							<input className="form-control mb-xl-3" type="text" value={proposal_no!==undefined?proposal.defective_rate:''} readOnly={proposal_no===undefined?false:true} disabled={proposal_no===undefined?false:true}/>
						</div>
						<div className="w-50 ms-3">
							<h5 className="text-1000">생산기간(일)</h5>
							<input className="form-control mb-xl-3" type="text" value={proposal_no!==undefined?proposal.prod_period:''} readOnly={proposal_no===undefined?false:true} disabled={proposal_no===undefined?false:true}/>
						</div>
					</div>

					<div className="col-12 mb-2">
						<div className="d-flex flex-wrap mb-2">
							<h5 className="mb-0 text-1000 me-2">품질등급</h5>
						</div>
						<input className="form-control mb-xl-3" type="text" value={proposal_no!==undefined?proposal.quality_grade:''} readOnly={proposal_no===undefined?false:true} disabled={proposal_no===undefined?false:true}/>
					</div>

					<hr className="mb-2" /> 
					<div className="w-50">
							<h5 className="text-1000">계약 날짜</h5>
							<input className="form-control mb-xl-3" type="date" id="proposal_date" onChange={cDateHandler}/>
						</div>
					<div className="col-12 d-flex justify-content-between">
						<div className="w-50">
							<h5 className="text-1000">계약 시작일</h5>
							<input className="form-control mb-xl-3" type="date" onChange={sDateHandler}/>
						</div>
						<div className="w-50 ms-3">
							<h5 className="text-1000">계약 종료일</h5>
							<input className="form-control mb-xl-3" type="date" onChange={eDateHandler}/>
						</div>
					</div>
					
				</div>
			</div>
		</Card>
		</div>
		<div className="col-6 min-vh-75 ">
		<Card style={{ height: "700px" }}>
		<div className="card-body">
				<div className="d-flex justify-content-between">
					<div className="">
						<h4 className="card-title mb-0">공급사 상세</h4>
						<p className="text-700 fs--1 mb-5 ms-1">Supplier Detail</p>
					</div>
				</div>
				<div className="row gx-3">
					<div className="col-12 col-sm-6 col-xl-12">
						<div className="mb-4">
							<div className="d-flex flex-wrap mb-2">
								<h5 className="mb-0 text-1000 me-2">공급사명</h5>
							</div>
							<input className="form-control mb-xl-3" type="text"  value={proposal_no!==undefined?proposal.supplier.suppl_no:''} readOnly={proposal_no===undefined?false:true} disabled={proposal_no===undefined?false:true}/>
						</div>
					</div>
					<div className="col-12 d-flex justify-content-between">
						<div className="w-50">
							<h5 className="text-1000 ">사업자번호</h5>
							<input className="form-control mb-xl-3" type="text" />
						</div>
						<div className="w-50 ms-3">
							<h5 className="text-1000">대표번호</h5>
							<input className="form-control mb-xl-3" type="text"  value={proposal_no!==undefined?proposal.supplier.phone:''} readOnly={proposal_no===undefined?false:true} disabled={proposal_no===undefined?false:true}/>
						</div>
					</div>

					<div className="col-12 d-flex justify-content-between">
						<div className="w-50">
							<h5 className="text-1000">종목</h5>
							<input className="form-control mb-xl-3" type="text"  value={proposal_no!==undefined?proposal.supplier.category:''} readOnly={proposal_no===undefined?false:true} disabled={proposal_no===undefined?false:true}/>
						</div>
						<div className="w-50 ms-3">
							<h5 className="text-1000">대표자명</h5>
							<input className="form-control mb-xl-3" type="text"  value={proposal_no!==undefined?proposal.supplier.suppl_no:''} readOnly={proposal_no===undefined?false:true} disabled={proposal_no===undefined?false:true}/>
						</div>
					</div>
					<div className="d-flex flex-wrap mb-2">
						<h5 className="mb-0 text-1000 me-2"></h5>
					</div>
					<hr />
				</div>
			</div>
		</Card>
		</div>
		</div>
	</div>
    )
}

export default ContractPage;