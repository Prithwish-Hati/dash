import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from 'react-redux'

const Bag = () => {
    const items = useSelector(state => state.items)
    const BagItems = useSelector(state => state.bag)
    const finalItems = items.filter(item => BagItems.includes(item.id))
    return (
        <>
            <div className="bag-page">
                <div className="bag-items-container">
                    {finalItems.map(finalItem => (
                        <BagItem item={finalItem} key={finalItem.id}/>
                    ))}
                </div>
                <div className="bag-summary">
                    <BagSummary finalItems={finalItems} />
                </div>
            </div>
        </>
    )
}

export default Bag