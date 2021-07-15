import 'semantic-ui-css/semantic.min.css';
import { Grid, Card } from 'semantic-ui-react';
import CardComponent from './CardComponent';

const ShowData = props =>{
  return(
    <div>
        <Grid.Row >
            <Card.Group centered itemsPerRow={2}>
              {/* map untuk mengiterasi array 
                  merendering array of object dari post
              */}
            {props.post
            .map(data => {
                return (
                <CardComponent 
                    data={data}
                />
                )})
            }
            </Card.Group>
        </Grid.Row>
    </div>
  )
    
}

export default ShowData;