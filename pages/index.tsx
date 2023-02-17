import Link from 'next/link';

export default function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/createEvent">+Add event</Link>
          </li>
          <li>
            <Link href="/auth/login">Log In</Link>
          </li>
          <li>
            <Link href="/auth/register">Sign Up</Link>
          </li>
          <li>
            <Link href="/categories/artists">Artist</Link>
          </li>
          <li>
            <Link href="/categories/brands">Brands</Link>
          </li>
          <li>
            <Link href="/categories/tournaments">Tournaments</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
