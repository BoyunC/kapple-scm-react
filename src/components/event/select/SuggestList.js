const SuggestList = () => {
    return (
        <div className="col-6 min-vh-75">
            <div className="card me-2 h-100">
                <div className="ms-3 mx-3 mt-3 border-bottom d-flex justify-content-between align-items-center ">
                    <div>
                        <h3 className="card-title mb-1 mt-2">부품 제안 리스트</h3>
                        <p className="text-700 fs--1 ms-1">List of Supplied Component</p>
                    </div>

                    <button className="btn btn-primary btn-sm">
                        <span className="fa-solid fa-plus me-2"></span>제안 추가
                    </button>
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
                                <tbody className="list" id="lead-details-table-body">
                                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="dealName align-middle text-center white-space-nowrap py-2 ps-0">
                                            <a className="fw-semi-bold" href="#!">
                                                카메라 모듈
                                            </a>
                                        </td>
                                        <td className="amount align-middle white-space-nowrap text-center fw-bold text-700 py-2 text-end pe-6">$680</td>
                                        <td className="amount align-middle white-space-nowrap text-center fw-bold text-700 py-2 text-end pe-6">1,000</td>

                                        <td className="probability align-middle white-space-nowrap">
                                            <p className="text-800 fs--2 mb-0">0.1%</p>
                                            <div className="progress bg-primary-100" role="progressbar">
                                                <div className="progress-bar bg-info" role="progressbar" aria-valuenow="0.1" aria-valuemin="0" aria-valuemax="1"></div>
                                            </div>
                                        </td>
                                        <td className="type align-middle fw-semi-bold py-2 text-center">
                                            <span className="badge badge-phoenix fs--2 badge-phoenix-info">A+</span>
                                        </td>
                                        <td className="date align-middle text-700 text-center py-2">12일</td>
                                        <td className="date align-middle text-700 text-center py-2">23.08.24</td>
                                        <td className="type align-middle fw-semi-bold py-2 text-center">
                                            <span className="badge badge-phoenix fs--2 badge-phoenix-info">계약</span>
                                        </td>
                                        <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                            <div className="font-sans-serif btn-reveal-trigger position-static">
                                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
                                                    <span className="fas fa-ellipsis-h fs--2"></span>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end py-2">
                                                    <a className="dropdown-item" href="#!">
                                                        이전 제안 보기
                                                    </a>
                                                    <a className="dropdown-item" href="#!">
                                                        부품 비교
                                                    </a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item text-danger" href="#!">
                                                        계약
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="dealName align-middle text-center white-space-nowrap py-2 ps-0">
                                            <a className="fw-semi-bold" href="#!">
                                                카메라 모듈B
                                            </a>
                                        </td>
                                        <td className="amount align-middle white-space-nowrap text-center fw-bold text-700 py-2 text-end pe-6">$680</td>
                                        <td className="amount align-middle white-space-nowrap text-center fw-bold text-700 py-2 text-end pe-6">1,000</td>

                                        <td className="probability align-middle white-space-nowrap">
                                            <p className="text-800 fs--2 mb-0">0.3%</p>
                                            <div className="progress bg-primary-100" role="progressbar">
                                                <div className="progress-bar bg-info" role="progressbar" aria-valuenow="0.1" aria-valuemin="0" aria-valuemax="1"></div>
                                            </div>
                                        </td>
                                        <td className="type align-middle fw-semi-bold py-2 text-center">
                                            <span className="badge badge-phoenix fs--2 badge-phoenix-success">B+</span>
                                        </td>
                                        <td className="date align-middle text-700 text-center py-2">12일</td>
                                        <td className="date align-middle text-700 text-center py-2">23.08.24</td>
                                        <td className="type align-middle fw-semi-bold py-2 text-center">
                                            <span className="badge badge-phoenix fs--2 badge-phoenix-danger">미계약</span>
                                        </td>
                                        <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                            <div className="font-sans-serif btn-reveal-trigger position-static">
                                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
                                                    <span className="fas fa-ellipsis-h fs--2"></span>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end py-2">
                                                    <a className="dropdown-item" href="#!">
                                                        이전 제안 보기
                                                    </a>
                                                    <a className="dropdown-item" href="#!">
                                                        부품 비교
                                                    </a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item text-danger" href="#!">
                                                        계약
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuggestList;
