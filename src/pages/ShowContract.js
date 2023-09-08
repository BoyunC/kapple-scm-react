import React from "react";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Card } from "react-bootstrap";
import { useTable } from "react-table";
import { get } from "react-hook-form";

const ShowContract = ()=>{
    const columnHeader=[
        {
            accessor: 'contract_no',
            Header:"계약번호",
        },
        {
            accessor: 'suppl_no',
            Header:"공급사 번호",
        },
        {
            accessor: 'compo_no',
            Header:"부품 번호",
        },
        {
            accessor: 'start_date',
            Header:"계약 시작 일",
        },
        {
            accessor: 'end_date',
            Header:"계약 종료 일",
        },
        {
            accessor: 'contract_date',
            Header:"계약 날짜",
        },
        {
            accessor: 'proposal_no',
            Header:"제안 번호",
        },
    ]
    const columns = useMemo(()=>columnHeader,[]);
    const [datas,setDatas]=useState([]);
    const data=useMemo(()=>datas,[datas]);
    const [pro_no,setPro_no]=useState('');
    const [suppl_no,setSuppl_no]=useState('');
    const [compo_no,setCompo_no]=useState('');
    const [contract_date,setContract_date]=useState('');
    const [proposal,setProposal]=useState({
        proposal_no:'',
        contract_date:'',
        supplier:{
            suppl_no:'',
            suppl_name:'',
            ceo_name:'',
            phone:'',
            category:'',
        },
        component:{
            compo_no:'',
            compo_name:'',
            detail:'',
            unit:''
        },
        price:'',
        quantity:'',
    })

    const allContracts=()=>{
        axios.get(`http://localhost:8081/contracts`).then((res)=>{
            setDatas(res.data);
            console.log(res.data);
        })
    }
    const clickContract=(e)=>{
        setSuppl_no(e.target.parentElement.children[1].innerHTML);
        setCompo_no(e.target.parentElement.children[2].innerHTML);
        setPro_no(e.target.parentElement.children[6].innerHTML);
        setContract_date(e.target.parentElement.children[5].innerHTML)
        //console.log(pro_no);
        //getProposal();
    }
    const getProposal=()=>{
        axios.get(`http://localhost:8081/contract/${pro_no}`).then((res)=>{
            //setDatas(res.data);
            console.log(res.data);
            setProposal(res.data);
        })
    }

    useEffect(()=>{
        if(pro_no!==''){
            getProposal();
        }
    },[pro_no])
    useEffect(()=>{
        allContracts();
    },[])
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
    return (
        <div> 
            <div className="mb-4">
                <div className="d-flex flex-wrap gap-3">
                    <div className="col-auto">
                        <h3 className="mb-2">계약 조회</h3>
                        <h6 className="text-700 fw-semi-bold">Show Contracts</h6>
                    </div>
                </div>
            </div>
            <div className="row g-3 ms-3 mx-3">
                <div className="col-6 min-vh-75 ">
                    <Card style={{ height: "700px" }}>
                        <div className="card-body">
                            <div className="card-title mb-1">
                                <h3 className="text-1100">계약 내역</h3>
                            </div>
                            <p className="text-700 mb-4">Contract List</p>

                            <div className="table-responsive">
                                <table {...getTableProps()} className="table table-sm fs--1 mb-0 text-center">
                                    <thead>
                                        {headerGroups.map(header => (
                                        // getHeaderGroupProps를 통해 header 배열을 호출한다
                                        <tr {...header.getHeaderGroupProps()} className="align-middle tbody" >
                                            {header.headers.map(col => (
                                            // getHeaderProps는 각 셀 순서에 맞게 header를 호출한다
                                            <th {...col.getHeaderProps()}>{col.render('Header')}</th>
                                            ))}
                                        </tr>
                                        ))}
                                    </thead>
                                    <tbody {...getTableBodyProps()} >
                                        {rows.map(row => {
                                        prepareRow(row);
                                        return (
                                            // getRowProps는 각 row data를 호출해낸다
                                            <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => (
                                                // getCellProps는 각 cell data를 호출해낸다
                                                <td {...cell.getCellProps()} className="align-middle fw-semi-bold text-1000 mb-0" 
                                                onClick={(e)=>{
                                                    clickContract(e);
                                                }}>{cell.render('Cell')}</td>
                                            ))}
                                            </tr>
                                        );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Card>
                </div>
                    <div className="col-6 min-vh-75 ">
                    <Card style={{ height: "700px" }}>
                        <div className="card-body">
                            <div className="card-title mb-1">
                                <h3 className="text-1100">계약 상세</h3>
                             </div>
                            <p className="text-700 mb-4">Contract Detail</p>

				<div className="row gx-3">
                    <div className="card-title mb-3">
                        <h4 className="text-1100">제안 정보</h4>
                    </div>
                    <div className="col-12 d-flex justify-content-between" >
						<div className="w-50">
							<h5 className="text-1000">제안 번호</h5>
							<input className="form-control mb-xl-3" type="text" value={proposal.proposal_no} readOnly/>
						</div>
						<div className="w-50 ms-3">
							<h5 className="text-1000">계약 일자</h5>
							<input className="form-control mb-xl-3" type="text" value={contract_date} readOnly/>
						</div>
					</div>
					<div className="col-12 d-flex justify-content-between">
						<div className="w-50">
							<h5 className="text-1000 ">회사번호</h5>
							<input className="form-control mb-xl-3" type="text" value={proposal.supplier.suppl_no} readOnly/>
						</div>
						<div className="w-50 ms-3">
							<h5 className="text-1000">부품번호</h5>
							<input className="form-control mb-xl-3" type="text" value={proposal.component.compo_no} readOnly/>
						</div>
					</div>

					<div className="col-12 d-flex justify-content-between">
						<div className="w-50">
							<h5 className="text-1000">가격</h5>
							<input className="form-control mb-xl-3" type="text" value={proposal.price} readOnly/>
						</div>
						<div className="w-50 ms-3">
							<h5 className="text-1000">수량</h5>
							<input className="form-control mb-xl-3" type="text" value={proposal.quantity} readOnly/>
						</div>
					</div>
				<hr/>
				</div>
                <div className="card-title mb-3">
                    <h4 className="text-1100">회사 및 부품 정보</h4>
                </div>
                <div className="row g-0 border-top border-bottom border-300" style={{ height: "260px", maxHeight: "260px" }}>
						<div className="col-sm-2">
							<div className="nav flex-sm-column border-bottom border-bottom-sm-0 border-end-sm border-300 fs--1 vertical-tab h-100 justify-content-between" role="tablist" aria-orientation="vertical">
								<a className="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center active" id="pricingTab" data-bs-toggle="tab" data-bs-target="#pricingTabContent" role="tab" aria-controls="pricingTabContent" aria-selected="true">
									{" "}
									<span className="me-sm-2 fs-4 nav-icons" data-feather="tag"></span>
									<span className="d-none d-sm-inline">회사 정보</span>
								</a>
								<a className="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="restockTab" data-bs-toggle="tab" data-bs-target="#restockTabContent" role="tab" aria-controls="restockTabContent" aria-selected="false">
									{" "}
									<span className="me-sm-2 fs-4 nav-icons" data-feather="package"></span>
									<span className="d-none d-sm-inline">부품정보</span>
								</a>
							</div>
						</div>
						<div className="col-sm-10">
							<div className="tab-content py-3 ps-4 h-100">
								<div className="tab-pane fade show active" id="pricingTabContent" role="tabpanel">
									<div className="row g-3 mb-2">
										<div className="col-6">
											<h6 className="mb-2 text-1000">회사 이름</h6>
											<input className="form-control" type="text" placeholder="회사이름" value={proposal.supplier.suppl_name} readOnly/>
										</div>
										<div className="col-6">
											<h6 className="mb-2 text-1000">대표자명</h6>
											<input className="form-control" type="text" placeholder="대표자명" value={proposal.supplier.ceo_name} readOnly/>
										</div>
									</div>
									<div className="row g-3 mb-4">
										<div className="col-6">
											<h6 className="mb-2 text-1000">전화번호</h6>
											<input className="form-control" type="text" placeholder="전화번호" value={proposal.supplier.phone} readOnly/>
										</div>
                                        <div className="col-6">
											<h6 className="mb-2 text-1000">분류</h6>
											<input className="form-control" type="text" placeholder="분류" value={proposal.supplier.category} readOnly/>
										</div>
									</div>
								</div>

								<div className="tab-pane fade h-100" id="restockTabContent" role="tabpanel" aria-labelledby="restockTab">
									<div className="row g-3 mb-2">
										<div className="col-12">
											<h6 className="mb-2 text-1000">
												부품이름
											</h6>
                                            <input className="form-control" type="text" placeholder="부품이름" value={proposal.component.compo_name} readOnly/>

										</div>
										<div className="col-3">
											<h6 className="mb-2 text-1000">단위</h6>
                                            <input className="form-control" type="text" placeholder="단위" value={proposal.component.unit} readOnly/>
										</div>
									</div>
									<div className="row g-3 mb-4">
										<div className="col-12">
											<h6 className="mb-2 text-1000">
												세부정보
											</h6>
											<input className="form-control" type="text" placeholder="세부정보" value={proposal.component.detail} readOnly/>
										</div>
									</div>
								</div>
								
								<div className="tab-pane fade" id="productsTabContent" role="tabpanel" aria-labelledby="productsTab"></div>
								<div className="tab-pane fade" id="attributesTabContent" role="tabpanel" aria-labelledby="attributesTab"></div>
								
							</div>
						</div>
					</div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ShowContract;