const SET_TEST_FIELD = 'SET_TEST_FIELD';
const SET_TEST_THUNK_FIELD = 'SET_TEST_THUNK_FIELD';

export const setTestField = (payload) => ({
    type: SET_TEST_FIELD,
    payload,
});

export const setTestThunkField = (payload) => ({
    type: SET_TEST_THUNK_FIELD,
    payload,
});

const initialState = {
    testField: 'Ничего',
    testThunkField: 'не подключено',
};

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEST_FIELD:
            return { ...state, testField: action.payload };
        case SET_TEST_THUNK_FIELD:
            return { ...state, testThunkField: action.payload };
        default:
            return state;
    }
};
