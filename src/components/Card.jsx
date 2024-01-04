/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const Card = ({item, onClick}) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={`${item.className} max-w-xl transform  transition hover:scale-105 cursor-pointer `}
    onClick={()=>{onClick(item)}}
    >
        <div className="p-8">
            <div className="text-2xl font-bold"> {item.title} </div>
            <div className="mt-8 font-semibold underline underline-offset-4"><a href="">SHOP NOW +</a></div>
        </div>
        <img src={item.src} className=" absolute top-5 left-[50%] w-56 h-40" alt="" />
    </div>
  )
}

export default Card