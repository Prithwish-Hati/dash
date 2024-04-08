import React from 'react'

const BagSummary = ({ finalItems }) => {

    const CONVENIENCE_FEES = 99;

    const totalItem = finalItems.length || 0;
    let totalMRP = 0;
    let totalDiscount = 0;

    finalItems.forEach(item => {
        totalMRP += item.original_price;
        totalDiscount += item.original_price - item.current_price;
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    return (
        <>
            <div className="bag-details-container">
                <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">₹{totalMRP}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">{CONVENIENCE_FEES}</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">₹{finalPayment}</span>
                </div>
            </div>
            <button className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>
        </>
    )
}

export default BagSummary