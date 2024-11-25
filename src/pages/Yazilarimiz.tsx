import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

type Props = {};

const Yazilarimiz = (props: Props) => {
  return (
    <div className="min-h-screen p-8 bg-base-200">
      <div className="text-5xl sm:text-6xl text-center text-orange-600 pb-12">
        Yazılarımız
      </div>
      <div className="pb-16 sm:text-center">
        <b className="text-xl">
          Online, haftada bir saat, branş dersler ya da rehberlik dersi veren
          gönüllü eğitmen olabilirsin:
        </b>
        <br />
        <br />
        <p className="opacity-90">
          Kelimelerin gücünü kullanarak gönüllülerimizin, velilerimizin ve
          öğretmenlerin eğitim alanında farkındalığını attırmak için yazıyoruz.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-0">
        <div className="flex flex-col items-center gap-4">
          <div className="mockup-phone select-none shadow-lg">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard bg-base-100 phone-1">
                <div className="px-4 pt-8 pb-4 mb-2 text-xl bg-base-300 flex items-center gap-2">
                  <FaChevronLeft /> 🙂 Gönüllü
                </div>
                <div className="px-2 pb-24 h-full overflow-y-auto grid gap-2">
                  <div className="chat chat-start">
                    <div className="chat-bubble bg-orange-600 text-white">
                      Kimler Yazıyor..?
                    </div>
                  </div>
                  <div className="chat chat-end">
                    <div className="chat-bubble bg-black text-white">
                      Çoğunluk üniversite öğrencileri olmak üzere deneyimli ya
                      da deneyimsiz herkes yazıyor.
                    </div>
                  </div>

                  <div className="chat chat-start">
                    <div className="chat-bubble bg-orange-600 text-white">
                      Nasıl Yazıyoruz..?
                    </div>
                  </div>
                  <div className="chat chat-end">
                    <div className="chat-bubble bg-black text-white">
                      Gönüllü yazar örnek ya da eğitim ile ilgili istenilen bir
                      konu başlığı seçer. Metni için kendine son teslim tarihi
                      verir. Editörümüz ile iki haftada bir buluşarak yazılar
                      üzerine geri bildirim alınır. Gönüllü yazar düzenleyip son
                      haline getirir. Geliştirmek adına eğitimler de düzenlenir.
                    </div>
                  </div>
                  <div className="chat chat-start">
                    <div className="chat-bubble bg-orange-600 text-white">
                      Nasıl Yazıyoruz..?
                    </div>
                  </div>
                  <div className="chat chat-end">
                    <div className="chat-bubble bg-black text-white">
                      Gönüllü yazar örnek ya da eğitim ile ilgili istenilen bir
                      konu başlığı seçer. Metni için kendine son teslim tarihi
                      verir. Editörümüz ile iki haftada bir buluşarak yazılar
                      üzerine geri bildirim alınır. Gönüllü yazar düzenleyip son
                      haline getirir. Geliştirmek adına eğitimler de düzenlenir.
                    </div>
                  </div>
                  <div className="chat chat-start">
                    <div className="chat-bubble bg-orange-600 text-white">
                      Nerede Yazıyoruz..?
                    </div>
                  </div>
                  <div className="chat chat-end">
                    <div className="chat-bubble bg-black text-white">
                      Tüm iletişim ve geri bildirim buluşmaları online
                      platformlar aracılığıyla düzenlenir.
                    </div>
                  </div>
                  <div className="chat chat-start">
                    <div className="chat-bubble bg-orange-600 text-white">
                      Başvurular Nasıl Oluyor.?
                    </div>
                  </div>
                  <div className="chat chat-end">
                    <div className="chat-bubble bg-black text-white">
                      Başvuru formunu doldurarak kayıt olmak yeterli. Her ay
                      sonunda WhatsApp üzerinden bilgilendirme mesajı ile
                      yazarlık serüveni başlar.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="btn w-full sm:w-auto py-4 px-12 bg-orange-600 text-white hover:bg-orange-400"
            href="https://forms.gle/34qEHN2tB6SEG1F87"
          >
            Başvuru Formu İçin Tıkla
          </a>
        </div>
        <div>
          <div className="text-4xl">Blog Yazılarımız:</div>
          <div className="flex flex-col py-4 gap-1">
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/egitimin-amaci"
            >
              Eğitimin Amacı Ve İdeal Eğitim
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/motivasyon"
            >
              Motivasyon Nasıl Sağlanır ve Korunur?
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/ders-calisma-stratejileri"
            >
              Ders Çalışma Stratejileri: Başarıya Ulaşmanın Anahtarı
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/diskalkuli-nedir"
            >
              Diskalkuli Nedir?
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/erken-cocukluk-egitimi"
            >
              Erken Çocukluk Eğitimi Nedir, Neden Önemlidir?
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/matematikte-hata-turleri"
            >
              Matematikte Hata Türleri Ve Nedenleri Nedir? Ne yapılabilir?
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/aile-okulu"
            >
              Aile Okulu
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/not-tutma-teknikleri"
            >
              Not Tutma Teknikleri
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/iliskiler"
            >
              Ebeveyn, Öğretmen, Öğrenci İlişkisi
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/buyuk-dusun-gercek-olsun"
            >
              Büyük Düş’ün Gerçek Olsun
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/aile-ve-egitim"
            >
              Aile Ve Eğitim
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/egitimde-firsat-esitsizligi"
            >
              Eğitimde Fırsat Eşitsizliği
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/erteleyenler-kulubu"
            >
              Erteleyenler Kulübü
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/universite-tercihi"
            >
              Üniversite Tercihi
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/akran-zorbaligi"
            >
              Şiddetin Çocukluk Çağı: Akran Zorbalığı
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/internetin-bilincli-kullanimi"
            >
              İnternetin Bilinçli Kullanımı
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/elestirel-dusunme"
            >
              Eleştirel Düşünme
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/egitim-araci-bilgisayar"
            >
              Bir Eğitim Aracı Olarak Bilgisayar
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/cocuk-haklari"
            >
              Geleceğimizin Güvencesi; Çocuk Hakları
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/gonullulerden-gelenler-1"
            >
              Gönüllülerden Gelenler-1:Öğrenmek
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/gonullulerden-gelenler-2"
            >
              Gönüllülerden Gelenler-2:Düşler ve Kendimize İnanmak Adına Bir
              Söylence
            </Link>
            <Link
              className="text-orange-700 hover:text-orange-600 link-hover underline"
              href="/blogYazilari/gonullulerden-gelenler-3"
            >
              Gönüllülerden Gelenler-3: Zamanımı Yönetmeyi Nasıl Öğrendim?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yazilarimiz;
