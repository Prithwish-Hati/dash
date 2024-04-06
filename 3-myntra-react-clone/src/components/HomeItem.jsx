import { useDispatch } from 'react-redux'
import { bagActions } from '../store/bagSlice.js'
import { useNavigate } from 'react-router-dom'
import { Star } from 'lucide-react';


const HomeItem = ({ item }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(bagActions.addToBag(item.id))
        // navigate("/bag")
    }

    return (
        <div className="rounded-tl-3xl rounded-tr-sm rounded-bl-sm rounded-br-3xl bg-light-orange p-4">
            <img className="w-full rounded-tl-3xl rounded-tr-sm rounded-bl-sm rounded-br-3xl" src={item.image} alt="item image" />
            <div className='-mt-8 ml-2 relative bg-white bg-opacity-60 w-fit px-1 rounded-sm flex items-center justify-center font-semibold gap-1 text-sm'>
                {item.rating.stars} <Star fill='#ff7d00' strokeWidth={0} size={14} /> | {item.rating.count}
            </div>
            <div className="mt-5 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{item.company}</div>
            <div className="text-my-gray text-sm overflow-hidden text-ellipsis whitespace-nowrap">{item.item_name}</div>
            <div className="mt-3 font-sm whitespace-nowrap">
                <span className="font-bold text-sm">Rs. {item.current_price}</span>
                <span className="line-through text-my-gray ml-1 text-xs">Rs. {item.original_price}</span>
                <span className="text-my-red ml-1 text-xs font-semibold">({item.discount_percentage}% OFF)</span>
            </div>
            <button
                className="mt-2 font-semibold text-lg w-full bg-my-orange text-white rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-xl"
                onClick={handleClick}
                >
                Add to Bag
            </button>
        </div>
    )
}

export default HomeItem