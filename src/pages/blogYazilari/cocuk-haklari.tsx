import React from "react";
import Image from "next/image";
import img0 from "@/res/yazilarimizFotolari/cocukHaklari.webp";

type Props = {};

const cocukHaklari = (props: Props) => {
  return (
    <div className="lg:px-64 pb-12 px-5">
      <div className="py-5">
        <h2 className="text-orange-600 text-5xl sm:text-6xl pb-4">
        Geleceğimizin Güvencesi; Çocuk Hakları
        </h2>

        <Image className="py-4" src={img0} alt="Cocuk Haklari" />

        <p className="mb-4">
        Çocuk hakları, toplumun insan hakları güvencesinin temelini oluşturur. Ancak tarihi sürece baktığımızda 
        her çocuğun doğuştan temel haklara sahip olduğunun anlaşılması uzun zaman aldı. 20. Yüzyılla birlikte ise 
        ‘çocuk hakları’ her geçen gün daha fazla üzerine düşülen bir kavram olmaya başladı. Çünkü insanlık geliştikçe, 
        hakları korunmuş çocukların iyi bir geleceğin mirası olduğunu daha iyi anladı.
        </p>
        

        <p className="mb-4">
        Peki nedir çocuk hakları? En genel haliyle dünya üzerindeki tüm çocukların ilk nefes aldığı andan itibaren yaşama, 
        sağlık, barınma ve eğitim haklarına eşit seviyede sahip olması. Aynı zamanda fiziksel, psikolojik ve cinsel sömürüye 
        karşı korunmasını tanımlamak için kullanılan evrensel bir kavram. Türkiye’nin de aralarında olduğu 196 ülkeyle bu haklar 
        imzalanan 54 maddelik Çocuk Hakları Sözleşmesi ile güvence altına alındı.
        </p>

        <p className="mb-4">
        Bu hakların çocuklara verilmesi ve çocuklar adına korunması onlar için güven teşkil etmekle güvende hissetmesi, güven 
        sağlamak ile kalmaz, aydınlık bir gelecek şekillendirmemize de yardımcı olur. Örneğin, sözleşmenin 11. maddesinde 
        belirtildiği gibi; “Her çocuk, görüşlerini serbestçe ifade etme, kendisini ilgilendiren her konuda görüşlerinin dikkate 
        alınmasını isteme hakkına sahiptir. Herkesin çocukları dinleme, onların fikirlerini öğrenme ve onlara saygı gösterme 
        sorumluluğu vardır”. Yani bir yetişkin tarafından göz kontağı kurularak dinlenen bir çocuk kendini o yaştan itibaren 
        değerli hisseder.
        </p>

        <p className="mb-4">
        Ancak başta gelişmemiş de ülkeler olmak üzere cinsel istismar, psikolojik şiddet, küçük yaşta çalışmak zorunda kalan 
        çocukların haklarının korunmadığı gerçeği günümüzde hala belirginliğini koruyan bir gercek sorun. Bunun için dünyanın 
        her yerinde çocuk haklarını savunmak adına Birleşmiş Milletler Çocuklara Yardım Fonu (UNICEF) ve Uluslararası Af Örgütü 
        gibi sivil toplum kuruluşları çalışmalar yapıyor.
        </p>

        <p className="mb-4">
        Türkiye Cumhuriyeti’nin koruyucusu ve dünyada çocuklara bayram hediye etmiş tek lider olan Mustafa Kemal Atatürk’ün 
        dediği gibi “Çocuklar geleceğimizin güvencesi, yaşama sevincimizdir. Bugünün çocuğunu, yarının büyüğü olarak yetiştirmek 
        hepimizin insanlık görevidir.”
        </p>

        <h2 className="font-bold">Yaren Yıldız</h2>
        <h2 className="font-bold">Editör: Gözde Naz Uysal</h2>
    </div>
  </div>

);
};

export default cocukHaklari;

