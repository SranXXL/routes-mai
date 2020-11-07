import { setTestThunkField } from './testReducer.js';

const testFunc = (payload) => (dispatch) => {
    dispatch(setTestThunkField(payload));
};

export default testFunc;
