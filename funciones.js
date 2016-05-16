function loadDOC() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        buscar(xhttp);
        document.getElementById("formP").reset();
    }
  };

  xhttp.open("GET", "almacen.xml", true);
  xhttp.send();
}

function buscar(xml) {
  var docXML = xml.responseXML;
  var i = 0;
  var centinela = 0;
  var raiz = docXML.getElementsByTagName("inventario")[0]; //raiz del documento
  var cantTotal = raiz.getElementsByTagName("productos").length;// cantidad total de productos 
  var cod = document.getElementById("codigo").value; // obtener el codigo ingresado
  var cant = document.getElementById("cantidad").value; // obtener la cantidad ingresada
  var codigo;
  var productos;
  var descripcion;
  var precioUnico;
  var cantidad;
  var precioTotal;
  var precioU;
  var precioT;

  while ((centinela == 0) && (i < cantTotal)) { // busqueda del producto
    productos = raiz.getElementsByTagName("productos")[i];  // realiza la busqueda de producto bajo iteraciones para encontrar el codigo que se busca
    codigo = productos.getElementsByTagName("codigo")[0].firstChild.nodeValue;
          
    if (codigo == cod) { // Si se encuentra el producto
      centinela = 1;
      descripcion = productos.getElementsByTagName("descripcion")[0].firstChild.nodeValue;
      precioUnico = productos.getElementsByTagName("precio")[0].firstChild.nodeValue;
      cantidad = actualCantidad(cant);
      precioTotal = (precioUnico * cantidad);
    }

    i++;

    if (centinela == 1) { // Sii se ha encontrado el producto;
      precioU=parseFloat(precioUnico);
      precioUnico=precioU.toFixed(2);
      precioT=parseFloat(precioTotal);
      precioTotal=precioT.toFixed(2);
      
      Mostrar(cod,descripcion,cantidad,precioU,precioT);
      reflejarMontos(parseFloat(precioTotal));
    }
  }

  if (centinela == 0) { // Si no se encontro el codigo es porque no existe
    alert("El código no existe");
  }
}

function actualCantidad(cant) {
  var cantidad;
  if (cant == "" || cant <= 0) {// Si al pulsar enviar no se ha introducido una cantidad o esta es negativa, se considerará que la cantidad es 1
    cantidad = 1;
  } else { 
    cantidad = cant;
  }
   
  return cantidad;
}

function reflejarMontos(precioTotal) {
   
  aux = document.getElementById("subtotal").innerHTML;  //subtotal que se encuentra en HTML y se suma con el nuevo precio
    
  subtotal = parseFloat(aux)+precioTotal;
    
  document.getElementById('subtotal').innerHTML = subtotal.toFixed(2);  // innerHTML sirve para "escribir" dentro de un elemento HTML
    
  iva = subtotal*0.12;
    
  document.getElementById('iva').innerHTML = iva.toFixed(2); // toFixed es para redondear con dos decimas
    
  total=subtotal+iva;
    
  document.getElementById('total').innerHTML = total.toFixed(2); // actualiza el total
}

function Mostrar(codigo,descripcion,cantidad,precioU,precioT) {
  if (document.getElementById) {
  
    document.getElementById('cod').innerHTML += codigo+"<br>"; // refleja en el html las caracteristicas del producto ingresado
  
      document.getElementById('descrip').innerHTML += descripcion+"<br>";
  
      document.getElementById('cant').innerHTML += cantidad+"<br>";
  
      document.getElementById('precioUnitario').innerHTML += precioU+"<br>";
  
      document.getElementById('precioT').innerHTML += precioT+"<br>";
  }
}

function limpiar() {
  //Se limpia todo
  document.getElementById('cod').innerHTML="";
  document.getElementById('descrip').innerHTML="";
  document.getElementById('cant').innerHTML="";
  document.getElementById('precioUnitario').innerHTML="";
  document.getElementById('precioT').innerHTML="";
  document.getElementById('subtotal').innerHTML="0";
  document.getElementById('iva').innerHTML="0";
  document.getElementById('total').innerHTML="0";
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}