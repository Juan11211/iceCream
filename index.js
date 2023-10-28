"use strict";

window.onload = function () {
    // submit order button
    let submitOrderBtn = document.getElementById("submitOrderBtn");
    submitOrderBtn.onclick = submitOrderBtnClicked;

    // assign cone radio btn to showTopping function
    let coneSelected = document.getElementById("cone");
    coneSelected.onchange = showTopping;

    // cup to showTopping
    let cupSelected = document.getElementById("cup");
    cupSelected.onchange = showTopping;

    // Initially hide the topping card
    let toppingCard = document.getElementById("toppingCard");
    toppingCard.style.display = "none";
}


function submitOrderBtnClicked(event) {
    event.preventDefault();
    
    // Define your variables
    let numberOfScoops = Number(document.getElementById("numberOfScoops").value);
    let basePay = 2.95;
    let extraScoop = 1.25;

    let selectedOptions = document.querySelectorAll("input[name='addToppings']:checked");
    let extraTopping = 0; // Initialize topping cost

    for (let i = 0; i < selectedOptions.length; i++) {
        let selectedOption = selectedOptions[i];
        if (selectedOption.value == "sprinkles") {
            extraTopping += 0.50;
        } else if (selectedOption.value == "cherry") {
            extraTopping += 0.25;
        } else if (selectedOption.value == "hotFudge") {
            extraTopping += 1.25;
        } else {
            extraTopping += 0.25;
        }
    }

    let taxRate = 0.082; // Tax rate is 8.2% (not 6.2%)

    // Calculate the total price without tax
    let totalPriceWithoutTax;

    if (numberOfScoops > 1) {
        totalPriceWithoutTax = basePay + (extraScoop * (numberOfScoops - 1)) + extraTopping;
    } else {
        totalPriceWithoutTax = basePay + extraTopping;
    }

    // Calculate the tax amount
    let taxAmount = totalPriceWithoutTax * taxRate;

    // Calculate the total amount due
    let totalAmount = totalPriceWithoutTax + taxAmount;

    // Update the totalDue element
    let totalDue = document.getElementById("totalDue");
    totalDue.innerHTML = `Total Due $: ${totalAmount.toFixed(2)}`;

    // Clear the toppings selection, but leave "Cone" or "Cup" selection intact
    let toppingCheckboxes = document.querySelectorAll("input[name='addToppings']");
    toppingCheckboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    // Update the basePriceValue element
    let basePriceValue = document.getElementById("basePriceValue");
    basePriceValue.innerHTML = `Base price $: ${totalPriceWithoutTax.toFixed(2)}`;

    // Update the taxPrice element with the tax amount
    let taxPrice = document.getElementById("taxPrice");
    taxPrice.innerHTML = `Tax $: ${taxAmount.toFixed(2)}`;
}




// display topping div when cup selected
function showTopping() {
    let coneSelected = document.getElementById("cone");
    let cupSelected = document.getElementById("cup");
    let toppingCard = document.getElementById("toppingCard");

    if (cupSelected.checked) {
        toppingCard.style.display = "block";
    } else if (coneSelected.checked) {
        toppingCard.style.display = "none";
    }
}




    // selectedToppings.forEach(function (selectedOption) {
    //     if (selectedOption.value == "sprinkles") {
    //         extraTopping += 0.50;
    //     } else if (selectedOption.value == "cherry") {
    //         extraTopping += 0.25;
    //     } else if (selectedOption.value == "hotFudge") {
    //         extraTopping += 1.25;
    //     } else {
    //         extraTopping += 0.25;
    //     }
    // });