import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CircleArrowRight, CircleArrowLeft } from 'lucide-react';

import HomeItem from '../components/HomeItem'
import { itemsActions } from '../store/itemsSlice'
import { fetchStatusActions } from '../store/fetchStatusSlice'
import LoadingSpinner from '../components/LoadingSpinner'
import { Link } from 'react-router-dom'
import Wrapper from '../components/shared/Wrapper';

const Home = () => {

    return (
        <>
            <Wrapper>
                <div className='bg-whole bg-cover bg-bottom flex w-full mx-auto p-8 pt-20'>
                    <img src='/images/man-hero.svg ' className='w-[30%] h-fit' />
                    <div className='grow flex flex-col justify-center items-center'>
                        <h1 className='text-8xl font-extrabold text-center'>
                            Fas<span className='text-my-orange'>hion</span>
                            <br />Carni<span className='text-my-orange'>val</span>
                        </h1>
                        <h3 className='text-3xl font-medium mt-4 '>50-80% OFF</h3>

                        <div className='mt-16 flex justify-between w-full'>
                            <Link
                                to="/store/men"
                                className='flex gap-2 text-xl font-semibold items-center'>
                                <CircleArrowLeft color='#ff7d00' size={35} strokeWidth={1.75} />Men
                            </Link>
                            <Link to="/store/women" className='flex gap-2 text-xl font-semibold items-center'>
                                Women<CircleArrowRight color='#ff7d00' size={35} strokeWidth={1.75} />
                            </Link>
                        </div>
                    </div>
                    <img src='/images/woman-hero.svg ' className='w-[30%] h-fit' />
                </div>
            </Wrapper>
        </>

    )
}

export default Home