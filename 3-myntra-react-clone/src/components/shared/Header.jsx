import React from 'react'
import { UserRound, Search, ShoppingBag, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Wrapper from './Wrapper';

const Header = () => {
    const bag = useSelector(state => state.bag)
    // console.log(bag)
    return (
        <header className='w-full fixed bg-white h-20 flex items-center z-50'>
            <Wrapper>
                <div className='flex justify-between items-center'>
                    <nav className='flex gap-10 items-center'>
                        <Link to="/" className='font-black text-3xl'>
                            <span className='border-t-4 border-my-red'>D</span>ash
                        </Link>
                        <div className='flex gap-3 font-medium text-lg'>
                            <Link to="/store/men" className='hover:text-my-orange'>Men</Link>
                            <Link to="/store/women" className='hover:text-my-red'>Women</Link>
                            <Link to="/store" className='hover:text-my-red'>All</Link>
                        </div>
                    </nav>
                    <div className="rounded-full flex bg-light-gray grow mx-10">
                        <input className="grow bg-light-gray px-6 py-2 rounded-full focus:outline-none" placeholder="Search for products, brands and more" />
                        <div className='px-4 flex items-center'>
                            <Search strokeWidth={1.45} color='#282c3f' />
                        </div>
                    </div>
                    <div className="flex gap-3 justify-center font-medium">
                        <div className="flex flex-col items-center justify-center cursor-pointer">
                            <UserRound strokeWidth={1.45} />
                            <span>Profile</span>
                        </div>

                        <div className="flex flex-col items-center justify-center font-medium">
                            <Heart strokeWidth={1.45} />
                            <span>Wishlist</span>
                        </div>

                        <Link to='/bag' className="flex flex-col items-center justify-center font-medium">
                            <span className=" bg-my-red text-center rounded-full text-white font-bold px-1 text-xs -mb-4 -mr-5 relative z-10">{bag.length}</span>
                            <ShoppingBag strokeWidth={1.45} />
                            <span>Bag</span>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </header>
    )
}

export default Header