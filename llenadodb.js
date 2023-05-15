fetch("http://localhost:3000/api/dbti/getproducts")
    .then(data => data.json())
    .then(async response => {
        console.log(response[0]);
        const url = "localhost:3002/productos";
        const data = {
            id: 0,
            name: 'AMD Ryzen 5 5600X',
            marca: 'AMD',
            descripcion: 'AMD Ryzen 5 5600X 6 cores Clock 3.7 GHz 12 Threads Turbo 4.6 GHz',
            price: 167.98,
            image: [ 'https://m.media-amazon.com/images/I/41C9K91sLhL._SL500_.jpg' ],
            categoria: 'procesadores',
            stock: 10
          };
        await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data),
        })
            .then(dato => dato.text())
            .then(respuesta => console.log(respuesta))
            .catch(e => console.log(e));
    })
    .catch(e => console.log(e));






