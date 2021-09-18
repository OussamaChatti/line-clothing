import React from 'react';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.jsx';

import { selectDirectorySections } from '../../redux/directory/directory.selectors.js';

import './directory.scss';

const Directory = ({sections}) => (
  <div className='directory-menu'>
    {sections.map(section => { return <MenuItem title={section.title} subtitle='SHOP NOW' key={section.id} img={section.imageUrl} url={section.linkUrl} size={section.size}/>})}
  </div>
);
  
const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
});

 export default connect(mapStateToProps)(Directory);

