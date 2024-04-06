import React from 'react'

const Wrapper = (props) => {
    return (
        <section className='w-full max-w-[90rem] mx-auto'>{props.children}</section>
    )
}

export default Wrapper