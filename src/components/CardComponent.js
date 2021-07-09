import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';

const CardComponent = ({ data }) => {
    return (
        
            <Card key={data.id}>
                <Card.Content header={ data.title }/>
                <Card.Content description={ data.body }/>
            </Card>
            
    );
}

export default CardComponent;