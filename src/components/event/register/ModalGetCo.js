import { Button, Modal } from "react-bootstrap";

const ModalGetCo = ({ show, handleClose }) => {
	const handleSortChange = () => {};
	return (
		<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
			<Modal.Header closeButton>
				<Modal.Title>공급사 불러오기</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="col-12 d-flex justify-content-between">
					<div className="w-50">
						<label className="col-sm-3 col-form-label fs-sm--1" for="compoName">
							대분류
						</label>
						<select className="form-select mb-3" aria-label="sort" onChange={handleSortChange}>
							<option value="cpu">CPU(chip)</option>
							<option value="display">Display</option>
							<option value="camera">Camera</option>
							<option value="sound">Sound</option>
							<option value="module">Module</option>
						</select>
					</div>
					<div className="w-50 ms-3">
						<label className="col-sm-3 col-form-label fs-sm--1" for="compoName">
							소분류
						</label>
						<input className="form-control mb-xl-3" type="text" placeholder="종목" />
					</div>
				</div>

				<label className="col-sm-3 col-form-label fs-sm--1" for="compoName">
					부품명
				</label>
				<div className="col-sm-12">
					<input className="form-control text-center fs-sm--1" id="compoName" type="text" />
				</div>
				<label className="col-sm-3 col-form-label fs-sm--1" for="compoUnit">
					단위
				</label>
				<div className="col-sm-12">
					<input className="form-control text-center fs-sm--1" id="compoUnit" type="text" />
				</div>
				<label className="col-sm-3 col-form-label fs-sm--1" for="compoDetail">
					부품 설명
				</label>
				<div className="col-sm-12 mb-3">
					<input className="form-control text-center fs-sm--1" id="compoDetail" type="text" />
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					닫기
				</Button>
				<Button variant="primary">완료</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalGetCo;
