let image = document.querySelectorAll(".image");
let description = document.querySelector(".description");
let button = document.querySelector("button");
let content = document.querySelector(".content");
let inputtext = document.querySelector(".input-text");
let head = document.querySelector(".head");

// Array containing details of different products
let details = [
  {
    name: "itel A60s",
    RAM: "(4GB RAM + 64GB ROM)",
    Battery: "5000mAh Battery with 10W Charging",
    price: "20000 rupees",
  },

  {
    name: " Samsung Galaxy S23 FE 5G",
    RAM: "(8GB RAM + 128GB ROM)",
    Battery: "7000mAh Battery with 10W Charging",
    price: "28000 rupees",
  },

  {
    name: "Samsung Galaxy M14 5G",
    RAM: "(ICY Silver,6GB,128GB)",
    Battery:
      "6000mAh lithium-ion battery, 1 year manufacturer warranty for device",
    price: "54000 rupees",
  },

  {
    name: "realme narzo 60X 5G",
    RAM: "(Nebula Purple 6GB,128GB Storage)",
    Battery:
      "With a 33 W Powerful SUPERVOOC Charge, 30 minutes charge for 50% battery and full charge in 70 minutes,5000mAh massive battery, ",
    price: "88500 rupees",
  },

  {
    name: "Apple 2022 iPad Air M1 Chip",
    RAM: "(64GB)",
    Battery: "8000mAH Battery with 12W charger",
    price: "67800 rupees",
  },
  {
    name: "Apple iPhone 15 Pro Max (1 TB) - Blue Titanium",
    RAM: " (512 GB) - Natural Titanium",
    Battery: "6000mAH",
    price: "1,99,900 rupees",
  },
  {
    name: "OPPO A18",
    RAM: "(Glowing Black, 4GB RAM, 64GB Storage)",
    Battery: "5000mAH",
    price: "22500 rupees",
  },
];

// Array containing image sources for the products

let imagesarray = [
  "1.jpg",
  "2.webp",
  "4.webp",
  "5.webp",
  "8.webp",
  "7.webp",
  "6.webp",
];

image.forEach(function (img, ind) {
  img.addEventListener("click", function () {
    content.classList.add("see");
    head.classList.add("remove");
    button.style.display = "block";
    content.innerHTML = `
    <img src='${imagesarray[ind]}'>
    <h4>${details[ind].name} ${details[ind].RAM} <br> ${details[ind].Battery} <br> ${details[ind].price}</h4>
  `;
  });
});

// Add a click event listener to the 'button' element
button.addEventListener("click", function () {
  alert("Added to cart");
});
