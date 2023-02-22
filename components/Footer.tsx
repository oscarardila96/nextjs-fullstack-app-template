import Image from 'next/image';
import ImageFooter from '../image/png/footer.jpg';
import SearchInput from './atoms/Search';

export default function Footer() {
  return (
    <footer>
      <Image
        className="w-full h-96 bg-center bg-no-repeat bg-cover absolute"
        src={ImageFooter}
        alt="image of footer"
      />
      <div className="Footer-btnCenter relative">
        <SearchInput />
      </div>
    </footer>
  );
}
