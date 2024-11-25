"use client";

import Image from "next/image";
import bg from "@/res/anasayfa.jpg";
import { CountUp } from "use-count-up";

type Props = {};

const AnaSayfa = (props: Props) => {
  const gonulluSayisi = 1773;
  const ogrenciSayisi = 600;
  const toplamSaat = 40000;

  return (
    <div
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen"
    >
      <Image
        src={bg}
        alt="background image"
        className="absolute top-0 left-0 h-full object-cover sm:w-full opacity-20 select-none"
        draggable={false}
      />
      <div className="z-10 flex flex-col justify-center px-8 xl:px-96 h-screen">
        <div className="text-4xl font-semibold py-12 flex justify-center">
          Bu Zamana Kadar Neler Yaptık?
        </div>
        <div className="grid grid-cols-3">
          <div className="flex flex-col justify-center items-center">
            <div className="text-orange-600 text-3xl sm:text-4xl pb-1 font-bold">
              {
                <CountUp
                  isCounting
                  end={gonulluSayisi}
                  duration={2}
                  thousandsSeparator=","
                />
              }
            </div>
            <div>Gönüllü İle</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-orange-600 text-3xl sm:text-4xl pb-1 font-bold">
              {
                <CountUp
                  isCounting
                  end={ogrenciSayisi}
                  duration={2}
                  thousandsSeparator=","
                />
              }
            </div>
            <div>Öğrenciye</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-orange-600 text-3xl sm:text-4xl pb-1 font-bold">
              {
                <CountUp
                  isCounting
                  end={toplamSaat}
                  duration={2}
                  thousandsSeparator=","
                />
              }
            </div>
            <div>Saat</div>
          </div>
        </div>
        <div className="py-12 text-3xl flex justify-center">
          Ek Ders Verildi
        </div>
        <a
          href="https://linktr.ee/Ogrencim_olur_musun?fbclid=PAZXh0bgNhZW0CMTEAAaYZloj3DeI41qm9nKZme_P5QWpSDMdTeqTUkvIzPmpTjgZ7EjLFWCGSRTk_aem_J0MDGJGKAO8oYe1lHEa3Og"
          className="btn btn-lg bg-orange-600 text-white hover:bg-orange-700"
          target="_blank"
        >
          GÖNÜLLÜ OL
        </a>
      </div>
      <div className="z-10 flex flex-col justify-center px-8 xl:px-96 gap-4 py-12 select-none">
        <div className="bg-base-100 bg-opacity-70 collapse hover:bg-opacity-100 transition-colors">
          <input type="checkbox" className="peer" />
          <div className="collapse-title peer-checked:bg-orange-600 text-lg">
            Atölyeler
          </div>
          <div className="collapse-content peer-checked:bg-orange-600 peer-checked:bg-opacity-40 peer-checked:py-4">
            <p>
              Yaz Döneminde üniversiteli öğrenciler gerekli eğitimleri aldıktan
              sonra öğrencilerimizin akademik, sosyal ve kişisel yetkinliklerini
              geliştirmeye yönelik hobi atölyeleri düzenlenir. Akran iletişimini
              destekleyen bu atölyeler 10 kişilik gruplar halinde Ağustos ayı
              boyunca gerçekleşir. Daha çok çocuğa ulaşmak için hem online hem
              yüz yüze yapılan bu atölyeler; iki yıldır Ankara Büyükşehir
              Belediyesi desteği ile Çocuk kulüplerinde gerçekleşiyor. İngilizce
              Speaking, Oyunlarla İngilizce, Bilim, Resim, Satranç, El Sanatları
              ve Kodlama gibi atölyeler düzenlenir.
            </p>
          </div>
        </div>
        <div className="bg-base-100 bg-opacity-70 collapse hover:bg-opacity-100 transition-colors">
          <input type="checkbox" className="peer" />
          <div className="collapse-title peer-checked:bg-orange-600 text-lg">
            Rehberlik
          </div>
          <div className="collapse-content peer-checked:bg-orange-600 peer-checked:bg-opacity-40 peer-checked:py-4">
            <p>
              Eğitimde fırsat eşitsizliğinin bir sebebi de niteliksiz eğitimdir.
              Kendini tanımayan, ilgi alanlarını bilmeyen, ögrencilerde merak ve
              öğrenme duygusunun yerini isteksizliğe bırakır. Bu da başarıyla
              doğrudan ilgilidir. Öğrencim Olur Musun? Akademi de PDR ve ya
              Psikoloji bölümlerinden 3 ve ya 4.sınıf olan gönüllüler gerekli ek
              eğitimleri alarak rehberlik görüşmeleri ve grup seminerleri
              düzenir. Birebir olan reberlik görüşmelerinde öğrencinin kendi
              hikayesini keşfetmek hedeflenirken yaş gruplarına göre 7kişilik
              grup seminerlerinde akran iletişimi desteklemek hedeflenir.
              Akademik, sosyal ve kişisel yetkinliklerini geliştirmeye yönelik
              oluşturulan müfredat ile çocukların yolculuğu öğrenme stilleri ve
              çalışma şekliyle başlar.
            </p>
          </div>
        </div>
        <div className="bg-base-100 bg-opacity-70 collapse hover:bg-opacity-100 transition-colors">
          <input type="checkbox" className="peer" />
          <div className="collapse-title peer-checked:bg-orange-600 text-lg">
            Ek dersler
          </div>
          <div className="collapse-content peer-checked:bg-orange-600 peer-checked:bg-opacity-40 peer-checked:py-4">
            <p>
              Güz ve Bahar döneminde ilkokul ve ortaokul öğrencilerine
              üniversiteli öğrenciler gerekli eğitimleri aldıktan sonra branş
              derslerden Matematik, İnkılap ve Atatürkçülük, Türkçe, Fen
              Bilimleri, İngilizce ve Sosyal Bilgiler dersleri verir. Çevrimiçi
              platformlardan yapılan bu derslerden öğrencinin istediği 3 branş
              ders ve rehberlik görüşmeleri bir eğitim dönemi boyunca devam
              eder. Haftada bir saat olan bu eğitimlerden sonra her hafta
              gönüllü eğitmenlerden ve velilerden geri bildirimler alınır.
              Rehberlik görüşmelerinde ise öğrenciden geri bildirimler alınır.
              Her eğitim dönemi öncesinde çocuklara okuma kitapları ve test
              kitapları temin edilir. 8.sınıflara ise ek olarak denemeler
              gönderilir.
            </p>
          </div>
        </div>
        <div className="bg-base-100 bg-opacity-70 collapse hover:bg-opacity-100 transition-colors">
          <input type="checkbox" className="peer" />
          <div className="collapse-title peer-checked:bg-orange-600 text-lg">
            Kütüphane
          </div>
          <div className="collapse-content peer-checked:bg-orange-600 peer-checked:bg-opacity-40 peer-checked:py-4">
            <p>
              Daha çok çocuğa ulaşmak için kitap toplama kampanyası ile okul ve
              destek merkezlerin raflarını kitaplar dolduruyor. Şu ana kadarki
              faliyetler arasında Şanlıurfa Adil Bucak Ortaokulu, Batman-
              Şiremir Çavuş İlkokulu, Nevşehir- Yakatarla Anaokulu,
              Mardin-Kızıltepe Anadolu Çalışma Salonu yer almaktadır.
              Kahramanmaraş, Kırşehir ve Eskişehir’e olunan desteklerden sonra
              81 şehire destek olmak hedefleniyor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnaSayfa;
