const toggleBtn = document.getElementById("toggleBtn")
const toggleSlider = document.getElementById("toggleSlider")

const range = document.getElementById("range")

let curDuration = "month"
const duration = document.getElementById("duration")
const amount = document.getElementById("amount")
const pageviews = document.getElementById("pageviews")

let price = [
  {
    pageviews: "10k",
    price: 8
  },
  {
    pageviews: "50k",
    price: 12
  },
  {
    pageviews: "100k",
    price: 16
  },
  {
    pageviews: "500k",
    price: 24
  },
  {
    pageviews: "1m",
    price: 36
  }
]

function updatePrice() {
  pageviews.innerText = price[range.value].pageviews;

  if (curDuration == "year") {
    amount.innerText = `\$${price[range.value].price*12*0.75}.00`
  }else {
    amount.innerText = `\$${price[range.value].price}.00`
  }
}
range.onchange = updatePrice

toggleBtn.addEventListener('click',event => {
  event.preventDefault()

  if (curDuration == "month") {
    curDuration = "year"
  }else {
    curDuration = "month"
  }
  toggleSlider.className = `toggle-thumb--${curDuration}`
  duration.innerText = ` / ${curDuration}`

  updatePrice()
})
