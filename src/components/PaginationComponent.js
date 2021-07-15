import 'semantic-ui-css/semantic.min.css';
import { Divider, Grid, Pagination, Segment } from 'semantic-ui-react';
import { useState } from 'react';
import ShowData from './ShowData';

const PaginationComponent = props =>{
    // PAGINATION
    const itemsPerPage = 4;
    const totalPages = Math.ceil((Object.keys(props.post).length)/itemsPerPage);
    const [ page, setPage ] = useState(1);
    

    const setPageNum = (event, { activePage }) => {
        setPage(activePage)
    };

    const items  = props.post.slice(
        (page - 1) * itemsPerPage,
        (page - 1) * itemsPerPage + itemsPerPage
    );
    
    return (
        <div>
            <ShowData 
                post = {items}
            />
            <Segment textAlign='center'>
                <Grid.Row>
                    <Grid.Column mobile={5} tablet={5} computer={5} >
                    <Pagination 
                        activePage={page} 
                        totalPages={totalPages} 
                        onPageChange={setPageNum}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                    />
                    </Grid.Column>
                </Grid.Row>
            </Segment>
        </div>
    )
}

export default PaginationComponent;