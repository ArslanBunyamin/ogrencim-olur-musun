import React from "react";
import Image from "next/image";
import img0 from "@/res/yazilarimizFotolari/diskalkuliNedir.jpg";


type Props = {};

const diskalkuliNedir = (props: Props) => {
  return (
    <div className="lg:px-64 pb-12 px-5">
      <div className="py-5">
        <h2 className="text-orange-600 text-5xl sm:text-6xl pb-4">
          Diskalkuli Nedir?
        </h2>
      
      <p>
        Diskalkuli; en basit tanımla matematik öğrenme güçlüğüdür. Kişinin
        beyninin matematikle ilgili alanının işlevsizliği nedeniyle ortaya çıkan
        bir durumdur. 1972’de literatüre girmiştir ve bu öğrenme güçlüğü
        hakkında ilk doktora tezi 2016 yılında yayınlanmıştır. Geç
        keşfedilmesinin sebebi başlarda diğer öğrenme güçlükleriyle
        karıştırılmasıdır. Her ne kadar geç keşfedilmiş olsa da önemli ve
        müdahale edilmesi zorunlu bir öğrenme güçlüğüdür. Üç türü vardır:
      </p>
      <ul>
        <li>Sahte Diskalkuli</li>
        <li>Gelişimsel Diskalkuli</li>
        <li>Edinilmiş Diskalkuli</li>
      </ul>
        <p>
        Sahte diskalkulide; çocuk eğitim yetersizliği, öğretmen tutumu veya
        yanlış öğretim teknikleri gibi sebeplerden ötürü aksaklık yaşamaktadır.
        Diskalkuli başta riskli gözükse de çocuklar, sadece kısa süreli ve
        iyileştirilebilir yetersizlikler yaşamaktadırlar. Gelişimsel
        diskalkuliye sahip çocuklar , zekalarında problem olmamasına rağmen
        temel aritmetik becerilerde güçlük yaşayan ve matematiksel becerileri
        yaşıtlarından en az iki yıl geride seyreden öğrencilerdir. Edinilmiş
        diskalkuli ise sonradan kazanılmıştır. Beyin; kaza, hastalık vb. gibi
        sebeplerden hasar görmüştür. Bu durumda eğitsel müdahale sonuç vermez.
      </p>
      <Image className="py-4" src={img0} alt="Diskalkuli Nedir?" />
      <h2 className="text-orange-600 text-xl pt-4">DİSKALKULİ NE DEĞİLDİR?</h2>
      <li>
        Diskalkuli, bir engellilik türü değildir. Diskalkuli olan çocukların
        sanılanın aksine zekalarında bir problem yoktur. IQ puanları normaldir
        veya üstün zekayı işaret eder.
      </li>
      <li>
        Diskalkulide ilaçlı müdahale yoktur. Çünkü diskalkuli bir hastalık
        değildir. Yalnızca eğitsel müdahalelerde bulunulur.
      </li>
      <li>
        Diskalkuli belli bir yaşta ortaya çıkan bir durum değildir. Her yaş ve
        beceride ortaya çıkabilir.
      </li>

      <h2>DİSKALKULİ BELİRTİLERİ NELERDİR?</h2>
      <ul>
        <li>
          Sayıları anlamlandırmada, zihinde canlandırmada ve saymada problem
          yaşama,
        </li>
        <li>Olağanüstü bir matematik kaygısı yaşama,</li>
        <li>
          Matematiksel becerilerin yaşıtlarından en az iki yıl geride
          seyretmesi,
        </li>
        <li>Geometri ve uzamsal becerilerde sorun yaşama,</li>
        <li>
          İleriki yaşlarda bile parmakla sayma eğiliminin görülmesi (Parmak ile
          sayı arasında çok kuvvetli bir sinirsel yapı vardır. Parmak hissi ile
          matematik performansı arasında da kuvvetli bir ilişki bulunur.
          Diskalkulik çocukların bazılarında bu ilişki zayıftır. Bunun yanında
          çalışma belleği de zayıfsa zihinden işlem yapamaz ve parmaklara
          yönelir.),
        </li>
        <li>Çarpım tablosunu öğrenmekte ve hatırlamakta zorluk yaşama,</li>
        <li>Yön belirleyememe,</li>
        <li>Bakkal, market alışverişlerinde hesap yapamama,</li>
        <li>Analog saatleri okuyamama ve ifade edememe,</li>
        <li>Ezbere, yavaş ve eksik öğrenme,</li>
        <li>
          Eğitsel müdahaleye çok yavaş yanıt verme gibi belirtileri sayabiliriz.
        </li>
      </ul>

      <h2 className="text-orange-600 text-xl pt-4"> ÖĞRENME GÜÇLÜKLERİNDEN NASIL AYIRT EDERİZ?</h2>
      <p>
        Disleksi & Matematik: Disleksinin matematik üzerinde etkileri vardır.
        Disleksili öğrencilerin %25’i diskalkulidir. Ezberleme, kuralları
        hatırlama, bilgiyi çalışma belleğinde tutma (öğrenme güçlüklerinin
        genelinde çalışma belleği doğuştan zayıftır), sıralama, oryantasyon gibi
        konularda diskalkulik çocuklar gibi disleksi olan öğrenciler de sorun
        yaşar. Disleksili çocuklar ek olarak okuma ve yazmada da problem yaşar.
        Dikkat Eksikliği Ve Hiperaktive & Matematik DEHB’li öğrencilerin
        %11’inde diskalkuli de görülmektedir. Matematik sürekli dikkat isteyen
        bir bilimdir. Dolayısıyla bu öğrenciler matematikte özellikle problem
        çözmede sorun yaşarlar. Yani çocuğun matematiksel becerilerindeki
        sorunların yanı sıra dikkat eksikliği veya aşırı hareketlilik durumunu
        da gözlemliyorsak iki öğrenme güçlüğünden de şüphelenebiliriz. Dispraksi
        & Matemaik Dispraksi; motor ve koordinasyon becerilerindeki zorlukları
        kapsar. Örneğin; bu öğrenciler makas veya cetvel kullanırken çok
        zorlanır. Çocuğumuzun aritmetik becerilerindeki problemlerinin yanı sıra
        el-göz, el-göz-zihin gibi koordinasyonlarında problem gözlemliyorsak
        dispraksiden de şüphelenebiliriz.
      </p>

      <h2 className="text-orange-600 text-xl pt-4">EBEVEYNLER VE ÖĞRETMENLER OLARAK NE YAPABİLİRİZ?</h2>
      <p>
        Diskalkuli, çözümsüz bir durum olmadığı gibi birçok eğitsel müdahale
        yöntemlerine sahiptir. Tutarsızlık modeli, müdahaleye yanıt yöntemi,
        üçlü kodlama bunlardan bazılarıdır. Diskalkuli hakkında eğitim alırken
        hocalarımla her bir yöntemi uzun uzun tartışmış ve en mantıklı yöntemin
        “Müdahaleye Yanıt Yöntemi” olduğuna dair uzlaşmıştık. Peki, “Müdahaleye
        Yanıt Yöntemi”nasıl uygulanır? İlk aşamada sınıfımızdaki öğrencilerden
        matematiksel becerileri en geride seyredenleri ayıklarız. Bu çocuklara
        yoğun bir eğitsel program hazırlar ve bire bir sunarız. Ardından bu
        müdahale neticesinde başarılı olanları sınıflarına geri yollarız. İkinci
        aşamada kalan öğrencilerimize tekrar eğitsel müdahalede bulunuruz.
        Elbette her aşamada kullandığımız materyalleri ve teknikleri yenileriz.
        Öğrencinin ilgisi, yetenekleri, algı seviyesi ve ihtiyaçlarına göre bir
        eğitim sunmaya özen gösteririz. Bu aşamada başarı gösteren çocuklarımızı
        sınıfına geri yollarız. Üçüncü aşamada yüksek bir ihtimalle bir veya iki
        öğrenci kalacaktır. Bu öğrencilere son aşamada pedagog, PDR ve sınıf
        öğretmeni eşliğinde yoğun bir eğitsel müdahalede bulunuruz. Öğrenci buna
        rağmen hala çok yavaş ilerleme kaydediyor ise artık bu çocuğumuz için
        diskalkuliden şüphelenebiliriz. RAM (Rehberlik Araştırma Merkezi) ‘a
        yönlendirir ve geri kalan süreci takip ederiz. Bu yöntem sadece biraz
        daha ilgi ve eğitime ihtiyaç duyan öğrenci ile diskalkulik öğrenciyi
        ayırt etmemizi kolaylaştırır. Çocuğu direkt RAM’a yönlendirmek demek ona
        bir ömür taşıyacağı etiketi hiç düşünmeden ve emek vermeden yapıştırmak
        demektir. Ki bu da biz eğitimcilere yakışmayacak bir durumdur.
        Ebeveynler için çocuğunun diskalkulik olması elbette zor bir durumdur.
        Zira toplum, çevre; çocuğun özel durumu hakkında bilgisiz olduklarından
        ötürü “aptal, tembel, haylaz ” gibi kırıcı sözlerle hem çocuğu hem
        aileyi yaralayabilir. Bu yüzden ebeveynlerin, bu gibi zararlı tutumda
        olan insanlarla arasına mesafe koyması yararlı olacaktır. Öğretmeninize
        güvenin ve iş birlikçi bir tutum sergileyin. Emin olun ki biz
        öğretmenlerin en büyük destekçisi velilerdir. Sizin talimatları
        uygulamanız ve süreçle yakından ilgilenmeniz hem çocuğunuz hem de
        öğretmen için çok faydalı olacaktır. Karamsar olmayın. Çocuğunuz hasta
        veya engelli değil. Sadece bir öğrenme güçlüğü ile karşı karşıya. Yavaş
        yavaş da olsa akranlarına yetişecektir. Bu süreçte sabırlı ve sevecen
        olmalısınız. Son olarak;
      </p>

      <h2 className="text-black-600 text-xl pt-4">“Diskalkuli bir engel değildir. Herkes matematik öğrenebilir.”</h2>
    </div>
  </div>

        );};
        export default diskalkuliNedir;
  
    