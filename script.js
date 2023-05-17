//Объявляем переменные
const brand_item = document.getElementById("marka").value
const type_item = document.getElementById("product").value
const makeup = []

// перебираем полученный массив и из него создаем новый
function getValue(array) {
    for (let i = 0; i < array.length; i++) {
        makeup[i] = {
            brand: array[i].brand,
            name: array[i].name,
            description: array[i].description,
            image_link: array[i].image_link,
            price: array[i].price,
        }
    }
    console.log(makeup) //выводим новый массив в консоль 
}
// Обновляем переменные данными из форм. Получаем данные из JSON

    const krData = function (brand_item, type_item) { 
     try {
        var brand_item = document.getElementById("marka").value
        var type_item = document.getElementById("product").value
    
        fetch(` http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand_item}&product_type=${type_item}&price_greater_than=10 `,)   
            .then(response => response.json())
            .then(data => getValue(data))
    } 
    catch(err){console.log("File not found")}
}

