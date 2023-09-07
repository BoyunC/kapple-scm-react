import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ComponentDataContext } from "../../../pages/AddSupplier";

const SearchBox = ({ onComponentClick }) => {
	const { componentData } = useContext(ComponentDataContext);
	const [components, setComponents] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [searchCompleted, setSearchCompleted] = useState(false);

	useEffect(() => {
		axios
			.get(`http://localhost:8081/components`)
			.then((response) => {
				setComponents(response.data);
				console.log(components);
			})
			.catch((error) => {
				console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
			});
	}, [componentData]);

	const handleSearch = () => {
		setSearchCompleted(true);

		const filteredComponents = components.filter((component) => {
			const searchFields = ["compo_name", "compo_no", "detail", "sort"];
			return searchFields.some((field) => {
				const fieldValue = component[field];
				if (fieldValue && typeof fieldValue === "string") {
					const searchTermLower = searchTerm.toLowerCase();
					const fieldLower = fieldValue.toLowerCase();
					return fieldLower.includes(searchTermLower);
				}
				return false;
			});
		});
		setSearchResults(filteredComponents);
	};

	return (
		<div style={{ height: "800px" }}>
			<select className="form-select mb-1 " aria-label="category">
				<option value="component_name">부품명</option>
				<option value="component_id">부품번호</option>
				<option value="component_detail">부품설명</option>
				<option value="component_sort">부품분류</option>
			</select>

			<div className="form-icon-container mb-3 mt-1 d-flex">
				<div className="flex-grow-1 me-1">
					<input className="form-control form-icon-input" type="text" placeholder="부품 검색" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
					<span className="fa-solid fa-mobile-screen text-700 fs--1 form-icon"></span>
				</div>
				<button className="btn btn-primary btn-sm" onClick={handleSearch}>
					검색
				</button>
			</div>

			<div className="card max-vh-75 overflow-auto" style={{ overflow: "scroll", "-webkit-overflow-scrolling": "touch", scrollbarWidth: "none", msOverflowStyle: "none", height: "83%" }}>
				<div>
					{!searchCompleted
						? components.map((component) => (
								<div key={component.compon_no} className="item-center m-3">
									<button className="btn btn-phoenix-info p-2 w-100 border-100" onClick={() => onComponentClick(component.compo_name, component.compo_no)}>
										<p className="fs-sm--1 mb-1 text-secondary">{component.compo_no}</p>
										<h5 className="mb-1 mt-2 text-primary">{component.compo_name}</h5>
										<p className="fs-sm--2 mb-0 text-secondary">{component.unit}</p>
										<p className="mb-0 text-secondary">{component.detail}</p>
									</button>
								</div>
						  ))
						: searchResults.map((component) => (
								<div key={component.compon_no} className="item-center m-3">
									<button className="btn btn-phoenix-info p-2 w-100 border-100" onClick={() => onComponentClick(component.compo_name, component.compo_no)}>
										<p className="fs-sm--1 mb-1 text-secondary">{component.compo_no}</p>
										<h5 className="mb-1 mt-2 text-primary">{component.compo_name}</h5>
										<p className="fs-sm--2 mb-0 text-secondary">{component.unit}</p>
										<p className="mb-0 text-secondary">{component.detail}</p>
									</button>
								</div>
						  ))}
				</div>
			</div>
		</div>
	);
};

export default SearchBox;
