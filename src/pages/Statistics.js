import React, { useState } from "react";
import SummaryCard from "../components/event/chart/SummaryCard";
import VarianceCard from "../components/event/chart/VarianceCard";
import AnalyticsCard from "../components/event/chart/AnalyticsCard";

// 리덕스 =================================
import { useSelector } from 'react-redux';
// import { asyncFetch } from '../chartSlice';

// ========================================
function Statistics() {

    // const [sales, setSales] = useState([]);
    // const [comparison, setComparison] = useState([{}, {}, {}, {}]); // ORDERS, PRODUCE, SALES, INVENTORY

    // const chartnames = ["comparison", "sales", "predicition", "dependency", "turnover"];
    // // 상태 관리할 차트데이터 객체들

    // const tableName = 'ORDERS';
    // const startDate = new Date('1990-01-01 00:00:00').toLocaleDateString("en-us", {
    //     weekday: "long",
    //     year: "numeric",
    //     month: "short",
    //     day: "numeric",
    // });
    // const endDate = new Date().toLocaleDateString("en-us", {
    //     weekday: "long",
    //     year: "numeric",
    //     month: "short",
    //     day: "numeric",
    // });
    const [charts, setCharts] = useState([
        {}, // comparison
        {}, // chart1
        {}, // chart2
        {}, // chart3
        {}, // chart4
    ]);
    
    const status = useSelector(state => {
        console.log(state.chart.status);
        return state.chart.status;
    });
    const responseDataFromServer = useSelector(state => {
        console.log(state.chart.value);
        return state.chart.value;
    });

    return (
        <div className="pb-5 mx-3">
            <div className="row g-4">
                <div className="mb-0">
                    <h3 id="heading" className="mb-0" 
                        /*style={{position:'fixed'}}*/>
                        통계 및 분석
                    </h3>
                    <h6 id="subheading" 
                        className="text-700 pt-2 px-1 fw-semi-bold">
                        Statistaics and Analytics
                    </h6>
                </div>
                <div className="col-12 col-md-5">
                    <div className="row g-3">
                        <SummaryCard />
                        <VarianceCard charts={charts} />
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
    );
}

export default Statistics;
