const CoDeatail = () => {
    return (
        <div className="min-vh-75" style={{width: "29%"}}>
            <div className="card mb-2">
                <div className="card-body">
                    <div className="row align-items-center g-3 text-center text-xxl-start">
                        <div className="col-auto col-xxl-auto">
                            <div className="avatar avatar-3xl">
                                <img className="rounded-circle" src="resources/assets/img/brand2/dell.png" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-auto flex-1">
                            <h3 className="fw-bolder mb-2">Samsung</h3>
                            <p className="mb-0">Mobile SPU Chips</p>
                            <a className="fw-bold" href="#!">
                                test
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <div className="border-bottom d-flex justify-content-between align-items-center ">
                        <div>
                            <h4 className="card-title mb-1 mt-2 mb-3">공급사 상세정보</h4>
                        </div>

                        <button className="btn btn-primary btn-sm">
                            <span className="fa-solid fa-check me-2"></span>수정
                        </button>
                    </div>

                    <ul className="nav nav-underline" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#tab-home" role="tab" aria-controls="tab-home" aria-selected="true">
                                기업 기초
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#tab-profile" role="tab" aria-controls="tab-profile" aria-selected="false">
                                기업 규모
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#tab-contact" role="tab" aria-controls="tab-contact" aria-selected="false">
                                계약 정보
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content mt-3" id="myTabContent">
                        <div className="tab-pane fade show active" id="tab-home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="mb-4 mt-3">
                                <div className="d-flex align-items-center mb-1">
                                    <span className="me-2 uil uil-phone"> </span>
                                    <h5 className="text-1000 mb-0">Phone</h5>
                                </div>
                                <a href="tel:+1234567890">+1234567890 </a>
                            </div>
                            <div className="mb-4">
                                <div className="d-flex align-items-center mb-1">
                                    <span className="me-2 uil uil-globe"></span>
                                    <h5 className="text-1000 mb-0">Website</h5>
                                </div>
                                <a href="#!">www.bb.ru.com </a>
                            </div>
                            <div className="mb-4">
                                <div className="d-flex align-items-center mb-1">
                                    <span className="me-2 uil uil-building"></span>
                                    <h5 className="text-1000 mb-0">Industry</h5>
                                </div>
                                <p className="mb-0 text-800">Large Enterprise</p>
                            </div>
                            <div className="mb-4">
                                <div className="d-flex align-items-center mb-1">
                                    <span className="me-2 uil uil-postcard"></span>
                                    <h5 className="text-1000 mb-0">Number of employees</h5>
                                </div>
                                <p className="mb-0 text-800">126</p>
                            </div>
                            <div className="mb-4">
                                <div className="d-flex align-items-center mb-1">
                                    <span className="me-2 uil uil-dollar-alt"></span>
                                    <h5 className="text-1000 mb-0">Annual Revenue</h5>
                                </div>
                                <p className="mb-0 text-800">$12000 </p>
                            </div>
                            <div className="mb-4">
                                <div className="d-flex align-items-center mb-1">
                                    <span className="me-2 uil uil-clock"></span>
                                    <h5 className="text-1000 mb-0">Last contacted</h5>
                                </div>
                                <p className="mb-0 text-800">12 November 2021, 10:54 AM</p>
                            </div>
                            <div className="mb-4">
                                <div className="d-flex align-items-center mb-1">
                                    <span className="me-2 uil uil-file-check-alt"></span>
                                    <h5 className="text-1000 mb-0">Lead source</h5>
                                </div>
                                <p className="mb-0 text-800">Advertisement</p>
                            </div>
                            <div>
                                <div className="d-flex align-items-center mb-1">
                                    <span className="me-2 uil uil-check-circle"></span>
                                    <h5 className="text-1000 mb-0">Lead status</h5>
                                </div>
                                <span className="badge badge-phoenix badge-phoenix-primary">New Lead</span>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-profile" role="tabpanel" aria-labelledby="profile-tab"></div>
                        <div className="tab-pane fade" id="tab-contact" role="tabpanel" aria-labelledby="contact-tab"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoDeatail;
