import 'semantic-ui-css/semantic.min.css';
import { Header, Icon, Divider, Container } from 'semantic-ui-react';

const HeadContent = () =>{
    return(
        <Container>
            <Header as='h2' icon textAlign='center'>
                <Icon name='sticky note' circular />
                <Header.Content>Read Post</Header.Content>
            </Header>
            <Divider/>
        </Container>
        
    )
}

export default HeadContent;