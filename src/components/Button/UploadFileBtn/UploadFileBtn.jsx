import React from 'react';
import { UploadFileLabel } from './UploadFileBtnStyle.jsx';

export default function UploadFileBtn() {
  return (
    <UploadFileLabel htmlFor="file">
      <input type="file" id="file" accept="image/*" />
    </UploadFileLabel>
  );
}
