import React from "react";

const Summary = (
    { divClassName, spanClassName, h1ClassName, 
        pClassName, id, h1Child, pChild }) => {
    const orderQty = 123456789;
    const produceQty = 123456987;
    const salesQty = 123456123;
    const returnQty = 123456321;
    return (
        <>
            <div
                className={
                    `col-12 col-lg-6 col-xxl-3 text-center border-end-md p-2 
                    border-bottom-md 
                    border-bottom-xxl-0 border-end-xxl-0`}>
                <span className={
                    `uil fs-3 lh-1 uil-download-alt text-primary`} />
                <h5 className={`pt-3 text-break`}>
                    {orderQty.toLocaleString()}
                </h5>
                <p className={`fs--1 mb-0`}>부품 주문량</p>
            </div>
            <div
                className={
                    `col-12 col-lg-6 col-xxl-3 text-center border-end-md p-2 
                    border-start-xxl border-bottom-md 
                    border-bottom-xxl-0 border-end-md-0`}>
                <span className={`uil fs-3 lh-1 uil-upload text-info`} />
                <h5 className={`pt-3 text-break`}>
                    {produceQty.toLocaleString()}
                </h5>
                <p className={`fs--1 mb-0`}>제품 생산량</p>
            </div>
            <div
                className={
                    `col-12 col-lg-6 col-xxl-3 text-center border-end-md p-2 
                    border-start-xxl border-end-xxl-0`}>
                <span className={
                    `uil fs-3 lh-1 uil-money-bill-stack text-primary`} />
                <h5 className={`pt-3 text-break`}>
                    {salesQty.toLocaleString()}
                </h5>
                <p className={`fs--1 mb-0`}>제품 판매량</p>
            </div>
            <div
                className={
                    `col-12 col-lg-6 col-xxl-3 text-center border-end-md p-2 
                    border-start-xxl border-end-md-0`}>
                <span className={
                    `uil fs-3 lh-1 uil-usd-circle text-danger`} />
                <h5 className={`pt-3 text-break`}>
                    {returnQty.toLocaleString()}
                </h5>
                <p className={`fs--1 mb-0`}>제품 반품량</p>
            </div>
        </>
    );
}

export default Summary;