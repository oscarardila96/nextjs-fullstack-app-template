export default function Cards() {
  const Card = [
    {
      id: 1,
      image: './image/',
      title: 'Concierto de Lady Gaga',
      context: 'El concierto con la temática de Lady Gaga en las Vegas.',
      author: 'ladygaga.com',
      voto: "90'800'756",
    },
    {
      id: 2,
      image: './image/',
      title: 'Tienda de ropa femenina...',
      context: 'Tienda de ropa',
      author: 'ladygaga.com',
      voto: "90'800'756",
    },
    {
      id: 3,
      image: './image/',
      title: 'Concierto de BTS',
      context: 'Grupo musical coreano',
      author: 'bts.com',
      voto: "90'800'756",
    },
    {
      id: 4,
      image: './image/',
      title: 'Hotel Selina',
      context:
        'Hotel que te permite hospedarte, trabajar, comer y vivir experiencias auténticas en todo el mundo',
      author: 'selina.com',
      voto: "90'800'756",
    },
    {
      id: 5,
      image: './image/',
      title: 'Marca Ecoalf',
      context:
        'Marca española de prendas y accesorios, elaborando como materia prima, diversos tipos de desechos que se arrojan al mar',
      author: 'ecoalf.com',
      voto: "90'800'756",
    },
  ];

  return (
    <>
      <h1>Cards</h1>
      <div className="h-[454px] w-[299px] flex flex-col justify-center items-center ">
        <div className="h-2/4 w-full flex justify-center items-center bg-black rounded-t-[20px]">
          <img src="" alt="ladygaga" />
        </div>
        <div className="h-2/4 bg-gray rounded-b-[20px] p-[23px] flex flex-col justify-center gap-2 shadow-[0px_2px_4px_0px_#00000024]">
          <h3 className="font-semibold text-xl">Concierto de Lady Gaga</h3>
          <p className="font-medium h-[72px] overflow-hidden text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            dolores saepe quibusdam consequuntur hic!
          </p>
          <p className="font-medium text-blue">ladygaga.com</p>
          <div className="flex items-center">
            <img src="" alt="icon" />
            <p className="font-medium text-sm">90’800’756 votos</p>
          </div>
        </div>
      </div>
    </>
  );
}

// box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
