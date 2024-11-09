import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCloudIcon } from "lucide-react";
import React, { useRef } from "react";

const ProductImageUpload = ({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
}) => {
  const inputRef = useRef(null);

  //handel file change
  const handelImageFileChange = (event) => {
    console.log("handel change");
    const imageFile = event.target.files?.[0];
    if (imageFile) setImageFile(imageFile);
  };
  //for handelOnDrag
  const handelOnDrag = event =>  event.preventDefault()

  //for handelOnDrop
  const handelOnDrop = (event) =>{
    event.preventDefault()
    const dropImageFile = event.dataTransfer.files?.[0];
    if(dropImageFile)  setImageFile(dropImageFile)
  }
  return (
    <div className="w-full mt-1">
      <Label className="mb-1">Product Image Upload</Label>
      <div onDragOver={handelOnDrag} onDrop={handelOnDrop} className="border-2 p-4 mt-4 border-dashed rounded-lg">
        <Input
          id="image-upload"
          className="py-6 hidden"
          type="file"
          ref={inputRef}
          onChange={handelImageFileChange}
        />
        {!imageFile ? (
          <Label htmlFor="image-upload" className="flex flex-col items-center">
            <UploadCloudIcon className="w-10 h-10 mb-2"></UploadCloudIcon>
            <span>Drag and Drop or click to upload</span>
          </Label>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ProductImageUpload;
