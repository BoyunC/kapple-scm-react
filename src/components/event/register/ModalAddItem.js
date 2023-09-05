import axios from "axios";
import { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ComponentDataContext } from "../../../pages/AddSupplier";

const ModalAddItem = ({ show, handleClose }) => {
	const { updateComponentData } = useContext(ComponentDataContext);

	const [formData, setFormData] = useState({
		compo_name: "",
		unit: "",
		detail: "",
		sort: "",
		sort_detail: "",
	});

	const handleSortChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleAddComponent = () => {
		axios
			.post("http://localhost:8081/component", formData)
			.then((response) => {
				console.log("부품 추가 성공:", response.data);

				const newData = response.data; // 원하는 데이터로 대체
				updateComponentData(newData); // 업데이트 함수 호출

				handleClose();
			})
			.catch((error) => {
				console.error("부품 추가 실패:", error);
			});
	};

	return (
		<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
			<Modal.Header closeButton>
				<Modal.Title>부품 추가</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="col-12 d-flex justify-content-between">
					<div className="w-50">
						<label className="col-sm-3 col-form-label fs-sm--1" htmlFor="compoSort">
							대분류
						</label>
						<select className="form-select mb-3" id="compoSort" name="sort" aria-label="sort" onChange={handleSortChange}>
							<option value="cpu">CPU(chip)</option>
							<option value="display">Display</option>
							<option value="camera">Camera</option>
							<option value="sound">Sound</option>
							<option value="module">Module</option>
						</select>
					</div>
					<div className="w-50 ms-3">
						<label className="col-sm-3 col-form-label fs-sm--1" htmlFor="compoSortDetail">
							소분류
						</label>
						<input className="form-control mb-xl-3" id="compoSortDetail" name="sort_detail" type="text" placeholder="소분류" onChange={handleSortChange} />
					</div>
				</div>

				<label className="col-sm-3 col-form-label fs-sm--1" htmlFor="compoName">
					부품명
				</label>
				<div className="col-sm-12">
					<input className="form-control text-center fs-sm--1" id="compoName" name="compo_name" type="text" onChange={handleSortChange} />
				</div>
				<label className="col-sm-3 col-form-label fs-sm--1" htmlFor="compoUnit">
					단위
				</label>
				<div className="col-sm-12">
					<input className="form-control text-center fs-sm--1" id="compoUnit" name="unit" type="text" onChange={handleSortChange} />
				</div>
				<label className="col-sm-3 col-form-label fs-sm--1" htmlFor="compoDetail">
					부품 설명
				</label>
				<div className="col-sm-12 mb-3">
					<input className="form-control text-center fs-sm--1" id="compoDetail" name="detail" type="text" onChange={handleSortChange} />
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					닫기
				</Button>
				<Button variant="primary" onClick={handleAddComponent}>
					부품 추가
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalAddItem;
