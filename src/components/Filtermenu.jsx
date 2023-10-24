import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useState } from "react";
import "./cssFiles/shop.css";
import img1 from "../assets/images/grocery-cart.png";
import img2 from "../assets/images/Fresh-Vegetables.svg";
import { useDispatch } from "react-redux";
import {
  fetchProdects,
  filtersubcategorys,
  getspecifiProdect,
} from "../rtk/slices/prodects-slice";

function Filtermenu() {
  const dispatch = useDispatch();
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <div className="filter">
        <button className="button-toogle " onClick={() => setToggled(!toggled)}>
          {toggled ? "Filtre Ögelerini Gizle <" : "Filtre Öğelerini Göster  >"}
        </button>

        <Sidebar style={{ left: toggled ? "0" : "-300px" }}>
          <Menu>
            <MenuItem
              className="firstMenu"
              onClick={() => dispatch(fetchProdects())}
              icon={<img src={img1} alt="all" width="30px" />}
            >
              Tüm kategoriler
            </MenuItem>
            <SubMenu
              className="bg-white my-1 mx-1"
              label="Taze Sebzeler"
              icon={<img src={img2} alt="all" width="30px" />}
              onClick={() => {
                dispatch(getspecifiProdect("fresh vegetables"));
              }}
            >
              <MenuItem
                onClick={() =>
                  dispatch(filtersubcategorys("flower vegetables"))
                }
              >
                {" "}
                Çiçek Sebzeleri
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("leaf vegetables"))}
              >
                Yapraklı Sebzeler
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("stem vegetables"))}
              >
                {" "}
                Köklü Sebzeler
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("root vegetables"))}
              >
                {" "}
                Köklü Sebzeleri
              </MenuItem>

              <MenuItem
                onClick={() => dispatch(filtersubcategorys("seed vegetables"))}
              >
                {" "}
                Tohumlu Sebzeler
              </MenuItem>
            </SubMenu>
            <SubMenu
              className="bg-white my-1 mx-1"
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/Fresh-Fruites.svg"
                  width="24"
                  alt=""
                />
              }
              label="Taze Meyveler"
              onClick={() => dispatch(getspecifiProdect("fresh fruits"))}
            >
              <MenuItem onClick={() => dispatch(filtersubcategorys("rerries"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Meyveler
                </p>
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("citrus fruite"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Turunçgil Meyveleri
                </p>{" "}
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("drupes"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Druplar
                </p>{" "}
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("tropical fruits"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  {" "}
                  Tropikal Meyveler
                </p>{" "}
              </MenuItem>
            </SubMenu>{" "}
            <SubMenu
              onClick={() => dispatch(getspecifiProdect("dairy & eggs"))}
              className="bg-white my-1 mx-1"
              icon={
                <img
                  className=""
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/Dairy-eggs.svg"
                  width="25"
                  alt=""
                />
              }
              label="Süt & Yumurta"
            >
              <MenuItem onClick={() => dispatch(filtersubcategorys("butter"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Tereyağı
                </p>{" "}
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("eggs"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Yumurtalar
                </p>
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("milk"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Süt
                </p>{" "}
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("yougurt"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Yoğurt
                </p>{" "}
              </MenuItem>
            </SubMenu>{" "}
            <MenuItem
              onClick={() => dispatch(getspecifiProdect("breakfast"))}
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124730/Bakery.svg"
                  alt="all"
                  width="30px"
                />
              }
            >
              Kahvaltı
            </MenuItem>
            <SubMenu
              onClick={() => dispatch(getspecifiProdect("frozen"))}
              className="bg-white my-1 mx-1"
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124732/Frozen.svg"
                  width="22"
                  alt=""
                />
              }
              label="Dondurulmuş"
            >
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("cutted fish"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Kesilmiş Balık
                </p>{" "}
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("cutted meat"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Kesilmiş Et
                </p>
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("icecream"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Dondurma
                </p>
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("packet meat"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Paket Yemek
                </p>
              </MenuItem>
            </SubMenu>
            <SubMenu
              onClick={() => dispatch(getspecifiProdect("organic"))}
              className="bg-white my-1 mx-1"
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124732/Organic.svg"
                  width="24"
                  alt=""
                />
              }
              label="Organik"
            >
              <MenuItem onClick={() => dispatch(filtersubcategorys("honey"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Bal
                </p>
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("oil"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Yağ
                </p>
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("syrups"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Şerbet
                </p>
              </MenuItem>
            </SubMenu>
            <MenuItem
              className="bg-white my-1 mx-1"
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/canned-food.svg"
                  width="25"
                  alt=""
                />
              }
              onClick={() => dispatch(getspecifiProdect("canned food"))}
            >
              {" "}
              <p className=" text-left w-[50%] ">Konserve Yiyecekler</p>
            </MenuItem>
            <SubMenu
              onClick={() => dispatch(getspecifiProdect("coffe & snacks"))}
              className="bg-white my-1 mx-1"
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/coffee-cup.svg"
                  width="28"
                  alt=""
                />
              }
              label="Kahve & Atıştırmalıklar"
            >
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("chocolate"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Çikolata
                </p>
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("coffee"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Kahve
                </p>
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("chips"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Çıtır
                </p>
              </MenuItem>
            </SubMenu>
            <SubMenu
              onClick={() => dispatch(getspecifiProdect("Beverage & Juice"))}
              className="bg-white my-1 mx-1"
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124730/Beverage-Juice.svg"
                  width="18"
                  alt="beverage & juice"
                />
              }
              label="Meşrubat & Meyve Suyu"
            >
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("fizzy drinks"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Gazlı İçecekler
                </p>{" "}
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("juices"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Meyve Suyu
                </p>
              </MenuItem>
            </SubMenu>
            {/*  */}
            <SubMenu
              onClick={() => dispatch(getspecifiProdect("sauces & jams"))}
              className="bg-white my-1 mx-1"
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124732/Sauces-Jams.svg"
                  width="24"
                  alt=""
                />
              }
              label="Soslar & Reçeller"
            >
              <MenuItem onClick={() => dispatch(filtersubcategorys("jams"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Reçeller
                </p>
              </MenuItem>

              <MenuItem onClick={() => dispatch(filtersubcategorys("Noodles"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Erişteler
                </p>
              </MenuItem>

              <MenuItem onClick={() => dispatch(filtersubcategorys("pasta"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Makarna
                </p>
              </MenuItem>

              <MenuItem onClick={() => dispatch(filtersubcategorys("Sauces"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Soslar
                </p>
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
export default Filtermenu;
