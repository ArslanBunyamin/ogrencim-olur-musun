import React from "react";
import Image from "next/image";
import img0 from "@/res/yazilarimizFotolari/internetinBilincliKullanimi.webp";


type Props = {};

const internetinBilincliKullanimi = (props: Props) => {
  return (
    <div className="lg:px-64 pb-12 px-5">
      <div className="py-5">
        <h2 className="text-orange-600 text-5xl sm:text-6xl pb-4">
        İnternetin Bilinçli Kullanımı
        </h2>
        <Image className="py-4" src={img0} alt="internetin bilinçli kullanimi" />
        
        <p className="mb-4">
        İnternet, bilgiye erişim ve iletişim açısından çok kıymetli bir araç ancak tüm faydalarının 
        yanı sıra uygunsuz, yasa dışı ve tehlikeli içerikleri de barındırıyor. İnternetin uçsuz 
        bucaksız dünyasına herkes bilgi yükleyebiliyor ve her türlü içerik depolanabiliyor. Yani 
        tüm art niyetli kullanımlara da açık. İşte bu yüzden özellikle çocukların bilinçli internet 
        kullanımı büyük önem taşıyor. Peki internetin bilinçli kullanımı nasıl olmalı?
        </p>
        
        <p className="mb-4">

        İnternet, dünyanın en büyük kütüphanesi, hatta müzesi. Sanal turlarla gezebilir, milyonlarca 
        makaleye tek tuşla ulaşabiliriz. Ancak bilinçli internet kullanımının ilk kuralı tüm bunları 
        doğru kaynaktan yapmak. İnternet ortamında özellikle forum ve sözlük gibi platformlar yanlış 
        bilgilerle dolu. Bu sebeple kütüphane veritabanlarını, hükümetlerin doğrulanmış platformlarını 
        ve güvenilir araştırma içeriklerini kullanmak doğru bilgiye ulaşmanın yollarından birkaçı. 
        Unutmayın, Wikipedia herkesin bilgi girebildiği açık bir ansiklopedi örneği ve bilgileri her 
        zaman doğru olmayabilir. Ayrıca bazı haber kaynaklarının da kimi zaman doğrulanmamış ve teyide 
        muhtaç bilgileri doğru haber gibi geçebileceğini unutmamalı ve dezenformasyona karşı dikkatli olmalıyız.

        </p>
        
        <p className="mb-4">
        Bilinçli bir internet kullanımının vazgeçilmez öğelerinden bir diğeri de güvenlik. Bilmediğimiz linklere 
        tıklamamalı, güvenmediğimiz sitelerden dosya indirmemeli ve kişisel bilgilerimizi asla kimse ile paylaşmamalıyız. 
        Özellikle çok fazla reklam olan içeriklere dikkatle yaklaşmalı ve bilgisayarımızda bir antivirüs programı kullanmalıyız. 
        Kişisel bilgilerimizi isteyen ve güvenlik sertifikası doğrulanmamış (yeşil anahtar kilit ile https ibaresine sahip olmayan) 
        web sitelerini tercih etmemeli ve kullandığımız sitenin orijinal resmi bir sayfa olduğundan emin olmalıyız. Kendimizi 
        düşündüğünüz kadar diğer insanları da düşünmeli ve herkesin veri güvenliğine saygı duymalıyız. Kimsenin içeriğini, 
        görsellerini ve kişisel bilgilerini izinsiz kullanmamalıyız.

        </p>
        
        <p className="mb-4">
        Özellikle 18 yaş altı kullanıcıların internet kullanımı ebeveynlerinin gözetimi altında olmalı. Çocuklar da internette yaşadıkları 
        olumsuz deneyimleri ailelerine anlatmalı. Öte yandan internette zaman yönetimi de bilinçli kullanımın gerekliliklerinden biri. 
        Ekran başında uzun saatler geçirmek hem fizilsel hem zihinsel zarara neden olabilir. Bilinçli bir kullanıcı internet ve sosyal 
        hayat arasındaki dengeyi sağlayabilmeli.

        </p>
        
        <p className="mb-4">
        Kısaca, bilgiyi sorgulayabilme ve doğru kaynağa ulaşabilme becerisi, gerekli tedbirleri alma ve zaman yönetimi dünyayı avucumuzun 
        içine sığdıran internette kaybolmamamızı sağlayacaktır.

        </p>
        
        <h2 className="font-bold">Yazar: Abdulbaki Zambakoğlu</h2>
        <h2 className="font-bold">Editör: Gözde Naz Uysal</h2>

       
      </div>
    </div>
  );
};

export default internetinBilincliKullanimi;