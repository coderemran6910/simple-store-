
// Product- 1
productCalculationByProductId_PriceId_ProductName("singleProduct", "singleProductPrice" , "productName");

// Product- 2
productCalculationByProductId_PriceId_ProductName("singleProduct2", "singleProductPrice2" , "productName2");

// Product- 3
productCalculationByProductId_PriceId_ProductName("singleProduct3", "singleProductPrice3" , "productName3");

// Product- 4
productCalculationByProductId_PriceId_ProductName("singleProduct4", "singleProductPrice4" , "productName4");

// Product- 5
productCalculationByProductId_PriceId_ProductName("singleProduct5", "singleProductPrice5" , "productName5");

// Product- 6
productCalculationByProductId_PriceId_ProductName("singleProduct6", "singleProductPrice6" , "productName6");



document.getElementById("applyCouponBtn").addEventListener("click", function () {
    const couponInput = document.getElementById("couponInput").value;
    const totalPrice = getElementValueById("totalPrice");
    const discountPriceDisplay = getElementValueById("discountPriceDisplay");

    if (couponInput == "SELL200") {
        const discount = totalPrice * 0.2; 
        setValueById("discountPriceDisplay", discount.toFixed(2));

        const subTotalPrice = totalPrice - discount.toFixed(2);
        setValueById("subTotalDisplay", subTotalPrice.toFixed(2));
    }
})

// goHomeBtn
document.getElementById("goHomeBtn").addEventListener("click", function () {
    window.location.href = "index.html";
})