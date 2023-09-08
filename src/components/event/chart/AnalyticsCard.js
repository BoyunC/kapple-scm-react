import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { useSelector, useDispatch } from "react-redux";
import { selectActions, store } from "../../../chartSlice";

const AnalyticsCard = ({key, item}) => {
	
	const [ option , setOption] = useState(item);
	// console.log("option", option);
	// const data = useState(item);
	// console.log(" AnalyticsCard data ", data[0].chart);
	// const {option, setOption} = useState(item.chart);
	// setOption(item.chart);
	// console.log(" AnalyticsCard item.chart ", item.chart);
	// console.log(" AnalyticsCard option ", option);

	useEffect(() => {
		console.log("option:", option);
	}, [option]);

	// const option = useSelector((state) => {	
	// 	console.log("AnalyticsCard options", state.fetch.options[1]);
	// 	return state.fetch.options[1];
	// });

	// console.log("AnalyticsCard option[0]", options.get(0));
	// const option = options[key];
	// console.log("AnalyticsCard option[key2", option);

    const selectedYear = useSelector((state) => {	
		console.log("AnalyticsCard selectedYear", state.select.selectedYear);
		return state.select.selectedYear;
	});

    const yearOptions = useSelector((state) => {	
		console.log("AnalyticsCard yearOptions", state.select.yearOptions);
		return state.select.options;
	});

	// const [selectedYear, setSelectedYear] = useState(chart.period.endYear);

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
							{option.title.subtext}
							{/* {chart.period && ( */}
								{/* <select className="form-select form-select-sm mt-2" 
									id="selectComparePeriod" value={selectedYear} 
									onChange={
										(e) => store.dispatch(selectActions.setSelectedYear(parseInt(e.target.value)))}>
										{yearOptions.map((year, index) => (
										<option key={index}>{year}</option>
									))}
								</select> */}
							{/* )} */}
						</h6>
						{/* {amount !== undefined && <h4 id="salesTopQt">여긴 뭐야</h4>} */}
					</div>
					<div className="d-flex justify-content-center px-1 pt-4">
						{/* <div className="d-flex justify-content-center px-4 py-6"> */}
						{/* <div id="salesTopChart" className="echart-total-orders"
                            style={{ height: 100, width: 100 }}></div> */}
						{!option 
							? <p>Graph Loading...</p> 
							: <ReactECharts option={option}style={{ height: "180%", width: "100%" }}/>}
						{/* </div> */}
					</div>
					<div className="mt-2">
					{/* 비워놓기 */}
					</div>
				</div>
			</div>
		</div>
	);
};
export default AnalyticsCard;
