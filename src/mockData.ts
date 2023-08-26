export interface Event {
  artist: string;
  description: string;
  img: string;
  price: number;
  title: string;
  type: string;
}

export const events: Event[] = [
  {
    type: 'concert',
    title: "Mochi's Great Adventure",
    price: 16.00,
    img: 'src/assets/img/mochi-wind.jpeg',
    description: 'My dog Mochi runs away on an unexpected adventure',
    artist: 'Mochi'
  },
  {
    type: 'concert',
    title: 'Love Yourself',
    price: 77.77,
    img: 'src/assets/img/bts-ly-concert.jpeg',
    description: 'Theatrical viewing of BTS 2019 World Tour',
    artist: 'BTS'
  },
  {
    type: 'comedy',
    title: 'John Oliver in Boston',
    price: 50.02,
    img: 'src/assets/img/john-oliver.jpeg',
    description: 'Watch John Oliver perform standup in Boston!',
    artist: 'John Oliver'
  },
  {
    type: 'movie',
    title: 'Digimon the Movie',
    price: 12.34,
    img: 'src/assets/img/digimon-movie.jpeg',
    description: 'The prequel story of the hit anime series Digimon!',
    artist: 'Digimon'
  },
  {
    type: 'documentary',
    title: 'Penguins',
    price: 15.98,
    img: 'src/assets/img/penguins.jpeg',
    description: 'Watch these cute penguins do their daily routine',
    artist: 'IDK,NATGEO?'
  }
]