import React from "react";
import FileBase64 from "react-file-base64";

import PropTypes from "prop-types";

import imageUpload from "../../assets/img-upload.png";

const ImageUpload = ({ name, image, progress = 0, className, ...props }) => {
  return (
    <>
      <div class="flex justify-center items-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <img
              src={imageUpload}
              alt="upload-img"
              className="max-w-[80px] mb-5"
            />
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Nhấp để tải ảnh lên </span> hoặc kéo
              và thả ảnh
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG (Tối đa: 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>

      <label
        className={`cursor-pointer flex items-center justify-center border border-dashed w-full min-h-[200px] rounded-lg ${className} relative overflow-hidden group`}
      >
        {/* <input type="file" name={name} className="hidden-input" {...props} /> */}
        <div name={name} {...props}>
          <FileBase64
            multiple={false}
            onDone={
              ({ base64 }) => console.log(base64)
              // setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

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
    </>
  );
};

ImageUpload.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  progress: PropTypes.number,
  image: PropTypes.string,
};
export default ImageUpload;
