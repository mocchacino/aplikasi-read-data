import actionTypes from '../actions/actionTypes';

const initialState = {
    post:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POST:
           return{
               ...state,
               post: action.data,
           }
        
        default:
            return state;
    }
}

export default reducer;