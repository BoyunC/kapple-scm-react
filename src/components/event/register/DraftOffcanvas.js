import axios from "axios";
import { Offcanvas } from "react-bootstrap";

const DraftOffcanvas = ({ show, handleClose, drafts, setComponentData }) => {
	const handleRowClick = (draft) => {
		setComponentData(() => ({
			draft_no: draft.draft_no,

			compo_no: draft.compo_no,
			compo_name: draft.compo_name,
			price: draft.price,
			quantity: draft.quantity,
			defective_rate: draft.defective_rate,
			quality_grade: draft.quality_grade,
			prod_period: draft.prod_period,
			pp_created_at: draft.pp_created_at,
			pp_updated_at: draft.pp_updated_at,
			pp_status: draft.pp_status,

			suppl_no: draft.suppl_no,
			suppl_name: draft.suppl_name,
			business_no: draft.business_no,
			phone_number: draft.phone_number,
			business_type: draft.business_type,
			business_item: draft.business_item,
			address: draft.address,
			detail: draft.detail,
			is_contracted: draft.is_contracted,
			sp_created_at: draft.sp_created_at,
			sp_updated_at: draft.sp_created_at,

			representative: draft.representative,
			company_type: draft.company_type,
			employee_quantity: draft.employee_quantity,
			establishment_date: draft.establishment_date,

			suppl_level: draft.suppl_level,
			stock_type: draft.stock_type,
			profit: draft.profit,
			net_profit: draft.net_profit,
			debt_ratio: draft.debt_ratio,
			market_cap: draft.market_cap,

			created_at: draft.created_at,
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
							<table className="table table-hover fs--1 mb-0" id="suppl-draft-table">
								<thead>
									<tr>
										<th className="sort white-space-nowrap align-middle pe-3 ps-0  text-uppercase" scope="col" data-sort="dealName" style={{ width: "15%", minWidth: "100px" }}>
											공급사명
										</th>
										<th className="sort align-middle ps-0 text-center text-uppercase" scope="col" data-sort="date" style={{ width: "15%", minWidth: "60px" }}>
											저장 날짜
										</th>
										<th className="sort align-middle text-end text-uppercase" scope="col" data-sort="type" style={{ width: "15%", minWidth: "70px" }}>
											부품 아이디
										</th>
									</tr>
								</thead>
								<tbody className="list" id="draft-details-table-body">
									{drafts.map((draft, index) => (
										<tr key={index} onClick={() => handleRowClick(draft)}>
											<td className="sort white-space-nowrap align-middle pe-3 ps-0  ">{draft.suppl_name ? draft.suppl_name : "공급사명 없음"}</td>
											<td className="sort align-middle text-center">
												{new Intl.DateTimeFormat("ko-KR", {
													year: "numeric",
													month: "2-digit",
													day: "2-digit",
												}).format(new Date(draft.created_at))}
												<br />
												{new Intl.DateTimeFormat("ko-KR", {
													hour: "2-digit",
													minute: "2-digit",
													second: "2-digit",
												}).format(new Date(draft.created_at))}
											</td>
											<td className="sort align-middle text-end">{draft.compo_no ? draft.compo_no : "부품명 없음"}</td>
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
