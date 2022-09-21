const reviewContainer = document.getElementById('review-container')

const reviews = [
    {
        img: "images/rose.jpg",
        alt: "Profile picture of Rose",
        text: "Rose here",
        name: "Rose"
    },
    {
        img: "images/jisoo.jpg",
        alt: "Profile picture of Jisoo",
        text: "Jisoo here",
        name: "Jisoo"
    },
    {
        img: "images/jennie.jpg",
        alt: "Profile picture of Jennie",
        text: "Jennie here",
        name: "Jennie"
    },
    {
        img: "images/lisa.jpg",
        alt: "Profile picture of Lisa",
        text: "Lisa here",
        name: "Lisa"
    }
]

function populateDisplay() {
    reviews.forEach(review => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')

        cardElement.addEventListener('mouseover', showCard)
        cardElement.addEventListener('mouseleave', blurCard)

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')
        const imageElement = document.createElement('img')
        imageElement.setAttribute('src', review.img)
        imageElement.setAttribute('alt', review.alt)
        imageContainer.append(imageElement)

        const paragraphElement = document.createElement('p')
        paragraphElement.textContent = review.text
        const nameContainer = document.createElement('div')
        nameContainer.classList.add('name-container')
        nameContainer.textContent = review.name

        cardElement.append(imageContainer, paragraphElement, nameContainer)

        reviewContainer.append(cardElement)
    })
}
populateDisplay()

function showCard() {
    this.classList.add('active')
}
function blurCard() {
    this.classList.remove('active')
}
