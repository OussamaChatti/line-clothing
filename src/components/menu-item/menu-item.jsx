import React from 'react';
import './menu-item.scss';
import {withRouter} from 'react-router-dom';



const MenuItem = props => (
    <div className={`${props.size} menu-item`} onClick={()=> props.history.push(`${props.match.url}${props.url}`)}>
        <div className='background-image' style={{backgroundImage: `url(${props.img})`}} />
            <div className='content'>
                <h1 className='title'>{props.title.toUpperCase()}</h1>
                <span className='subtitle'>{props.subtitle}</span>
            </div>
    </div>
    );
export default withRouter(MenuItem);
