import Image from "next/image";
import f0 from "@/res/faaliyetler/0.jpeg";
import f1 from "@/res/faaliyetler/1.jpeg";
import f2 from "@/res/faaliyetler/2.jpeg";
import f3 from "@/res/faaliyetler/3.jpeg";
import f4 from "@/res/faaliyetler/4.jpeg";
import f5 from "@/res/faaliyetler/5.jpeg";

type Props = {};

const Faaliyetlerimiz = (props: Props) => {
  return (
    <div className="min-h-screen p-8 bg-base-200 lg:px-64">
      <div className="text-5xl sm:text-6xl text-orange-600 text-center pb-8">
        Faaliyetlerimiz
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Image src={f0} alt="faaliyet gorseli" className="shadow-md" />
        <Image src={f1} alt="faaliyet gorseli" className="shadow-md" />
        <Image src={f2} alt="faaliyet gorseli" className="shadow-md" />
        <Image src={f3} alt="faaliyet gorseli" className="shadow-md" />
        <Image src={f4} alt="faaliyet gorseli" className="shadow-md" />
        <Image src={f5} alt="faaliyet gorseli" className="shadow-md" />
      </div>
    </div>
  );
};

export default Faaliyetlerimiz;
