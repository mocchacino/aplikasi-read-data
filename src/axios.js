import {
    FETCH_POSTS_STARTED,
    FETCH_POSTS_SUCCESS
  } from "./actionTypes";
import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';

const axios = () =>{
    return dispatch => {
        dispatch(fetchPostsStarted());
        axios
        .get('http://localhost:3000/flug')
        .then(res =>{
            dispatch(fetchPostsSuccess(res.data))
        })
    }
}

const fetchPostsStarted = () =>{
    return{
        type: FETCH_POSTS_STARTED
    }
}
const fetchPostsSuccess = posts => {
    return {
      type: FETCH_POSTS_SUCCESS
      
    };
};