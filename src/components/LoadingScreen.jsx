import { useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete(); 
    }, 3000); 

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 bg-gray-900 flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('https://media1.giphy.com/media/l1J3ThqHNWUVtZV1m/giphy.webp?cid=ecf05e470azkfot0vrc11x9pnd97mcurel4sipl07y9zc6jm&ep=v1_gifs_related&rid=giphy.webp&ct=g')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      

      <div className="relative w-[300px] h-[300px] mb-10">
        <div className="absolute inset-0 rounded-full border-8 border-t-cyan-500 border-r-transparent border-b-cyan-500 border-l-transparent animate-spin"></div>
        <img
          src="https://scontent.filo1-1.fna.fbcdn.net/v/t1.15752-9/486028092_1117515830131271_7495457875870986086_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFcPf1RvN5Yq__OKfY0O6SbZ8q7QXHCIdVnyrtBccIh1cqCzDPUrtwKFOxy9YcKn3c3SdPK0TyH1mK2jxNgzO72&_nc_ohc=xPrn5JivOLEQ7kNvgExQ9SG&_nc_oc=Adm_G_vhivPD_Ht1SPijiPyGo29I7t29s6PhJFANnj1ZwBuH8BNX8W4gWPfqfB14J3I&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.filo1-1.fna&oh=03_Q7cD1wGWf1LQFfnVISVkteLcXT7irqks-2N36EIN3y3tS6fCCQ&oe=6811A275"
          alt="James Pico"
          className="w-full h-full rounded-full border-8 border-gray-800 p-2"
        />
      </div>
    </div>
  );
};