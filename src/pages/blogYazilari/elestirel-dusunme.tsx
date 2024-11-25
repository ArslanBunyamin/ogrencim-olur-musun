import React from "react";
import Image from "next/image";
import img0 from "@/res/yazilarimizFotolari/elestirelDusunme.webp";
import img1 from "@/res/yazilarimizFotolari/elestirelDusunme1.webp";

type Props = {};

const elestirelDusunme = (props: Props) => {
  return (
    <div className="lg:px-64 pb-12 px-5">
      <div className="py-5">
        <h2 className="text-orange-600 text-5xl sm:text-6xl pb-4">
                Eleştirel Düşünme
        </h2>

        <Image className="py-4" src={img0} alt="Elestirel Dusunme" />

        <p className="mb-4">
        “Sorgulanmamış hayat yaşanmaya değer değildir” der Sokrates. Gerçekten öyle mi? Bizi diğer 
        canlılardan ayıran en temel özelliğimiz düşünmek ve hayal kurmak. Gün içinde yüzlerce problemle 
        karşılaşırız; en basitinden dışarı çıkarken şemsiye alıp almamayı, sınavda iki şık arasında 
        kaldığımızda hangisini seçeceğimizi düşünürüz. İşte o kapıda durup meteorolog kimliğimize 
        büründüğümüzde ya da sınavda kafamızdan dumanlar çıktığını hissettiğimizde eleştirel düşünmeye başlarız.
        </p>
        <Image className="py-4" src={img1} alt="Elestirel Dusunme" />

        <p className="mb-4">
        Ne olduğu üzerine belki de hiç düşünmediğimiz, öylece kabul ettiğimiz değerler ve kavramlar var; 
        iyi, kötü, ahlak, görgü kuralları gibi… Peki bunların nereden geldiğini ya da tam olarak ne olduklarını 
        hiç düşündük mü? Tam da burada eleştirel düşünmenin üstadı Sokrates’e dönelim. Sokrates, hiçbir şeyin 
        sorgulanmadan kabul edilmemesi gerektiğine inanır. Düşüncelerimizin çoğunun sanı ya da kanılardan ibaret 
        olduğunu düşünür. Bu nedenle cevabını bildiğimizi sandığımız soruları bize sorarak ilk cevabımızla 
        çelişinceye kadar eleştirel bir şekilde düşünmeye zorlar bizi. Ona göre yanıtlar değil, sorulan sorular 
        önemlidir.
        </p>

        <p className="mb-4">
        Peki eleştirel düşünme doğuştan gelen bir yetenek mi? Yaratıcılık, analitik düşünme, problem çözme 
        her insanda farklı seviyede ortaya çıkan yetenekler gibi görünse de, araştırmalar bunların öğrenilebilir 
        beceriler olduğunu kanıtlar. Polisiye romanlar okurken ya da arkadaşlarınızla suç filmleri izlerken 
        suçlunun kim olduğunu en son anlayan kişi olmanız sizin eleştirel düşünmede kötü olduğunuz anlamına 
        gelmez. Öte yandan, ipuçlarını fark edip kanıtları doğru kişilerle bağdaştırmak eleştirel düşünebildiğinizi 
        gösterir. Belki de bu çelişkiyi bir sorgulamalısınız.
        </p>

        <p className="mb-4">
        Peki eleştirel düşünme ne değildir? Olayların sadece kötü tarafını ele alarak saldırgan bir şekilde 
        eleştiri yapmak değildir. Akıl yürütme, analiz ve değerlendirme gibi zihinsel süreçlerden oluşan bir 
        düşünme biçimidir. Amaç problem çözme ya da problemleri tespit etme olabilir.
        </p>

        <p className="mb-4">
        Günümüzde problem çözebilme, yaratıcı ve eleştirel düşünme aranan bir özellik oldu. Dogmatik bilgilerle 
        ya da hurafelerle hayatımızı devam ettirmeyip sorgulamayı hiç bırakmamak daha da önem kazandı. 
        Sokak röportajlarında sık sık gördüğümüz, hiçbir şeyi sorgulamayan kişilerden farkımız işte tam 
        burada, eleştirel düşünme yetisiyle ortaya çıkıyor. Çünkü Einstein’ın da dediği gibi “Evrende en 
        büyük ziyan sorgulama yeteneğini yitirmiş bir beyindir”.
        </p>

        <h2 className="font-bold">Belkıs Yaren Ölçülü</h2>
        <h2 className="font-bold">Editör: Gözde Naz Uysal</h2>
    </div>
  </div>

);
};

export default elestirelDusunme;

