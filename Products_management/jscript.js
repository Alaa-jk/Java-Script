let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let date = document.getElementById('date');
let submit = document.getElementById('submit');



// Function to calculate the total cost of a product
function calculateTotalPrice() {
    if (price.value != '') {
        let sum = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = sum;
        total.style.background = '#090';

    } else {
        total.innerHTML = '';
        total.style.background = '#900';
    }
}
// Function to add new products in the list 
// we need to storage our product into array
let dataSource;
// We need to test if the localStorage empty or not
if (localStorage.product != null) {
    // If it's not empty, then parse and store them into an object
    dataSource = JSON.parse(localStorage.product);
}
else {
    dataSource = [];
}

submit.onclick = function () {
    // Checking for empty fields and adding them into an array
    if ((title.value == '' || price.value == '' || taxes.value == '')) {
        alert("All fields are required!");
    } else {
        let newProduct = {
            title: title.value.toLowerCase(),
            price: price.value,
            taxes: taxes.value,
            ads: ads.value,
            discount: discount.value,
            total: total.innerHTML,
            count: count.value,
            category: category.value,
            date: date.value
        };
        // Adding newProduct as object to the array
        // how to creat many products
        if (newProduct.count > 1) {
            for (let i = 0; i < newProduct.count; i++) {
                dataSource.push(newProduct);
            }
        }
        else {
            dataSource.push(newProduct);
        }
        // save localstorage
        localStorage.setItem('product', JSON.stringify(dataSource));

    }
    clearInputs();
    showProducts();
}

// clear inputs after click
function clearInputs() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
    date.value = '';
}

// Function to display all products from the array
function showProducts() {
    let table = '';
    for (let i = 0; i < dataSource.length; i++) {
        table += `
            <tr>
                <td>${i}</td>
                <td>${dataSource[i].title}</td>
                <td>${dataSource[i].price}</td>
                <td>${dataSource[i].taxes}</td>
                <td>${dataSource[i].ads}</td>
                <td>${dataSource[i].discount}</td>
                <td>${dataSource[i].total}</td>
                <td>${dataSource[i].count}</td>
                <td>${dataSource[i].category}</td>
                <td>${dataSource[i].date}</td>
                <td><button onclick="updateProduct(${i})" id="update">update</button></td>
                <td><button onclick="deleteProduct(${i})" id="delete">delete</button></td>
             </tr>`;
    }
    document.getElementById('tbody').innerHTML = table;
    let btnDeleteAll = document.getElementById('deleteAll');
    if (dataSource.length > 0) {
        btnDeleteAll.innerHTML = `<button onclick="deleteAllProduct()">
        Delete All Products</button>`
    } else {
        btnDeleteAll.innerHTML = ''
    }
}


// show products always
showProducts();
// delete product
function deleteProduct(i) {
    dataSource.splice(i, 1);
    localStorage.product = JSON.stringify(dataSource);
    showProducts();
}
// update product
function updateProduct(i) {
    title.value = dataSource[i].title;
    price.style.display = 'none';
    taxes.value = dataSource[i].taxes;
    ads.value = dataSource[i].ads;
    discount.value = dataSource[i].discount;
    calculateTotalPrice();
    count.value = dataSource[i].count
    category.value = dataSource[i].category;
    date.style.display = 'none';
    submit.innerHTML = 'Update';
    // get values of inputs and assign them to variables
    dataSource.forEach(element => {
        dataSource.splice(i, 1);
    });
    localStorage.product = JSON.stringify(dataSource);
    showProducts();
}
// delete all products
function deleteAllProduct() {
    localStorage.clear();
    dataSource = [];
    showProducts();

}

// which datetype to search
let typeDate = '';
function searchDate(value) {
    typeDate = value.toLowerCase();
}
function searchByTitle() {
    let table = '';
    for (let i = 0; i < dataSource.length; i++) {
        if (dataSource[i].title.includes(typeDate)) {
            table += `
            <tr>
                <td>${i}</td>
                <td>${dataSource[i].title}</td>
                <td>${dataSource[i].price}</td>
                <td>${dataSource[i].taxes}</td>
                <td>${dataSource[i].ads}</td>
                <td>${dataSource[i].discount}</td>
                <td>${dataSource[i].total}</td>
                <td>${dataSource[i].count}</td>
                <td>${dataSource[i].category}</td>
                <td>${dataSource[i].date}</td>
                <td><button onclick="updateProduct(${i})" id="update">update</button></td>
                <td><button onclick="deleteProduct(${i})" id="delete">delete</button></td>
             </tr>`;  
        }
    }
    document.getElementById('tbody').innerHTML = table;

}

function searchByCategory() {
    let table = '';
    for (let i = 0; i < dataSource.length; i++) {
        if (dataSource[i].category.includes(typeDate)) {
            table += `
            <tr>
                <td>${i}</td>
                <td>${dataSource[i].title}</td>
                <td>${dataSource[i].price}</td>
                <td>${dataSource[i].taxes}</td>
                <td>${dataSource[i].ads}</td>
                <td>${dataSource[i].discount}</td>
                <td>${dataSource[i].total}</td>
                <td>${dataSource[i].count}</td>
                <td>${dataSource[i].category}</td>
                <td>${dataSource[i].date}</td>
                <td><button onclick="updateProduct(${i})" id="update">update</button></td>
                <td><button onclick="deleteProduct(${i})" id="delete">delete</button></td>
             </tr>`;
        }
    }
    document.getElementById('tbody').innerHTML = table;

}

function searchByDate() {
    let table = '';
    for (let i = 0; i < dataSource.length; i++) {
        if (dataSource[i].date.includes(typeDate)) {
            table += `
            <tr>
                <td>${i}</td>
                <td>${dataSource[i].title}</td>
                <td>${dataSource[i].price}</td>
                <td>${dataSource[i].taxes}</td>
                <td>${dataSource[i].ads}</td>
                <td>${dataSource[i].discount}</td>
                <td>${dataSource[i].total}</td>
                <td>${dataSource[i].count}</td>
                <td>${dataSource[i].category}</td>
                <td>${dataSource[i].date}</td>
                <td><button onclick="updateProduct(${i})" id="update">update</button></td>
                <td><button onclick="deleteProduct(${i})" id="delete">delete</button></td>
             </tr>`;
        }
    }
    document.getElementById('tbody').innerHTML = table;

}
