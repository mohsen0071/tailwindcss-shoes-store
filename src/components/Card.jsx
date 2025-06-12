const Card = ({ item, onClick }) => {
  return (
    <div
      className={`${item.className} max-w-xl transform cursor-pointer transition hover:scale-105`}
      onClick={() => onClick(item)}
    >
      <div className="p-8">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="mt-10 font-semibold underline underline-offset-4">
          SHOP NOW +
        </div>
      </div>
      <img src={item.src} className="absolute top-5 left-[40%] w-56 h-40" />
    </div>
  );
};

export default Card;
