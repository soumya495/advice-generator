const btn = document.querySelector('.btn')
const adviceId = document.querySelector('.num')
const adviceText = document.querySelector('.advice-text')
const diceIcon = document.querySelector('.dice-icon')

const displayAdvice = (id, text) => {
  adviceId.textContent = id
  adviceText.textContent = `"${text}"`
}

const fetchData = async () => {
  diceIcon.classList.add('loading-dice')
  try {
    const response = await fetch('https://api.adviceslip.com/advice')
    if (response.ok) {
      const data = await response.json()
      diceIcon.classList.remove('loading-dice')
      displayAdvice(data.slip.id, data.slip.advice)
    }
  } catch {
    diceIcon.classList.remove('loading-dice')
    displayAdvice(000, 'Could Not Load Advice')
  }
}

// for the initial data
fetchData()

btn.addEventListener('click', () => fetchData())
