import React from 'react';
import './directory.component.scss';

import MenuItem from '../menu-item/menu-item';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => (
  <div className="directory-menu">{
    sections.map(({ id, ...otherSectionsProps }) =>
      (<MenuItem key={id} {...otherSectionsProps} />))
  }
  </div>
)


const mapStateToProps =createStructuredSelector({
  sections:selectDirectorySections
});
export default connect(mapStateToProps)(Directory);