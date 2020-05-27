import React from 'react';
import './Loader.css';
import  Backdrop  from '../Backdrop/Backdrop';
import Auxillay from '../../hoc/Auxillay';

const loader = (props) =>{
return <Auxillay><Backdrop/><div className="loader">
<img src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=433&q=80"
            width="250" height="250" alt="desc" className="dot"/>
<p>Loading...</p>
</div></Auxillay>
}

export default loader;