import React from 'react'
import AlertButton from './AlertButton'

const Toolbar = () => {
  return (
    <div>
        <AlertButton message="Playing!">
            Play Movie
        </AlertButton>
        <AlertButton message="Uploading!">
            Upload Image
        </AlertButton>
    </div>
  );
}

export default Toolbar