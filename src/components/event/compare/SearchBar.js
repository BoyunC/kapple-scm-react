import { useState } from "react";

const SearchBar = ({ title }) => {
	const [item, setItem] = useState("");

	return (
		<div>
			{/* 페이지 타이틀 */}
			<div className="row g-3 mb-4">
				<div className="col-auto">
					<h3 className="mb-2" id="pageTitle">
						{title} 비교
					</h3>
					<h6 className="text-700 fw-semi-bold">Comparing suggested components</h6>
				</div>
			</div>

			{/* 상단 : 부품/상품 검색 및 부품/공급사 추가 버튼 */}
			<div id="products" data-list='{"valueNames":["suppl_no","suppl_name","ceo_name","category"],"page":10,"pagination":true}'>
				<div className="mb-4">
					<div className="d-flex flex-wrap gap-3">
						{/* 부품/상품 검색창 */}
						<div className="search-box" id="componentSearchBox">
							<form className="position-relative" data-bs-toggle="search" data-bs-display="static" action="/comparsionSupplier" method="get">
								<input
									className="form-control search-input search"
									type="search"
									placeholder="부품 검색창"
									aria-label="Search"
									name="compo_name"
									id="searchItemInput"
									onChange={(e) => {
										setItem(e.target.value);
									}}
								/>
								<span className="fas fa-search search-box-icon"></span>
							</form>
						</div>
						<button className="btn btn-primary" id="searchItem">
							<span className="fas fa-plus me-2"></span>검색
						</button>
						{/* 공급사/부품 추가 버튼 */}
						<div className="ms-auto">
							<button className="btn btn-primary" id="addSupplierBtn">
								<span className="fas fa-plus me-2"></span>공급사 추가
							</button>
							<button className="btn btn-primary ms-2" id="addProdutBtn">
								<span className="fas fa-plus me-2"></span>부품 추가
							</button>
						</div>
					</div>
				</div>
				{/* ... */}
			</div>
		</div>
	);
};
export default SearchBar;
