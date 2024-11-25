"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextJsImage from "@/components/NextJsImageForLightbox";
import { useState } from "react";
import Image from "next/image";

import k0 from "@/res/sahadayiz/kahramanmaras/0.jpeg";
import k1 from "@/res/sahadayiz/kahramanmaras/1.jpeg";
import k2 from "@/res/sahadayiz/kahramanmaras/2.jpeg";
import k3 from "@/res/sahadayiz/kahramanmaras/3.jpeg";
import k4 from "@/res/sahadayiz/kahramanmaras/4.jpeg";
import k5 from "@/res/sahadayiz/kahramanmaras/5.jpeg";
import k6 from "@/res/sahadayiz/kahramanmaras/6.jpeg";
import k7 from "@/res/sahadayiz/kahramanmaras/7.jpeg";
import k8 from "@/res/sahadayiz/kahramanmaras/8.jpeg";
import k9 from "@/res/sahadayiz/kahramanmaras/9.jpeg";
import k10 from "@/res/sahadayiz/kahramanmaras/10.jpeg";
import k11 from "@/res/sahadayiz/kahramanmaras/11.jpeg";

import a0 from "@/res/sahadayiz/ankara_2022/0.jpg";
import a1 from "@/res/sahadayiz/ankara_2022/1.jpg";
import a2 from "@/res/sahadayiz/ankara_2022/2.jpg";
import a3 from "@/res/sahadayiz/ankara_2022/3.jpg";
import a4 from "@/res/sahadayiz/ankara_2022/4.jpg";
import a5 from "@/res/sahadayiz/ankara_2022/5.jpg";
import a6 from "@/res/sahadayiz/ankara_2022/6.jpg";
import a7 from "@/res/sahadayiz/ankara_2022/7.jpg";

import h0 from "@/res/sahadayiz/hatay_2022/0.jpg";
import h1 from "@/res/sahadayiz/hatay_2022/1.jpg";
import h2 from "@/res/sahadayiz/hatay_2022/2.jpg";
import h3 from "@/res/sahadayiz/hatay_2022/3.jpg";
import h4 from "@/res/sahadayiz/hatay_2022/4.jpg";
import h5 from "@/res/sahadayiz/hatay_2022/5.jpg";
import h6 from "@/res/sahadayiz/hatay_2022/6.jpg";
import h7 from "@/res/sahadayiz/hatay_2022/7.jpeg";
import h8 from "@/res/sahadayiz/hatay_2022/8.jpeg";

import aa0 from "@/res/sahadayiz/ankara_2023/0.jpg";
import aa1 from "@/res/sahadayiz/ankara_2023/1.jpg";

import o0 from "@/res/sahadayiz/oyuncak_mucitleri_2024/0.jpg";
import o1 from "@/res/sahadayiz/oyuncak_mucitleri_2024/1.jpg";
import o2 from "@/res/sahadayiz/oyuncak_mucitleri_2024/2.jpg";
import o3 from "@/res/sahadayiz/oyuncak_mucitleri_2024/3.jpg";

import kk0 from "@/res/sahadayiz/kahramanmaras_2024/0.jpg";
import kk1 from "@/res/sahadayiz/kahramanmaras_2024/1.jpg";
import kk2 from "@/res/sahadayiz/kahramanmaras_2024/2.jpg";
import kk3 from "@/res/sahadayiz/kahramanmaras_2024/3.jpg";
import kk4 from "@/res/sahadayiz/kahramanmaras_2024/4.jpg";
import kk5 from "@/res/sahadayiz/kahramanmaras_2024/5.jpg";

import ank0 from "@/res/sahadayiz/ankara_2024/0.jpg";
import ank1 from "@/res/sahadayiz/ankara_2024/1.jpg";
import ank2 from "@/res/sahadayiz/ankara_2024/2.jpg";
import ank3 from "@/res/sahadayiz/ankara_2024/3.jpg";
import ank4 from "@/res/sahadayiz/ankara_2024/4.jpg";
import ank5 from "@/res/sahadayiz/ankara_2024/5.jpg";
import ank6 from "@/res/sahadayiz/ankara_2024/6.jpg";

type Props = {};

