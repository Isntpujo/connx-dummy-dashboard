import Card from '../components/fragments/card-ticket';
import Counter from '../components/fragments/counter';

const products = [
  {
    id: 1,
    image: '/images/img-card-event-karaoke.jpg',
    nameTicket: 'OTW Karaoke',
    sold: 2.564,
  },
  {
    id: 2,
    image: '/images/img-card-event-culinary.jpg',
    nameTicket: 'OTW Culinary',
    sold: 7.345,
  },
  {
    id: 3,
    image: '/images/img-card-event-festival.jpg',
    nameTicket: 'OTW Festival',
    sold: 15.713,
  },
];

const ProductPage = () => {
  return (
    <div className="flex gap-4 justify-center items-center h-dvh px-4 bg-zinc-900 text-white">
      {products.map((product) => (
        <Card key={product.id}>
          <Card.Header />
          {/* <Card.Image image={product.image} /> */}
          <Card.Ticket name={product.nameTicket} sold={product.sold} />
        </Card>
      ))}
      <Counter></Counter>
    </div>
  );
};

export default ProductPage;
