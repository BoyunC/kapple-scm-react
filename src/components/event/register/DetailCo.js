import {useState} from "react";
import ModalGetCo from "./ModalGetCo";

const DetailCo = ({componentData, updateComponentData}) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // 각각의 항목에 대한 입력값 처리 함수들
    const handleCompanyNameChange = (e) => {
        const newCompanyName = e.target.value;
        updateComponentData({companyName: newCompanyName});
    };

    const handleBusinessNumberChange = (e) => {
        const newBusinessNumber = e.target.value;
        updateComponentData({businessNumber: newBusinessNumber});
    };

    const handlePhoneNumberChange = (e) => {
        const newPhoneNumber = e.target.value;
        updateComponentData({phoneNumber: newPhoneNumber});
    };

    const handleBusinessTypeChange = (e) => {
        const newBusinessType = e.target.value;
        updateComponentData({businessType: newBusinessType});
    };

    const handleIndustryChange = (e) => {
        const newIndustry = e.target.value;
        updateComponentData({industry: newIndustry});
    };

    const handleRepresentativeNameChange = (e) => {
        const newRepresentativeName = e.target.value;
        updateComponentData({representativeName: newRepresentativeName});
    };

    const handleCompanySizeChange = (e) => {
        const newCompanySize = e.target.value;
        updateComponentData({companySize: newCompanySize});
    };

    const handleAddressChange = (e) => {
        const newAddress = e.target.value;
        updateComponentData({address: newAddress});
    };

    const handleContractRadioChange = (e, isContracted) => {
        const newValue = isContracted;
        updateComponentData({isContracted: newValue});
    };

    return (
        <div className="card me-2 " style={{height: "740px"}}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="">
                        <h4 className="card-title mb-0">공급사 상세</h4>
                        <p className="text-700 fs--1 mb-5 ms-1">Product Detail</p>
                    </div>
                    <div className="col-12 col-sm-auto">
                        <input className="d-none" id="avatarFile" type="file" />
                        <label className="cursor-pointer avatar avatar-3xl" htmlFor="avatarFile">
                            <img className="rounded-circle border border-3" src="resources/assets/img/brand2/dell.png" alt="" />
                        </label>
                    </div>
                </div>
                <div className="row gx-3">
                    <div className="col-12 col-sm-6 col-xl-12">
                        <div className="mb-4">
                            <div className="d-flex flex-wrap mb-2">
                                <h5 className="mb-0 text-1000 me-2">공급사명</h5>
                                <a className="fw-bold fs--1" href="#!" onClick={openModal}>
                                    공급사 불러오기
                                </a>
                            </div>
                            <input className="form-control mb-xl-3" type="text" placeholder="공급사명을 입력하세요." value={componentData.companyName} onChange={handleCompanyNameChange} />
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                        <div className="w-50">
                            <h5 className="text-1000 ">사업자번호</h5>
                            <input className="form-control mb-xl-3" type="text" placeholder="사업자번호" value={componentData.businessNumber} onChange={handleBusinessNumberChange} />
                        </div>
                        <div className="w-50 ms-3">
                            <h5 className="text-1000">대표번호</h5>
                            <input className="form-control mb-xl-3" type="text" placeholder="전화번호" value={componentData.phoneNumber} onChange={handlePhoneNumberChange} />
                        </div>
                    </div>

                    <div className="col-12 d-flex justify-content-between">
                        <div className="w-50">
                            <h5 className="text-1000">업태</h5>
                            <input className="form-control mb-xl-3" type="text" placeholder="업태" value={componentData.businessType} onChange={handleBusinessTypeChange} />
                        </div>
                        <div className="w-50 ms-3">
                            <h5 className="text-1000">종목</h5>
                            <input className="form-control mb-xl-3" type="text" placeholder="종목" value={componentData.industry} onChange={handleIndustryChange} />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-12">
                        <div className="mb-4">
                            <div className="d-flex flex-wrap mb-2">
                                <h5 className="mb-0 text-1000 me-2">주소</h5>
                            </div>
                            <input className="form-control mb-xl-3" type="text" placeholder="주소" value={componentData.address} onChange={handleAddressChange} />
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex flex-wrap mb-3 mt-2">
                        <h5 className="mb-0 text-1000 me-2">추가 정보</h5>
                    </div>
                    <div className="row g-0 border-top border-bottom border-300" style={{height: "250px"}}>
                        <div className="col-sm-2">
                            <div className="nav flex-sm-column border-bottom border-bottom-sm-0 border-end-sm border-300 fs--1 vertical-tab h-100 justify-content-between" role="tablist" aria-orientation="vertical">
                                <a className="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center active" id="pricingTab" data-bs-toggle="tab" data-bs-target="#pricingTabContent" role="tab" aria-controls="pricingTabContent" aria-selected="true">
                                    {" "}
                                    <span className="me-sm-2 fs-4 nav-icons" data-feather="tag"></span>
                                    <span className="d-none d-sm-inline">기업정보</span>
                                </a>
                                <a className="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="restockTab" data-bs-toggle="tab" data-bs-target="#restockTabContent" role="tab" aria-controls="restockTabContent" aria-selected="false">
                                    {" "}
                                    <span className="me-sm-2 fs-4 nav-icons" data-feather="package"></span>
                                    <span className="d-none d-sm-inline">매출정보</span>
                                </a>
                                <a className="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="shippingTab" data-bs-toggle="tab" data-bs-target="#shippingTabContent" role="tab" aria-controls="shippingTabContent" aria-selected="false">
                                    {" "}
                                    <span className="me-sm-2 fs-4 nav-icons" data-feather="truck"></span>
                                    <span className="d-none d-sm-inline">계약상태</span>
                                </a>
                                <a className="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="productsTab" data-bs-toggle="tab" data-bs-target="#productsTabContent" role="tab" aria-controls="productsTabContent" aria-selected="false">
                                    {" "}
                                    <span className="me-sm-2 fs-4 nav-icons" data-feather="globe"></span>
                                    <span className="d-none d-sm-inline">기타설정</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-10">
                            <div className="tab-content py-3 ps-sm-4 h-100">
                                <div className="tab-pane fade show active" id="pricingTabContent" role="tabpanel">
                                    <div className="row g-3 mb-4">
                                        <div className="col-12 col-lg-6">
                                            <h5 className="mb-2 text-1000">대표자명</h5>
                                            <input className="form-control" type="text" placeholder="대표자명" value={componentData.representativeName} onChange={handleRepresentativeNameChange} />
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <h5 className="mb-2 text-1000">기업규모</h5>
                                            <input className="form-control" type="text" placeholder="기업규모" value={componentData.companySize} onChange={handleCompanySizeChange} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-xl-12">
                                        <div className="mb-4">
                                            <div className="d-flex flex-wrap mb-2">
                                                <h5 className="mb-0 text-1000 me-2">주소</h5>
                                            </div>
                                            <input className="form-control mb-xl-3" type="text" placeholder="주소" />
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade h-100" id="restockTabContent" role="tabpanel" aria-labelledby="restockTab">
                                    <div className="d-flex flex-column h-100">
                                        <h5 className="mb-3 text-1000">매출 정보 추가</h5>
                                        <div className="row g-3 flex-1 mb-4">
                                            <div className="col-sm-7">
                                                <input className="form-control" type="number" placeholder="Quantity" />
                                            </div>
                                            <div className="col-sm">
                                                <button className="btn btn-primary" type="button">
                                                    <span className="fa-solid fa-check me-1 fs--2"></span>Confirm
                                                </button>
                                            </div>
                                        </div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade h-100" id="shippingTabContent" role="tabpanel" aria-labelledby="shippingTab">
                                    <div className="d-flex flex-column h-100">
                                        <div className="flex-1">
                                            <div className="mb-3">
                                                <div className="form-check mb-1">
                                                    <input className="form-check-input" type="radio" name="shippingRadio" id="notContractRadio" checked={!componentData.isContracted ? "checked" : ""} onChange={(e) => handleContractRadioChange(e, true)} />
                                                    <label className="form-check-label fs-0 text-900 d-flex align-items-center" htmlFor="notContractRadio">
                                                        계약 미진행 <span className="badge badge-phoenix badge-phoenix-warning fs--1 ms-2">Default</span>
                                                    </label>
                                                </div>
                                                <div className="ps-4">
                                                    <p className="text-800 fs--1 mb-1">
                                                        해당 부품에 대해 공급사와 계약이 확정되지 않은 경우에 선택하세요.
                                                        <br />
                                                        해당 설정은 기본값으로 설정되며 이후에 계약 확정시 자동으로 반영됩니다.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <div className="form-check mb-1">
                                                    <input className="form-check-input" type="radio" name="shippingRadio" id="contractRadio" />
                                                    <label className="form-check-label fs-0 text-900" htmlFor="contractRadio">
                                                        계약 진행
                                                    </label>
                                                </div>
                                                <div className="ps-4">
                                                    <p className="text-800 fs--1 mb-0">
                                                        해당 부품에 대해 공급사와 계약이 확정된 경우에 선택하세요. <br />
                                                        해당 설정은 공급사 조회 페이지에서 수정이 가능합니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="productsTabContent" role="tabpanel" aria-labelledby="productsTab"></div>
                                <div className="tab-pane fade" id="attributesTabContent" role="tabpanel" aria-labelledby="attributesTab"></div>
                                <div className="tab-pane fade" id="advancedTabContent" role="tabpanel" aria-labelledby="advancedTab"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <ModalGetCo show={showModal} handleClose={closeModal} />}
        </div>
    );
};

export default DetailCo;
