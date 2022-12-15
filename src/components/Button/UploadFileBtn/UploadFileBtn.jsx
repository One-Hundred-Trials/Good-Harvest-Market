import React from 'react';
import { UploadFileLabel } from './UploadFileBtnStyle.jsx';

export default function UploadFileBtn(props) {
  return (
    <UploadFileLabel htmlFor="file" style={{ margin: props.margin }}>
      <input type="file" id="file" accept="image/*" />
    </UploadFileLabel>
  );
}
