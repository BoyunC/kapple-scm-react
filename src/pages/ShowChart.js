
import { Provider } from "react-redux";
import { store } from '../chartSlice';
import AnalyzeStatistics from "./AnalyzeStatistics";

function ShowChart() {
    return (
        <Provider store={store}>
            <AnalyzeStatistics/>
        </Provider>
    );
}
export default ShowChart;