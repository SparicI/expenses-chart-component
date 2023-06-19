// import data from './data.json' assert {type: 'json'}

const container = document.getElementById("bar-container");
const dayOfWeek = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
  })
const dayOfWeekAbr = dayOfWeek.slice(0, 3).toLocaleLowerCase()

const renderBars = (data) => {
  const barList = data.map((item, index) => {
    return `<div class="bar flex-column justify-content-flex-end">
    <div style="height: ${item.amount}%" class="bar__line ${item.day == dayOfWeekAbr ? 'today' : '' }"></div>
    <span class="bar__tooltip" style="bottom:calc(${item.amount}% + 25px)">$${item.amount}</span>
    <p class="align-self-center color-medium-brown font-size-300">${item.day}</p>
    </div>`
    })

    container.insertAdjacentHTML("afterbegin", barList.join(' ').toString())

}

fetch('data.json').then(response => response.json()).then(renderBars);
