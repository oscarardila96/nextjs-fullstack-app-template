import Image from 'next/image';
import PcLogo from '../image/png/frame.png';

export default function Header() {
  return (
    <>
      <header className="w-full h-[488px] headerImage flex justify-center items-center">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div>
            <Image src={PcLogo} alt="Logo Image" className="relative" />
          </div>
          <div>
            <div className="flex flex-col justify-center items-center mb-3">
              <input
                type="search"
                placeholder="¿Qué quieres ver en tu ciudad?"
                className="w-[465px] px-6 py-2 rounded-full"
              />
            </div>
            <div className="flex justify-center items-center gap-3">
              <button className="rounded-full bg-white text-button-gray px-3 py-1">
                Marcas y Tiendas
              </button>
              <button className="rounded-full bg-white text-button-gray px-3 py-1">
                Artistas y Conciertos
              </button>
              <button className="rounded-full bg-white text-button-gray px-3 py-1">
                Torneos
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
