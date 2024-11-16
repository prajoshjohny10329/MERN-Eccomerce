import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
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
    const imageFile = event.target.files?.[0];
    if (imageFile) setImageFile(imageFile);
  };

  //prevent default for drag
  const handelOnDrag = event =>  event.preventDefault()

  //image File set Function
  const handelOnDrop = (event) =>{
    event.preventDefault()
    const dropImageFile = event.dataTransfer.files?.[0];
    if(dropImageFile)  setImageFile(dropImageFile)
  }

  //function for image remove at imageFile state
  const removeImageFile = () =>{
    setImageFile(null)
    if(inputRef.current){
      inputRef.current.value = ''
    }
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
          <div className="flex items-center justify-between">
            <div className="flex justify-between items-center">
              <FileIcon className="w-8 text-black mr-2" />
              {console.log(imageFile)
              }
              <p className="text-sm font-medium">{imageFile.name}</p>
              <Button variant="ghost" size="icon" onClick={removeImageFile} >
                <XIcon className="w-4 h-4"></XIcon>
                <span className="sr-only">Remove File</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImageUpload;
