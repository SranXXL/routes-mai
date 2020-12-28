const SET_ROUTES = 'SET_ROUTES';

export const setRoutesData = (payload) => ({
    type: SET_ROUTES,
    payload,
});

const initialState = {
    intial: true,
};

const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROUTES:
            return action.payload;
        default:
            return state;
    }
};

export default routeReducer;
