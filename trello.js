function agregarNombrePendiente(){
    var nombrePendiente=document.getElementById("nombrePendiente").value;
    var pendientes = document.createElement("article");
    pendientes.innerHTML=nombrePendiente==''?'(nada)':nombrePendiente;
    document.getElementById("visualizarPendiente").appendChild(pendientes);
    document.getElementById("nombrePendiente").value = "";

}
/*
var texto=document.getElementById("liname").value;
var li=document.createElement("LI");
li.innerHTML=texto==''?'(nada)':texto;//Este texto va a ser un nuevo elemento
document.getElementById("lista").appendChild(li);//Ese nuevo elemento metelo como hijo a mi lista
document.getElementById("liname").value = "";//pa
/*
function crearListas(){
      var nombreListaAAgregar=document.getElementById('nombreLista');
      var nuevaLista=document.createElement("ol");
      nuevaLista.appendChild("li");

      var nuevoNombreLista=document.createElement("section");
          nuevoNombreLista.insertBefore(visualizarListas);
          nuevoNodo.id=Date.now();
          nombreLista.value="";

}*/
