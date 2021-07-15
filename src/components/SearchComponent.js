import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment, Input } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import ShowData from './ShowData';
import PaginationComponent from './PaginationComponent';

const SearchComponent = props =>{
    // SEARCH
    const [searchTerm, setSearchTerm] = useState('');
    const filter = searchTerm.toLowerCase();
    const filteredData = 
        props.post.filter(val => {
            return val.title.toLowerCase().includes(filter)
        });
    
    
    return(
        <div>
            <Grid.Row mobile={16} tablet={8} computer={5} centered>
                <Segment.Group>
                    <Input 
                        fluid
                        name='searchText'
                        placeholder='Cari Judul'
                        onChange={e => {setSearchTerm(e.target.value)}}
                    />
                </Segment.Group>
                    <br/>
            </Grid.Row>
            <Grid.Row >
                <PaginationComponent
                    post={filteredData}
                />
            </Grid.Row>
        </div>
    )

}

export default SearchComponent;