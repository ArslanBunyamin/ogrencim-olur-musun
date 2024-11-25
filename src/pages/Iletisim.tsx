import { FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

type Props = {};

const Iletisim = (props: Props) => {
  return (
    <div className="min-h-screen p-8 bg-base-200">
      <p className="text-5xl sm:text-6xl text-center text-orange-600 pb-8">
        İletişim
      </p>
      <div className="lg:px-64 text-center pb-12 text-lg opacity-90">
        <b>Öğrencim Olur Musun? Akademi</b> olarak, eğitimde fırsat eşitliği
        yaratma misyonumuzu daha da büyütmek istiyoruz. <br />
        <br />
        Eğitimde fırsat eşitsizliğinin yarattığı sonuçlardan dolayı nitelikli
        eğitime erişemeyen ve eğitimi destekleyici ek kaynaklara ulaşamayan
        ilkokul ve ortaokul öğrencilerine destek sunarak, gelecekte eşit bir
        toplumun temellerini atma yolunda ilerliyoruz.
      </div>
      <div className="text-3xl text-center lg:mx-64 pt-8 pb-16 mb-8 border-b-4 border-b-orange-600 border-dashed">
        <span className="text-orange-600">Eğitimde fırsat eşitliği</span>ni
        sağlama yolunda bize katılmak ve
        <br />
        <span className="text-orange-600">Bir çocuğun geleceği</span>ni
        şekillendirmek için sen de bir adım atmak ister misin?
      </div>
      <div className="grid md:grid-cols-6 gap-5 lg:px-64 py-8">
        <div className="bg-base-100 flex flex-col p-4 rounded-md gap-4 shadow-md md:col-span-2">
          <p className="flex  grow">
            Online, birebir ve haftada bir saat branş dersler yada rehberlik
            desteği verebilirsin
          </p>
          <a
            href="https://forms.gle/3ACGAiri9mx5SPpk6"
            target="_blank"
            className="btn bg-orange-600 hover:bg-orange-400 text-white sm:w-1/3 sm:self-end"
          >
            Başvur
          </a>
        </div>
        <div className="bg-base-100 flex flex-col p-4 rounded-md gap-4 shadow-md md:col-span-2">
          <p className="flex  grow">
            Online, haftada 4 saat proje sorumlusu olarak destek olabilirsin
          </p>
          <a
            href="https://forms.gle/qg5eZuCZrP7h5m9V9"
            target="_blank"
            className="btn bg-orange-600 hover:bg-orange-400 text-white sm:w-1/3 sm:self-end"
          >
            Başvur
          </a>
        </div>
        <div className="bg-base-100 flex flex-col p-4 rounded-md gap-4 shadow-md md:col-span-2">
          <p className="flex  grow">
            Kitaplarını değerlendirerek çocukları yeni dünyalar ile
            tanıştırabilirsin
          </p>
          <a
            href="https://forms.gle/zTeE1RiUaEJERKwW9"
            target="_blank"
            className="btn bg-orange-600 hover:bg-orange-400 text-white sm:w-1/3 sm:self-end"
          >
            Başvur
          </a>
        </div>
        <div className="bg-base-100 flex flex-col p-4 rounded-md gap-4 shadow-md md:col-span-3">
          <p className="flex  grow">
            Maddi bağışta bulunarak kaynak kitabı temininde destek olabilirsin
          </p>
          <a
            href="https://fonzip.com/tog/kampanya/ogrencim-olur-musun%E2%80%93akademi"
            target="_blank"
            className="btn bg-orange-600 hover:bg-orange-400 text-white sm:w-1/3 sm:self-end"
          >
            Başvur
          </a>
        </div>
        <div className="bg-base-100 flex flex-col p-4 rounded-md gap-4 shadow-md md:col-span-3">
          <p className="flex  grow">
            Ebeveyn ve gönüllülerimizin farkındalığını arttırmak için web
            sitemizde deneme, makale yazarak destek olabilirsin
          </p>
          <a
            href="https://forms.gle/34qEHN2tB6SEG1F87"
            target="_blank"
            className="btn bg-orange-600 hover:bg-orange-400 text-white sm:w-1/3 sm:self-end"
          >
            Başvur
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:px-64">
        <div className="flex items-center gap-1 text-2xl font-semibold py-2 text-orange-600">
          <HiMail className="size-7" />
          Email:
        </div>
        <a
          href="mailto:ogrencimolurmusun@toplumgonulluleri.org.tr"
          className="link-hover"
        >
          ogrencimolurmusun@toplumgonulluleri.org.tr
        </a>
        <a
          href="mailto:ogrencimolurmusunakademi@gmail.com"
          className="link-hover"
        >
          ogrencimolurmusunakademi@gmail.com
        </a>
        <div className="divider text-xl"></div>
        <div className="flex items-center gap-1 text-2xl font-semibold pb-2 text-orange-600">
          <FaInstagram /> Instagram:
        </div>
        <a
          href="https://www.instagram.com/ogrencimolurmusun?igsh=MWpncDB3NGk3MHQzdQ=="
          className="link-hover"
        >
          https://www.instagram.com/ogrencimolurmusun?igsh=MWpncDB3NGk3MHQzdQ==
        </a>
      </div>
    </div>
  );
};

export default Iletisim;
