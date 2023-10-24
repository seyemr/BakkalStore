import { useDispatch, useSelector } from "react-redux";
import './cssFiles/Terms.css'
import { useEffect } from "react";
import { fetchProdects } from "../rtk/slices/prodects-slice";
import { getFromlocaStore } from "../rtk/slices/cartSlice";
function FAQs() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart);
  if (cart.length >= 1) {
    localStorage.setItem('cart', JSON.stringify(cart));

  }
  useEffect(() => {
    dispatch(fetchProdects());
    const cartLocalstorge = JSON.parse(localStorage.getItem("cart"));
    dispatch(getFromlocaStore(cartLocalstorge));

  }, []);
  return (
    <>
      <div className=" main-section position-relative mb-5 ">
        <h3 className=" text-light position-absolute top-50 start-50 translate-middle ">
          Sıkça Sorulan Soruları Keşfedin
        </h3>
      </div>
      <div className="container">
        <div
          className=" accordion accordion-flush"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Web siteniz güvenli mi?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                "Her zaman olmak istediğimiz pozisyonda olmuyoruz.
                Sürekli büyüyoruz. Sürekli hatalar yapıyoruz.
                Sürekli kendimizi ifade etmeye ve hayallerimizi gerçekleştirmeye çalışıyoruz."
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Neden ödeme sırasında hemen ödeme yapmalıyım?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
              "Her zaman olmak istediğimiz pozisyonda olmuyoruz. Sürekli büyüyoruz. 
              Sürekli hatalar yapıyoruz. Sürekli kendimizi ifade etmeye ve 
              hayallerimizi gerçekleştirmeye çalışıyoruz."
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Paypal i̇le nasil ödeme yapabi̇li̇ri̇m?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
              "Her zaman olmak istediğimiz pozisyonda olmuyoruz. 
              Sürekli büyüyoruz. Sürekli hatalar yapıyoruz. 
              Sürekli kendimizi ifade etmeye ve hayallerimizi gerçekleştirmeye çalışıyoruz."
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Size nasıl ulaşabilirim?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
              "Her zaman olmak istediğimiz pozisyonda olmuyoruz. 
              Sürekli büyüyoruz. Sürekli hatalar yapıyoruz. 
              Sürekli kendimizi ifade etmeye ve hayallerimizi gerçekleştirmeye çalışıyoruz."
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
               Teslimat ücreti ne kadar?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
              "Her zaman olmak istediğimiz pozisyonda olmuyoruz. 
              Sürekli büyüyoruz. Sürekli hatalar yapıyoruz. 
              Sürekli kendimizi ifade etmeye ve hayallerimizi gerçekleştirmeye çalışıyoruz."
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
               Kayıt olmanın avantajları nelerdir?
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
              "Her zaman olmak istediğimiz pozisyonda olmuyoruz. 
              Sürekli büyüyoruz. Sürekli hatalar yapıyoruz. 
              Sürekli kendimizi ifade etmeye ve hayallerimizi gerçekleştirmeye çalışıyoruz."
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FAQs;
