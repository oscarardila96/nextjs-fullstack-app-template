import Image from 'next/image';
import SearchSvg from '../atoms/svg-atomic/search.svg';

export default function SearchInput() {
  return (
    <div className="w-[465px] px-6 py-2 rounded-full flex flex-row justify-between bg-white">
      <input
        className="SearchInput w-[465px] border-opacity-0"
        type="search"
        placeholder="¿Qué quieres ver en tu ciudad?"
      />
      <Image
        className="cursor-pointer"
        src={SearchSvg}
        alt="icono search"
        width={20}
        height={20}
      />
    </div>
  );
}
