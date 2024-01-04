import { CiTrash } from "react-icons/ci";
import { QTY, SIZES } from "../constante";
import Select from "./Select";
/* eslint-disable react/prop-types */

const CartItem = ({ items: {product, size, qty}, onClickTrash }) => {
  return (
    <div className="hover:bg-[#DAFFA2] bg-gray-50 space-y-4 p-2 dark:bg-transparent dark:hover:bg-night-50 rounded-sm">
      <div className="flex cursor-pointer   mt-1 hover:rounded space-x -2">
        <img src={product.src} className="h-24" alt="" />
        <div className="space-y-2">
          <div className="font-bold dark:text-white"> {product.title} </div>
          <div className="text-sm text-gray-400"> {product.description} </div>
        </div>
        <div className="font-bold dark:text-white"> {product.price}$ </div>
      </div>

      <div className="flex justify-between pl-32 cursor-pointer">
        <div className="flex space-x-6">
        <div>
          <div className="font-bold dark:text-white">SIZE</div>
          <Select value={size} title="" options={SIZES} className={'w-16 p-1 pl-2'}/>
        </div>
        <div>
          <div className="font-bold dark:text-white">QTY</div>
          <Select value={qty} title="" options={QTY} className={'w-16 p-1 pl-2'}/>
        </div>
        </div>
        <button onClick={() => onClickTrash(product.id)}>
          <CiTrash size={25} className="text-black dark:text-white"/>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
