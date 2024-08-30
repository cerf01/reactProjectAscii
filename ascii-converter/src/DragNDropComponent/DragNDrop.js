import React, { useEffect, useState } from "react";
import './DragNDrop.css';

const DragNDrop = ({
  onFilesSelected,
  width,
  height,
  image
}) => {
  const [file, setFile] = useState();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files;
    if (selectedFile && selectedFile.length > 0) {
      setFile(selectedFile[0]); 

    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      setFile(droppedFiles[0]);
    }
  };

  useEffect(() => {
    onFilesSelected(file);
  },[file, onFilesSelected]);

  return (
    <div  onDrop={handleDrop}
    onDragOver={(event) => event.preventDefault()}
    class="drag-drop" style={{ width: width, height: height }}>
        <>
          <div class="upload-info">
            <div>
              <p>Drag and drop your image here</p>
              <h5>
                 Supported file: .PNG, .JPEG, .JPG
              </h5>  
            </div>
          </div>

          <input
            type="file"
            hidden
            id="browse"
            onChange={handleFileChange}
            accept=".png,.jpeg,.jpg"
            multiple
          />
       <label htmlFor="browse" class="browse-button-label"> 
          <span  class="browse-button">
               Browse file
          </span>
          </label>
          {(file &&  <p>{file.name}</p>)}
        </>
      </div>
  );
};
export default DragNDrop;