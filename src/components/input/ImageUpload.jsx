import React, { Fragment } from "react";
import PropTypes from "prop-types";

import imageUpload from "../../assets/img-upload.png";

const ImageUpload = ({ name, image, progress = 0, className, ...props }) => {
  return (
    <label
      className={`cursor-pointer flex items-center justify-center border border-dashed w-full min-h-[200px] rounded-lg ${className} relative overflow-hidden group`}
    >
      <input type="file" name={name} className="hidden-input" {...props} />
      {!image && progress !== 0 && (
        <div className="absolute z-10 w-16 h-16 border-8 border-green-500 rounded-full loading border-t-transparent animate-spin"></div>
      )}

      {!image && progress === 0 && (
        <div className="flex flex-col items-center text-center pointer-events-none">
          <img
            src={imageUpload}
            alt="upload-img"
            className="max-w-[80px] mb-5"
          />
          <p className="font-semibold">Chọn ảnh</p>
        </div>
      )}
    </label>
  );
};
ImageUpload.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  progress: PropTypes.number,
  image: PropTypes.string,
};
export default ImageUpload;
