import React, {Component, useEffect, useState} from 'react';
import CardProfile from './components/CardProfile';
import HeadContent from './components/HeadContent';
import SearchComponent from './components/SearchComponent';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Grid} from 'semantic-ui-react';
// import {getPost} from "./store";


const App1 = () => {
    // hook untuk mengakses state di redux store
  const post = useSelector((state) => state.post);
    //   hook untuk mengakses fungsi dispatch redux
  const dispatch = useDispatch();
  
  const getPost = () => {
    // axios mengirim request ke url menggunakan metode get
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
      // mengakses dispatch unutk memanggil action get_post di reducer
      // resut dari request disimpan ke data
      dispatch({
        type: 'GET_POST',
        data: result.data
      })
    
    })
  }

  // seperti class lifecycle (didmount,didupdate,willmount)
  // semua fungsi js ke render, ini akan dijalankan
  useEffect(() => {
    getPost();
  }, [])

  return(
    <Grid stackable columns={2}>
      <Grid.Row ><br/></Grid.Row>
      <Grid.Row centered>
        <HeadContent/>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column  mobile={10} tablet={10} computer={5} centered >
          <Segment>
            <CardProfile/>
          </Segment>
        </Grid.Column>
        <Grid.Column  mobile={10} tablet={10} computer={10} centered >
          <Segment>
              <Grid.Row>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={7}>
                  <SearchComponent
                      post = {post}
                  />
              </Grid.Column>
              </Grid.Row>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      
      
    </Grid>
    
    
  )
    
}
export default App1;
