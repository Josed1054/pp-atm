import Image from "next/image";

export default function Home() {
  return (
    <div
      aria-label="background"
      className="bg-[#A07FAC] h-screen w-screen flex justify-center"
    >
      <div className="h-full flex flex-col items-center justify-end">
        <div className="flex items-center justify-center px-16 py-4 rounded-md bg-[#136CAE] box-shadow-lg relative">
          <Image
            src="/img/atm/atm_sign.png"
            alt="ATM"
            width={250}
            height={200}
          />
          <Image
            className="absolute top-1/4 right-1/12"
            src="/img/atm/graffiti.png"
            alt="graffiti"
            width={175}
            height={175}
          />
        </div>
        <div className="bg-[#F1F0E7] w-11/12 md:h-2/3 h-4/5"></div>
      </div>
    </div>
  );
}
