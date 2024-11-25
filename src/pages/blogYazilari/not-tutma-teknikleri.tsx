import React from "react";
import Image from "next/image";
import img0 from "@/res/yazilarimizFotolari/notTutmaTeknikleri.jpg";
import img1 from "@/res/yazilarimizFotolari/notTutmaTeknikleri1.jpg";
import img2 from "@/res/yazilarimizFotolari/notTutmaTeknikleri2.jpg";
import img3 from "@/res/yazilarimizFotolari/notTutmaTeknikleri3.jpg";
type Props = {};

const notTutmaTeknikleri = (props: Props) => {
  return (
    <div className="lg:px-64 pb-12 px-5">
      <div className="py-5">
        <h2 className="text-orange-600 text-5xl sm:text-6xl pb-4">
          Not Tutma Teknikleri
        </h2>
   
      <p>
        “Ben yazarak anlıyorum arkadaş! Ama çok zamanımı alıyor ya da
        unutuyorum. Ne yapacağım ben ya?” diyenlerden misiniz sizde? O halde
        sakin olun. Sizlere bilgileri daha iyi anlamanızı kolaylaştıracak
        keyifli ve hızlı olan birkaç teknikten bahsedeyim:
      </p>

      <h2 className="text-orange-600 text-xl pt-4"> 1-Cornell Notlar Sistemi</h2>
      <p>
        İlk tekniğimiz Cornell Notlar sistemi, lise ve üniversiteliler için
        tasarlanan bu teknik ABD ve Avrupa’da oldukça yaygın kullanılıyor.
        Sistematiği ise şu şekilde işliyor:
      </p>
      <Image className="py-4" src={img0} alt="Eğitimin Amacı" />
      <li>Sayfa 3’e bölünüyor.</li>
      <li>
        A bölümüne, konuyu öğrenirken dikkatimizi çeken anahtar kelimeleri ve
        soruları yazıyoruz
      </li>
      <li>B bölümüne, konuya dair dikkat çekenleri yazıyoruz.</li>
      <li>
        C bölümüne; soru, kelime ve cümleleri birleştirerek konunun özetini
        yazıyoruz. Bu yöntem gibi görsellik ön planda olan diğer yöntemlerimiz
        ise Kutu ve Tablo Metotları.
      </li>

      <h2 className="text-orange-600 text-xl pt-4"> 2-Kutu Metodu</h2>
      <p>
        İlk satıra konuya dair tanım, soru-cevap ve anahtar kelimler yazılıyor.
        ilk sütuna da konuya dair alt başlıklar yazılıyor. Satır ve sütunların
        kesiştiği noktalara da ilgili açıklamalar yazılıyor. Bu sayede konuları
        derinlemesine ve kalıcı şekilde öğrenmek keyifli bir hal alıyor.
      </p>
      <Image className="py-4" src={img1} alt="Eğitimin Amacı" />

      <h2 className="text-orange-600 text-xl pt-4">3-Tablo Metodu</h2>
      <p>
        Dersin başlıkları için birer kutucuk açıyoruz .Kutu içerisine de konuya
        dair ufak özetler ve hatırlatıcılar ekleyerek konunun kalıcılaşmasına
        destek sağlamış oluyoruz.
      </p>
      <Image className="py-4" src={img2} alt="Eğitimin Amacı" />

      <h2 className="text-orange-600 text-xl pt-4">4-Zihin Haritalama (Mind Mapping)</h2>
      <p>
        Bir diğer tekniğimiz ise Zihin Haritalama tekniği. Düşünceler arasında
        bağlantıyı sağlayan bu yöntem aslında aşina olduğumuz bir yol. Bilgi ve
        konuların sürekli dallanabildiği ve görsel hafıza ile desteklenen bu
        yöntemin sistematiği de oldukça keyifli.
      </p>
      <Image className="py-4" src={img3} alt="Eğitimin Amacı" />

      <h2 className="text-orange-600 text-xl pt-4">5-Anahtar Yöntemi</h2>
      <p>
        Zihin haritalama yöntemine oldukça benzeyen bir diğer yöntemimiz ise
        Anahtar Yöntemi. Bu yöntem, ayrıntısı fazla olan konularda düzgün, alt
        alta ve sistematik bir şekilde not tutmayı sağlıyor. Modellemesi ise şu
        şekilde:
      </p>
      <p>
        1.KONU BAŞLIĞI -ALT BAŞLIK= KONU -ALT BAŞLIK= KONU 2.KONU BAŞLIĞI -ALT
        BAŞLIK= KONU
      </p>
    
    </div>
  </div>
);
};

export default notTutmaTeknikleri;