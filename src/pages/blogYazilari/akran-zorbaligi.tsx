import React from "react";
import Image from "next/image";
import img0 from "@/res/yazilarimizFotolari/akranZorbaligi.webp";

type Props = {};

const akranZorbaligi = (props: Props) => {
  return (
    <div className="lg:px-64 pb-12 px-5">
      <div className="py-5">
        <h2 className="text-orange-600 text-5xl sm:text-6xl pb-4">
        Şiddetin Çocukluk Çağı: Akran Zorbalığı
        </h2>

        <Image className="py-4" src={img0} alt="Akran Zorbaligi" />

        <p className="mb-4">
        Hiç çocukların birine zarar verebileceğini düşündünüz mü? Şiddet, dünyada çığ gibi büyürken çocuklar da 
        bundan etkilenmiş görünüyor. Öyle ki UNICEF’in (Birleşmiş Milletler Çocuklara Yardım Fonu) 2023 yılının 
        Haziran ayında yayınladığı rapora göre Türkiye’de akran zorbalığına uğrayan çocukların oranı yaklaşık 
        yüzde 36. Peki biz yetişkinler akran zorbalığının farkında mıyız?
        </p>

        <h2 className="font-bold">Akran Zorbalığı Nedir?</h2>

        <p className="mb-4">
        Zorbalık, Prof. Dr. Sirel Karakaş’ın Psikoloji Sözlüğü’nde “Korkutma amacıyla uygulanan sözlü taciz veya 
        fiziksel şiddet” olarak tanımlanır. Akran zorbalığı ise çocukların bu şiddeti kendi yaşıtlarına uygulamasıdır. 
        Fiziksel, sözel, siber ve duygusal boyutlardan oluşabilir. Temel özelliği ise güç dengesizliği varlığında 
        tekrarlı ve bilinçli bir biçimde zarar vermesidir. Bu şiddet türü sıklıkla okulda, oyun alanlarında, parkta 
        ve serbest zaman aktivitelerini yaparken yaşanır.
        </p>

        <h2 className="font-bold">Akran Zorbalığının Sebepleri</h2>

        <p className="mb-4">
        Çocuğun üstünlük ihtiyacı, tartışmalarda şiddeti çözüm olarak görmesi, arkadaşının zorbalığı hak ettiğini 
        düşünmesi, dikkat çekme isteği, kıskançlık, kendini ifade edememesi ve öfkesini yönetememesi gibi durumlar 
        davranış bozukluklarıyla birleştiğinde çocuğun zorbalık yaparak çevresine zarar vermesine yol açan etkenler 
        arasında sayılabilir.
        </p>

        <p className="mb-4">
        Akran zorbalığını tetikleyen faktörlerden biri de aile içi şiddettir. Çocuklar gördükleri davranışı öğrenip 
        uygulamaya yatkındır. Ailedeki çatışmaların çözümünde sözlü veya fiziksel şiddete başvurulması çocukların 
        şiddeti yaygınlaştırmalarına sebep olabilir.
        </p>

        <h2 className="font-bold">Akran Zorbalığının Sonuçları</h2>

        <p className="mb-4">
        Zorbalığı yapan, zorbalığa uğrayan ve bu şiddete tanıklık eden tüm çocuklar için şiddetin yıkıcı etkileri vardır. 
        Zorbalık yapan çocukların büyüdüklerinde antisosyal davranış sergiledikleri ve ilişki kurmada zorlandıkları görülür. 
        Zorbalığa uğrayan çocukların ise stres seviyelerinin arttığı, derslerine odaklanamadıkları, okul korkusu geliştirdikleri, 
        uykusuzluk yaşadıkları, depresyon belirtileri gösterdikleri, altına kaçırdıkları hatta intihar girişiminde bulundukları 
        görülen sonuçlardandır. Zorbalığa tanıklık eden çocukların da korku ve suçluluk yaşadıkları, bazen de benzer zorbalığı 
        yaptıkları görülebilir.
        </p>
        <p className="mb-4">
        Akran zorbalığını durdurmak için çocuk-ebeveyn-okul işbirliği önemlidir. Çocukların kendi gelişimsel ihtiyaçlarını 
        fark etmelerini sağlayan eğitim programları geliştirilebilir. Bu ihtiyaçların şiddetle değil empati, şefkat ve olumlu 
        sosyal davranışlarla karşılanması teşvik edilebilir. Ebeveynler olarak çocuğumuzla konuşarak arkadaşları ile 
        ilişkisinde ne tür davranışlarla grup aidiyetini, sosyal onayı, birlikte eğlenmeyi hissedebileceğini düşünebiliriz.
        </p>

        <h2 className="font-bold">Büşra Ünal</h2>
        <h2 className="font-bold">Editör: Gözde Naz Uysal</h2>
    </div>
  </div>

);
};

export default akranZorbaligi;

