import { useEffect } from "react";
import "./cssFiles/Homeslid.css";
import { useDispatch, useSelector } from "react-redux";
import { getFromlocaStore } from "../rtk/slices/cartSlice";
function Homeslid() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (cart.length >= 1) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  useEffect(() => {
    // dispatch(clearCart())
    const cartLocalstorge = JSON.parse(localStorage.getItem("cart"));
    dispatch(getFromlocaStore(cartLocalstorge));
  }, []);
  return (
    <>
      <div className="home-container">
        <div className="home-text">
          <h1>Ürünler 90 Dakikada Teslim Edilir</h1>
          <p>Ürünleriniz Her Gün Kapınıza Teslim Edilsin</p>
        </div>
      </div>
    </>
  );
}
export default Homeslid;
