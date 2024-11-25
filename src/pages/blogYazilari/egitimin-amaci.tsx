import React from "react";
import Image from "next/image";
import img0 from "@/res/yazilarimizFotolari/EgitiminAmaci.jpg";
import img1 from "@/res/yazilarimizFotolari/egitiminAmaci2.jpg";

type Props = {};

const egitiminAmaci = (props: Props) => {
  return (
    <div className="lg:px-64 pb-12 px-5">
      <div className="py-5">
        <h2 className="text-orange-600 text-5xl sm:text-6xl pb-4">
          Eğitimin Amacı Ve İdeal Eğitim
        </h2>
        <h2 className="text-orange-600 text-3xl sm:text-4xl py-8">
          Günlük Hayatta Eğitim
        </h2>
        <p>
          Günlük hayatta çok sık kullandığımız “eğitim” kelimesinin kapsamını
          hiç düşündünüz mü? Eğitim sadece okullarla veya kurslarla
          bağdaştırdığımız bir olgu mu? Yoksa siz de eğitim ve öğretim
          kelimelerini birbirleri yerine, dönüşümlü kullananlardan mısınız?
        </p>

        <h2 className="text-orange-600 text-xl pt-4">Eğitim Nedir?</h2>
        <p>
          Aslına bakarsanız “eğitim” kelimesinin kapsamı sandığımızdan çok daha
          geniştir. Bireyi etkileyen ve davranışlarında değişiklik oluşmasına
          yol açan her türlü etkinliğe eğitim denir. Eğitim, bu yüzden de
          bireyin yaşamı boyunca edindiği tüm deneyimleri kapsar. Eğitim
          türlerini kendiliğinden oluşan veya planlı gerçekleşenler olarak iki
          türe ayırabiliriz. İnformal eğitim dediğimiz, herhangi bir plan veya
          program söz konusu olmadan, her zaman ve her yerde, bireyin farkına
          varmadan girdiği öğrenim sürecidir. Öğretim ise informal eğitimin
          aksine, kurumlarda, planlı ve programlı bir şekilde sürdürülen bir
          formal eğitim çeşididir. Özetle, eğitim kelimesi öğretimi de kapsar ve
          zaman veya mekan sınırlandırması yoktur.
        </p>
        <Image className="py-4" src={img0} alt="Eğitimin Amacı" />
      </div>

      <div>
        <h2 className="text-orange-600 text-xl pb-4">İlk Kurumsal Eğitim</h2>
        <p>
          Peki plansız, yaşamın her alanında doğal olarak gerçekleşen informal
          eğitim yetmiyor muydu da kurumsal ve daha sistematik bir eğitim şekli
          benimsenmek zorunda kaldı? Sümerler yetmediğini düşünmüş olacak ki
          yazıyı kullanarak sistemli ve kurumsal eğitimin ilk uygulayıcısı
          olmuşlar. Yazının icadından önceki İlk Çağ döneminde, sistematiklikten
          uzak, usta-çırak ilişkisine dayalı veya aile içinde sınırlandırılmış
          bir informal eğitim yönteminin benimsendiği düşünülüyor. Ekonomik
          ihtiyaçların karşılanması amacıyla yazının bulunmasıyla, sonrasında da
          yine tapınaklara giren-çıkan malların listelerinin tutulması gibi
          ekonomik amaçlarla yazı yazmanın çocuklara öğretilmesiyle okullaşma
          başlamıştır. İlk Çağ’da Sümerler tarafından temelleri oluşturulan
          kurumsal eğitim, dönemin yeniliğe ve gelişime kapalı unsurlarından
          dolayı Orta Çağ’da biraz zorlu günler geçirse de sonrasında günümüze
          kadar gelişerek varlığını sürdürmüştür.
        </p>
        <h2 className="text-orange-600 text-xl pt-8 pb-4">Eğitimin Amacı</h2>
        <p>
          Eğitimin amacını “eğitimin işlevleri” başlığı altında incelemek
          mümkündür. Eğitimin; toplumsal, bireysel, ekonomik ve siyasal olmak
          üzere 4 temel işlevi bulunur. Eğitimin toplumsal işlevi, toplumun
          devamlılığı ve kültürel mirasın aktarımı için yenilikçi bireyler
          yetiştirmektir. Bireysel işlev denildiğinde kişinin kendisini
          geliştirmesine yardım etmek, kişiye ilgi ve yeteneklerine göre bilgi
          ve gelişim sağlamak akla gelebilir. Ekonomik işlev, nitelikli insan
          gücü yetiştirmek, siyasal işlev ise bireylerde millet bilincini
          oluşturarak var olan siyasi düzeni korumak olarak özetlenebilir.
        </p>

        <Image className="py-4" src={img1} alt="Eğitimin Amacı" />
        <h2 className="text-orange-600 text-xl pt-8 pb-4">İdeal Eğitim</h2>
        <p>
          Derslerde bize aktarılan şu ki: En ideal eğitim yukarıda bahsi geçen
          tüm işlevleri kapsayan eğitimdir. Bu dört işlevden herhangi biri göz
          önünde bulundurulmadığında söz konusu eğitim eksik kalmış olacağından
          ideal bir eğitim gerçekleştirilemez. Örneğin; bireysel eğitim göz ardı
          edilirse kişinin ilgi ve yeteneklerine özgü bir eğitim
          uygulanmadığından kişi kendini birçok konuda yetersiz hissedebilir.
          İdeal eğitim söz konusu olduğunda çağımızın bizden beklentilerini de
          unutmamak gerekir. Değişen koşullarla ve gerçekleşen teknolojik
          gelişmelerle görüldüğü gibi, 21. yüzyılda sadece temel becerileri
          öğreten bir eğitim modeli yeterli olamıyor. Bu becerilerin yanında
          kişiye, çağa ayak uydurması için güçlü bir eleştirel ve yenilikçi
          düşünme becerisi de kazandıran bir eğitim modeline ihtiyaç var
          diyebiliriz. Amerikan iş insanı Alvin Toffler’ın aşağıdaki meşhur sözü
          de 21. yüzyılda ideal eğitimi hangi nitelikler üzerinde oluşturmamız
          gerektiğini özetler niteliktedir: “21. yüzyıl cahilleri okuma yazma
          bilmeyenler değil; öğrenmeyen, öğrendiği yanlış bilgileri
          değiştiremeyenler ve yeniden öğrenemeyenler olacaktır.” -Alvin Toffler
        </p>

        <div className="pt-4">
          <span className="text-orange-600 text-xl">Kaynakça: </span>
          <a className="link-hover" href="https://www.academia.edu">
            https://www.academia.edu
          </a>
        </div>
      </div>
    </div>
  );
};

export default egitiminAmaci;
