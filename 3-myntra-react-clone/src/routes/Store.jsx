import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import HomeItem from '../components/HomeItem'
import { itemsActions } from '../store/itemsSlice'
import { fetchStatusActions } from '../store/fetchStatusSlice'
import LoadingSpinner from '../components/LoadingSpinner'
import { useLocation } from 'react-router-dom'
import Wrapper from '../components/shared/Wrapper'
import { filtersActions } from '../store/filtersSlice'

const Store = () => {
    const location = useLocation()
    const url = location.pathname
    const items = useSelector(store => store.items)
    const fetchStatus = useSelector(store => store.fetchStatus)
    const dispatch = useDispatch()
    const sizeS = useRef()
    const sizeM = useRef()
    const sizeL = useRef()
    const sizeXL = useRef()
    const sizeXXL = useRef()
    // console.log(fetchStatus)

    useEffect(() => {
        if (fetchStatus.isFetchDone) return;
        // To abort api call when the component dies
        const controller = new AbortController();
        const signal = controller.signal;
        dispatch(fetchStatusActions.markFetchStarted())
        fetch("http://localhost:8080/items", { signal })
            .then(res => res.json())
            .then(({ items }) => {
                dispatch(fetchStatusActions.markFetchDone())
                dispatch(fetchStatusActions.markFetchFinished())
                dispatch(itemsActions.addInitialItems(items[0]))
            })
        return () => {
            controller.abort()
        }
    }, [fetchStatus.isFetchDone])

    const handleSClick = () => {
        console.log("S clicked")
        dispatch(itemsActions.filterItems({size: "S", items: items}))
    }

    const handleMClick = () => {
        console.log("M clicked")
        dispatch(itemsActions.filterItems("M"))
    }

    const handleLClick = () => {
        console.log("L clicked")
        dispatch(itemsActions.filterItems("L"))
    }

    const handleXLClick = () => {
        console.log("XL clicked")
        dispatch(itemsActions.filterItems("XL"))
    }

    const handleXXLClick = () => {
        console.log("XXL clicked")
        dispatch(itemsActions.filterItems("XXL"))
    }

    return (
        <Wrapper>
            <div className='pt-20'>
                {fetchStatus.isFetching
                    ? <LoadingSpinner /> :
                    url === "/store/men" ?
                        <>
                            <h2 className='head2 text-center'>Men Store</h2>
                            <div className="grid grid-cols-5 grid-rows-10 gap-10 mt-6">
                                {items.filter(item => {
                                    if (item.ideal_for) return item
                                }).map(item => (
                                    <HomeItem item={item} key={item.id} />
                                ))
                                }
                            </div>
                        </>
                        : url === "/store/women" ?
                            <>
                                <h2 className='head2 text-center'>Women Store</h2>
                                <div className="grid grid-cols-5 grid-rows-10 gap-10 mt-6">
                                    {items.filter(item => {
                                        if (!item.ideal_for) return item
                                    }).map(item => (
                                        <HomeItem item={item} key={item.id} />
                                    ))
                                    }
                                </div>
                            </> :
                            <>
                                <div className='w-full flex  mt-6'>
                                    <div className='w-1/6 pr-8'>
                                        <h4 className='head4 border-b-[1px] border-gray-300'>Filters</h4>
                                        <label className='mt-4 flex flex-col'>
                                            <span className='text-lg font-mediums'>Size:</span>
                                            <div className='flex gap-2'>
                                                <input type='radio' id='small' name='size' value="S" ref={sizeS} onClick={handleSClick} />
                                                <label htmlFor="small">S</label>
                                            </div>
                                            <div className='flex gap-2'>
                                                <input type='radio' id='medium' name='size' value="M" ref={sizeM} onClick={handleMClick} />
                                                <label htmlFor="medium">M</label>
                                            </div>
                                            <div className='flex gap-2'>
                                                <input type='radio' id='large' name='size' value="L" ref={sizeL} onClick={handleLClick} />
                                                <label htmlFor="large">L</label>
                                            </div>
                                            <div className='flex gap-2'>
                                                <input type='radio' id='xl' name='size' value="XL" ref={sizeXL} onClick={handleXLClick} />
                                                <label htmlFor="xl">XL</label>
                                            </div>
                                            <div className='flex gap-2'>
                                                <input type='radio' id='xxl' name='size' value="XXL" ref={sizeXL} onClick={handleXXLClick} />
                                                <label htmlFor="xxl">XXL</label>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="grid grid-cols-5 grid-rows-10 gap-10 w-5/6">
                                        {items.map(item => (
                                            <HomeItem item={item} key={item.id} />
                                        ))
                                        }
                                    </div>
                                </div>
                            </>}
            </div>
        </Wrapper>
    )
}

export default Store;