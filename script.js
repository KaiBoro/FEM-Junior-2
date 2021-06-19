////////////////////////////////////
// Slider price / clicks function //
////////////////////////////////////
const slider = document.getElementById("myRange");
const outputPrice = document.getElementById("price");
const outputClicks = document.getElementById("clicks");
const switchDiscount = document.getElementById("switch");

output = [{
    clicks: "10k",
    price: "8"
  },
  {
    clicks: "50k",
    price: "12"
  },
  {
    clicks: "100k",
    price: "16"
  },
  {
    clicks: "500k",
    price: "24"
  },
  {
    clicks: "1M",
    price: "36"
  },
]

// Display the default slider value
outputClicks.innerHTML = output[slider.value].clicks;
outputPrice.innerHTML = output[slider.value].price;

// Switch discount function
function checkDiscount() {
  if (switchDiscount.checked === true) {
    outputPrice.innerHTML = output[slider.value].price * 0.75;
  } else {
    outputPrice.innerHTML = output[slider.value].price;
  }
}

// Update discount
slider.oninput = function() {
  const num = slider.value;

  checkDiscount();

  outputClicks.innerHTML = output[num].clicks;
}

switchDiscount.oninput = function() {
  checkDiscount();
}
