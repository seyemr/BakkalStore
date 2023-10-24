import "./cssFiles/Terms.css";
import imgeSol from "../assets/images/salon.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchProdects } from "../rtk/slices/prodects-slice";
import { useEffect } from "react";
import { getFromlocaStore } from "../rtk/slices/cartSlice";
function Blog() {
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
      <div className="blog-section position-relative mb-5 bg-secondary   ">
        <h2 className=" text-light position-absolute top-50 start-50 translate-middle ">
          Blog
        </h2>
      </div>
      <div className="container bolgRow">
        <div className="row">
          <div className="col-lg-8 col-sm-12 ">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="list-home"
                role="tabpanel"
                aria-labelledby="list-home-list"
              >
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/21111331/Blog.png"
                  className="img-fluid "
                  alt="imge"
                />
                <p>
                  <span className="">16 Temmuz 2020</span>
                </p>
                <h2>Covid-19 döneminde perakende alışveriş nasıl değişti?</h2>
                <p>
                  "Mevcut COVID-19 ile başa çıkmamızın, perakende dünyasının ne kadar hızlı değişebileceğini
                  daha net bir şekilde gösteren bir şey yok. Koronavirüs pandemisi, giyim markaları da dahil
                  olmak üzere tüm perakendeciler için iş sürekliliğini sağlama konusunda büyük bir zorluk
                  haline getirdi, çünkü geleneksel olarak müşterilere kıyafetlerini görme ve deneme fırsatı sunan
                  markalar vardı. Bayan Darling, Peter'ı ilk duyduğunda çocuklarının zihnini düzenliyordu.
                  Çocukları uyuduktan sonra her iyi annenin geceleri alışkanlığıdır, zihinlerini karıştırır ve
                  gün boyunca kaybolmuş olan birçok şeyi düzgün bir şekilde yerlerine koyar.
                  Uykusuz kalabilirseniz (tabii ki bu mümkün değil), kendi annenizi bunu yaparken görebilirsiniz
                  ve onu izlemek çok ilginç olurdu. Çekmeceleri düzenlemek gibi. Onu dizlerinin
                  üzerinde görebilirsiniz, sanırım, bazı içeriklerinizin üzerinde gülerek duruyor,
                  bu şeyi nereden bulduğunuzu düşünüyor, hoş ve hoş olmayan bazı keşifler yapıyor,
                  bu şeyi bir yavru kedi gibi yanaklarına bastırıyor ve bunu hemen gözden kaybediyor.
                  Sabah uyandığınızda, yatağa gitmek üzere gittiğiniz yaramazlık ve kötü tutkular küçük katlanmış
                  ve zihninizin dibine yerleştirilmiştir ve üstte, güzelce havalandırılmış,
                  daha güzel düşünceleriniz serilmiştir, giymeye hazır.

                  Toplam mağaza büyümesi fiziksel mağazalarda engellenmeye devam ederken,
                  çevrimiçi satışlar geçen hafta hız kazandı. Market ve ev bakımı, en üst beş bölüm içinde
                  yer almaya yükseldi. İçecekler ve tuzlu atıştırmalıklar, market büyümesinin hem çevrimiçi
                  hem de çevrimdışı birçok sebebini oluşturdu. COVID başladığından beri ilk kez, Alkol, en üst beş
                  bölüm statüsünü kaybetti."
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="list-profile"
                role="tabpanel"
                aria-labelledby="list-profile-list"
              >
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/22142452/Blog4-1.png"
                  className="img-fluid "
                  alt="imge"
                />
                <p>
                  <span className="">16 Temmuz 2020</span>
                </p>
                <h2>Covid-19 sırasında insanlar nasıl alışveriş yapıyor?</h2>
                <p>
                  Toplam mağaza büyümesi geçen hafta yerinde dururken, çevrimiçi satışlar hız kazandı.
                  Market ve Ev Bakımı, en beş bölüm içinde yer almaya yükseldi. İçecekler ve Tuzlu Atıştırmalıklar,
                  hem çevrimiçi hem de çevrimdışı olarak market büyümesinin büyük bir bölümünü oluşturdu. COVID
                  başladığından bu yana ilk kez, Alkol en beş bölüm statüsünü kaybetti.

                  Buz pateni muhtemelen M.Ö. 1000 civarında, ilkel patenlerin elk, boğa, ren geyiği ve diğer
                  hayvanların kemiklerinden yapıldığı Scandinavya'da geliştirildi. Metal patenin ne zaman
                  tanıtıldığı bilinmemekle birlikte, erken Hollanda baskıları metal bıçaklı patenleri
                  tasvir etmektedir. 19. yüzyılın ortasına kadar, patenin metal bıçağı ahşap bir tabana veya
                  ayak levhasına sabitlenmişti ve patenin tamamı deri kayışlarla veya bağlarla ayağa bağlanırdı.
                  Önemli bir gelişme, 1850'de Philadelphia'dan E.W. Bushnell'ın tüm çelik pateni tanıttığı
                  Amerika Birleşik Devletleri'nden geldi ve bu, hacimli ahşap ayak levhasını değiştirdi.
                  1900'den sonra figür patenindeki başlıca gelişmeler, patenin ucuna yerleştirilen bir dizi
                  testere dişi olan "ayak parmakları"nın eklenmesi ve tek parça çelikten yapılan
                  "kapalı ayak parmağı" bıçağının geliştirilmesiydi, bu da patene dayanıklılık ekledi ve
                  daha hafif bir ağırlıkta bıçak sağladı.

                  Eğlence olarak buz pateni, Ortaçağ'dan beri Hollanda nehirlerinde hem erkekler hem de kadınlar
                  tarafından düzenli olarak uygulandı. İngiltere'de 17. yüzyılda donmuş göller ve bataklıklarda
                  buz pateni yapılması popülerdi ve ilk paten kulübü 1742'de İskoçya'da Edinburgh'da kuruldu.
                  1740'larda, İngiliz askerleri Kuzey Amerika'ya buz pateni tanıttılar.
                  1776 civarında Fransız mahkemesinde de popülerdi; Marie-Antoinette buz patenleriyle tanınmıştı.
                  Napoleon Bonaparte 1781'de Auxerre'de buz pateni yaptı. Yapay olarak dondurulmuş buz pistlerinin
                  geliştirilmesi, buz pateninin mevsimsel bir hobi olmaktan önemli bir spor ve eğlence haline
                  gelmesine yol açtı. İlk yapay buzlu özel bir buz pisti olan "Glaciarium," 1876'da Londra'da açıldı.
                  Birinci Madison Square Garden'daki eski bir buzlu pisti olan 1879'da New York Şehri'nde kuruldu.
                  Zaman içinde, yapay buz üretimi ile geniş alanlar içinde buz yapma yeteneği, hem buz pateni
                  sporlarını hem de buz gösterilerini doğurdu ve 20. yüzyılda popüler bir aile eğlencesi haline geldi.
                  Ayrıca sıcak iklimlere sahip bölgelere buz pateninin yayılmasına olanak sağladı.

                </p>
              </div>
              <div
                className="tab-pane fade"
                id="list-messages"
                role="tabpanel"
                aria-labelledby="list-messages-list"
              >
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/21114132/Blog2.png"
                  className="img-fluid "
                  alt="imge"
                />
                <p>
                  <span className="">16 Temmuz 2020</span>
                </p>
                <h2>Pandemi sırasında stoklarınızı dolu tutmak</h2>
                <p>

                  Toplam mağaza büyümesi geçen hafta fiziksel mağazalarda engellenirken, çevrimiçi satışlar hız
                  kazandı. Market ve Ev Bakımı, en üst beş bölüm içinde yer almaya yükseldi. İçecekler ve Tuzlu
                  Atıştırmalıklar, market büyümesinin hem çevrimiçi hem de çevrimdışı olarak büyük bir bölümünü
                  oluşturdu. COVID başladığından bu yana ilk kez, Alkol en üst beş bölüm statüsünü kaybetti.

                  Buz pateninin muhtemelen M.Ö. 1000 civarında Scandinavya'da ortaya çıktığı düşünülmektedir ve
                  ilk patenler, geyik, boğa, ren geyiği ve diğer hayvanların şakları veya kaburgalarından yapılmıştır.
                  Metal patenin ne zaman tanıtıldığı kesin olarak bilinmemekle birlikte, erken Hollanda baskıları,
                  metal bıçaklı patenleri tasvir etmektedir. 19. yüzyılın ortasına kadar, patenin metal parçası
                  ahşap bir tabana veya ayak levhasına sabitlenirken, patenin tamamı deri kayışlar veya bağlarla
                  ayağa bağlanırdı. Önemli bir gelişme, 1850'de Philadelphia'dan E.W. Bushnell'ın tüm-çelik pateni
                  tanıttığı Amerika Birleşik Devletleri'nden geldi ve bu, hacimli ahşap ayak levhasını değiştirdi.
                  1900'den sonra figür patenindeki başlıca gelişmeler, patenin ucuna yerleştirilen testere dişi
                  şeklinde bir dizi olan "ayak parmağı"nın eklenmesi ve tek parça çelikten yapılan
                  "kapalı ayak parmağı" bıçağının geliştirilmesiydi, bu da patene dayanıklılık ekledi ve
                  çok daha hafif bir bıçak kullanımına olanak tanıdı.

                  Eğlence olarak buz pateni, Ortaçağ'dan beri Hollanda nehirlerinde hem erkekler hem de
                  kadınlar tarafından düzenli olarak yapılır. İngiltere'de 17. yüzyılda donmuş göller ve
                  bataklıklarda buz pateni yapılması popülerdi ve 1742'de İskoçya'nın Edinburgh şehrinde ilk
                  buz pateni kulübü kuruldu. 1740'larda, İngiliz askerleri Kuzey Amerika'ya buz pateni tanıttılar.
                  1776 civarında Fransız mahkemesinde de popülerdi; Marie-Antoinette buz patenleriyle tanınmıştı.
                  Napoleon Bonaparte 1781'de Auxerre'de buz pateni yaptı. Buz pateni, dondurulmuş buz pistlerinin
                  geliştirilmesiyle mevsimsel bir hobi olmaktan önemli bir spor ve eğlence haline geldi.
                  İlk yapay olarak dondurulmuş buzlu arena, 1876'da Londra'da özel bir Glaciarium'da açıldı.
                  ABD'de ilk yapay buzlu arena, 1879'da New York Şehri'ndeki eski Madison Square Garden'da kuruldu.
                  Zaman içinde, yapay buz üretimi ile büyük alanlarda buz yapma yeteneği, hem buz pateni sporlarını
                  hem de buz şovlarını ortaya çıkardı ve 20. yüzyılda popüler bir aile eğlencesi haline geldi.
                  Ayrıca sıcak iklim bölgelerine buz pateninin yayılmasına olanak tanıdı.

                </p>
              </div>
              <div
                className="tab-pane fade"
                id="list-settings"
                role="tabpanel"
                aria-labelledby="list-settings-list"
              >
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/21114553/Blog1.png"
                  className="img-fluid "
                  alt="imge"
                />
                <p>
                  <span className="">16 Temmuz 2020</span>
                </p>
                <h2>Market alışverişi yaparken güvende kalmak</h2>
                <p>
                  "COVID başladığından bu yana, fiziksel mağazalardaki toplam mağaza büyümesi zorlanmaya
                  devam ederken, geçen hafta çevrimiçi satışlar hızlandı. Market ve Ev Bakımı, en üst beş
                  bölüm içinde yer almaya yükseldi. Market büyümesinin hem çevrimiçi hem de çevrimdışı olarak
                  büyük bir bölümünü İçecekler ve Tuzlu Atıştırmalıklar oluşturdu. COVID-19 başladığından bu yana
                  ilk kez, Alkol en üst beş bölüm statüsünü kaybetti.

                  Buz pateni muhtemelen M.Ö. 1000 civarında Scandinavya'da geliştirildi; başlangıçta ana
                  patenler geyik, boğa, ren geyiği ve diğer hayvanların şakları veya kaburgaları kullanılarak
                  üretildi. Metal patenin ne zaman tanıtıldığı kesin olarak bilinmemekle birlikte,
                  erken Hollanda baskıları metal bıçaklı patenleri tasvir etmektedir. 19. yüzyılın ortasına kadar,
                  patenin metal parçası ahşap bir tabana veya ayak levhasına bağlanırken, patenin tamamı deri
                  kayışlar veya bağlarla ayakla bağlanırdı. Önemli bir gelişme, 1850 yılında Philadelphia'dan
                  E.W. Bushnell tarafından tanıtılan tamamen çelik pateni içeriyordu ve bu, hacimli ahşap ayak
                  levhasını değiştirdi. 1900'den sonra figür patenindeki temel gelişmeler, patenin ucuna
                  yerleştirilen "ayak parmağı" adı verilen testere dişlerinden oluşan bir grup ve tek parça
                  çelikten yapılan "kapalı ayak parmağı" bıçağının geliştirilmesiydi. Bu, patene dayanıklılık
                  ekledi ve çok daha hafif bir bıçak kullanımına izin verdi.

                  Eğlence olarak buz pateni Ortaçağ'dan bu yana Hollanda'nın nehirlerinde erkekler ve kadınlar
                  tarafından düzenli olarak uygulanmaktadır. 17. yüzyılda İngiltere'de donmuş göller ve bataklıklar
                  üzerinde buz pateni yapmak popülerdi ve 1742 yılında İskoçya'nın Edinburgh şehrinde ilk buz
                  pateni kulübü kuruldu. 1740'ların ortalarında İngiliz askerleri Kuzey Amerika'ya buz patenini
                  tanıttılar. 1776 civarında Fransız mahkemesinde de popülerdi; Marie-Antoinette buz pateni yapanlar
                  arasındaydı. Napoleon Bonaparte 1781 yılında Auxerre'de buz pateni yaptı. Buz pateni, buz pateni
                  sporunu mevsimlik bir hobi olmaktan önemli bir spor ve eğlence haline getiren donmuş buz
                  arenalarının geliştirilmesiyle dönüşmeye başladı. İlk olarak özel bir Glaciarium olarak
                  1876'da Londra'da donmuş buzlu bir arena açıldı. Amerika Birleşik Devletleri'nde ilk yapay
                  olarak dondurulmuş buzlu arena, 1879 yılında New York Şehri'ndeki eski Madison Square Garden'da
                  kuruldu. Zaman içinde, yapay buz üretimi ile büyük alanlarda buz yapma yeteneği, 
                  hem buz pateni sporları hem de buz gösterilerinin ortaya çıkmasına yol açtı ve 
                  20. yüzyılda popüler bir aile eğlencesi haline geldi. Ayrıca sıcak iklim bölgelerine 
                  buz pateninin yayılmasına olanak tanıdı."
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mb-5">
            <div className="list-group  " id="list-tab" role="tablist">
              <div className="p-5 imgeSol shadow mb-5 ">
                <img src={imgeSol} className="img-responsive " alt="imge" />
              </div>
              <div className="Recent ">
                {" "}
                <h4>Son gönderiler</h4>
                <a
                  className="list-group-item list-group-item-action active"
                  id="list-home-list"
                  data-bs-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="list-home"
                >
                  Recent postsKovid-19 döneminde perakende alışveriş nasıl değişti?
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-bs-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="list-profile"
                >
                  Covid-19 sırasında insanlar nasıl alışveriş yapıyor?
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-bs-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="list-messages"
                >
                  Pandemi sırasında stoklarınızı dolu tutmak
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-settings-list"
                  data-bs-toggle="list"
                  href="#list-settings"
                  role="tab"
                  aria-controls="list-settings"
                >
                  Market alışverişi yaparken güvende kalmak
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Blog;
