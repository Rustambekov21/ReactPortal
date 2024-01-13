import { FC, useState } from 'react'
import { IData } from '../data/data';

interface PropsModal {
    item: IData;
    onCancel: () => void
}
 
const ModalContent: FC<PropsModal> = ({ onCancel, item }) => {
    
    const [id, setId] = useState<number>(0)

    return <div
        className="w-full h-screen fixed top-0 left-0 bg-[#0009]"
        onClick={onCancel}>
        <div
            className='absolute w-1/2 bg-white left-1/2 top-1/2 -translate-x-1/2
            -translate-y-1/2 rounded-xl p-3'
            onClick={e => e.stopPropagation()}>
            <div className='flex gap-2'>
                <div className='w-72 h-96'>
                    <img src={item.type[id].img} alt={item.type[id].color} className='w-full h-full rounded-xl object-contain'/>
                </div>
                <div>
                    <div className='text-end mb-2'>
                        <button onClick={() => onCancel()} className='w-[30px] h-[30px] bg-gray-300 rounded-full'><b>X</b></button>
                    </div>
                    <p className='border-b-2 border-gray-300 border-solid pb-3'>{item.text}</p>
                    <p className='pt-4 pb-3'>Rang: {item.type[id].color}</p>
                    <div className='flex gap-3'>
                        {
                            item.type.map((item) => (
                                <button
                                    className='w-12 h-14 border-2 border-solid  border-gray-300 rounded-lg'
                                    onClick={() => setId(item.id - 1)}
                                    disabled={item.count === 0}>
                                    <img src={item.img} alt={item.color} className='w-full h-full object-contain p-1'/>
                                </button>
                            ))
                        }
                    </div>
                    <div className='flex gap-4 pt-4'>
                        <p>
                            {Math.floor(
                            (Number(item.type[id].price)) - 
                            ((Number(item.type[id].price)) * (item.type[id].aksiya) / 100)
                            )}
                        </p>
                        <p>
                            <del>{item.type[id].price}</del>
                        </p>
                    </div>
                    <p className='text-[yellowgreen] pb-5 pt-4'>Sotuvda {item.type[id].count} ta qoldi</p>
                    <button className='w-full text-white bg-[#166199] rounded-lg border-none cursor-pointer p-2' onClick={() => alert("Savatga qo'shildi")}>Savatga qo'shish</button>
                </div>
            </div>
        </div>
    </div>
}

export default ModalContent;
