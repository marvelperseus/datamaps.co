import React from 'react';
import PropTypes from 'prop-types';

import pages from '@src/config/pages'
import MapEditorInitiView from './components/MapEditorInitiView'
import Upload from './pages/Upload'

MapEditorSidebarSwitch.propTypes = {
  pathname: PropTypes.string.isRequired,
  mapType: PropTypes.string.isRequired,
};

function MapEditorSidebarSwitch(props) {
  switch (props.pathname) {
    case pages.upload:
      return (
        <Upload mapType={props.mapType} />
      )

    default:
      return (
        <MapEditorInitiView mapType={props.mapType} />
      )
  }
}

export default MapEditorSidebarSwitch;
