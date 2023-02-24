import ButtonNext from '@/components/atoms/ButtonNext';
import ButtonVote from '@/components/atoms/ButtonVote';
import Love from '@/components/atoms/Love';
import Cards from '@/components/Cards';
import Header from '@/components/Header';

export default function Home() {
  let text: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam nobis excepturi repellendus deserunt laudantium consectetur qui placeat? Maiores quod laborum, voluptatum asperiores earum ut commodi, soluta unde reprehenderit fuga ipsa eos delectus aperiam, quasi suscipit illo. Mollitia ratione alias, provident, debitis reiciendis ipsa accusamus iure minima explicabo et eveniet ducimus quo repellat adipisci quasi exercitationem error, at possimus omnis molestiae quibusdam laborum expedita cum laudantium. Ullam provident ipsa incidunt quam, asperiores consequatur voluptatem sunt non quisquam delectus iure. Alias iste accusamus dolor vero nulla, optio illum quas ad adipisci blanditiis, odit rem distinctio amet. Repudiandae, aliquid dolores. Maiores, quos.';

  return (
    <>
      <Header />
      <h1>Este es el título</h1>
      <Cards />
      <p>{text}</p>
      <p>{text}</p>
      <Love />
      <ButtonNext />
      <ButtonVote />
    </>
  );
}
