import React from "react";
import Image from "next/image";
import img0 from "@/res/yazilarimizFotolari/gonullulerdenGelenler3.webp";
import img1 from "@/res/yazilarimizFotolari/gonullulerdenGelenler3.1.webp";
import img2 from "@/res/yazilarimizFotolari/gonullulerdenGelenler3.2.webp";


type Props = {};

const gonullulerdengelenler3 = (props: Props) => {
  return (
    <div className="lg:px-64 pb-12 px-5">
      <div className="py-5">
        <h2 className="text-orange-600 text-5xl sm:text-6xl pb-4">
            Gönüllülerden Gelenler-3: Zamanımı Yönetmeyi Nasıl Öğrendim?
        </h2>
        <Image className="py-4" src={img0} alt="gonullulerdenGelenler" />
        
        <p className="mb-4">
        Hepimiz ara sıra derslerimizin ve işlerimizin yükünü taşıyamıyor gibi hissederiz. 
        Bazen bu his, hepimizi pes etmeye de teşvik eder. 
        Pes etmeyip zamanını doğru şekilde yönetmeyi öğrenenler ise gerçekten nasıl başarılı olacaklarını öğrenirler, 
        tıpkı benim başardığım gibi. Zaman yönetimi denen şey pek çetrefilli bir şey ben de kabul ediyorum. 
        Ancak bir kere öğrendiğinizde hayatınızın iplerini elinize alabileceğiniz bir kapıyı da sizlere aralıyor.
        Peki zaman yönetimi nasıl öğrenilir? Gelin önce zaman yönetimi tam olarak nedir onu tanımlayalım:

        </p>
        
        <p className="mb-4">

        Zaman yönetimi, zamanı verimli bir şekilde kullanarak işleri planlama, 
        organize etme ve etkili bir şekilde tamamlama süreci olarak açıklanabilir.
        Çok yoğun olmasına rağmen her işini bir şekilde yetiştirmeyi sonunda öğrenmiş
        birisi olduğum için öncelikle bu yolculukta ‘sabırlı olun’ tavsiyesini vermeyi
        istiyorum. Unutmayın, sabır her derdin ilacıdır. İkinci olarak, özellikle benim de 
        en çok işime yarayan ‘kurbağayı ye’ taktiğini uygulamanızı özellikle öneririm.

        </p>
        <Image className="py-4" src={img1} alt="gonullulerdenGelenler" />
        
        <p className="mb-4">
        Hepimizin asla yapmak istemediği işler olur ve bu işlere takılı kalmamızda diğer işlerimizi yapmamızı engeller.
        Doğal olarak bu durum da zamanımızı yönetmemizi engeller. Kurbağayı ye taktiği ise size en zor gelen işi günün
        başında yaparak bu stresten sizi kurtarmayı amaçlar. Benim de uyguladığım bu metodun sürekli ertelediğiniz veya
        size çok zor gelen işler için bir kurtarıcı olduğunu belirtmek isterim.

        </p>
        
        <p className="mb-4">
        Bir de vazgeçilmezlerimden olan ‘YEDİ’ metodunu da sizlere önermek istiyorum. “Yap, Ertele, Devret, İptal et”
        gruplarından oluşan bu teknikle sizin için acil ve önemli işleri hızla yapabilir, 
        acil olmayan ama önemli işleri erteleyebilirsiniz. Aynı zamanda acil ama önemsiz işleri devredebilir 
        ve ne acil ne önemli olan işleri iptal edebilirsiniz. Bu taktikle gerçekten önemli olan işlere 
        daha çok zaman ayırmış olursunuz.

        </p>
        <Image className="py-4" src={img2} alt="gonullulerdenGelenler" />
        
        <p className="mb-4">
        Ancak belirtmeliyim ki benim gibi her işinizi önemli gören birisi iseniz bu metoda alışmanız 
        biraz zaman alacaktır. Ayrıca bu metot ile işlerinizin önemini kavrama ve onları kategorize 
        etme yetkinliğiniz de gelişecektir. Son olarak, zamanı yönetmek için günlük ve haftalık planlar 
        oluşturmanın da çok önemli olduğunu belirtmek isterim. Ancak deneyimlerimin gösterdiği bir diğer 
        gerçek var ki mükemmeliyetçi bir yapınız varsa planlarınızdaki ufak bir aksama her şeyi yıkabilir.
        Bu sebeple bu metotlar size uymuyorsa farklı metotları aramaktan ve benim yolculuğumda yaptığım 
        gibi arayıp bulmaktan çekinmeyin. Zamanını yönetmeyi öğrenen birisi olarak geç olmadan bu özelliği
        edinin ve yaşamdaki anı gerçekten yaşayın tavsiyesi ile sözlerimi sonlandırmış olmak istiyorum, 
        hoşça kalın.

        </p>
        
        <h2 className="font-bold">Yazar: Abdulbaki Zambakoğlu</h2>
        <h2 className="font-bold">Editör: Gözde Naz Uysal</h2>

       
      </div>
    </div>
  );
};

export default gonullulerdengelenler3;