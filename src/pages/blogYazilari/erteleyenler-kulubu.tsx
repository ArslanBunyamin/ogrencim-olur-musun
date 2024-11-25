import React from "react";
import Image from "next/image";
import img0 from "@/res/yazilarimizFotolari/erteleyenlerKulubu.jpg";

type Props = {};

const erteleyenlerKulubu = (props: Props) => {
  return (
    <div className="lg:px-64 pb-12 px-5">
      <div className="py-5">
        <h2 className="text-orange-600 text-5xl sm:text-6xl pb-4">
          Erteleyenler Kulübü
        </h2>

      <h2 className="text-orange-600 text-xl pt-4">Siz de bir ‘Erteleyenler Kulübü’ üyesi misiniz?</h2>
      <p>
        Erteleyenler Kulübü’nün özelliği, içindeki herkesin ertelemeyi
        alışkanlık haline getirmiş olmasıdır. Kulübün bir üyesi olup
        olmadığınıza karar vermeden önce gelin ertelemek nedir ve nasıl kendini
        gösterir buna bakalım.
      </p>
      <p>
        Ertelemek sözlük anlamı olarak “sonraya bırakma”, bir başka ifadeyle
        “istenmeyen sonuçlara neden olacağı bilinse de bir sorumluluğu yerine
        getirmeyip, onun yerine daha az önemli işlerle uğraşmak” anlamına
        geliyor. Günlük hayattaki örneklerine bakacak olursak: Sonra yaparım
        diye kenara atılan bir ödev, bir türlü başlanılamayan temizlik, teslim
        tarihine birkaç gün kalsa da yazılmaya başlanamayan yazı erteleme
        eylemine örnek olabilir.
      </p>
      <p>
        Nadiren gerçekleştirilen erteleme davranışı kişi için büyük bir soruna
        yol açmasa da bu davranışın alışkanlık haline getirilmesi son derece
        yıkıcı sonuçlar doğurabilir.
      </p>
      <Image className="py-4" src={img0} alt="Eğitimin Amacı" />
      <h2 className="text-orange-600 text-xl pt-4">Vakit Mi Duygular Mı?</h2>
      <p>
        Peki ‘Erteleyenler Kulübü’ üyeleri neden sürekli bir şeyleri
        erteliyorlar? Son gün değil de bir ay önceden düzenli çalışmaya
        başlasalar sınavdan daha yüksek bir not alacaklarını bilmiyorlar mı? Ya
        da ödevi son gün baştan savma yapmak yerine verildiği gün yapmaya
        başlasalar, son gün bunalmadan çok daha güzel bir iş ortaya
        çıkarabileceklerini bilmiyorlar mı?
      </p>
      <p>
        Elbette biliyorlar. Erteleme davranışını ilginç kılan şey de tam olarak
        bu. Tanımdaki gibi kişi “istenmeyen sonuçlara neden olacağı bilinse de”
        bu davranışı sergiliyor. Genelde insanlar sonucun onlar için olumsuz ve
        zarar verici olacağını bildikleri davranışlardan kaçınma
        eğilimindedirler fakat erteleme davranışı için durum tam tersi! Peki,
        bunun nedeni sizce ne olabilir?
      </p>
      <p>
        Carleton Üniversitesi Psikoloji Profesörü Dr. Tim Pychyl’a göre
        “Erteleme bir zaman yönetimi sorunu değil, duygu düzenleme sorunudur.”
        Yani Erteleyenler Kulübü’nün üyeleri negatif duygularını kontrol
        edemedikleri için görevlerini erteliyorlar. Bu sayede negatif ve, onları
        mutsuz eden duygularla yüzleşmeyi de sonraya bırakmış oluyorlar.
      </p>
      <p>
        Örneğin; Kulüp’ün öğrenci olan bir üyesi, bir türlü test çözmeye vakti
        olmadığından ve test çözemediği için de sınavlardan düşük not aldığından
        şikâyet ediyordu. Fakat aslında test çözerken çok yanlışı çıktığı ve
        kendini hiçbir şey bilmiyormuş gibi hissettiği için test çözmeyi sürekli
        ertelediği ortaya çıktı. Kulüp’ün başka bir üyesi ise yazması gereken
        yazıyı, “Ya yazım istediğim kadar iyi olmazsa?” diye korktuğu için bir
        türlü yazamadığını söyledi.
      </p>
      <p>
        Bu örneklere bakıldığında erteleme davranışının sebebinin o işe vakit
        bulamamak değil de , olası negatif duygulardan kaçmak olduğu çok açık.
      </p>

      <h2 className="text-orange-600 text-xl pt-4">Parçala, Başla, Bitir</h2>
      <p>Peki erteleme davranışından nasıl kurtuluruz?</p>
      <p>
        Uzmanlar yoğun negatif duygular yaşamamak adına yapılması gereken işi
        gerçekten küçük parçalara ayırıp, çok fazla düşünme eyleminde bulunmadan
        direkt işin en küçük bölümünü yapmayı öneriyorlar. Bu sayede akla,
        ertelemeye neden olabilecek istenmeyen duygular gelmeden işe başlanmış
        oluyor. Ne derler bilirsiniz: “Başlamak, bir işi bitirmenin yarısıdır.”
        Erteleme söz konusu olduğunda da en çok zorlanılan kısım bir işe
        başlamaktır.!
      </p>
      <p>
        Daha sonra her seferinde küçük bir kısım yapılarak kısa süre içerisinde
        iş bitiriliyor ve olası olumsuz duygular yaşanmadan bir iş daha
        tamamlanmış oluyor.
      </p>
      <p>
        Siz de bir Erteleyenler Kulübü üyesi olduğunuzu düşünüyorsanız umarım bu
        “parçala, başla ve bitir” tekniğiyle erteleme alışkanlığınızdan
        kurtulabilirsiniz.
      </p>
      <div className="pt-4">
        <span className="text-orange-600 text-xl">Kaynakça: </span>
        <a className="link-hover" href="https://www.nytimes.com/2019/03/25/smarter-living/why-you-procrastinate-it-has-nothing-to-do-with-self-control.html">
          https://www.nytimes.com/2019/03/25/smarter-living/why-you-procrastinate-it-has-nothing-to-do-with-self-control.html
        </a>
      </div>
    </div>
  </div>
);
};

export default erteleyenlerKulubu;

 
