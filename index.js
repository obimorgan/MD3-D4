window.onload = () => {
    displayBooks()
}

const displayBooks = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((body) => {
        console.log(body)
        const productContainer = document.querySelector('.product-container')
        productContainer.innerHTML = body.map((image) => 
            `
            <div class="card col-sm-12 col-md-4">
                <img src="${image.img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  
                </div>
                <a href="#" class="btn btn-success">Add to Cart</a>
                <a href="#" class="btn btn-danger skip-btn">Skip</a>
            </div>
            `
        ).join('')
    })
    .then(skipCards)
    .then(addCardsToCart)
    .catch(error => displayErrorMessage(error))
}
const skipCards = () => {
    const skipBtn = document.querySelectorAll('.skip-btn')
    skipBtn.forEach(btn => btn.addEventListener('click', e => {
    const parentCard = e.target.parentElement
    parentCard.classList.add('d-none')
}))
}
const displayBooks2 = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((body) => {
        console.log(body)
        const productContainer = document.querySelector('.product-container')
        productContainer.innerHTML = body.forEach((image) => 
            `
            <div class="card col-sm-12 col-md-4">
                <img src="${image.img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  
                </div>
                <a href="#" class="btn btn-success add-btn">Add to Cart</a>
                <a href="#" class="btn btn-danger skip-btn">Skip</a>
            </div>
            `
        ).join('')
    })
    .then(skipCards2)
    .then(addCardsToCart)
    .catch(error => displayErrorMessage(error))
}
const addCardsToCart = () => {
    const addBtn = document.querySelectorAll('.add-btn')
    const cartContainer = document.querySelector('.cart-container')
    addBtn.forEach(btn => btn.addEventListener('click', e => {
        const parentCard = e.target.parentElement
        parentCard.appendTo(cartContainer)

    }))
}

const skipCards2 = () => {
    const skipBtn = document.querySelectorAll('.skip-btn')
    skipBtn.forEach(btn => btn.addEventListener('click', e => {
        const parentCard = e.target.parentElement
        parentCard.classList.add('d-none')
    }))
}

// const parentCard = e.target.parentElement
// cartContainer.appendChild(parentCard)