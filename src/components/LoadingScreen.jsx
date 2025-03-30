import { useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete(); 
    }, 3000); 

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col items-center justify-center">
     
      <h1 className="text-5xl font-bold text-blue-400 mb-6">Initializing...</h1>

      
      <div className="relative w-[200px] h-[200px] mb-8">
        
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent animate-spin"></div>
        
        <img
          src="https://scontent.fceb8-1.fna.fbcdn.net/v/t39.30808-6/465918685_2853847418125933_656620028390066708_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeELSS5HipNHFPQmLjFWh6qKxrJRmAURCafGslGYBREJp_t-vRyxSJjwsO3D5CMy86S4iDIdnOgQPh7o-z-g1q_J&_nc_ohc=11jgIlSQBwUQ7kNvgFBFZMG&_nc_oc=AdntHIddRMhE3gBzPlOGlJvlQ8d9_3kFSU2Cu9kXbg8Ft9R0wlOLjYNBrISqsaACvoBYs99mj0XXHw4B0WKh4-GI&_nc_zt=23&_nc_ht=scontent.fceb8-1.fna&_nc_gid=dMMrtympZpLZcTdo_nigCQ&oh=00_AYEgMg7qZkX7zYM8T9nkX6TrdTwVsdl_nF8HAAu4hU0QtA&oe=67EEAF66"
          alt="James Pico"
          className="w-full h-full rounded-full border-4 border-gray-800 p-2"
        />
      </div>
    </div>
  );
};