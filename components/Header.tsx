import Image from 'next/image';
import PcLogo from '../image/png/frame.png';
import ImageHome from '../image/png/image-bg.png';
import ButtonHome from './atoms/Button';
import SearchInput from './atoms/Search';

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        className="w-full h-96 bg-center bg-no-repeat bg-cover"
        src={ImageHome}
        alt="background image"
      />

      <div className="flex flex-col justify-center items-center gap-10 absolute z-10">
        <div>
          <Image src={PcLogo} alt="Logo Image" className="w-52 h-48" />
        </div>

        <div>
          <SearchInput />
        </div>

        <div className="flex flex-row gap-3">
          <ButtonHome />
        </div>
      </div>
    </div>
  );
}
