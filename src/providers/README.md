# What is this?

folder ini digunakan untuk menyimpan provider untuk mengambil data menggunakan `fetch()` dari API
ini contoh `fetch()` menggunakan async await

```javascript
import BASE_URL = ...

const getSummaryData = async () => {
    try{
        const response = await fetch(`{BASE_URL}...`);
        const responseJson = await response.json();

        return responseJson
    }
    catch(error){
        alert(error)
    }
}
```