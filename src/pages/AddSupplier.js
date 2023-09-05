import {useState, createContext, useContext} from "react";
import axios from "axios";

import DetailCo from "../components/event/register/DetailCo";
import DetailItem from "../components/event/register/DetailItem";
import SearchBox from "../components/event/register/SearchBox";
import {Button, Offcanvas} from "react-bootstrap";
import DraftOffcanvas from "../components/event/register/DraftOffcanvas";

export const ComponentDataContext = createContext();

const AddSupplier = () => {
    const [selectedComponentName, setSelectedComponentName] = useState("");

    const [componentData, setComponentData] = useState({
        compoId: "",
        price: "",
        quantity: "",
        defectRate: "",
        qualityGrade: "",
        productionPeriod: "",
        //////
        companyName: "",
        businessNumber: "",
        phoneNumber: "",
        businessType: "",
        industry: "",
        representativeName: "",
        companySize: "",
        address: "",
        isContracted: "",
        ////
        createdAt: "",
    });

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleComponentClick = (componentName, compoId) => {
        setSelectedComponentName(componentName);

        setComponentData((prevData) => ({
            ...prevData,
            compoId: compoId,
        }));
    };

    const updateComponentData = (newData) => {
        setComponentData({...componentData, ...newData});
        console.log(componentData);
    };

    const handleReset = () => {
        setComponentData({
            compoId: "",
            price: "",
            quantity: "",
            defectRate: "",
            qualityGrade: "",
            productionPeriod: "",
            companyName: "",
            businessNumber: "",
            phoneNumber: "",
            businessType: "",
            industry: "",
            representativeName: "",
            companySize: "",
            address: "",
            isContracted: "",
            createdAt: "",
        });
    };

    // offcanvas
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [drafts, setDrafts] = useState([]);

    const handleShow = () => {
        axios
            .get("http://localhost:3010/drafts")
            .then((response) => {
                setDrafts(response.data);
                setShowOffcanvas(true);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const handleClose = () => setShowOffcanvas(false);

    const sendComponentDataToServer = () => {
        const serverUrl = "http://localhost:3010/drafts";

        const dataToSend = {
            compoId: componentData.compoId,
            price: componentData.price,
            quantity: componentData.quantity,
            defectRate: componentData.defectRate,
            qualityGrade: componentData.qualityGrade,
            productionPeriod: componentData.productionPeriod,
            companyName: componentData.companyName,
            businessNumber: componentData.businessNumber,
            phoneNumber: componentData.phoneNumber,
            businessType: componentData.businessType,
            industry: componentData.industry,
            representativeName: componentData.representativeName,
            companySize: componentData.companySize,
            address: componentData.address,
            isContracted: componentData.isContracted,
            createdAt: new Date().toLocaleDateString("ko-KR"),
        };

        // Axios
        axios
            .post(serverUrl, dataToSend)
            .then((response) => {
                console.log("Data sent successfully:", response.data);
            })
            .catch((error) => {
                console.error("Error sending data:", error);
            });
    };

    return (
        <ComponentDataContext.Provider
            value={{
                selectedComponentName,
                componentData,
                uploadedFiles,
                handleComponentClick,
                updateComponentData,
                setUploadedFiles,
            }}
        >
            <div>
                <div className="max-vh-100">
                    <div className="mx-lg-n4 mt-1">
                        <div className="row g-3 flex-between-end mb-4 mx-3">
                            <div className="col-auto">
                                <h3 className="mb-2">부품별 공급사 등록</h3>
                                <h6 className="text-700 fw-semi-bold">Registering as a Retailer for each product</h6>
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-outline-success  me-5 mb-1" type="button" onClick={handleShow}>
                                    임시 저장 목록
                                </button>
                                <button className="btn btn-outline-secondary  me-2 mb-1" type="button" onClick={sendComponentDataToServer}>
                                    임시 저장
                                </button>
                                <button className="btn btn-outline-danger  me-2 mb-1" type="button" onClick={handleReset}>
                                    초기화
                                </button>
                                <button className="btn btn-primary  me-1 mb-1" type="button">
                                    공급사 등록
                                </button>
                            </div>
                        </div>

                        <div className="row g-3 ms-3 mx-3">
                            {/* 왼쪽카드 */}
                            <div className="col-3 min-vh-75">
                                <SearchBox onComponentClick={handleComponentClick} />
                            </div>

                            {/* 가운데 카드 */}
                            <div className="col-4 min-vh-75 ">
                                <DetailItem componentName={selectedComponentName} componentData={componentData} updateComponentData={updateComponentData} setUploadedFiles={setUploadedFiles} />
                            </div>

                            {/* 오른쪽 카드 */}
                            <div className="col-5 min-vh-75">
                                <DetailCo componentData={componentData} updateComponentData={updateComponentData} />
                            </div>
                        </div>

                        {/* 토스트*/}
                        <div className="position-fixed " style={{zIndex: "5"}}>
                            <div className="toast show align-items-center text-white bg-info border-0" style={{position: "fixed", top: "-10px", right: "20px", width: "auto", maxWidth: "500px"}} role="alert" data-bs-autohide="false" aria-live="assertive" aria-atomic="true" id="checkRegiToast">
                                <div className="d-flex">
                                    <div className="toast-body">부품별 공급사가 정상적으로 등록되었습니다.</div>

                                    <button className="btn ms-2 p-0 btn-close-white" type="button" data-bs-dismiss="toast" aria-label="Close">
                                        <span className="uil uil-times fs-1"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {showOffcanvas && <DraftOffcanvas show={showOffcanvas} handleClose={handleClose} drafts={drafts} setComponentData={setComponentData} />}
            </div>
        </ComponentDataContext.Provider>
    );
};

export default AddSupplier;
