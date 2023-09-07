import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //chartSlice
import { configureStore } from "@reduxjs/toolkit"; //store
import axios from "axios";

// Slice ============================
export const asyncFetch = createAsyncThunk(
    'chartSlice/asyncFetchData', // 첫번째 인자는 액션 타입, 
    // 두번째 인자는 액션이 호출될 때 처리될 작업. (서버접속, 결과 가져와 리턴)
    axios.get('http://localhost:8081/show/comparison')
    .then((res) => {
      console.log("createAsyncThunk 비동기함수 호출:", res.data);
      //setComparison(res.data);
      return res.data;
    })
);

const chartSlice = createSlice({
    name:'chartSlice',
    initialState:{
        value:0,
        status:'initial',
    },
    reducers: {
        // thisIsSyncTask: (state, action)=>{
        //     state.value = 1000 + action.payload;
        // }
    },
    extraReducers:(builder) => {
        builder.addCase(asyncFetch.pending, (state, action) => {
            state.status = 'Loading';
        })
        builder.addCase(asyncFetch.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = 'complete';
            console.log("asyncFetch.fulfilled:", state.status, state.value);
        })
        builder.addCase(asyncFetch.rejected, (state, action) => {
            state.status = 'fail';
        })
    }
});

// Store ============================
export const store = configureStore({
    reducer: {
        chart: chartSlice.reducer,
    },
});