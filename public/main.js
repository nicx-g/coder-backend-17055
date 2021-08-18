const socket = io.connect("http://localhost:8080", { forceNew: true });

const form = document.querySelector("#form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const thumbnail = document.querySelector("#thumbnail");

let products;

const addProduct = (product) => {
  socket.emit("new-product", product);
};

const showProducts = (products) => {
  let data;
  if (products.length < 1) {
    data = `<div class="alert alert-danger" role="alert">
    No existen productos!
    </div>`;
  } else {
    data = `<div class="container">
    <table class="table table-dark table-striped table-hover">
   <thead>
     <tr>
       <th scope="col">ID</th>
       <th scope="col">Nombre de Producto</th>
       <th scope="col">Precio</th>
       <th scope="col">Foto</th>
     </tr>
   </thead>
   <tbody>
          ${products.map(
            (item) =>
              `<tr>
                  <th scope="row">${item.id}</th>
                  <td>${item.title}</td>
                  <td>${item.price}</td>
                  <td>
                      <img
                          style="object-fit:cover;width: 100%; height: 50px"
                          src='${item.thumbnail}'
                          alt='${item.title}'
                      />
                  </td>
              </tr>`
          )}
   </tbody>
 </table>
 </div>`;
  }
  document.querySelector("#productList").innerHTML = data;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let product = {
    id: products.length + 1,
    title: title.value,
    price: price.value,
    thumbnail: thumbnail.value,
  };
  addProduct(product);
});

socket.on("products", (data) => {
  products = data;
  console.log(data);
  showProducts(data);
});
