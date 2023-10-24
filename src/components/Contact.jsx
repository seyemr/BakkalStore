import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProdects } from "../rtk/slices/prodects-slice";
import { getFromlocaStore } from "../rtk/slices/cartSlice";
import "./cssFiles/Terms.css";
function Contact() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  if (cart.length >= 1) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  useEffect(() => {
    dispatch(fetchProdects());
    const cartLocalstorge = JSON.parse(localStorage.getItem("cart"));
    dispatch(getFromlocaStore(cartLocalstorge));
  }, []);
  return (
    <>
      <div className=" contact position-relative mb-5 ">
        <h3 className=" text-light position-absolute top-50 start-50 translate-middle ">
        Bize Ulaşın
        </h3>
      </div>
      <h2 className="text-center">Bize Ulaşın</h2>
        <div className="pargraf">     <p className="text-center  m-auto mt-4  text-light-emphasis w-50  ">
        Teknik bir sorununuz mu var? Bir beta özelliği hakkında geri bildirim göndermek mi istiyorsunuz? 
        İş planımız hakkında ayrıntılara mı ihtiyacınız var? Bize bildirin.
      </p></div>
      <div className="container mt-5">
        <form>
          <div className="form-group mb-5">
            <label htmlFor="exampleFormControlInput1">Email adresi</label>
            <input
              type="email"
              className="form-control placeholder-wave"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="exampleFormControlInput2">Konu</label>
            <input
              type="email"
              className="form-control placeholder-wave"
              id="exampleFormControlInput2"
              placeholder="Your problem"

            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="exampleFormControlTextarea1">
            Mesajınız...

            </label>
            <textarea
            placeholder="Leave a message here ...."
              className="form-control placeholder-wave "
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
        <button className="btn btn-dark ">Gönder</button>
      </div>
    </>
  );
}
export default Contact;
