const btn = document.querySelector('.btn')
const adviceId = document.querySelector('.num')
const adviceText = document.querySelector('.advice-text')
const diceIcon = document.querySelector('.dice-icon')

const skeleton = document.querySelector('.skeleton-body')
const skeletonGreen = document.querySelector('.skeleton-green')

const displayAdvice = (id, text) => {
  adviceId.textContent = id
  adviceText.textContent = `"${text}"`
}

const fetchData = async () => {
  diceIcon.classList.add('loading-dice')
  skeleton.classList.add('show-skeleton')
  skeletonGreen.classList.add('show-skeleton')
  adviceId.classList.add('hide-text')
  adviceText.classList.add('hide-text')
  try {
    const response = await fetch('https://api.adviceslip.com/advice')
    if (response.ok) {
      const data = await response.json()
      diceIcon.classList.remove('loading-dice')
      skeleton.classList.remove('show-skeleton')
      skeletonGreen.classList.remove('show-skeleton')
      adviceId.classList.remove('hide-text')
      adviceText.classList.remove('hide-text')
      displayAdvice(data.slip.id, data.slip.advice)
    }
  } catch {
    diceIcon.classList.remove('loading-dice')
    skeleton.classList.remove('show-skeleton')
    skeletonGreen.classList.remove('show-skeleton')
    adviceId.classList.remove('hide-text')
    adviceText.classList.remove('hide-text')
    displayAdvice(000, 'Could Not Load Advice')
  }
}

// for the initial data
fetchData()

btn.addEventListener('click', () => fetchData())
