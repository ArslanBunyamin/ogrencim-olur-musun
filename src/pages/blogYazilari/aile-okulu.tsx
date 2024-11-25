import Image from "next/image";
import React from "react";
import foto from "@/res/yazilarimizFotolari/aileOkulu.jpg";

type Props = {};

const AileOkulu = (props: Props) => {
  return (
    <div className="lg:px-64 pb-12 px-5">
      <h2 className="text-center text-orange-600 text-5xl sm:text-6xl py-8">
        Aile Okulu
      </h2>
      <p className="text-center pb-12">
        Konuşmayı kaç yaşınızda öğrendiniz ya da ilk kelimeleriniz neler oldu?
        Peki ya ilk öğretmeniniz kimdi ? Anneniz mi? Yoksa babanız mı? Belki de
        abiniz, ablanız veya ailenizin başka bir ferdi…
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex items-center">
          <Image src={foto} alt="Aile Okulu" />
        </div>

        <div>
          <p>
            İlk kelimelerimizi söylerken, yemek yemeyi öğrenirken,
            emeklediğimiz, yürüdüğümüz ve daha birçok bilgi ve tecrübeyi
            edindiğimiz anlarda en büyük öğretici ve yol gösterici kişiler
            ailemizin fertleri oldu. Sadece fiziksel öğretilerimizde değildi
            bize öğrettikleri. Bize sundukları sevgi ve fedakarlıkları kadar
            aile üyelerinin arasında ki tavır ve davranışlar da bizlerin duygu
            dünyasını oluşturan en büyük kaynaklar oldu.
          </p>
          <p>
            Etik ve ahlaki değerlerimizin temelleri de yine ailelerimiz
            tarafından atıldı. Cömertlik, cimrilik, çekingenlik, temiz olmak,
            düzenli olmak ve sosyallik gibi öğretilerin kazanılması çocuklukta
            ki eğitim ile belirleniyor. Bu örnekler akıllara Gazali’nin
            sözlerini “İnsan bulunduğu kabın şeklini alan sıvı gibidir.”
            benzetmesini getiriyor. Buradan anlıyoruz ki aile; bizlerin
            şekillenmesinde oldukça büyük bir etkiye sahip. Çocukların
            karakterlerinin şekillenmesinde yapılan araştırmalar da gösteriyor
            ki çocuğun kişilik gelişiminin yüzde 65’i okul öncesi dönem
            dediğimiz 0-6 yaş döneminde oluşuyor.(Child Development- Laura E.
            Berk)
          </p>
          <p>
            Aileler çocuklarının karakterlerini şekillendirdikleri kadar
            tehlikelerden koruyan, bilinçlendiren ve yol gösterici tavırda da
            oluyor. Örneğin sobanın ya da çaydanlığın sıcak olduğunu
            deneyimlemeden bizleri ondan uzak tutmaya gayret edişlerinden tutun
            edindiğimiz arkadaşlarımıza kadar bize zarar gelmesinden korktukları
            her alanda birer uyarıcı ve koruyucu oluyorlar. Bu ve daha sayısız
            pek çok konu gösteriyor ki; okullardaki öğretmenlerimizden önce
            öğreticilerimiz ailemizdir. Tabi ki onların eğitmenliği okula
            başladığımız anla bitmiyor. Aksine büyümeye devam ettiğimiz her
            geçen an katlanarak artıyor.
          </p>
        </div>
      </div>
      <p>
        Ailemiz, kendi gelişimimizi ilerletip, kendi ayaklarımızın üzerinde
        duracağımız zamanlara dek hep yanımızda oldu. Bunlarla da kalmayıp kendi
        ailemizi kurduğumuzda bile destekleri, bilgi ve tecrübeleri ile rehber
        olmaya ve yol gösterici olmaya devam ettiler ve edecekler.
      </p>
    </div>
  );
};

export default AileOkulu;
