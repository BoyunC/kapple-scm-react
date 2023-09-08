import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //chartSlice
import { configureStore } from "@reduxjs/toolkit"; //store
import axios from "axios";
import processData from "./processData";
// Thunk ============================
export const asyncFetch = createAsyncThunk( //'chartSlice/asyncFetchData' 액션 타입 
    'fetch/asyncFetch', () => { //액션 호출시 처리될 작업(서버접속, 결과리턴)
        return axios.post('http://localhost:8081/statistics/variance/20210101/20221231')
            .then((res) => { return res.data; });
    }
);

// Reducers ============================
// redux thunk 내에서 지정된 type 이름의 action이 자동 dispatch됨
// => pending, fulfilled, rejected

const selectSlice = createSlice({
    name: 'select',
    initialState: { selectedYear:2023, yearOptions:[]  },
    reducers: {
        setSelectedYear(state, action) {
            state.selectedYear = action.payload;
            console.log("select setYearOptions Complete:", state.selectedYear);
        },
        setYearOptions(state, action) {
            state.yearOptions = action.payload;
            console.log("select setYearOptions Complete:", state.yearOptions);
        }
    },
});
export const selectActions = selectSlice.actions;
export const selectReducers = selectSlice.reducer;

const fetchSlices = createSlice({
    name: 'temp',
    initialState: { options:[], status:'initial' },
    reducers: {
        init(state, action) {
            state.options = action.payload;
            console.log("fetch init Complete:", state.options);
        }
    },
});
export const fetchActions = fetchSlices.actions;
export const fetchReducers = fetchSlices.reducer;

// const fetchSlice = createSlice({
//     name: 'fetch',
//     initialState: { buckets: [], option: 0, status: 'initial' },
//     extraReducers: (builder) => {
//         builder.addCase(asyncFetch.pending, (state) => {
//             state.status = 'Loading';
//             console.log("asyncFetch Loading");
//         });
//         builder.addCase(asyncFetch.fulfilled, (state, action) => {
//             state.status = 'Complete';
//             state.buckets = action.payload
//             state.option = processData(state.buckets);
//             console.log("asyncFetch Complete", state.option);

//         });
//         builder.addCase(asyncFetch.rejected, (state, action) => {
//             state.status = 'Fail';
//             console.log("asyncFetch Fail");
//             state.value = [];
//         });
//     },
// });
// export const fetchAction = fetchSlice.actions;
// export const fetchReducer = fetchSlice.reducer;


export const store = configureStore({
    reducer: {
        select: selectReducers,
        fetch: fetchReducers,
        // fetch: fetchReducer,
    },
});