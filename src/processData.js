import moment from "moment";
const processData = (buckets) => {
    // const buckets = useSelector((state) => {	
	// 	console.log("useSelector", state.fetch.buckets);
	// 	return state.fetch.buckets;
	// });
    
    const option = {
        title: {
            text: '전체 제품',
            subtext: '제품 판매량 변화',
            subtextStyle: {
                color: '#FFF'
            }
        },
        xAxis: {
            axisLabel: {
                formatter: axisValue => {
                    return moment(axisValue).format("YYYY-MM-DD HH:mm");
                }
            },
            type: "time"
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                type: "line",
                data: [
                    ["2019-10-29", 500],
                    ["2019-10-01", 100],
                    ["2019-10-02", 200],
                    ["2019-10-03", 300],
                    ["2019-10-04", 200],
                    ["2019-10-05", 100],
                    ["2019-10-06", 500],
                    ["2019-10-07", 300],
                    ["2019-10-08", 500],
                    ["2019-10-09", 200],
                    ["2019-10-10", 100],
                    ["2019-10-11", 100],
                    ["2019-10-12", 200],
                    ["2019-10-13", 300],
                    ["2019-10-14", 400],
                    ["2019-10-15", 500],
                    ["2019-10-16", 200],
                    ["2019-10-17", 100],
                    ["2019-10-18", 100],
                    ["2019-10-19", 500],
                    ["2019-10-20", 300],
                    ["2019-10-21", 500],
                    ["2019-10-22", 100],
                    ["2019-10-23", 300],
                    ["2019-10-24", 400],
                    ["2019-10-25", 500],
                    ["2019-10-26", 100],
                    ["2019-10-27", 300],
                    ["2019-10-28", 400],
                    ["2019-10-30", 200],
                    ["2019-10-31", 300]
                  ]
            }
        ]
    };

    return option;



}
export default processData;