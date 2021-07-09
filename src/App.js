import React, {Component, useEffect, useState} from 'react';
import CardComponent from './components/CardComponent';
import CardProfile from './components/CardProfile';
import actionTypes from './actions/actionTypes';
import HeadContent from './components/HeadContent';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Grid, Card, Pagination, Divider } from 'semantic-ui-react';
// import {getPost} from "./store";


const App = () => {
  const post = useSelector(state => state.post);
  const dispatch = useDispatch();
  const itemsPerPage = 4;
  const totalPages = Math.ceil((Object.keys(post).length)/itemsPerPage);
  const [ page, setPage ] = useState(1);
  
  const setPageNum = (event, { activePage }) => {
    setPage(activePage)
  };

  useEffect(() => {
    getPost();
  }, [])
  
  const getPost = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
      dispatch({
        type: actionTypes.GET_POST,
        data: result.data
      })
    
    })
  }

  return(
    <Grid columns='equal'>
      <Grid.Row></Grid.Row>
      <Grid.Row>
        <HeadContent/>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10}>
          <Segment.Group horizontal>
            <Segment>
              <CardProfile/>
            </Segment>
            <Segment>
                <Grid.Row>
                  <Grid.Column width={3}></Grid.Column>
                  <Grid.Column width={7}>
                    <Grid.Row >
                      <Card.Group centered>
                        {post.slice(
                          (page - 1) * itemsPerPage,
                          (page - 1) * itemsPerPage + itemsPerPage)
                        .map(data => {
                          return (
                            <CardComponent 
                              data={data}
                            />
                          )})
                        }
                      </Card.Group>
                    </Grid.Row>
                    <Grid.Row>
                      <Divider/>
                      <Grid.Column width={10}>
                        <Pagination 
                          activePage={page} 
                          totalPages={totalPages} 
                          onPageChange={setPageNum}
                          right
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid.Column>
                  
                </Grid.Row>
            </Segment>
          </Segment.Group>
          
        </Grid.Column>
        <Grid.Column width={3}></Grid.Column>
      </Grid.Row>
      
      
    </Grid>
    
    
  )
    
}
export default App;
