function agregarNombrePendiente(){
    var nombrePendiente=document.getElementById("nombrePendiente").value;
    var visualizar=document.getElementById("visualizarPendiente");
    //var contenedor=document.getElementById("contenedorPendientes");
    var preview =document.getElementById("preview");
    var nuevoNodo=preview.cloneNode(true);

    var pendientes = document.createElement("article");
    pendientes.innerHTML=nombrePendiente==''?'(nada)':nombrePendiente;
    document.getElementById("visualizarPendiente").appendChild(pendientes);
    pendientes.style.fontWeight = "900";
    pendientes.style.fontSize="48px";

    document.getElementById("nombrePendiente").value = "";
    document.getElementById("preview").innerText="";

    visualizarPendiente.insertBefore("nuevoNodo,visualizarPendiente.firstChild");

}
function agregarALista(){
  var nuevoPendiente=document.getElementById("nuevoPendienteAgregarALista");
  var texto=document.getElementById("lista");
  var li=document.createElement("LI");
  li.innerHTML=texto==''?'(nada)':texto;//Este texto va a ser un nuevo elemento
  document.getElementById("lista").appendChild(li);//Ese nuevo elemento metelo como hijo a mi lista
  document.getElementById("liname").value = nuevoPendiente;
}

function mostrar(){
  var texto=document.getElementById("nombrePendiente").value;
  document.getElementById("preview").innerHTML=texto;
}

/*
//para clonar
var nuevoPendiente =pendientes.cloneNode(true);
    nuevoPendiente.id=Date.now();

    pendientes.insertBefore("nuevoPendiente,pendientes.firstChild");


function crearListas(){
      var nombreListaAAgregar=document.getElementById('nombreLista');
      var nuevaLista=document.createElement("ol");
      nuevaLista.appendChild("li");

      var nuevoNombreLista=document.createElement("section");
          nuevoNombreLista.insertBefore(visualizarListas);
          nuevoNodo.id=Date.now();
          nombreLista.value="";

}*/
