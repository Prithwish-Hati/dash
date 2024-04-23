import { shoppingCategories } from '../constants'
import Wrapper from './shared/Wrapper'

const Categories = () => {
    return (
        <Wrapper>
            <h2 className='head2 text-center my-10'>Shop By Category</h2>
            {/* TODO: Make Categories fetch from backend */}
            {shoppingCategories.map(category => (
                <div className='' key={category.id}>
                    <img src={category.image} alt='category-image' />
                    <h5>{category.name}</h5>
                    <p>{category.discount}</p>
                </div>
            ))}
            <div>
                <div>

                </div>
            </div>

        </Wrapper>
    )
}

export default Categories