import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

function ListProducts({ token }) {
  const [product, setProduct] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/products/allProducts`
      );
      if (response.data) {
        setProduct(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeProducts = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/products/delete`,
        { id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      if (response.data) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10 w-full">
      <div className="flex w-full overflow-x-auto">
        <table className="table-hover table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((p, index) => (
              <tr key={index}>
                <td>
                  <img src={p.image} className="w-12 h-12" alt="" />
                </td>
                <th>{p.name}</th>
                <td>{p.category}</td>
                <td>{p.price}</td>
                <td>
                  <button>
                    <MdDeleteForever
                      className="w-7 h-7"
                      onClick={() => removeProducts(p._id)}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListProducts;
