import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone(props) {
  const onDrop = useCallback((acceptedFiles) => {
    props.onImageDropped(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  if (props.predictions.length) return null;

  if (props.userUploadedImage) return null;

  return (
    <div
      className="absolute z-50 flex w-full h-full text-gray-400 text-sm text-center cursor-pointer select-none w-full h-full"
      {...getRootProps()}
    >
      <div className="m-auto">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here ...</p>
        ) : (
          <p>Optional: Drag and drop a starting image here</p>
        )}
      </div>
    </div>
  );
}
