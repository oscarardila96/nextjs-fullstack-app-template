import Image from 'next/image';
import Link from 'next/link';
import Logo from '../image/png/icon-logo.png';
import Vector from '../image/svg/Vector.svg';

const links = [
  {
    label: 'Log In',
    route: '/auth/login',
  },
  {
    label: 'Sign In',
    route: '/auth/register',
  },
];

export default function Navbar() {
  return (
    <nav className="bg-gray-900 flex flex-row justify-between items-center py-5 px-6 min-[320px]:p4">
      <h1>
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
      </h1>
      <nav>
        <ul className="flex flex-row justify-between items-center gap-5">
          <li className="text-xs">
            <Link
              href="/event"
              className="text-blue-700 flex flex-row justify-center items-center gap-2"
            >
              <Image
                src={Vector}
                alt="image add event"
                className="text-blue-800"
              />
              Add event
            </Link>
          </li>

          {links.map(({ label, route }) => (
            <li key={route} className="text-white text-xs">
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
}
