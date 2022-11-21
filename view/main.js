document.querySelector('#submit-btn').addEventListener ( 'click', e => {
    e.preventDefault()

    //created three variables as name, price and desc
    const name = document.querySelector('#name').value
    const price = document.querySelector('#price').value
    const desc = document.querySelector('#desc').value


        if(name === ' ' || price === ' ' || description === ' '){
            alert('Please enter correct details')
        } else{
        const createdProduct = {
            //define as model in product.js
            name: name,
            price: price,
            description: desc
        }
        console.log(createdProduct)
        const xhr = new XMLHttpRequest()
        const url = 'https://localhost:5500/products'

        xhr.open('POST', url)
        
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.setRequestHeader('Access-Control-Allow-Origin','*')

        xhr.onreadystatechange = () =>{
            //post request: 201, set same
        if(xhr.readyState === 4 && xhr.status === 201){
            console.log(JSON.parse(xhr.responseText) )
        }
    }

    xhr.send(JSON.stringify(Product))
    }
        
} )

