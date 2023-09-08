import { useState } from "react";
import DefectiveRate from "../compare/DefectiveRate";
import { useHistory } from "react-router";

const SuggestList = ({ suppl_no, proposals }) => {
	const [selectedCompoNo, setSelectedCompoNo] = useState(null);
	const history = useHistory();

	const handleCompoClick = (compoNo, supplNo) => {
		setSelectedCompoNo(compoNo);
	};

	const handleAddProposal = () => {
		console.log(suppl_no);
		const newPath = `/addSupplier/${suppl_no}`;
		history.push(newPath);
	};

	const filteredProposals = proposals.reduce((acc, proposal) => {
		const proposalDate = new Date(proposal.proposal_date);
		const currentDate = new Date();
		const timeDiff = Math.abs(currentDate - proposalDate);

		if (!acc[proposal.compo_no] || timeDiff < acc[proposal.compo_no].timeDiff) {
			acc[proposal.compo_no] = {
				proposal,
				timeDiff,
			};
		}

		return acc;
	}, {});

	const proposalRows1 = Object.values(filteredProposals).map((filteredProposal) => {
		const { proposal } = filteredProposal;

		return (
			<tr key={proposal.proposal_no}>
				<td className="dealName align-middle text-center white-space-nowrap py-2 ps-0">
					<a className="fw-semi-bold" href="#!" onClick={() => handleCompoClick(proposal.compo_no)}>
						{proposal.compo_name}
					</a>
				</td>
				<td className="amount align-middle white-space-nowrap text-center fw-bold text-700 py-2 text-end pe-6">{proposal.price.toLocaleString()}원</td>
				<td className="amount align-middle white-space-nowrap text-center fw-bold text-700 py-2 text-end pe-6">{proposal.quantity}</td>
				<td className="probability align-middle white-space-nowrap">
					<DefectiveRate defective={proposal.defective_rate} />
				</td>
				<td className="type align-middle fw-semi-bold py-2 text-center">
					<span className="badge badge-phoenix fs--2 badge-phoenix-info">{proposal.quality_grade}</span>
				</td>
				<td className="date align-middle text-700 text-center py-2">{proposal.prod_period}</td>
				<td className="date align-middle text-700 text-center py-2">
					{new Intl.DateTimeFormat("ko-KR", {
						year: "numeric",
						month: "2-digit",
						day: "2-digit",
					}).format(new Date(proposal.proposal_date))}
				</td>
				<td className="type align-middle fw-semi-bold py-2 text-center">
					<span className={`badge badge-phoenix fs--2 badge-phoenix-${proposal.is_contracted === "1" ? "info" : "danger"}`}>{proposal.is_contracted === "1" ? "계약" : "미계약"}</span>
				</td>
				<td className="align-middle text-end white-space-nowrap pe-0 action py-2">
					<div className="font-sans-serif btn-reveal-trigger position-static">
						<button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
							<span className="fas fa-ellipsis-h fs--2"></span>
						</button>
						<div className="dropdown-menu dropdown-menu-end py-2">
							<a className="dropdown-item" href="#!" onClick={() => handleCompoClick(proposal.compo_no)}>
								이전 제안 보기
							</a>
							<a className="dropdown-item" href="#!">
								제품 비교
							</a>
							{proposal.is_contracted === "0" && (
								<>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item text-danger" href="#!">
										계약
									</a>
								</>
							)}
						</div>
					</div>
				</td>
			</tr>
		);
	});

	const proposalRows = proposals
		.filter((proposal) => !selectedCompoNo || proposal.compo_no === selectedCompoNo)
		.map((proposal) => {
			return (
				<tr key={proposal.proposal_no}>
					<td className="dealName align-middle text-center white-space-nowrap py-2 ps-0">
						<a className="fw-semi-bold" href="#!" onClick={() => handleCompoClick(proposal.compo_no)}>
							{proposal.compo_name}
						</a>
					</td>
					<td className="amount align-middle white-space-nowrap text-center fw-bold text-700 py-2 text-end pe-6">{proposal.price.toLocaleString()}원</td>
					<td className="amount align-middle white-space-nowrap text-center fw-bold text-700 py-2 text-end pe-6">{proposal.quantity}</td>
					<td className="probability align-middle white-space-nowrap">
						<DefectiveRate defective={proposal.defective_rate} />
					</td>
					<td className="type align-middle fw-semi-bold py-2 text-center">
						<span className="badge badge-phoenix fs--2 badge-phoenix-info">{proposal.quality_grade}</span>
					</td>
					<td className="date align-middle text-700 text-center py-2">{proposal.prod_period}</td>
					<td className="date align-middle text-700 text-center py-2">
						{new Intl.DateTimeFormat("ko-KR", {
							year: "numeric",
							month: "2-digit",
							day: "2-digit",
						}).format(new Date(proposal.proposal_date))}
					</td>
					<td className="type align-middle fw-semi-bold py-2 text-center">
						<span className={`badge badge-phoenix fs--2 badge-phoenix-${proposal.is_contracted === "1" ? "info" : "danger"}`}>{proposal.is_contracted === "1" ? "계약" : "미계약"}</span>
					</td>
					<td className="align-middle text-end white-space-nowrap pe-0 action py-2">
						<div className="font-sans-serif btn-reveal-trigger position-static">
							<button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
								<span className="fas fa-ellipsis-h fs--2"></span>
							</button>
							<div className="dropdown-menu dropdown-menu-end py-2">
								<a className="dropdown-item" href="#!">
									제품 비교
								</a>
							</div>
						</div>
					</td>
				</tr>
			);
		});

	return (
		<div className="col-6" style={{ height: "860px" }}>
			<div className="card me-2 mb-3" style={{ height: "45%" }}>
				<div className="ms-3 mx-3 mt-3 border-bottom d-flex justify-content-between align-items-center ">
					<div>
						<h3 className="card-title mb-1 mt-2">부품 제안 리스트</h3>
						<p className="text-700 fs--1 ms-1">List of Supplied Component</p>
					</div>

					<button className="btn btn-primary btn-sm" onClick={handleAddProposal}>
						<span className="fa-solid fa-plus me-2"></span>제안 추가
					</button>
				</div>
				<div className="m-3 mb-8">
					<div className="border-bottom border-200" id="leadDetailsTable">
						<div className="table-responsive scrollbar mx-n1 px-1">
							<table className="table fs--1 mb-0 text-center">
								<thead>
									<tr>
										<th className="sort white-space-nowrap align-middle pe-3 ps-0 text-center text-uppercase" scope="col" data-sort="dealName">
											부품명
										</th>
										<th className="sort align-middle pe-6 text-uppercase text-center" scope="col" data-sort="amount">
											단가
										</th>
										<th className="sort align-middle text-center text-uppercase" scope="col" data-sort="stage">
											수량
										</th>
										<th className="sort align-middle text-center text-uppercase" scope="col" data-sort="probability">
											불량률
										</th>
										<th className="sort align-middle text-center text-uppercase" scope="col" data-sort="type">
											품질등급
										</th>
										<th className="sort align-middle ps-0 text-center text-uppercase" scope="col" data-sort="date">
											생산일자
										</th>
										<th className="sort align-middle ps-0 text-center text-uppercase" scope="col" data-sort="date">
											제안일자
										</th>
										<th className="sort align-middle text-center text-uppercase" scope="col" data-sort="type">
											계약상태
										</th>
										<th className="align-middle pe-0 text-center" scope="col">
											{" "}
										</th>
									</tr>
								</thead>
								<tbody className="list" id="lead-details-table-body">
									{proposalRows1}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div className="card me-2" style={{ height: "50%" }}>
				<div className="ms-3 mx-3 mt-3 border-bottom d-flex justify-content-between align-items-center ">
					<div>
						<h3 className="card-title mb-1 mt-2">부품 제안 히스토리</h3>
						<p className="text-700 fs--1 ms-1">History of Supplied Component</p>
					</div>
				</div>
				<div className="m-3 mb-8">
					<div className="border-bottom border-200" id="leadDetailsTable">
						<div className="table-responsive scrollbar mx-n1 px-1">
							<table className="table fs--1 mb-0">
								<thead>
									<tr>
										<th className="sort white-space-nowrap align-middle pe-3 ps-0 text-center text-uppercase" scope="col" data-sort="dealName">
											부품명
										</th>
										<th className="sort align-middle pe-6 text-uppercase text-center" scope="col" data-sort="amount">
											단가
										</th>
										<th className="sort align-middle text-center text-uppercase" scope="col" data-sort="stage">
											수량
										</th>
										<th className="sort align-middle text-center text-uppercase" scope="col" data-sort="probability">
											불량률
										</th>
										<th className="sort align-middle text-center text-uppercase" scope="col" data-sort="type">
											품질등급
										</th>
										<th className="sort align-middle ps-0 text-center text-uppercase" scope="col" data-sort="date">
											생산일자
										</th>
										<th className="sort align-middle ps-0 text-center text-uppercase" scope="col" data-sort="date">
											제안일자
										</th>
										<th className="sort align-middle text-center text-uppercase" scope="col" data-sort="type">
											계약상태
										</th>
										<th className="align-middle pe-0 text-center" scope="col">
											{" "}
										</th>
									</tr>
								</thead>
								{selectedCompoNo === null ? null : (
									<tbody className="list" id="lead-details-table-body">
										{proposalRows}
									</tbody>
								)}
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SuggestList;
