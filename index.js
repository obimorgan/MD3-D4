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
                <a href="#" class="btn btn-danger">Skip</a>
            </div>
            `
        ).join('')
    })
}
// const addToCartbtn