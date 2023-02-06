import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../api/product";
import { createCategory, getCategories } from "../api/category";
import isEmpty from "validator/lib/isEmpty";
import { useNavigate } from "react-router-dom";
import { CategoryData } from "../helpers/categoryData";
import { LocationData } from "../helpers/StateAndCity";

import Alert from "./Alert";
const AdminUpdateProduct = ({ match }) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [alert, setAlert] = useState(null);
  const [mainCategory, setMainCategory] = useState("");
  const [disSubCategory, setSubCategory] = useState([]);
  const [state, setState] = useState("");
  const [cityArr, setCityArr] = useState([]);
  const [city, setCity] = useState("");

  const showAlert = (messsage, type) => {
    setAlert({
      msg: messsage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const [productData, setProductData] = useState({
    productName: "",
    productDescription: "",
    subCategory: "",
    productQuantity: "",
  });
  const handleMajorCategoryChange = (index) => {
    if (index.target.value == "") {
      setMainCategory("");
      setSubCategory([]);
    } else {
      setMainCategory(CategoryData[index.target.value].title);
      setSubCategory(CategoryData[index.target.value].subNav);
    }
  };
  const handleStateChange = (index) => {
    if (index.target.value == "") {
      setState("");
      setCityArr([]);
    } else {
      setState(LocationData[index.target.value].state);
      setCityArr(LocationData[index.target.value].districts);
    }
  };
  const [loading, setLoading] = useState(false);

  const handleProductImage = (e) => {
    // setProductData({ ...productData, productImage: e.target.files[0] });
    const imageMimeType = /image\/(png|jpg|jpeg|jfif|webp)/i;
    const files = Array.from(e.target.files);
    setImages([]);
    files.forEach((file) => {
      if (!file.type.match(imageMimeType)) {
        alert("Image type is not valid");
        e.target.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
    console.log(images);
  };

  const handleProductChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleProductSubmit = (e) => {
    console.log(productData);
    e.preventDefault();
    if (
      images.length == 0 ||
      isEmpty(productData.productName) ||
      isEmpty(productData.productDescription) ||
      isEmpty(mainCategory) ||
      isEmpty(productData.productQuantity) ||
      isEmpty(productData.subCategory) ||
      isEmpty(state) ||
      isEmpty(city)
    ) {
      showAlert("Please fill all fields", "danger");
    } else {
      setLoading(true);

      let productImage = [];
      console.log(images);
      images.forEach((i) => {
        productImage.push(i);
      });
      let finalProductData = {
        productName: productData.productName,
        productDescription: productData.productDescription,
        productCategory: mainCategory,
        disSubCategory: productData.subCategory,
        productQuantity: productData.productQuantity,
        productImage,
        state,
        city,
      };
      updateProduct(productId, finalProductData)
        .then((response) => {
          setProductData({
            productName: "",
            productDescription: "",

            productCategory: "",
            productQuantity: "",
          });
          setLoading(false);
          navigate("/");
        })
        .catch((err) => {
          setLoading(false);
          showAlert(err.response.data.error, "danger");
        });
    }
  };

  return (
    <div className="container">
      <Alert alert={alert} />

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Update Product</h1>
          <hr />
          {loading ? (
            <div
              className="spinner-border  m-5 d-1"
              style={{ width: "10vmax", height: "10vmax" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <form onSubmit={handleProductSubmit}>
              <div className="form-group">
                <label className="text-muted">Product Image</label>
                <input
                  type="file"
                  name="productImage"
                  onChange={handleProductImage}
                  className="form-control"
                  accept="image/*"
                  multiple
                />
              </div>
              <div className="form-group">
                <label className="text-muted">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  onChange={handleProductChange}
                  className="form-control"
                  value={productData.productName}
                />
              </div>
              <div className="form-group">
                <label className="text-muted">Product Description</label>
                <textarea
                  type="text"
                  name="productDescription"
                  onChange={handleProductChange}
                  className="form-control"
                  value={productData.productDescription}
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="recipient-name"
                  className="col-form-label"
                  style={{ display: "block" }}
                >
                  CONFIRM YOUR LOCATION :
                </label>
                <label className="mt-2">State</label>
                <select
                  className="custom-select mr-sm-2 "
                  onChange={handleStateChange}
                >
                  <option value="" selected>
                    Choose State
                  </option>
                  {LocationData.map((state, index) => {
                    return (
                      <option key={index} value={index}>
                        {state.state}
                      </option>
                    );
                  })}
                </select>
                {state && (
                  <>
                    <label className="mt-3">City</label>
                    <select
                      className="custom-select mr-sm-2 "
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="">Choose City</option>
                      {cityArr.length > 0 &&
                        cityArr.map((city, index) => {
                          return (
                            <option key={index} value={city}>
                              {city}
                            </option>
                          );
                        })}
                    </select>
                  </>
                )}
              </div>
              <div className="form-group">
                <label className="text-muted">Product Category</label>
                <select
                  name="productCategory"
                  className="custom-select mr-sm-2"
                  onChange={handleMajorCategoryChange}
                >
                  <option value="" selected>
                    Choose Category
                  </option>

                  {CategoryData &&
                    CategoryData.map((category, index) => {
                      return <option value={index}>{category.title}</option>;
                    })}
                </select>
                {disSubCategory.length > 0 && (
                  <select
                    name="subCategory"
                    className="custom-select mr-sm-2 mt-3"
                    onChange={handleProductChange}
                  >
                    <option value="" selected>
                      Choose Sub Category
                    </option>
                    {disSubCategory.map((subCategory, index) => {
                      return (
                        <option key={index} value={subCategory.title}>
                          {subCategory.title}
                        </option>
                      );
                    })}
                  </select>
                )}
              </div>
              <div className="form-group">
                <label className="text-muted">Product Quantity</label>
                <input
                  type="number"
                  name="productQuantity"
                  onChange={handleProductChange}
                  className="form-control"
                  value={productData.productQuantity}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Update Product
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateProduct;
