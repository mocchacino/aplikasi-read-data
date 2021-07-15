// import actionTypes from '../actions/actionTypes';

// global state
const initialState = {
    post:[]
}

// reducer berisikan task list yang dapat mengubah global state
const reducer = (state = initialState, action) => {
    if (action.type === 'GET_POST') {
        return{
            // initialstate dicopy agar jika terdapat perubahan tidak mengubah initialstate
            ...state,
            post: action.data,
        }
    }
    return state;
    
}

export default reducer;