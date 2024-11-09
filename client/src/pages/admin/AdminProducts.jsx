import ProductImageUpload from "@/components/admin/product/ProductImageUpload";
import CommonForm from "@/components/common/CommonForm";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductForm } from "@/config/productForm";
import React, { Fragment, useState } from "react";

const initialFormData = {
  image: "",
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  offer: "",
  stock: "",
};

const AdminProducts = () => {
  const [openCreateProduct, setOpenCreateProduct] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile]  = useState(null)
  const [uploadedImageUrl, setUploadedImageUrl] = useState('')
  const onSubmit = () => {
    console.log("onsubmit");
  };

  return (
    <Fragment>
      <div className="flex w-full justify-end m-6 pr-3">
        <Button
          onClick={() => {
            setOpenCreateProduct(true);
          }}
          className="bg-black text-white"
        >
          Add new Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Sheet
          open={openCreateProduct}
          onOpenChange={() => {
            setOpenCreateProduct(false);
          }}
        >
          <SheetContent side="right" className="overflow-auto bg-white">
            <SheetHeader>
              <SheetTitle>New Product Form</SheetTitle>
            </SheetHeader>
            <ProductImageUpload imageFile={imageFile} setImageFile={setImageFile} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl} />
            <div className="py-6">
              <CommonForm
                formData={formData}
                setFormData={setFormData}
                buttonText={"Add Product"}
                onSubmit={onSubmit}
                formControls={addProductForm}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
};

export default AdminProducts;
