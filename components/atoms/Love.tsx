import Image from 'next/image';
import LoveSvg from './svg-atomic/love.svg';

export default function Love() {
  return (
    <div className="bg-pink-400 w-12 h-12 rounded-t-full rounded-b-full mx-48 relative items-center p-2">
      <button>
        <Image
          className="left-1/4 top-1/4 absolute"
          src={LoveSvg}
          alt="I like button"
        />
      </button>
    </div>
  );
}
