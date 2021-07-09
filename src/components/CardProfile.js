import 'semantic-ui-css/semantic.min.css';
import { Image, Card } from 'semantic-ui-react';

const CardProfile = () =>{
    return (
        <Card>
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
    )
}

export default CardProfile;