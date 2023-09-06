import React, { useState } from "react";
import StatisticsSummary from "../components/event/chart/StatisticsSummary";
import AnalyticsCard from "../components/event/chart/AnalyticsCard";
import ReactECharts from "echarts-for-react";
import { useEffect } from "react";

// 리덕스 =================================
import { useSelector } from 'react-redux';
// import { asyncFetch } from '../chartSlice';

// ========================================
function AnalyzeStatistics() {
    //const store = createStore(rootReducer, composeWithDevTools()); // 스토어 생성
    //console.log(store.getState()); // 스토어 상태를 확인

    // function reducer(currentState, action) { //인자: 현재 state, 그 값의 변화 방법 명세 action
    //     if (currentState === undefined) { // 현재 state가 정의되지 않으면
    //         return { //기본 state 리턴.
    //             num: 1
    //         };
    //     }
    //     const newState = { ...currentState }; //불변성을 위해 현재(이전)상태 복제본 사용.
    //     return newState;
    // }
    // const store = createStore(reducer); // store를 생성할 때 반드시 reducer를 주입해야 함.

    // =============================================================

    const [sales, setSales] = useState([]);
    const [comparison, setComparison] = useState([{},{},{},{}]);
    // ORDERS, PRODUCE, SALES, INVENTORY
    // console.log("comparison:", comparison);

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
    // console.log("charts:", charts);

    // const fetchInitialData = () => {
    //     //()안에 id는 필요에 따라 넣어도, 안넣어도 됨.
    //     axios.get(`http://localhost:3000/responses/`).then((response) => {
    //         const responses = response.data;
    //         console.log("responses:", responses);

    //         // const responseComparison = responses
    //         //     .find(response => response.chartName === "comparison");
    //         // //find():만족하는 첫째 요소를 반환, filter():만족하는 모든 요소를 배열로 반환.
    //         // setcomparison(responseComparison); //상태 업데이트

    //         const responseCharts = chartnames.map((chartName) => {
    //             const chartData = responses.find((response) => response.chartName === chartName);

    //             console.log("chart:", chartData);
    //             return chartData || {}; // 해당 차트 데이터가 없을 경우 빈 객체 반환
    //         });
    //         setCharts(responseCharts);
    //     });
    // };
    // useEffect(() => {
    //     fetchInitialData();
    // }, []);

    /* 판매량 */
    // const saleHandler = () => {
    //     axios.get('http://localhost:8081/show/allData').then((res) => {
    //       console.log(res.data);
    //       setSales(res.data);
    //     })
    //   }
    // useEffect(() => {
    //     saleHandler();
    // }, [])

    const tableName='ORDERS';
    const startDate = new Date('1990-01-01 00:00:00').toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    const endDate = new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });

    // ★createAsyncThunk()는 비동기작업을 처리하는 액션을 만들어준다.★
    // useEffect(() => { 
    //     const asyncUpFetch = createAsyncThunk(
    //         'chartSlice/asyncFetchData', // 첫번째 인자는 액션 타입, 
    //         // 두번째 인자는 액션이 실행될 때 처리할 작업. (서버접속, 결과 가져와 리턴)
    //         axios.get('http://localhost:8081/show/comparison').then((res) => {
    //           console.log("createAsyncThunk 비동기함수 호출:", res.data);
    //           setComparison(res.data);
    //           // return res.data;
    //         })
    //     );
    // }, []);


    const status = useSelector(state=>{
        return state.chart.status;
    });
    const responseDataFromServer = useSelector(state=>{
        return state.chart.value;
    });

    // useEffect(() => {    
    //     dispatchEvent(asyncFetch);
    // }, [])


    return (
        <div>
            <div className="pb-5 mx-3">
                <div className="row g-4">
                    <div className="mb-0">
                        <h3 id="heading" className="mb-0" /*style={{position:'fixed'}}*/>
                            통계 및 분석
                        </h3>
                        <h6 id="subheading" className="text-700 pt-2 px-1 fw-semi-bold">
                            Statistaics and Analytics
                        </h6>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="row g-3">
                            <div className="card " style={{ height: "auto" }}>
                                <div className="card-body">
                                    <div id="sectionfour" className="row justify-content-between">
                                        <StatisticsSummary divClassName="border-bottom-md border-bottom-xxl-0 border-end-xxl-0" spanClassName="uil-download-alt text-primary" h1Child={orderQty} pChild="부품 주문량" />
                                        <StatisticsSummary divClassName="border-start-xxl border-bottom-md border-bottom-xxl-0 border-end-md-0" spanClassName="uil-upload text-info" h1Child={produceQty} pChild="제품 생산량" />
                                        <StatisticsSummary divClassName="border-start-xxl border-end-xxl-0" spanClassName="uil-money-bill-stack text-primary" h1Child={salesQty} pChild="제품 판매량" />
                                        <StatisticsSummary divClassName="border-start-xxl border-end-md-0" spanClassName="uil-usd-circle text-danger" h1Child={returnQty} pChild="제품 반품량" />
                                    </div>
                                </div>
                            </div>

                            <div className="card" style={{ height: "auto" }}>
                                <div className="card-body">
                                    <div className="row flex-between-center mb-4 g-3">
                                        <div className="col-auto">
                                            <h4 id="comparisonTitle">{charts[0].title}</h4>
                                            <p className="text-700 lh-sm mb-0" style={{ fontSize: 'smaller' }}
                                                id="comparisonComment">with the previous period</p>
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

export default AnalyzeStatistics;
