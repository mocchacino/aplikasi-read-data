import 'semantic-ui-css/semantic.min.css';
import { Header, Icon, Divider, Container, Grid } from 'semantic-ui-react';

const HeadContent = () =>{
    return(
        <Grid.Column mobile={12} tablet={12} computer={12} centered>

            <Header as='h2' icon textAlign='center'>
                <Icon name='sticky note' circular />
                <Header.Content>Read Post</Header.Content>
            </Header>
            <Divider/>

        </Grid.Column>
        
    )
}

export default HeadContent;