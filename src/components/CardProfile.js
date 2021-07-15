import 'semantic-ui-css/semantic.min.css';
import { Image, Card, Grid } from 'semantic-ui-react';

const CardProfile = () =>{
    return (
        
        <Grid.Row mobile={1} tablet={1} computer={1} centered>
        <Card.Group>
            <Card fluid>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>CEO</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                
            </Card>
        </Card.Group>
        </Grid.Row>
    )
}

export default CardProfile;