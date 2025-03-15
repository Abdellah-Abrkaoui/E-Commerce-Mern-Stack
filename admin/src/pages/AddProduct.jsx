import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

function AddProduct({ token }) {
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("TopWear");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("image", image);

      const response = await axios.post(
        `${backendUrl}/api/products/add`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.sucess) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage(false);
        setSizes([]);
        setPrice("");
        setBestSeller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col gap-5 ">
      <div className="flex flex-col">
        <p>Upload image</p>
        <div className="mt-2">
          <label htmlFor="image">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt=""
              className="w-20 h-20 cursor-pointer"
            />
            <input
              type="file"
              hidden
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p>Product Name</p>
        <input
          type="text"
          className="text-gray-400 border px-3 py-2 border-black w-full outline-none"
          placeholder="Product Name ..."
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div className="flex flex-col gap-1">
        <p>Product Description</p>
        <input
          type="text"
          className="text-gray-400 border px-3 py-2 border-black w-full outline-none"
          placeholder="Product Description ..."
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p>Product Category</p>
          <select
            className="border px-3 py-2 border-black w-full outline-none"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <p>Sub Category</p>
          <select
            className="border px-3 py-2 border-black w-full outline-none"
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="TopWear">Top Wear</option>
            <option value="BottomWear">Bottom Wear</option>
            <option value="WinterWear">Winter Wear</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <p>Product Price</p>
          <input
            type="number"
            min="0"
            required
            placeholder="25"
            className="border px-3 py-2 border-black w-full outline-none"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p>Product Size</p>
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <div
            key={size}
            className={`${
              sizes.includes(size) ? "bg-blue-300" : "bg-slate-100"
            } w-12 h-12 flex justify-center border items-center cursor-pointer`}
            onClick={() =>
              setSizes((prev) =>
                prev.includes(size)
                  ? prev.filter((item) => item !== size)
                  : [...prev, size]
              )
            }
          >
            {size}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="bestSeller"
          onChange={() => setBestSeller((prev) => !prev)}
          checked={bestSeller}
        />
        <label htmlFor="bestSeller" className="cursor-pointer">
          Add to Best Seller
        </label>
      </div>

      <button type="submit" className="px-5 py-2 bg-blue-400 text-white">
        Add Product
      </button>
    </form>
  );
}

export default AddProduct;
