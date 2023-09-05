import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const LogoUpload = () => {
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileInputChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(file);
	};

	return (
		<div className="thumbnail-container">
			<h5>로고 이미지 선택</h5>
			<label htmlFor="fileInput" className="thumbnail">
				{selectedFile ? (
					<img src={URL.createObjectURL(selectedFile)} alt="Selected" />
				) : (
					<div className="placeholder">
						<FontAwesomeIcon icon="camera" size="3x" />
						<p>이미지 선택</p>
					</div>
				)}
			</label>
			<input type="file" id="fileInput" accept="image/*" style={{ display: "none" }} onChange={handleFileInputChange} />
		</div>
	);
};

export default LogoUpload;
