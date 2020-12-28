const SET_CITIES = 'SET_CITIES';

export const setCities = (payload) => ({
    type: SET_CITIES,
    payload,
});

const initialState = { cities: [] };

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITIES:
            return { ...state, cities: action.payload };
        default:
            return state;
    }
};

export default cityReducer;
