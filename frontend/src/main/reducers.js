import { combineReducers } from 'redux';

import DashboardReducer from '../dashboardRedux/dashboardReduce';
import TabReducer from '../common/tab/tabReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
});

export default rootReducer;