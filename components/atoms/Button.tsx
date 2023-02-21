import Link from 'next/link';

export default function ButtonHome() {
  const References = [
    {
      label: 'Marcas y tiendas',
      route: '/categories/brands',
    },
    {
      label: 'Artistas y conciertos',
      route: '/categories/artists',
    },
    {
      label: 'Torneos',
      route: '/categories/tournaments',
    },
  ];

  return (
    <ul className="flex flex-row gap-3">
      {References.map(({ label, route }) => (
        <li key={route}>
          <Link href={route}>
            <button className="rounded-full bg-white text-button-gray px-3 py-1 cursor-pointer">
              {label}
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
