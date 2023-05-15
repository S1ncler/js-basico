async function llamado() {
  await fetch("http://localhost:3000/api/dbti/getproducts")
    .then((data) => data.json())
    .then(async (response) => {
      for (let element of response) {
        await fetch("http://localhost:3002/productos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(element),
        })
          .then((dato) => dato.text())
          .then((respuesta) => console.log(respuesta))
          .catch((e) => console.log(e));
      }
    })
    .catch((e) => console.log(e));
}
llamado();
