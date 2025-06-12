import nike1 from "../assets/n1-min.png";
import { SIZE, QTY } from "../constant";
import Select from "./Select";
import { useState } from "react";

const ShowDetail = ({ shoe, onClickAdd }) => {
  const { title, description, src, price } = shoe;
  const [form, setForm] = useState({ qty: null, size: null });
  return (
    <div className="flex flex-col dark:text-white space-y-4 lg:flex-row-reverse">
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#F637CF] from-5%  via-[#E3D876] via-40% to-[#4CC4C6] to-90%">
          <img className="animate-float" src={src} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">{title}</div>
        <div className="font-medium md:text-xl">{description}</div>
        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">{price} $</div>
          <Select
            title="SIZE"
            options={SIZE}
            value={form.size}
            onChange={(size) => setForm({ ...form, size })}
          />
          <Select
            title="QTY"
            options={QTY}
            value={form.qty}
            onChange={(qty) => setForm({ ...form, qty })}
          />
        </div>

        <div className="space-x-10">
          <button
            onClick={() => onClickAdd(shoe, form.qty, form.size)}
            className="btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white  dark:text-black"
          >
            Add to cart
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
