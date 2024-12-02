import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loading = () => {
    return (  
        <div style={{display: 'flex', justifyContent: 'center',
            alignItems: 'center' ,height: '100vh'
        }}>
            <BounceLoader color='#3498db' size={60}/>
            <p>Loading...</p>
        </div>
    );
}
 
export default Loading;