import { FC, useMemo } from "react"
import { IData } from "../data/data";
import { useState } from "react";
import ModalContent from "./modal";
import { createPortal } from "react-dom";
import Basket from "../assets/icons/icons";

interface PropsCard {
    item: IData
}

const CardContext: FC<PropsCard> = ({ item }) => {

    const [open, setOpen] = useState(false)

     let newPrice = useMemo(() => {
         return Math.floor(
             (Number(item.type[0].price)) - 
             ((Number(item.type[0].price)) * (item.type[0].aksiya) / 100)
         );
     }, [item]);
    
    const handlyOpenModal = () => {
        setOpen(true)
    }

    const handlyCancel = () => {
        setOpen(false)
    }

    return ( <>
        <div className="w-80 p-3 bg-zinc-100 rounded-xl m-5">
            <div className="w-72 h-80 rounded-xl">
                <img src={item.img} alt={item.text} className="w-full h-full object-cover rounded-lg"/>
            </div>
            <div className="">
                <p className="mt-3">{item.text}</p>
                <p className="my-3"><del>{item.type[0].price} so'm</del></p>
                <div className="flex items-center justify-between">
                    <p>{newPrice} so'm</p>
                    <button onClick={handlyOpenModal}><Basket/></button>
                </div>
            </div>
        </div>

        {
            open && createPortal(<ModalContent item={item} onCancel={handlyCancel} />, document.body)
        }
    </>
    )
}

export default CardContext;