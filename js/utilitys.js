
function getElementValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.innerText;
    return inputValue;
}

function setValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function productCalculationByProductId_PriceId_ProductName(productId, productPriceId, nameId){
    document.getElementById(productId).addEventListener("click", function () {
        
        const productPriceStr = getElementValueById(productPriceId);
        const productPrice = parseFloat(productPriceStr);     

        // const couponInput = document.getElementById("couponInput").value;
        const applyCouponBtn = document.getElementById("applyCouponBtn");
        const makePurchase = document.getElementById("makePurchase");
    
    
        const productName = getElementValueById(nameId);
        let productDisplayElement = document.getElementById("selectedProductsName");
        const p = document.createElement("p")
        const count= productDisplayElement.childElementCount ;
        p.innerHTML =`<span>${count+1}.  ${productName}</span> `
        productDisplayElement.appendChild(p);
    
       


        const totalPriceStr = getElementValueById("totalPrice");
        const totalPrice = parseFloat(totalPriceStr);
        const total = productPrice + totalPrice;
        
        if (total > 0) {
            makePurchase.disabled = false
        }

        setValueById("totalPrice",total.toFixed(2));
        if (total >= 200) {
            applyCouponBtn.disabled = false
         }
        
    })
}

