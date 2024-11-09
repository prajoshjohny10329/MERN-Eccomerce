import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useRef } from "react";

const ProductImageUpload = ({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
}) => {
  const inputRef = useRef(null);

  const handelImageFileChange = (event) =>{
    console.log('handel change');
    const imageFile  = event.target.files?.[0]
    if(imageFile) setImageFile(imageFile);
      console.log(imageFile);
      
    
    

  }
  return (
    <div className="w-full mt-1">
      <Label className="mb-1">Product Image Upload</Label>
      <div>
        <Input id="image-upload" className="py-6" type="file" ref={inputRef} onChange={handelImageFileChange} />
      </div>
    </div>
  );
};

export default ProductImageUpload;
