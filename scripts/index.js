const products = document.querySelectorAll(".products");
let count = 0;
let total = 0;
for (let product of products) {
  product.addEventListener("click", function (e) {
    const wishList = product.childNodes[5].innerText;
    const cartList = document.getElementById("cartList");
    count += 1;
    const p = document.createElement("p");
    p.innerText = `${count}. ${wishList}`;
    cartList.appendChild(p);
    const price = parseFloat(product.childNodes[7].innerText.split(" ")[0]);
    total = parseFloat(total) + parseFloat(price);
    totalPrice.innerText = total;
    const purchaseBtn = document.getElementById("purchaseBtn");
    if (total > 0) {
      purchaseBtn.removeAttribute("disabled");
    } else {
      purchaseBtn.setAttribute("disabled", true);
    }
    const applyBtn = document.getElementById("applyBtn");
    if (total >= 200) {
      applyBtn.removeAttribute("disabled");
    } else {
      applyBtn.setAttribute("disabled", true);
    }
  });
}

const applyBtn = document.getElementById("applyBtn");
applyBtn.addEventListener("click", function () {
  const coupon = document.getElementById("coupon");
  const couponValue = coupon.value;
  console.log(couponValue);
  const discount = document.getElementById("discount");
  const discountValue = parseFloat(discount.innerText);
  console.log(discountValue);
  const totalPrice = document.getElementById('totalPrice');
  const totalPriceValue = parseFloat(totalPrice.innerText)
  console.log(totalPriceValue);
  const afterTotal = document.getElementById('afterTotal')
  const afterTotalValue = parseFloat(afterTotal.innerText);
  console.log(afterTotalValue);

  if(couponValue == 'SELL200'){
    const discountPrice = 0.2 * parseFloat(totalPriceValue);
    discount.innerText = discountPrice.toFixed(2);
    const finalPrice = totalPriceValue - discountPrice;
    afterTotal.innerText = finalPrice.toFixed(2);

  }
  else{
    alert('Invalid Cupon')
  }

 
 
 
  // if (couponValue == "SELL200") {
  //   const discountPrice = 0.2 * parseFloat(totalPrice);
  //   discount.innerText = discountPrice.toFixed(2);
  //   const finalPrice = totalPrice - discountPrice;
  //   afterTotalsrt.innerText = finalPrice.toFixed(2);
  // }
});

document.getElementById("homeBtn").addEventListener("click", function () {
  // alert('clicked');
  window.location.href = "index.html";
});
