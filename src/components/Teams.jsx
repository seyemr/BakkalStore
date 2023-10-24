import { useDispatch, useSelector } from "react-redux";
import teamImge from "../assets/images/terms.jpg";
import { useEffect } from "react";
import { fetchProdects } from "../rtk/slices/prodects-slice";
import { getFromlocaStore } from "../rtk/slices/cartSlice";

function Teams() {
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
      <div className=" position-relative mb-5 bg-secondary   ">
        <img src={teamImge} className="img-fluid " alt="FaqImage" />
        <h2 className=" text-black position-absolute top-50 start-50 translate-middle ">
          Koşullar
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div id="list-example" className="list-group col-md-3 mb-4 ">
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-1"
            >
              Amacımız
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-2"
            >
              General Disclaimer
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-3"
            >
              Kişisel Bilgilerinizin Korunması
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-4"
            >
              Ticari Marka & İşletme İsimleri
            </a>
          </div>
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-offset="0"
            className="scrollspy-example col-md-9 col-sm-12"
            tabIndex={0}
          >
            <h4 id="list-item-1">Vizyonumuz </h4>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae eos nostrum inventore illum enim totam
              perferendis quasi qui incidunt ullam amet nam sit ab,
              reiciendis doloribus possimus quidem est accusamus!
            </p>
            <h4 id="list-item-2">Genel Yasal Uyarı</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rem molestiae fugit officiis similique tempora sequi blanditiis voluptatum.
              Porro, nostrum vel repellendus facilis ducimus modi eligendi eum ut suscipit!
              Expedita, autem.
            </p>
            <h4 id="list-item-3">Kişisel Bilgilerinizin Korunması</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi, nemo iusto nobis similique architecto fugit voluptatum
              amet itaque corrupti placeat.
              Asperiores provident voluptate soluta tempora perferendis at
              quibusdam id explicabo.
            </p>
            <h4 id="list-item-4">Ticari Marka & İşletme Adları</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum mollitia sapiente, exercitationem maxime inventore totam
              excepturi earum porro aspernatur molestiae, aliquam, dolores placeat asperiores.
              Cupiditate tempora officia nostrum quo quibusdam?
              A, id nam veritatis dignissimos officia quibusdam odio,
              accusantium doloremque praesentium deserunt impedit nulla voluptas?
              Odit accusamus molestias, autem nobis sint, maxime molestiae impedit
              fugiat eaque unde odio provident voluptas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Teams;
