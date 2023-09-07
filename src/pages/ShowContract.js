import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Card } from "react-bootstrap";
import { useTable } from "react-table";

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

    const allContracts=()=>{
        axios.get(`http://localhost:8081/contracts`).then((res)=>{
            setDatas(res.data);
            console.log(res.data);
        })
    }
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
                                                <td {...cell.getCellProps()} className="align-middle fw-semi-bold text-1000 mb-0">{cell.render('Cell')}</td>
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
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ShowContract;