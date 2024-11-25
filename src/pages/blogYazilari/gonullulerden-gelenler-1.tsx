import React from "react";
import Image from "next/image";
import img0 from "@/res/yazilarimizFotolari/gonullulerdenGelenler1.webp";
import img1 from "@/res/yazilarimizFotolari/gonullulerdenGelenler1.1.webp";

type Props = {};

const gonullulerdenGelenler1 = (props: Props) => {
  return (
    <div className="lg:px-64 pb-12 px-5">
      <div className="py-5">
        <h2 className="text-orange-600 text-5xl sm:text-6xl pb-4">
        Gönüllülerden Gelenler-1:Öğrenmek
        </h2>

        <Image className="py-4" src={img0} alt="Ogrenmek" />

        <p className="mb-4">
            Bu anlamsız karalamalar da ne böyle? Dediğini duyabiliyor gibiyim. Ben bu karalamayı ilk zamandaki insanların 
            anlaşmak için, anlamsız çizgileri bir araya getirerek oluşturduğu harfler ile, anlamsızlıktan-anlamlılığa geçişi 
            elde etmelerine benzetiyorum. Aslında bu bir karalama da değil, bu bir kelime. Evet, yanlış duymadın. ‘Nasıl 
            kelime bu ya?’ diyorsan biraz daha yakından bakarak başlayalım. Başlıkta yazan harfler birleştiğinde öğrenmek 
            anlamına gelen bir kelimeyi oluşturuyor. İnsanın en temel güdülerinden biri olan bu durum seni bu yazıdaki başlıkta 
            ne yazdığını öğrenmeye kadar getirdi. O zaman diyebilir miyiz ki öğrenmek için merak duymak, merakımızı bir şeylere 
            benzeterek gidermek çok önemlidir? Bunun cevabını geçmişten küçük bir örnek ile başlayarak irdelemeye ne dersin?
        </p>

        <h2 className="font-bold">1-) Alfabe ile öğrenme</h2>

        <p className="mb-4">
            Tarihin ilk alfabesi olan Fenike alfabesi ile yazılmış başlığımızda, sesli harfler bulunmuyor. Çünkü bu dil, 
            sessiz harfleri birkaç hece ile birleştirip, bu harfleri de yirmi iki karakterden oluşan semboller ile süslüyor. 
            Diğer dillerin atası olma özelliğini de es geçmeyelim. İnsanların hayatta kalmak, gelişmek ve çevrelerindeki dünyaları 
            anlamak için öğrenmelerinin gerektiğini anladıkları yıllardan, o insanların neden öğrenmeye ihtiyaç duyduğunu anlamaya 
            başladığımız yıllara gelmiş bulunmaktayız. Artık öğrenme, hayatta kalabilmenin yanı sıra kişisel ve toplumsal gelişim 
            için de bir yapı taşı olmuş durumda. Peki, sen bu yapı taşını daha iyi bir noktaya nasıl getirebilirsin?
        </p>

        <h2 className="font-bold">2-) Ekmek nasıl alınır?</h2>

        <Image className="py-4" src={img1} alt="Ogrenmek" />

        <p className="mb-4">
            Klasik öğrenme metotlarını bir kenara koyalım ben sana kendi hayatımda kullandığım öğrenme yöntemlerinin birinden bahsetmek 
            istiyorum. Öğrenmenin benim için tek perspektifli bir şey olmadığını göstermek için günlük hayatta sıklıkla yaptığım bir şey 
            ile örnek vererek başlayayım. ‘Fırından veya marketten ekmek almak.’ Bu olayı gerçekleştirebilmek için; Önce paramı kontrol 
            ediyorum, sonrasında gideceğim güzergahı ve ekmek alacağım yeri düşünüp, ekmek alma eylemini adım sırasına koyarak 
            gerçekleştiriyorum. Bana diyebilirsin ki, ben ekmek alırken hiç düşünmedim. Haklısın, daha önce defalarca ekmek aldığın 
            için, artık bu düşünülmeye değmeyecek kadar kolay ve tekrar edilmiş bir deneyim (bilgi) haline geldi ve beyninde bir zihin 
            haritası oluşturmuş oldun. Bazen günlük hayatta yaptığımız şeylerin bile bir öğrenme sonucu ile olduğunu unutabiliyoruz, 
            işte bunların en kolay örneklerinden birisi olan ekmek alma eylemiydi. Peki, senin hayatında buna benzer zihin harita örnekleri 
            var mı?
        </p>

        <h2 className="font-bold">3-) Yerlerin metodu</h2>

        <p className="mb-4">
            Benim en sevdiğim öğrenme yöntemlerinden birisi de günlük hayatta olan şeyleri, öğrenmek istediğim şeyler ile bağdaştırarak 
            üstte bahsettiğim zihin haritama yeni şeyler ekleyerek öğrenmek. Nasıl yaptığıma bir bakalım. Elimizde ‘başlangıç, sandalye, 
            duvar, acı, öfke, çikolata’ kelimeleri olsun. Şimdi bu altı kelimeyi sırasını hiç bozmayacak şekilde altı saniyede öğrenebilir 
            misin ? Eğer benim uyguladığım metot gibi bir yöntemin yoksa altı saniyede öğrenmen pek mümkün değil. Şimdi sana bu kelimeleri 
            nasıl öğrenebildiğimi başlıkta yer alan ve kısaca bahsettiğim metodu kullanarak göstereceğim. Şimdi bu kelimeleri cümleleştirmeyle 
            başlıyorum.
                <p>Başlangıçta yataktan çok zor kalkarak güne başladım.</p>
                <p>Buzdolabından sütü aldım. Sütü tezgaha götürürken dünyanın en sağlam sandalyesine takılıp düştüm.</p>
                <p>Elimdeki süt mutfak duvarlarını mahvetti.</p>
                <p>Yüzümde karşımdaki aynada oluşan acının masum tebessümü vardı.</p>
                <p>Öfke ile yerden kalkarak dolaptan bezi aldım.</p>
                <p>Duvarı silerken çikolata tablomu tekrar görüp ben bunu neden aldım ya diye tekrar düşünmeye başladım.</p>
                <p>Bu kodlamada kırmızılar öğrenmek istediğimiz kelimeler, yeşiller ise kodladığımız mekan ve eşyalar. Bu yaptığımız cümleler aslında bir hikaye yazmak gibi, sadece bu hikayede çok abartı örnekler vererek kelimeleri günlük hayatta yaptığımız şeylerle kodluyoruz. Ama bu yöntemi kullanırken ben en çok kendi belirlediğim iki kurala dikkat ediyorum. Bunlar:</p>
                <p>Kural: Çok iyi bildiğim bir mekan seçmek. Seçtiğim bu mekandaki eşyaların büyük ve akılda kalıcı olması gerekiyor ama bu seçtiğim eşyalarıda yalnız bir kere seçebilme hakkımın olduğunu da unutmayalım (Aynayı kullandım, bir dahaki cümlede kullanmam yasak).</p>
                <p>Kural: Mekan ile kelimeleri eşleştiriyorum ve çok abartı örnekler kurarak akılda daha kalıcı olmasını sağlamaya çalışıyorum (Dünyanın en güçlü sağlam sandalyesi gibi).</p>
        </p>

        <h2 className="font-bold">4-) Sahne ışıkları</h2>

        <p className="mb-4">
            Sana bu öğrettiğim metodu sadece öğrenmek için değil, bir sahnede konuşma yaparken de kullanabilirsin. Mesela bir sahnede konuşma 
            yapacağını düşünelim, o sahnede başlangıçta çok korkarak yürümeye başladın. Hatta çıkarken sabah takıldığın o sandalyelerden çok 
            daha fazlasını görerek tekrar düştün. İnsanlar bu düşüşünü sanki evdeki o ayna gibi acıyla izlediler. Öfke ile sahneye tekrar 
            adımladın. Çikolata gibi olan kahverengi sahnedeydin artık.
                <p>Şimdi sahnedesin haydi başla !..</p>
            İnsanların çoğu bir işin başlangıcında başarısızlıktan korkar. Ama insan o işin sandalyesine oturduğunda ne kadar düşerse düşsün 
            hayatın sadece bu düşüşlerden ibaret olmadığını hatta dört duvar arasında sıkışıp kalmamanın gerektiğini acı çekerek öğrenir. 
            Çekilen bu acılar insanları öfkelendirip daha fazla başarısızlığa itebilir. Ama başarı ve başarısızlık her insanın alabileceği 
            bir çikolata kadar normaldir.
        </p>

        <h2 className="font-bold">5-) Perdenin kapanışı</h2>

        <p className="mb-4">
            Sunum bitti, perdeleri kapatıyoruz. Haydi, şimdi okuduğun bu metne çok dikkatli bak. Atılan başlıkların ilki, zihin haritası 
            oluşturmak gibi anlamsız sembolleri kelimeleştirerek başladı. Diğer başlıkta ise günlük hayatta bu zihin haritasını nasıl 
            oluşturduğumuza baktık ve bunu deneyim haline getirdiğimiz gördük. Sonra bazı kelimeleri seçip o günlük hayatta sürekli tekrar 
            ettiğimiz olaylardan birisine eşleştirme yaptık ve bu eşleştirme ile sahneye çıkıp istediğimiz o kelimeleri ezberlemeden kullanarak 
            bir sunum gerçekleştirdik. Yani bu okuduğun metin bile dikkatli baktığında zihin haritası ile kodlanmış bir işleyişin kağıda 
            dökümü olduğunu anlayabilirsin. İşte bana göre en doğru öğrenme, sadece ezberleyerek değil, yaşamına uyguladığında, 
            sembolleştirebildiğinde olanıdır. Hayatında hep bu sembolleştirmeyi ve sana öğrettiğim bu metodu kullanman dileğiyle.
        </p>

        <h2 className="font-bold">Şirzat Eren Gülşen</h2>
        <h2 className="font-bold">Editör: Gözde Naz Uysal</h2>
    </div>
  </div>

);
};

export default gonullulerdenGelenler1;

