import { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { useSelector } from "react-redux";

const VarianceCard = ({item}) => {

	const [ option , setOption] = useState(item);
	useEffect(() => {
		console.log("option:", option);
	}, [option]);

    return (
        <div className="card" style={{ height: "auto" }}>
            <div className="card-body">
                <div className="row flex-between-center mb-4 g-3">
                    <div className="col-auto">
                        <h4 id="comparisonTitle">
                            {option 
                                ? option.title.subtext
                                : "변화 비교 분석"}</h4>
                        <p className="text-700 lh-sm mb-0" 
                            style={{fontSize:'smaller'}}
                            id="comparisonComment">with the previous period</p>
                    </div>
                    <div className="col-auto">
                        <div className="form-check">
                            <input className="form-check-input" 
                                type="checkbox" value="{period}" 
                                id="flexCheckChecked" defaultChecked />
                            <label 
                                className="form-check-label fs--1" 
                                htmlFor="flexCheckChecked">
                                모든 차트에 기준 적용
                            </label>
                        </div>
                        <div>
                            <select 
                                className="form-select form-select-sm mt-2" 
                                id="selectComparisonPeriod">
                                <option>2023년도</option>
                                <option>2022년도</option>
                                <option>2021년도</option>
                            </select>
                        </div>
                    </div>
                </div>
                {option
                    ? <ReactECharts option={option} /> 
                    : <p>Comparison ECharts Loading...</p>}
            </div>
            {/* <div id="comparisonChart" 
            className="echart-total-sales-chart"
            style={{ minHeight: 400, width: 100 }}>
        </div> */}
        </div>
    );
}
export default VarianceCard;