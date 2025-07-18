import React from 'react';
import { Link } from 'react-router-dom';

function NotFound () {
    return ( 
        <div className='container p-5 mb-5'>
        <div className='row text-center'>
            <h1 className='mt-5'>404 Not Found</h1>
            <p className='fs-5 mt-2'> We couldn’t find the page you were looking for. Visit Zerodha’s</p>
        </div>
       </div>
     );
}

export default NotFound ;