import {useState} from "react";
import {Card} from "react-bootstrap";
import FileUpload from "./FileUpload";

const DetailItem = ({componentName, componentData, updateComponentData, setUploadedFiles}) => {
    const handlePriceChange = (e) => {
        const newPrice = e.target.value;
        updateComponentData({price: newPrice});
    };

    const handleQuantityChange = (e) => {
        const newQuantity = e.target.value;
        updateComponentData({quantity: newQuantity});
    };

    const handleDefectRateChange = (e) => {
        const newDefectRate = e.target.value;
        updateComponentData({defectRate: newDefectRate});
    };

    const handleQualityGradeChange = (e) => {
        const newQualityGrade = e.target.value;
        updateComponentData({qualityGrade: newQualityGrade});
    };

    const handleProductionPeriodChange = (e) => {
        const newProductionPeriod = e.target.value;
        updateComponentData({productionPeriod: newProductionPeriod});
    };

    return (
        <Card>
            <div className="card-body ">
                <h4 className="card-title mb-0">부품 상세</h4>
                <p className="text-700 fs--1 mb-5 ms-1">Product Detail</p>
                <div className="row gx-3">
                    <div className="col-12">
                        <div className="mb-2">
                            <div className="d-flex flex-wrap mb-2">
                                <h5 className="mb-0 text-1000 me-2">부품명</h5>
                                <a className="fw-bold fs--1" href="#!">
                                    부품 추가하기
                                </a>
                            </div>
                            <input className="form-control mb-xl-3" type="text" placeholder="부품명은 왼쪽 부품 버튼을 클릭하면 자동으로 설정됩니다." readOnly disabled value={componentName} />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-2">
                            <div className="d-flex flex-wrap mb-2">
                                <h5 className="mb-0 text-1000 me-2">단가</h5>
                            </div>
                            <input className="form-control mb-xl-3" type="text" placeholder="단가는 숫자만 입력 가능합니다." value={componentData.price} onChange={handlePriceChange} />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-2">
                            <h5 className="mb-2 text-1000">수량</h5>
                            <input className="form-control mb-xl-3" type="text" placeholder="수량은 숫자만 입력 가능합니다." value={componentData.quantity} onChange={handleQuantityChange} />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-wrap mb-2">
                            <h5 className="mb-0 text-1000 me-2">불량률</h5>
                        </div>
                        <input className="form-control mb-xl-3" type="text" placeholder="불량률" value={componentData.defectRate} onChange={handleDefectRateChange} />
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-wrap mb-2">
                            <h5 className="mb-0 text-1000 me-2">품질등급</h5>
                        </div>
                        <select className="form-select mb-3" aria-label="qualityGrade" value={componentData.qualityGrade} onChange={handleQualityGradeChange}>
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="C+">C+</option>
                            <option value="C">C</option>
                            <option value="D+">D+</option>
                            <option value="D">D</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-wrap mb-2">
                            <h5 className="mb-0 text-1000 me-2">생산기간(일)</h5>
                        </div>
                        <input className="form-control mb-xl-3" type="text" placeholder="생산기간" value={componentData.productionPeriod} onChange={handleProductionPeriodChange} />
                    </div>
                    <hr className="mb-3" />
                    <FileUpload setUploadedFiles={setUploadedFiles} />
                </div>
            </div>
        </Card>
    );
};

export default DetailItem;
