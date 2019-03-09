import { combineReducers } from 'redux';

import DashboardReducer from '../dashboardRedux/dashboardReduce';

const rootReducer = combineReducers({
    dashboard: DashboardReducer
});

export default rootReducer;