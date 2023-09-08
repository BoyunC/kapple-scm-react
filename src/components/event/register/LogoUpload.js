import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";

const LogoUpload = ({ componentData, updateComponentData }) => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [logoName, setLogoName] = useState("");

	const handleFileInputChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(file);

		updateComponentData({ has_logo: true });

		uploadLogo(file);
	};

	useEffect(() => {
		if (componentData.responseLogo && componentData.responseLogo.logo_name !== "") {
			// 로고 이름이 있으면 해당 로고를 가져옵니다.
			setLogoName(componentData.responseLogo.logo_name);
		}
	}, [componentData.responseLogo]);

	useEffect(() => {
		if (componentData.has_logo === false) {
			setSelectedFile(null);
		}
	}, [componentData.has_logo]);

	const uploadLogo = async (uploadedLogo) => {
		try {
			const formData = new FormData();

			formData.append("file", uploadedLogo);

			const uploadUrl = "http://localhost:8081/logo";
			const response = await axios.post(uploadUrl, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			console.log("로고 업로드 성공:", response.data);
		} catch (error) {
			console.error("로고 업로드 오류:", error);
		}
	};

	return (
		<div className="thumbnail-container">
			<label htmlFor="fileInput" className="thumbnail">
				{componentData.responseLogo && componentData.responseLogo.logo_name ? (
					<img className="rounded-circle border border-3" width="75px" height="75px" src={`/savedFile/logo/supplier/${componentData.responseLogo.logo_name}`} alt="" />
				) : selectedFile ? (
					<img src={URL.createObjectURL(selectedFile)} alt="Selected" className="rounded-circle border border-3 h-auto" style={{ width: "85px", height: "85px" }} />
				) : (
					<div className="placeholder rounded-circle border border-3 text-center" style={{ width: "85px", height: "85px", cursor: "pointer" }}>
						<FontAwesomeIcon icon="camera" size="1x" color="white" className="mt-4" />
						<p className="text-white fs--1">로고 선택</p>
					</div>
				)}
			</label>
			<input type="file" id="fileInput" accept="image/*" style={{ display: "none" }} onChange={handleFileInputChange} />
		</div>
	);
};

export default LogoUpload;
