import React from "react";
import Image from "next/image";
import img0 from "@/res/yazilarimizFotolari/iliskiler.jpg";

type Props = {};

const iliskiler = (props: Props) => {
  return (
    <div className="lg:px-64 pb-12 px-5">
      <div className="py-5">
        <h2 className="text-orange-600 text-5xl sm:text-6xl pb-4">
          Ebeveyn, Öğretmen, Öğrenci İlişkisi
        </h2>
      <p>
        İnsanlar sosyal varlıklardır ve bulunduğu ortamı gözlemleyerek o ortama
        ayak uydurma yetisine sahiptir. Dünya ile bağlantı kurduğumuz ilk yer
        olan anne karnından itibaren gelişimimizde ebeveynlerimize ihtiyaç
        duyarız. İletişim becerilerimiz, karakterimiz, tavırlarımız, öğrenme
        yetimiz ve gelişmeye açık birçok faktör velilerimiz tarafından
        ellerimizden tutularak öğretilir. Sokrates’in dediği gibi, “Çocukların
        ilk ve en etkili öğretmenleri anne ve babalarıdır.” Bu sebeple bireyleri
        dünyaya getiren ebeveynlerin kıymeti büyüktür.
      </p>

      
      <Image className="py-4" src={img0} alt="Ebeveyn, Öğretmen, Öğrenci İlişkisi" />

      <p>
        Toplum olarak öğrenmeye açık ve her daim öğretmeyi seven bir yapıya
        sahibiz. Elbette öğrenip öğreteceğiz, bu şekilde bilgi aktarımını
        sağlayacağız. Hayata hazırlık aşamasında edinen ilk bilgilerin kıymeti
        büyüktür. Neyin ne olduğunu keşfetme becerimizin geliştiği dönemler
        hayata gözlerimizi açtığımız anda başlıyor. O dönemler de
        ebeveynlerimizin ilgi oranı ne kadar fazlaysa bu gelişim daha da
        artıyor.
      </p>

      <p>
        Ebeveynler belli bir yaşa kadar çocuklarının gelişimleriyle ilgilenir
        fakat daha sonra bu görevin büyük çoğunluğu değerli öğretmenler ile
        paylaşılır. Çocuklar evde, yanında ebeveyni olunca kendini güvende
        hissediyorsa okul ortamında öğretmen yanındayken de bu şekilde
        hissetmelidir. Bizler, “okul bizim ikinci evimizdir” öğretisiyle
        eğitimimizi aldık ve büyüdük. Bu sebeple okul yalızca bir eğitim merkezi
        değil, çocukların evi gibi hissettiği bir dünyadır.
      </p>

      <p>
        Bu iki ana faktör (ebeveynler ve öğretmenler) arasında büyüyen çocuğun
        her anlamda sağlıklı bir yaşam sürebilmesi için bilgi akışının tam ve
        doğru şekilde olması gerekmektedir. Burada önemli bir diğer unsur ise;
        çocuğun öğrenmeye ne şekilde açık olup olmadığının bilinmesidir. Yani
        çocuk öğrenmeye ne şekilde yatkın; işitsel mi, dokunsal mı, görsel mi?
        Bunu bulduğumuzda iş daha da kolaylaşır. Mesela işitsel öğrenmeye açık
        ise ebeveyni ile evde okul da ise öğretmeniyle o yönde gelişim
        kazanılır. Okul da herhangi bir ters giden veya evde ters giden bir
        şeyler olduğunda ebeveyn ile öğretmen birbirine destek vererek paylaşım
        yapmalıdır. Nihayetinde hayata bir çocuk, bir öğrenci yetiştiriliyor. O
        sebeple iki ana faktör arasındaki destek önemlidir. Onlar uyumu
        yakalayabilmeli ki sonrasında o destek ve güven çocuğa geçmeli. Ebeveyn,
        öğrenci, öğretmen ilişkisi de bu derece kıymetlidir. Örneğin; bir çiçeği
        daha tohumken yeterli bakımı yaparsak gelişimi de bir o kadar iyi olur.
        O yüzden bizler de bu gelişimsel desteği ebeveynleri ve öğretmenleri
        olarak miniklerimizin ellerinden tutarak verelim çünkü onlar en güzel
        çiçeğin tohumlarıdır.
      </p>

    </div>
  </div>
);
};

export default iliskiler;