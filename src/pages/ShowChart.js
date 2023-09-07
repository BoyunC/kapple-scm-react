
import { Provider } from "react-redux";
import Statistics from "./Statistics";
import { configureStore } from "@reduxjs/toolkit"; //store
import { chartSlice } from "../chartSlice.js";
import { asyncFetch } from "../chartSlice.js";


function ShowChart() {

    //스토어 생성
    const store = configureStore({
      reducer: {
        chart0: chartSlice.reducer,
        chart: chartReducer,
      },
    });
    
    // //스토어 변경사항 감시 (안해도 되나?)
    // store.subscribe(() => {
    //   console.log(store.getState());
    // });
    
    //스토어에 asyncFetch 액션을 디스패치
    store.dispatch(asyncFetch());

    return (
        <Provider store={store}> 
        {/* 이하 컴포넌트에서 Redux 스토어의 상태를 useSelector()로 사용 */}
        {/* useSelector()를 사용할 때, 해당 변수 값이 바뀌면 리렌더링 됨 */}
            <div>
                <Statistics/>
            </div>
        </Provider>
    );
}
export default ShowChart;

/*
1. configureStore로 스토어 생성:
코드의 시작에서 configureStore를 사용하여 Redux 스토어를 생성합니다.
스토어의 구성은 reducer로 지정되며, 여기에서 chart라는 리듀서를 등록하고 있습니다.

2. store.subscribe 메서드:
스토어를 생성한 후 store.subscribe 메서드를 호출하여 스토어의 변경 사항을 감시합니다.
변경 사항이 있을 때마다 콜백 함수가 호출되며, 이 콜백 함수에서는 현재 스토어의 상태를 콘솔에 출력합니다.
이 부분은 스토어의 상태 변경을 실시간으로 확인하기 위한 디버깅 목적으로 사용될 수 있습니다.

3. store.dispatch(asyncFetch()):
asyncFetch 액션을 디스패치합니다.
이것은 Redux Toolkit에서 생성한 비동기 액션으로, 비동기 작업을 수행하고 결과를 스토어에 업데이트하는 역할을 합니다.
액션을 디스패치하면 createAsyncThunk에서 정의한 작업(비동기 작업)이 실행됩니다.
그러면 비동기 작업이 완료되면 상태를 업데이트하고, 스토어의 상태가 변경되면 store.subscribe에서 등록한 콜백 함수가 호출되어 변경된 상태를 콘솔에 출력합니다.

4. <Provider store={store}>:
Provider 컴포넌트는 리액트 애플리케이션 내에서 Redux 스토어를 사용할 수 있게 해주는 컴포넌트입니다.
이 코드에서는 Provider로 Redux 스토어를 감싸고 있으므로 하위 컴포넌트에서 Redux 스토어의 상태를 사용할 수 있습니다.

5. <Statistics /> 컴포넌트:
이 컴포넌트는 Redux 스토어의 상태를 사용하는 것으로 보입니다.
Redux 스토어의 상태를 가져오기 위해 useSelector를 사용하는 것으로 예상됩니다.
이 코드의 주요 목적은 Redux 스토어를 생성하고, 스토어에 변경 사항을 감시하며, 비동기 액션을 디스패치하여 상태를 업데이트하는 것입니다. Statistics 컴포넌트는 이 업데이트된 상태를 사용하여 UI를 업데이트하는 역할을 할 것으로 예상됩니다.
 */