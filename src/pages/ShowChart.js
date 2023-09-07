
import { Provider } from "react-redux";
import { store } from '../chartSlice';
import Statistics from "./Statistics";

function ShowChart() {








    return (
        <Provider store={store}>
            <div>
                <Statistics/>
            </div>
        </Provider>
    );
}
export default ShowChart;