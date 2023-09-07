import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //chartSlice
import { configureStore } from "@reduxjs/toolkit"; //store
import axios from "axios";
import { combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";

// Thunk ============================
export const asyncFetch = createAsyncThunk( //'chartSlice/asyncFetchData' 액션 타입 
    'chartSlice/asyncFetchData', () => { //액션 호출시 처리될 작업(서버접속, 결과리턴)
        return axios.get('http://localhost:8081/show/comparison')
            .then((res) => { return res.data; });
    }
);

// Reducers ============================
// redux thunk 내에서 지정된 type 이름의 action이 자동 dispatch 
// =>  pending, fulfilled, rejected

export const chartSlice = createSlice({
    name: 'chart',
    initialState: { buckets: [], option: 0, status: 'initial' },
    reducers: {
        processData(state, action) {
            state.open = true;
            // state.buckets = 
            state.option = action.payload;
        },
        init(state) {
            state.option = null;
        }
    },
});
export const chartAction = chartSlice.actions
export const chartReducer = chartSlice.reducer

export const chartSlice0 = createSlice({
    name: 'chart0',
    initialState: { buckets: [], option: 0, status: 'initial' },
    extraReducers: (builder) => {
        builder.addCase(asyncFetch.pending, (state) => {
            state.status = 'Loading';
        });
        builder.addCase(asyncFetch.fulfilled, (state, action) => {
            state.status = 'Complete';

            // state.buckets = action.payload
            //     .find(data => data.chartName === chartName);
            // console.log("buckets:", buckets);
            // const addDataInChart = () => {
            //     const xAxisData = [];
            //     const seriesData = [];
            //     buckets.forEach((data) => {
            //         xAxisData.push(data.date);
            //         seriesData.push(data.completed);
            //     });
            //     setOptions({
            //         xAxis: {
            //             data: xAxisData,
            //         },
            //         series: [
            //             {
            //                 data: seriesData,
            //             },
            //         ],
            //     });
            // };

            state.option = action.payload;
        });
        builder.addCase(asyncFetch.rejected, (state, action) => {
            state.status = 'Fail';
            state.value = [];
        });
    },
});
