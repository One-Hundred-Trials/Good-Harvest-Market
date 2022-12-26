import React from 'react';
import { UploadFileLabel } from './UploadFileBtnStyle.jsx';

export default function UploadFileBtn(props) {
  return (
    <UploadFileLabel htmlFor="file">
      <input
        type="file"
        id="file"
        accept="image/*"
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
      />
    </UploadFileLabel>
  );
}
