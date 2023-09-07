import React, { useState } from "react";
import ReactECharts from "echarts-for-react";

import { useSelector, useDispatch } from "react-redux";

const AnalyticsCard = ({ chart }) => {

	// useSelector는 리덕스 스토어의 상태를 조회하는 Hook
	// state의 값은 store.getState() 함수 호출 시 결과물과 동일(상태 값)
	// // 함수 원형
	// function f(state) {
	// 	return state.number;
	// }
	// const number = useSelector(f);
	// 화살표 함수 사용
	const number = useSelector(state=> state.num); 
	//num은 reducer에서 리턴하는 값 그대로. 결과 OK

	const { title, option } = chart;
	const { startYear, endYear } = chart.period;
	const [amount, setAmount] = useState(chart.data.amount);

	const yearOptions = [];
	for (let year = endYear; year >= startYear; year--) {
		yearOptions.push(year);
	}

	const [selectedYear, setSelectedYear] = useState(chart.period.endYear);

	// useEffect(() => {
	// 	// Fetch chart data by selected year and update chart's option and period
	// 	axios.get(`http://localhost:3010/responses/?year=${selectedYear}`).then((response) => {
	// 		const chartData = response.data.find((response) => response.chartName === chart.chartName);
	// 		const dataForSelectedYear = chartData.data.find((data) => data.year === selectedYear);
	// 		if (dataForSelectedYear) {
	// 			setAmount(dataForSelectedYear.amount);
	// 			// chart.data.amount = chartData.data.amount;
	// 			// chart.option = chartData.option;
	// 			// chart.period = chartData.period;
	// 		}
	// 	});
	// }, [selectedYear, chart]);

	return (
		<div className="col-12 col-md-6">
			<div className="card h-100">
				<div className="card-body">
					<div className="d-flex justify-content-between">
						<h6 className="mb-1" id="salesTopBadge">
							{title}
							{chart.period && (
								<select className="form-select form-select-sm mt-2" 
									id="selectComparePeriod" value={selectedYear} 
									onChange={
										(e) => setSelectedYear(parseInt(e.target.value))}>
										{yearOptions.map((year, index) => (
										<option key={index}>{year}</option>
									))}
								</select>
							)}
						</h6>
						{amount !== undefined && <h4 id="salesTopQt">{`${number}`}</h4>}
					</div>
					<div className="d-flex justify-content-center px-1 pt-4">
						{/* <div className="d-flex justify-content-center px-4 py-6"> */}
						{/* <div id="salesTopChart" className="echart-total-orders"
                            style={{ height: 100, width: 100 }}></div> */}
						{ !option ? <p>Loading...</p> : 
							<ReactECharts option={option} 
							style={{ height: "180%", width: "100%" }} /> }
						{/* </div> */}
					</div>
					<div className="mt-2">
						{/* 여기는 템플릿이 같으니까 조건부 렌더링 가능? 
                            아니면 컴포넌트 넣어주는 게 낫나?  아무튼 일단 보류.
                         <div className="d-flex align-items-center mb-2">
                            <div className="bullet-item bg-primary me-2"></div>
                            <h6 className="text-900 fw-semi-bold flex-1 mb-0"
                                id="salesTopText">★Completed</h6>
                            <h6 className="text-900 fw-semi-bold mb-0" 
								id="salesTopCompleted">★52%</h6>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="bullet-item bg-primary-100 me-2"></div>
                            <h6 className="text-900 fw-semi-bold flex-1 mb-0"
                                id="salesTopAnotherText">★Pending payment</h6>
                            <h6 className="text-900 fw-semi-bold mb-0" 
								id="salesTopPending">★48%</h6>
                        </div> */}
					</div>
				</div>
			</div>
		</div>
	);
};
export default AnalyticsCard;
