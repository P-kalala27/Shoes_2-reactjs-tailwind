import Card from "./Card";

// eslint-disable-next-line react/prop-types
export function NewArrivalsSection({ items, onSelecteCard}) {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="dark:text-white bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 justify-between gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {
            // eslint-disable-next-line react/prop-types
            items.map((item) => (
                <Card key={item.id} item={item} onClick={onSelecteCard}/>
            ))
        }
      </div>
    </div>
  );
}