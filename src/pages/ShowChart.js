import React, {useState} from "react";
import StatisticsSummary from "../components/event/chart/StatisticsSummary";
import axios from "axios";
import AnalyticsCard from "../components/event/chart/AnalyticsCard";
import ReactECharts from "echarts-for-react";
import {useEffect} from "react";

function ShowChart() {
    const orderQty = 123456789;
    const produceQty = 123456987;
    const salesQty = 123456123;
    const returnQty = 123456321;

    const chartnames = ["comparison", "sales", "predicition", "dependency", "turnover"];

    // 상태 관리할 차트데이터 객체들
    const [charts, setCharts] = useState([
        {}, // comparison
        {}, // chart1
        {}, // chart2
        {}, // chart3
        {}, // chart4
    ]);
    console.log("charts:", charts);

    const fetchInitialData = () => {
        //()안에 id는 필요에 따라 넣어도, 안넣어도 됨.
        axios.get(`http://localhost:3010/responses/`).then((response) => {
            const responses = response.data;
            console.log("responses:", responses);

            // const responseComparison = responses
            //     .find(response => response.chartName === "comparison");
            // //find():만족하는 첫째 요소를 반환, filter():만족하는 모든 요소를 배열로 반환.
            // setcomparison(responseComparison); //상태 업데이트

            const responseCharts = chartnames.map((chartName) => {
                const chartData = responses.find((response) => response.chartName === chartName);

                console.log("chart:", chartData);
                return chartData || {}; // 해당 차트 데이터가 없을 경우 빈 객체 반환
            });
            setCharts(responseCharts);
        });
    };

    useEffect(() => {
        fetchInitialData();
    }, []);

    return (
        <div className="content">
            <div className="pb-5 mx-3">
                <div className="row g-4">
                    <div className="mb-0">
                        <h2 id="heading" className="mb-0" /*style={{position:'fixed'}}*/>
                            통계 및 분석
                        </h2>
                        <h5 id="subheading" className="text-700 pt-2 px-1 fw-semi-bold">
                            Statistaics and Analytics
                        </h5>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="row g-3">
                            <div className="card " style={{height: "auto"}}>
                                <div className="card-body">
                                    <div id="sectionfour" className="row justify-content-between">
                                        <StatisticsSummary divClassName="border-bottom-md border-bottom-xxl-0 border-end-xxl-0" spanClassName="uil-download-alt text-primary" h1Child={orderQty} pChild="부품 주문량" />
                                        <StatisticsSummary divClassName="border-start-xxl border-bottom-md border-bottom-xxl-0 border-end-md-0" spanClassName="uil-upload text-info" h1Child={produceQty} pChild="제품 생산량" />
                                        <StatisticsSummary divClassName="border-start-xxl border-end-xxl-0" spanClassName="uil-money-bill-stack text-primary" h1Child={salesQty} pChild="제품 판매량" />
                                        <StatisticsSummary divClassName="border-start-xxl border-end-md-0" spanClassName="uil-usd-circle text-danger" h1Child={returnQty} pChild="제품 반품량" />
                                    </div>
                                </div>
                            </div>

                            <div className="card" style={{height: "auto"}}>
                                <div className="card-body">
                                    <div className="row flex-between-center mb-4 g-3">
                                        <div className="col-auto">
                                            <h3 id="comparisonTitle">{charts[0].title}</h3>
                                            {/* <p className="text-700 lh-sm mb-0" id="comparisonComment">with the previous period</p> */}
                                        </div>
                                        <div className="col-auto">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="{period}" id="flexCheckChecked" defaultChecked />
                                                <label className="form-check-label fs--1" htmlFor="flexCheckChecked">
                                                    모든 차트에 기준 적용
                                                </label>
                                            </div>
                                            <div>
                                                <select className="form-select form-select-sm mt-2" id="selectComparisonPeriod">
                                                    <option>2023년도</option>
                                                    <option>2022년도</option>
                                                    <option>2021년도</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {charts[0].option ? <ReactECharts option={charts[0].option} /> : <p>Loading...</p>}
                                </div>
                                {/* <div id="comparisonChart" className="echart-total-sales-chart"
                                    style={{ minHeight: 400, width: 100 }}>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-7">
                        <div className="row g-3">
                            {/* 4개는 정해진 갯수고, 이 카드 자체도 바꿀 수 있거나, 
                                아니면 카드 셋을 바꿀 수 있게 하기 */}
                            {charts.map((item, index) =>
                                index !== 0 ? ( // Comparioson은 제외
                                    item.option ? (
                                        <AnalyticsCard key={index} chart={item} />
                                    ) : (
                                        <p key={index}>Loading...</p>
                                    )
                                ) : null
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowChart;
