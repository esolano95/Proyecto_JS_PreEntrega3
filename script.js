// alert("Hola, bienvenido a Grace Foods! \n\nSomos una empresa familiar dedicada a la distribución de carnes hasta la puerta de su casa.");

// let persona = {nombre: "", direccion: "", telefono: ""}

// while(persona.nombre == ""){
//     persona.nombre = prompt("Ingrese su nombre, por favor!");
//     console.log(persona.nombre);
// }
// alert("Gracias por comunicarse con nosotros " + persona.nombre + ". 😁")

// let tipoCarne = 0;
// while (tipoCarne === 0) {
//     tipoCarne = Number(prompt("Actualmente contamos con una gran variedad de cortes de carne de Res y de Pollo. \nPor favor, escoja el tipo de carne que desea comprar (1 o 2). \n\n1. Res \n2. Pollo"));

//     if (tipoCarne === 1) {
//         console.log("Res");
//     }else if (tipoCarne === 2) {
//         console.log("Pollo");
//     }else {
//         alert("Opción inválida, inténtalo nuevamente!");
//         tipoCarne = 0;
//     }
// }

// //ARRAY DE RES
// const arrayDeRes = [
//     {
//         id: 1,
//         nombreProduct: 'Bistec',
//         costo: 200,
//     },
//     {
//         id: 2,
//         nombreProduct: 'Costilla',
//         costo: 250,
//     },
//     {
//         id: 3,
//         nombreProduct: 'Carne Molida',
//         costo: 300,
//     },
//     {
//         id: 4,
//         nombreProduct: 'Mano de Piedra',
//         costo: 350,
//     },
//     {
//         id: 5,
//         nombreProduct: 'Carne para Mechar',
//         costo: 400,
//     },
// ];

// //ARRAY DE POLLO
// const arrayDePollo = [
//     { 
//         id: 1,
//         nombreProduct: 'Pechuga Deshuesada',
//         costo: 300
//     },
//     {
//         id: 2,
//         nombreProduct: 'Filete',
//         costo: 350
//     },
//     {
//         id: 3,
//         nombreProduct: 'Muslo',
//         costo: 400
//     },
//     {
//         id: 4,
//         nombreProduct: 'Pechuga',
//         costo: 450
//     },
//     {
//         id: 5,
//         nombreProduct: 'Trozos de Pechuga',
//         costo: 500
//     },
//     {
//         id: 6,
//         nombreProduct: 'Alas',
//         costo: 550
//     },
// ]

// function seleccionProducto(tipoCarne) {
//     let producto = 0;
//     if (tipoCarne === 1) {
//         producto = Number(prompt("Menú de carnes de Res 👇🏻 \n\nPor favor, seleccione un número válido! \n1. Bistec \n2. Costilla \n3. Carne Molida \n4. Mano de Piedra \n5. Carne para Mechar"));
        
//         arrayDeRes;
        
//         const buscarRes = arrayDeRes.find((el) => el.id == producto)
//         let cantidad = obtenerCantidad(buscarRes);
//         obtenerTotal(cantidad, buscarRes);

//     }else if (tipoCarne === 2){
//         producto = Number(prompt("Menú de carnes de Pollo 👇🏻 \n\nPor favor, seleccione un número válido! \n1. Pechuga Deshuesada \n2. Filete \n3. Muslo \n4. Pechuga \n5. Trozos de Pechuga \n6. Alas"));
        
//         arrayDePollo;

//         const buscarPollo = arrayDePollo.find((el) => el.id == producto)
//         let cantidad = obtenerCantidad(buscarPollo);
//         obtenerTotal(cantidad, buscarPollo);

//     }

//     while(persona.direccion == ""){
//         persona.direccion = prompt("Nos gustaria obtener la dirección en la que desea que se realice la entrega. \nPor favor, ingrese su dirección lo más especifica posible! 🗺️");
//         console.log(persona.direccion);
//     }

//     while(persona.telefono == ""){
//         persona.telefono = Number(prompt("Para finalizar, bríndenos un número telefónico! 📲📞"));
//         console.log(persona.telefono);
//     }
//     alert("Gracias por comprar con nosotros " + persona.nombre + "! \n\nSu producto se entregará en la dirección '" + persona.direccion + "'.\nPara contactarnos con usted tenemos el número " + persona.telefono + "." + "\n\nPara nosotros ha sido un placer atenderle. ¡Vuelva pronto! 😁👍🏻");
// }

// function obtenerCantidad(producto) {
//     let cant = Number(prompt("¿Cuántas unidades desea?"));
//     alert("Usted ha escogido " + cant + " unidades de " + producto.nombreProduct + ". \n\nTome en cuenta que el costo de nuestros productos NO incluyen el IVA (13%).");
//     return cant;
// }

// function obtenerTotal(cant, product) {
//     const iva = 0.13;
//     let subTotal = product.costo * cant;
//     let subTotalNeto = subTotal * iva;
//     let total = subTotal + subTotalNeto;
//     alert("Costo de " + product.nombreProduct + ": ¢" + product.costo + "\nCosto por cantidad: ¢" + subTotal + " \nCosto total con IVA: ¢" + total);
// }

// seleccionProducto(tipoCarne);