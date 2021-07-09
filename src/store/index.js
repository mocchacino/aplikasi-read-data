import axios from 'axios';
import { useDispatch } from 'react-redux';
import actionTypes from '../actions/actionTypes';

const getPost = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
      useDispatch({
        type: actionTypes.GET_POST,
        data: result
      });
    })
}

export default getPost;