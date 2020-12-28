const SET_TRANSPORTS = 'SET_TRANSPORTS';

export const setTransports = (payload) => ({
    type: SET_TRANSPORTS,
    payload,
});

const initialState = {
    transports: [],
};

const transportReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRANSPORTS:
            return { ...state, transports: action.payload };
        default:
            return state;
    }
};

export default transportReducer;
