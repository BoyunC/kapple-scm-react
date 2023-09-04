import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";

const AnalyticsCard = ({ chart }) => {
	const { title, option } = chart;
	const { startYear, endYear } = chart.period;
	const [amount, setAmount] = useState(chart.data.amount);

	const yearOptions = [];
	for (let year = endYear; year >= startYear; year--) {
		yearOptions.push(year);
	}

	const [selectedYear, setSelectedYear] = useState(chart.period.endYear);

	useEffect(() => {
		// Fetch chart data by selected year and update chart's option and period
		axios.get(`http://localhost:3010/responses/?year=${selectedYear}`).then((response) => {
			const chartData = response.data.find((response) => response.chartName === chart.chartName);
			const dataForSelectedYear = chartData.data.find((data) => data.year === selectedYear);
			if (dataForSelectedYear) {
				setAmount(dataForSelectedYear.amount);
				// chart.data.amount = chartData.data.amount;
				// chart.option = chartData.option;
				// chart.period = chartData.period;
			}
		});
	}, [selectedYear, chart]);

	return (
		<div className="col-12 col-md-6">
			<div className="card h-100">
				<div className="card-body">
					<div className="d-flex justify-content-between">
						<h5 className="mb-1" id="salesTopBadge">
							{title}
							{chart.period && (
								<select className="form-select form-select-sm mt-2" id="selectComparePeriod" value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
									{yearOptions.map((year, index) => (
										<option key={index}>{year}</option>
									))}
								</select>
							)}
						</h5>
						{amount !== undefined && <h4 id="salesTopQt">{`${amount.toLocaleString()}`}</h4>}
					</div>
					<div className="d-flex justify-content-center px-1 pt-4">
						{/* <div className="d-flex justify-content-center px-4 py-6"> */}
						{/* <div id="salesTopChart" className="echart-total-orders"
                            style={{ height: 100, width: 100 }}></div> */}
						{option ? <ReactECharts option={option} style={{ height: "180%", width: "100%" }} /> : <p>Loading...</p>}
						{/* </div> */}
					</div>
					<div className="mt-2">
						{/* 여기는 템플릿이 같으니까 조건부 렌더링 가능? 
                            아니면 컴포넌트 넣어주는 게 낫나?  아무튼 일단 보류.
                         <div className="d-flex align-items-center mb-2">
                            <div className="bullet-item bg-primary me-2"></div>
                            <h6 className="text-900 fw-semi-bold flex-1 mb-0"
                                id="salesTopText">★Completed</h6>
                            <h6 className="text-900 fw-semi-bold mb-0" id="salesTopCompleted">★52%</h6>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="bullet-item bg-primary-100 me-2"></div>
                            <h6 className="text-900 fw-semi-bold flex-1 mb-0"
                                id="salesTopAnotherText">★Pending payment</h6>
                            <h6 className="text-900 fw-semi-bold mb-0" id="salesTopPending">★48%</h6>
                        </div> */}
					</div>
				</div>
			</div>
		</div>
	);
};
export default AnalyticsCard;
