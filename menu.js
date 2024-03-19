fetch('menu.json')

//Que hace esta linea? esta linea indica la carga del archivo menu.json,
//fetch es una funcion de javascript que facilita la realizacion de solicitudes
//de red como tener datos de un archivo o un endpoint de API.
//como funciona? fetch devuelve una promesa que cuando se resuelve, te da accaso
//a la arespuesta de la solicitud . Esta respuesta no es directamente los
//dsatos en formato JSON, si no un objeto de brespuesta que incluye varios
//detalles sobre la respuesta misma.
.then(response => response.json())
//que hace? esta linea toma el objeto de respuesta obtenido del fetch by
//utiliza el metodo.json() tambi8en devuelve una promesa, la cual se
//resuleve con el contenido del cuerpo en formato JSON.

.then(data =>{
    //que hace? aqui se procesan los datos JSON ya convertidos.Se obtiene
    //una referencia el contenedor del menu en el HTML  mediante getElementId
    //('menu-container'),
const menuContainer = document.getElementById('menu-container');
data.items.array.forEach(category => {
    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = category.category;
    menuContainer.appendChild (categoryTitle);

    const table = document.createElement('table');
    //que hace?se crea un elemento table para cada cxategoria.Ademas, se prepara el
    //encabezado(tablehead)con las columnas pertinentes. tableBody se inicializa 
    //vacio y  se llenara con los elementos de la category.
    const tableHead =<tr><th>Foto</th><th>Descripcion</th><th>Precio</th></tr>;
    let tablebody ='';
    //como funciona para cada categoria en los datos, se realizan
    //varios pasos:
    //crear un titulo para las categorias se crea un elemto <h2> para el titulo de la
    //categoria, se establece en su contenido de texto al nombre de la categoria
    //(category.category). y luego se agregan al contenedor menu.
    //crear una tabla para los elementos de esa categoria. primero se define el 
    //encabezado de la tabla (<th>foto</th><th>Descripcion</th><th>Precio</th>).
    
    category.items.forEach (item => {
        tablebody +=`<tr>
            <td><img src= "${item.image}" alt="{item.name}"</td>
            <td>${item.name} - ${item.description}</td>
            <td>${item.price}</td>
        </tr>`
});
    //que hace? para cada item dentro de category.items,se concatena
    //una nueva fila(<tr>) a tableBody. Esta fila contiene una celda para la imagen
    // del elemento (usando el atributo scr para la URL de la imagen y "alt" apar el
    //texto alternativo), otra celda para el nombre y la descripcion del elemento, y una
    //una tercera celda para el precio del elemento.
    table.innerHTML = tableHead + tableBody;
    //que hace? una vez completados todas las filas  de la tabla para los 
    //elementos de u8na categoria , se combina el encabezado , de la tabla
    //tableboard con el cuerpo de la tabla (tablebody) y se establece como
    //el contenido HTML de la tabla. Finalmente, esta tabla se añade
    // al contenedor del menu en la pagina web .
    menuContainer.appendChild(table);
   });
});
//probar la tabla con los elemtos: para cada item dentro de una categoria,
//se crea una fila (<tr></tr>) con tres celdas (<td></td>): una para la imagen
//(con un elemnto <img>), otra para el nombre y descripcion del item, y una
//ultima para el precio. Este se hace concatenando la nueva fila a una
//variable tableBody.
//Finalizar y mostrar la tabla: Una vez que todas las filas han sido agregadas
// a tableBody, se establece elcontenido interno (innerHTML) de la tabla 
//combinando el encabezado con elcuerpo , luego, esta tabla esta completa se
//agrega al contenedor del menu en el documento.
