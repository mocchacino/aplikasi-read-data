import React, {useEffect} from 'react';
import axios from 'axios'
import {connect, useSelector} from 'react-redux';
import {
    Grid,
    Card
} from 'semantic-ui-react';

// function Head(props){
//     return(
//         <div>
//             <Header>
//                 <Image src={props.img}
//                 size='massive' />
//             </Header>
//         </div>
//     )
// }

// const HeadNiomic={
//     img:'https://asset-niomic.s3-ap-southeast-1.amazonaws.com/logo-niomic-black-.png'
// }

function HeaderPage(props){
    console.log("render =>", props);
    const displayPost = (props) =>{
        const {posts} = props;

       
        posts.map(post =>{
            console.log(post);
            return(
                <div key={post.id}>
                    <p>{post.title}</p>
                </div>
            )
        })
        
    }
    return(
        <div>
            <h1>Wila</h1>
            <p>{props.count}</p>
            <button onClick={props.onIncrementClick}>Click</button>
            {displayPost(props)}
        </div>
    )

    

    
}


function mapStatetoProps(state){
    console.log('mapStatetoProps', state);
    return{
        count: state.count
    }
}

function mapDispatchtoProps(dispacth){
    return{
        onIncrementClick: () => {
            const action = { type : 'INCREMENT'};
            dispacth(action);
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(HeaderPage);