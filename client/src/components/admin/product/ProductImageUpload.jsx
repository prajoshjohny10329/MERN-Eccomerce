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

  const handelImageFileChange = (event) => {
    console.log("handel change");
    const imageFile = event.target.files?.[0];
    if (imageFile) setImageFile(imageFile);
  };
  return (
    <div className="w-full mt-1">
      <Label className="mb-1">Product Image Upload</Label>
      <div className="border-2 p-4 mt-4 border-dashed rounded-lg">
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
