import { QTY, SIZE } from "../constant";
import Select from "./Select";
import { CiTrash } from "react-icons/ci";

const CardItem = ({ item: { product, qty, size }, onClickTrash }) => {
  const { title, description, src, price } = product;
  return (
    <div className="dark:hover:bg-night-50 dark:bg-transparent cursor-pointer  space-y-2 p-2 bg-gray-50 hover:bg-[#DAFFA2]">
      <div className="flex space-x-2 ">
        <img className="h-24" src={src} alt={title} />
        <div className="space-y-2">
          <div className="font-bold dark:text-white">{title}</div>
          <div className="text-sm text-gray-400">{description}</div>
        </div>
        <div className="font-bold dark:text-white">{price}$</div>
      </div>
      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select value={size} title="" options={SIZE} className={"w-16 p-1 pl-2"} />
          </div>
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select value={qty} title="" options={QTY} className={"w-16 p-1 pl-2"} />
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black dark:text-white" onClick={() => onClickTrash(product.id)}/>
        </button>
      </div>
    </div>
  );
};

export default CardItem;