const Sahadayiz = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [index, setindex] = useState(0);

  const kahramanmarasFotolari = [
    k0,
    k1,
    k2,
    k3,
    k4,
    k5,
    k6,
    k7,
    k8,
    k9,
    k10,
    k11,
  ];

  const ankara2022Fotolari = [a0, a1, a2, a3, a4, a5, a6, a7];
  const hatay2022Fotolari = [h0, h1, h2, h3, h4, h5, h6, h7, h8];
  const ankara2023Fotolari = [aa0, aa1];
  const oyuncak_mucitleri_2024Fotolari = [o0, o1, o2, o3];
  const kahramanmaras_2024Fotolari = [kk0, kk1, kk2, kk3, kk4, kk5];
  const ankara_2024Fotolari = [ank0, ank1, ank2, ank3, ank4, ank5, ank6];

  return (
    <div className="min-h-screen p-8 lg:px-64 bg-base-200">
      <div className="text-5xl sm:text-6xl text-center pb-8">Sahadayız</div>

      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl sm:text-3xl text-orange-600 font-medium">
          5-7 Nisan Kahramanmaraş Şenliği
        </div>
        <div className="collapse-content">
          <p>
            <b>Öğrencim Olur Musun? Akademi;</b> 7 Nisan 2021&apos;de 9
            gönüllünün biraraya gelmesi ile başlayan bu yolculuğuna şimdilerde
            1700&apos;den fazla gönüllüsü ile online eğitimlere devam ediyor.
            Bunun yanı sıra daha çok çocuğa ulaşmak ve biraraya gelişimizi anmak
            adına 5-7 Nisan arasında Kahramanmaraş Göksun&apos;da bir şenlik
            düzenledik. Şenliğimiz sırasında gönüllülerimiz, Maraş&apos;taki
            insanların sıcaklığı ve misafirperverliği karşısında oldukça
            etkilendiler. Özellikle çocuklarla geçirilen zaman, bizler için
            unutulmaz anılara dönüştü. Gönüllülerimiz, bölgedeki eğitim ve
            sosyal ihtiyaçlara daha yakından tanık oldular ve gelecekte daha
            fazla destek olabilmek için yeni projeler planladılar.
          </p>
          <div className="columns-2 sm:columns-3  py-8 select-none gap-4">
            {kahramanmarasFotolari.map((img, index) => {
              return (
                <Image
                  key={index}
                  className="py-3 cursor-pointer hover:opacity-60 transition-all"
                  src={img}
                  alt="Resim"
                  onClick={() => {
                    setindex(index);
                    setOpen(true);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl sm:text-3xl text-orange-600 font-medium">
          Ağustos 2022 Ankara Hobi Atölyeleri
        </div>
        <div className="collapse-content">
          <p>
            Ankara Büyükşehir Belediyesine işbirliğiyle Ahmetler Çocuk Kulübünde
            üniversiteli öğrenciler ortaokul öğrencilerine hobi atölyeleri
            düzenlendi. Kodlama, Yaratı Yazarlık, Hayal, Mucitlik ve Bilim
            atölyeleri ile çocuklara eğlenirken öğretmek amaçlanmıştır.{" "}
          </p>
          <div className="columns-2 sm:columns-3  py-8 select-none gap-4">
            {ankara2022Fotolari.map((img, index) => {
              return (
                <Image
                  key={index}
                  className="py-3 cursor-pointer hover:opacity-60 transition-all"
                  src={img}
                  alt="Resim"
                  onClick={() => {
                    setindex(index + kahramanmarasFotolari.length);
                    setOpen(true);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl sm:text-3xl text-orange-600 font-medium">
          6 Şubat 2022 Hatay Merkezli Deprem
        </div>
        <div className="collapse-content">
          <p>
            6 Şubat haftası Türkiye&apos;nin 19 farklı şehrinde kitap, oyuncak
            toplama kampanyası başlatıldı. Akademiye ulaşan ve gönüllülerimizin
            ulaştığı okul ve çadırkentlere kitap ve oyuncaklar gönderildi.
            Belediye yardım çalışmalarında destek olundu.
          </p>
          <p>
            Deprem bölgesinden Ankara&apos;ya gelen ve devlet misafirhanlerinde
            kalan çocuklar için gerekli eğitimler alındıktan sonra çocuklar ile
            etkinlikler yapıldı. Elbistan ve Pazarcık&apos;ta moral vermek için
            kitap ve oyuncak desteklerinin ardından Mart-Haziran LGS kampı
            düzelendi.
          </p>
          <div className="columns-2 sm:columns-3  py-8 select-none gap-4">
            {hatay2022Fotolari.map((img, index) => {
              return (
                <Image
                  key={index}
                  className="py-3 cursor-pointer hover:opacity-60 transition-all"
                  src={img}
                  alt="Resim"
                  onClick={() => {
                    setindex(
                      index +
                        kahramanmarasFotolari.length +
                        ankara2022Fotolari.length
                    );
                    setOpen(true);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl sm:text-3xl text-orange-600 font-medium">
          Ağustos 2023 Ankara Hobi Atölyeleri
        </div>
        <div className="collapse-content">
          <p>
            Ankara Büyükşehir Belediyesine işbirliğiyle Mamak Çocuk Kulübünde
            üniversiteli öğrenciler ortaokul öğrencilerine hobi atölyeleri
            düzenlemeye devam etti. Kodlama, El Sannatları, Oyunlarla İngilizce
            ve Bilim atölyeleri ile çocuklara eğlenirken öğretmek amaçlanmıştır.
          </p>
          <div className="columns-2 sm:columns-3  py-8 select-none gap-4">
            {ankara2023Fotolari.map((img, index) => {
              return (
                <Image
                  key={index}
                  className="py-3 cursor-pointer hover:opacity-60 transition-all"
                  src={img}
                  alt="Resim"
                  onClick={() => {
                    setindex(
                      index +
                        kahramanmarasFotolari.length +
                        ankara2022Fotolari.length +
                        hatay2022Fotolari.length
                    );
                    setOpen(true);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl sm:text-3xl text-orange-600 font-medium">
          5 Mart 2024 Liseli Gönüllüler Oyuncak Mucitleri Etkinliği
        </div>
        <div className="collapse-content">
          <p>
            Daha önce online birebir ders vererek gönüllü eğitmen olan bir
            öğretmenimizin çalıştığı koleje Akademiyi anlatmasıyla liseli
            gönüllüler okullarında keçeden oyuncak yapmak için bir araya
            geldiler. Oyuncaklar Kahramanmaraş Göksun anaokulunda çocuklara
            verildi.
          </p>
          <div className="columns-2 sm:columns-3  py-8 select-none gap-4">
            {oyuncak_mucitleri_2024Fotolari.map((img, index) => {
              return (
                <Image
                  key={index}
                  className="py-3 cursor-pointer hover:opacity-60 transition-all"
                  src={img}
                  alt="Resim"
                  onClick={() => {
                    setindex(
                      index +
                        kahramanmarasFotolari.length +
                        ankara2022Fotolari.length +
                        hatay2022Fotolari.length +
                        ankara2023Fotolari.length
                    );
                    setOpen(true);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl sm:text-3xl text-orange-600 font-medium">
          Nisan-Mayıs-Haziran Kahramanmaraş Şenlikleri 2024
        </div>
        <div className="collapse-content">
          <p>
            Okul ve konteynera 5-7 Nisan, 21-23 Nisan ve 32 Mayıs- 2 Haziran
            tarihleri arası 3 şenlik düzenlendi. Göksun İlçe Milli Eğitim Müdürü
            desteğiyle psikososyal ve akran iletişimini destekleyecek honi
            atölyeleri ile çocukların iyi oluş haline katkıda bulunmak
            hedeflenmiştir.
          </p>
          <div className="columns-2 sm:columns-3  py-8 select-none gap-4">
            {kahramanmaras_2024Fotolari.map((img, index) => {
              return (
                <Image
                  key={index}
                  className="py-3 cursor-pointer hover:opacity-60 transition-all"
                  src={img}
                  alt="Resim"
                  onClick={() => {
                    setindex(
                      index +
                        kahramanmarasFotolari.length +
                        ankara2022Fotolari.length +
                        hatay2022Fotolari.length +
                        ankara2023Fotolari.length +
                        oyuncak_mucitleri_2024Fotolari.length
                    );
                    setOpen(true);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl sm:text-3xl text-orange-600 font-medium">
          5-7 Temmuz 2024 Ufuk Yıldızı Ankara Etkinliği
        </div>
        <div className="collapse-content">
          <p>
            Online birebir ders verilen öğrencilere ve ebeveynlerine 3 günlük
            Ankara gezisi düzenlendi. TPÖÇG Eğitim Ofisi işbirliği ile
            ebeveynlere Ev İçi Sorumluluk Yönetimi, çocuklara ise Hedef
            Belirleme isimli yaygın eğitimler verilerek etkinliğe başlandı.
            Kurtuluş Savaşı, Cumhuriyet, Anadolu Medeniyetler müzeleri ve TBMM
            rehber eşliğinde ziyaret edildi. Feza Gürsey Bilim Merkezi ve
            Anıtkabir gezisi ile etkinlik sonlandırıldı.
          </p>
          <div className="columns-2 sm:columns-3  py-8 select-none gap-4">
            {ankara_2024Fotolari.map((img, index) => {
              return (
                <Image
                  key={index}
                  className="py-3 cursor-pointer hover:opacity-60 transition-all"
                  src={img}
                  alt="Resim"
                  onClick={() => {
                    setindex(
                      index +
                        kahramanmarasFotolari.length +
                        ankara2022Fotolari.length +
                        hatay2022Fotolari.length +
                        ankara2023Fotolari.length +
                        oyuncak_mucitleri_2024Fotolari.length +
                        kahramanmaras_2024Fotolari.length
                    );
                    setOpen(true);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="text-4xl text-orange-600 text-center pb-4">
          Teşekkürler!
        </div>
        <div>
          Bu şenliğin gerçekleşmesinde emeği geçen tüm gönüllülerimize, TOGG
          Vakfına ve bizi destekleyen herkese teşekkür ederiz. Özellikle
          çocuklarla birlikte gerçekleştirdiğimiz bu etkinlikler, onların
          hayatına bir nebze de olsa neşe ve umut kattı. Maraş&apos;taki
          çocuklarımızla kurduğumuz bağların, ileriye dönük daha güçlü bir köprü
          oluşturacağına inanıyoruz. Birlikte daha birçok güzel ve anlamlı
          projeye imza atmayı dört gözle bekliyoruz.
        </div>
      </div>
      <div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          on={{ view: ({ index: currentIndex }) => setindex(currentIndex) }}
          slides={[
            ...kahramanmarasFotolari,
            ...ankara2022Fotolari,
            ...hatay2022Fotolari,
            ...ankara2023Fotolari,
            ...oyuncak_mucitleri_2024Fotolari,
            ...kahramanmaras_2024Fotolari,
            ...ankara_2024Fotolari,
          ]}
          render={{ slide: NextJsImage }}
        />
      </div>
    </div>
  );
};

export default Sahadayiz;
