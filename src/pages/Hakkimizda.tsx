type Props = {};

const Hakkimizda = (props: Props) => {
  return (
    <div className="min-h-screen p-8 bg-base-200 lg:px-64">
      <p className="text-5xl sm:text-6xl text-center text-orange-600">
        HAKKIMIZDA
      </p>
      <div className="py-12">
        <p>
          Daha iyi, adil ve eşit bir gelecek sadece ekolojik hedeflerle ya da
          kapsayıcı bir ekonomik büyümeye ulaşmakla bitmiyor. Sürdürülebilir
          kalkınmayı başarmanın en etkili ve güçlü yollarından birinin herkes
          için ulaşılabilir ve nitelikli eğitimi sağlamaktan geçmektedir.
        </p>
        <br />
        <p>
          Bu hedef doğrultusunda <b>Öğrencim Olur Musun? Akademi</b>
          <a
            href="https://www.tog.org.tr/"
            target="_blank"
            className="text-orange-600"
          >
            &nbsp;Toplum Gönüllüleri Vakfı&nbsp;
          </a>
          çatısı altında 7 Nisan 2021 tarihinde 9 gönüllü tarafından kuruldu.
          Kapsayıcı ve eşitlikçi, nitelikli eğitimin güvence altına alınması ve
          herkes için yaşam boyu öğrenimin desteklenmesi için ilk ve ortaokul
          öğrencilerinin gönüllü üniversite öğrencileri tarafından birebir ve
          hibrit eğitim modeliyle ek ders almasını sağlamaktadır. Farkındalığı
          yüksek kurum ve kuruluşların bağışlarıyla kaynak ve okuma kitabı
          gönderimi ile kütüphane çalışmaları yapılmaktadır.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-8 sm:gap-8 pb-8">
        <div className="bg-base-100 shadow-md p-8 rounded-md">
          <p className="text-2xl font-semibold pb-4 text-center text-orange-600">
            Öğrencim Olur Musun? Akademisi Misyonu
          </p>
          <p className="sm:text-center">
            Eğitimde fırsat eşitsizliğinden etkilenen ilkokul ve ortaokul
            öğrencilerine ulaşıp onlara derslerinde ve rehberlik konusunda
            destek olmak ve aynı zamanda gerek duyulduğu taktirde ek kaynaklara
            ulaşmalarında öncülük etmek akademinin misyonunu oluşturmaktır.
          </p>
          <p className="text-center underline text-xl py-4 text-orange-600">
            İlkelerimiz
          </p>
          <div className="">
            <div className="pl-4 py-1 list-item list-inside">
              Nitelikli Eğitim
            </div>
            <div className="pl-4 py-1 list-item list-inside">
              Öğrencinin Üstün Yararı
            </div>
            <div className="pl-4 py-1 list-item list-inside">Şeffaflık</div>
            <div className="pl-4 py-1 list-item list-inside">
              Sürdürülebilir Gelişim
            </div>
            <div className="pl-4 py-1 list-item list-inside">
              Takım Çalışması
            </div>
            <div className="pl-4 py-1 list-item list-inside">Çağdaş Eğitim</div>
            <div className="pl-4 py-1 list-item list-inside">
              Saygı ve Açık İletişim
            </div>
          </div>
        </div>
        <div className="bg-base-100 shadow-md p-8 rounded-md">
          <p className="text-2xl font-semibold pt-12 sm:pt-0 pb-4 text-center text-orange-600">
            Öğrencim Olur Musun? Akademisi Vizyonu
          </p>
          <ul className="list-disc">
            <li>
              MEB (Milli Eğitim Bakanlığı) eğitim-öğretim müfredatına uyularak,
              uygun metotlarla bilgileri aktarmak
            </li>
            <li>
              Gelişen teknoloji ile öğrencilerin eğitime kolay ulaşmasını
              sağlamak
            </li>
            <li>
              İlkokul ve ortaokul seviyesindeki öğrencilerin eğitim ve öğretim
              hayatlarını kolaylaştırmak için ek kaynak kitapları bağışlar
              aracılığıyla sağlamak
            </li>
            <li>Farkındalığı yüksek, bilinçli öğrenciler yetiştirmek</li>
            <li>
              Eğitim materyalleri konusunda eksiklik yaşayan okullardaki
              öğrencilerin gerekli kaynaklarına erişimi için kitap desteği
              sağlamak
            </li>
            <li>
              Hibrit bir sistem aracılığıyla eğitimde niteliği sürdürülebilmek
              akademinin temel vizyonlarıdır
            </li>
          </ul>
        </div>
        <div className="bg-base-100 shadow-md p-8 rounded-md sm:col-span-2">
          <p className="text-2xl font-semibold sm:pt-0 pb-4 text-center text-orange-600">
            Öğrencim Olur Musun? Akademisi Öncelikleri
          </p>
          <ul className="list-disc">
            <li>
              Tüm ülke bazında <strong>Öğrencim Olur Musun? Akademisini</strong>
              duyurmak ve geliştirmek
            </li>
            <li>
              Ülke sınırımız içerisinde dezavantajlı ilkokul ve ortaokul
              öğrencilerimize eğitimde destek sağlamak
            </li>
            <li>
              Nitelikli eğitim için alternatif fikirler geliştirmek ve uygulamak
            </li>
            <li>
              Sağlanan yardımları, öğrencilerimizin ihtiyaçları doğrultusunda
              kullanabilmek
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hakkimizda;
