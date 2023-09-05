import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ setUploadedFiles }) => {
	const [files, setFiles] = useState([]);

	const { getRootProps, getInputProps } = useDropzone({
		accept: {
			"image/*": [".jpeg", ".png", ".jpg"],
			"txt/*": [".word", ".hw", ".txt", ".pdf"],
		},
		onDrop: (acceptedFiles) => {
			console.log("Accepted Files:", acceptedFiles); // 확인용 로그
			setUploadedFiles(acceptedFiles);

			uploadFile(acceptedFiles);

			setFiles([
				...files,
				...acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				),
			]);
		},
	});

	const uploadFile = async (uploadedFiles) => {
		try {
			const formData = new FormData();

			uploadedFiles.forEach((file) => {
				formData.append("file", file);
			});

			const uploadUrl = "http://localhost:8081/file";
			const response = await axios.post(uploadUrl, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			console.log("파일 업로드 성공:", response.data);
		} catch (error) {
			console.error("파일 업로드 오류:", error);
		}
	};

	const handleRemove = (path) => {
		setFiles(files.filter((file) => file.path !== path));
	};

	const getSize = (size) => {
		if (size < 1024) {
			return `${size} Byte`;
		} else if (size < 1024 * 1024) {
			return `${(size / 1024).toFixed(2)} KB`;
		} else {
			return `${(size / (1024 * 1024)).toFixed(2)} MB`;
		}
	};

	return (
		<div className="col-12 mt-3 mb-5">
			<div className="d-flex flex-wrap mb-2">
				<h5 className="mb-0 text-1000 me-2">제안서</h5>
			</div>

			<div style={{ height: "60px", marginBottom: "10px" }} {...getRootProps({ className: "dropzone-area" })}>
				<input name="uploadedFiles" {...getInputProps()} />
				<div justifyContent="center" className="d-flex">
					<img src="resources/assets/img/icons/cloud-upload.svg" alt="" width={25} className="me-2" />
					<p className="fs-0 mb-0 text-700">Drop your images here</p>
				</div>
			</div>
			<div>
				{files.map((file) => (
					<div alignitems="center" className="d-flex py-1 border-bottom btn-reveal-trigger" key={file.path}>
						<img className="ms-3 rounded" width={25} height={25} src={file.preview} alt={file.path} />

						<div justifyContent="between" alignitems="center" className="ms-3 flex-1 d-flex">
							<div>
								<h6>{file.path}</h6>
								<div className="d-flex position-relative" alignitems="center">
									<p className="mb-0 fs--1 text-400 line-height-1">
										<strong>{getSize(file.size)}</strong>
									</p>
								</div>
							</div>
						</div>

						<Dropdown className="font-sans-serif btn-reveal-trigger" align="start">
							<Dropdown.Toggle variant="link" size="sm" data-boundary="viewport" className="text-600 btn-reveal">
								<FontAwesomeIcon icon="fa-solid fa-bars" className="fs--2" />
							</Dropdown.Toggle>
							<Dropdown.Menu className="border py-0">
								<div className="py-2">
									<Dropdown.Item className="text-danger" onClick={() => handleRemove(file.path)}>
										Remove
									</Dropdown.Item>
								</div>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				))}
			</div>
		</div>
	);
};

export default FileUpload;
