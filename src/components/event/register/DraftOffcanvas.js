import axios from "axios";
import {Offcanvas} from "react-bootstrap";

const DraftOffcanvas = ({show, handleClose, drafts, setComponentData}) => {
    const handleRowClick = (draft) => {
        setComponentData(() => ({
            compoId: draft.compoId,
            price: draft.price,
            quantity: draft.quantity,
            defectRate: draft.defectRate,
            qualityGrade: draft.qualityGrade,
            productionPeriod: draft.productionPeriod,
            companyName: draft.companyName,
            businessNumber: draft.businessNumber,
            phoneNumber: draft.phoneNumber,
            businessType: draft.businessType,
            industry: draft.industry,
            representativeName: draft.representativeName,
            companySize: draft.companySize,
            address: draft.address,
            isContracted: draft.isContracted,
            createdAt: draft.createdAt,
        }));
        handleClose();
    };

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>임시 저장 목록</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="mb-8">
                    <div className="border-top border-bottom border-200" id="leadDetailsTable">
                        <div className="table-responsive scrollbar mx-n1 px-1">
                            <table className="table fs--1 mb-0" id="suppl-draft-table">
                                <thead>
                                    <tr>
                                        <th className="sort white-space-nowrap align-middle pe-3 ps-0 text-uppercase" scope="col" data-sort="dealName" style={{width: "15%", minWidth: "100px"}}>
                                            공급사명
                                        </th>
                                        <th className="sort align-middle ps-0 text-center text-uppercase" scope="col" data-sort="date" style={{width: "15%", minWidth: "60px"}}>
                                            저장 날짜
                                        </th>
                                        <th className="sort align-middle text-end text-uppercase" scope="col" data-sort="type" style={{width: "15%", minWidth: "70px"}}>
                                            부품 아이디
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="list" id="draft-details-table-body">
                                    {drafts.map((draft, index) => (
                                        <tr key={index}>
                                            <td className="sort white-space-nowrap align-middle pe-3 ps-0 ">
                                                <a href="#!" onClick={() => handleRowClick(draft)}>
                                                    {draft.companyName}
                                                </a>
                                            </td>
                                            <td className="sort align-middle text-center"> {draft.createdAt.toLocaleString("ko-KR")}</td>
                                            <td className="sort align-middle text-end">{draft.compoId}</td> {/* 원하는 구분 데이터를 여기에 넣으세요 */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default DraftOffcanvas;
