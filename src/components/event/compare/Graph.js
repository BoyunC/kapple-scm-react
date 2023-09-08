import React, { useEffect, useState } from "react";
//import * as echarts from 'echarts'; // Make sure to import echarts library
//import echarts from "echarts"
import ECharts, { EChartsReactProps } from "echarts-for-react";

const Graph = ({  retailer, names, proposals, prices, quantitys, defective_rates, quality_grades, prod_periods}) => {
	//const [proposal,setProposal] =useState([]);
	const colors = ['#5470C6', '#91CC75', '#EE6666','#07dbeb','#121210'];
	const [options, setOptions] = useState({});
	const [options2, setOptions2] = useState({});
	useEffect(()=>{
		//setProposal(proposals);
		if(!retailer){
			setOptions({
				// 	title: {
				// 		text: "comparison",
				// 	},
				// 	legend: {
				// 		data: names//["a", "b", "c"], //names //공급사 이름
				// 	},
				// 	radar: {
				// 		// shape: 'circle',
				// 		indicator: [
				// 			{ name: "단가", max: 100000 },
				// 			{ name: "수량", max: 10000 },
				// 			{ name: "불량률", max: 0.1 },
				// 			{ name: "품질 등급", max: 10 },
				// 			{ name: "생산 기간", max: 10 },
				// 		],
				// 	},
				// 	series: [
				// 		{
				// 			name: "comparison",
				// 			type: "radar",
				// 			data:  proposals, //제안 정보  2차 배열 (단가, 수량, 불량률, 품질등급, 생산기간)
				// 		},
				// 	],
				// 	grid: {
				// 		left: 50, // 그래프 영역의 왼쪽 여백
				// 		right: 50, // 그래프 영역의 오른쪽 여백
				// 		top: 50, // 그래프 영역의 위쪽 여백
				// 		bottom: 50, // 그래프 영역의 아래쪽 여백
				// 	},
				// })
				color: colors,
				tooltip: {
				  trigger: 'axis',
				  axisPointer: {
					type: 'cross'
				  }
				},
				grid: {
				  right: '23%',
				  left:'25%'
				},
				toolbox: {
				  feature: {
					dataView: { show: true, readOnly: false },
					restore: { show: true },
					saveAsImage: { show: true }
				  }
				},
				legend: {
				  data: ['단가', '수량', '불량률','품질 등급','생산 기간']
				},
				xAxis: [
				  {
					type: 'category',
					axisTick: {
					  alignWithLabel: true
					},
					// prettier-ignore
					data: names
				  }
				],
				yAxis: [
				  {
					type: 'value',
					name: '단가',
					position: 'right',
					alignTicks: true,
					axisLine: {
					  show: true,
					  lineStyle: {
						color: colors[0]
					  }
					},
					axisLabel: {
					  formatter: '{value} 원'
					}
				  },
				  {
					type: 'value',
					name: '수량',
					position: 'right',
					alignTicks: true,
					offset: 70,
					axisLine: {
					  show: true,
					  lineStyle: {
						color: colors[1]
					  }
					},
					axisLabel: {
					  formatter: '{value} 개'
					}
				  },
				  {
					type: 'value',
					name: '불량률',
					position: 'left',
					alignTicks: true,
					
					axisLine: {
					  show: true,
					  lineStyle: {
						color: colors[2]
					  }
					},
					axisLabel: {
					  formatter: '{value} %'
					}
				  },
				  {
					type: 'value',
					name: '품질등급',
					position: 'left',
					alignTicks: true,
					offset: 60,
					axisLine: {
					  show: true,
					  lineStyle: {
						color: colors[3]
					  }
					},
					axisLabel: {
					  formatter: '{value}'
					}
				  },		  {
					type: 'value',
					name: '생산기간',
					position: 'left',
					alignTicks: true,
					offset: 120,
					axisLine: {
					  show: true,
					  lineStyle: {
						color: colors[4]
					  }
					},
					axisLabel: {
					  formatter: '{value} 일'
					}
				  }
				],
				series: [
				  {
					name: '단가',
					type: 'bar',
					data: prices
				  },
				  {
					name: '수량',
					type: 'bar',
					yAxisIndex: 1,
					data: quantitys
				  },
				  {
					name: '불량률',
					type: 'bar',
					yAxisIndex: 2,
					data: defective_rates
				  },
				  {
					name: '품질 등급',
					type: 'bar',
					yAxisIndex: 3,
					data: quality_grades
				  },
				  {
					name: '생산 기간',
					type: 'bar',
					yAxisIndex: 4,
					data: prod_periods
				  }
				]
				})
		}else{
			setOptions2({
				tooltip: {
					trigger: "axis",
					axisPointer: {
						type: "cross",
						crossStyle: {
							color: "#999",
						},
					},
				},
				toolbox: {
					feature: {
						dataView: { show: true, readOnly: false },
						magicType: { show: true, type: ["line", "bar"] },
						restore: { show: true },
						saveAsImage: { show: true },
					},
				},
				legend: {
					data: ["예상 판매량", "단가"],
				},
				xAxis: [
					{
						type: "category",
						data: names, //names,
						axisPointer: {
							type: "shadow",
						},
					},
				],
				yAxis: [
					{
						type: "value",
						name: "예측 판매량",
						min: 0,
						max: 100,
						interval: 10,
						axisLabel: {
							formatter: "{value} 개",
						},
					},
					{
						type: "value",
						name: "단가",
						min: 0,
						max: 500,
						interval: 100,
						axisLabel: {
							formatter: "{value} 만원",
						},
					},
				],
				series: [
					{
						name: "예측판매량",
						type: "bar",
						tooltip: {
							valueFormatter: function (value) {
								return value + " 개";
							},
						},
						data: quantitys, //predictAmount 예측 판매 개수
					},
		
					{
						name: "단가",
						type: "line",
						yAxisIndex: 1,
						tooltip: {
							valueFormatter: function (value) {
								return value + " 만원";
							},
						},
						data: prices, //predictPrice 예측 판매 단가
					},
				],
				grid: {
					left: 100, // 그래프 영역의 왼쪽 여백
					right: 100, // 그래프 영역의 오른쪽 여백
					top: 100, // 그래프 영역의 위쪽 여백
					bottom: 100, // 그래프 영역의 아래쪽 여백
				},
			})
		}
		
	},[names]);
	
	return <ECharts option={retailer ? options2 : options} opts={{ renderer: "svg", width: "600px", height: "440px" }} />;
};

export default Graph;
