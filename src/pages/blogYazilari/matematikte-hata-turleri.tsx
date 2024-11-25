import React from "react";
import Image from "next/image";
import img0 from "@/res/yazilarimizFotolari/matematikteHataTurleri.jpg";
import img1 from "@/res/yazilarimizFotolari/matematikteHataTurleri1.jpg";

type Props = {};

const matematikteHataTurleri = (props: Props) => {
  return (
    <div className="lg:px-64 pb-12 px-5">
      <div className="py-5">
        <h2 className="text-orange-600 text-5xl sm:text-6xl pb-4">
          Matematikte Hata Türleri Ve Nedenleri Nedir? Ne yapılabilir?
        </h2>
      <p>
        TDK’ye göre hata: Kişinin tasarrufunda olmayan, istemeden ya da koşullar
        gereği yaptığı yanlışlıklara denir. Yani bir kişinin yanlış seçeneği
        doğru olarak değerlendirdiğinde hata oluşur. Hatalı sonuç; hedeften
        sapmaya, kavram yanılgılarını kalıcılaştırmaya, problem çözümünün
        engellenmesine ve rasyonel sonuçlardan uzaklaşmaya sebep olabilir.
        Hatalar çeşitli tipler ve farklı nedenlerle karşımıza çıkarken bu hata
        türlerini üç başlıkta toplamak mümkündür.
      </p>
      <h2 className="text-orange-600 text-xl pt-4"> Hata Türleri</h2>

      <h2 className="text-orange-600 text-xl pt-4">1.Olgusal (Factual) Hatalar</h2>
      <p>
        Olgusal bilgi eksikliğinden kaynaklanır. Örneğin; öğrenci matematiksel
        sembollerin anlamını kavrayamamış veya çıkarma işleminin özelliklerini
        anlayamamış olabilir. Örneğin; 25-10=35
      </p>

      <h2 className="text-orange-600 text-xl pt-4">2.İşlemsel Hatalar</h2>
      <p>
        Bir problemin çözümünde izlenen adımlardan birinde veya birkaçında
        hatalar yapılmasıdır. Matematiksel işlem hataları (eldeyi yanlış
        toplama, onluk bozma vb.) söz konusudur. Örneğin; 45+27= 82
      </p>

      <h2 className="text-orange-600 text-xl pt-4"> 3.Kavramsal Hatalar</h2>
      <p>
        Matematikteki bazı temel ilkeleri, fikirleri veya teoremleri eksik veya
        hatalı anlamanın sonucunda ortaya çıkan hatalardır. Örneğin; kare
        şeklinin aslında dikdörtgenin özel bir hali olduğunu anlayamaması
      </p>

      <h2 className="text-orange-600 text-xl pt-4">Hata Nedenleri</h2>
      <p>
        Hata nedenleri için birçok durumu ele alabiliriz. Örneğin; öğretmen;
        deneyim eksikliği yaşıyor olabilir. Öğreteceği konuda yeterli uzmanlığa
        sahip olmayabilir. Bilgisi, anlayışı, tutumu öğrencilerin istekleriyle
        çelişebilir. Yine öğretmenin o günkü ruh hali eğitim-öğretim
        faaliyetlerinin gidişatını önemli ölçüde etkilemiş ve kaliteyi azaltmış
        olabilir.
      </p>
      <p>
        Aynı sebepler öğrenci için de geçerlidir. İnsan denilen canlının
        bireysel ve toplumsal olmak üzere birçok faktörden oluştuğunu düşünürsek
        öğrencimizin derste hazır bulunmalarını etkileyecek birçok unsurun
        bulunduğunu da kabul etmeliyiz. Çocuğun deneyimi, hayal gücü,
        yaratıcılığı, ruh hali, konuya karşı ön yargıları hataların başlıca
        sebeplerindendir.
      </p>
      <p>
        Tüm bu sebeplerin yanında matematik biliminin temsil, çeviri ve
        matematiksel zorluğu da hata nedenleri arasında sayılabilir.
      </p>

      <h2 className="text-orange-600 text-xl pt-4">Hatanın nedenini ve türünü nasıl saptayabiliriz?</h2>
      <p>
        Öğrenciden; bir problemin çözümü esnasında gerçekleştirdiği adımları
        açıklaması istenebilir. Öğrenciden çözüm esnasında düşündüklerini ifade
        etmesi istenebilir. Bu aşamada çoğu kez öğrenci, hatasını kendi fark
        eder. Aynı zamanda öğretmen, öğrencisinin varsa kavram yanılgıları veya
        işlemsel/olgusal hatalarını belirleme ve bunları düzeltme fırsatını elde
        etmiş olur.
      </p>

      <h2 className="text-orange-600 text-xl pt-4">Başka hangi yöntemleri kullanabiliriz?</h2>

      <h2 className="text-orange-600 text-xl pt-4">Çoklu temsillerin kullanımı</h2>
      <Image className="py-4" src={img0} alt="Matematikte Hata Türleri " />

      <h2 className="text-orange-600 text-xl pt-4">Frayer modeli kullanımı</h2>
      <Image className="py-4" src={img1} alt="Matematikte Hata Türleri " />

      <p>
        Somut ve sanal manipülatiflerin kullanımı (materyal ve ders araç
        gereçleri bakımından), Mathigon – GeoGebra gibi web 2.0 araçları,
        matematiksel iletişimin arttırılması (sınıf ortamında özellikle de
        matematik derslerinde ifade edilmek istenenlerin matematik diliyle
        söylenmesi) ve öğrenciye görelik ilkesine (öğrencinin hazır
        bulunmasındaki faktörlere, yaşına, ilgisine ve becerilerine yönelik
        eğitim) bağlı kalınması akıllıca olacaktır.
      </p>
    </div>
  </div>

);
};

export default matematikteHataTurleri;