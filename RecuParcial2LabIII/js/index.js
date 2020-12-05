var Negocio;
(function (Negocio) {
    var btnGuardar = Negocio.Utils.$("btnGuardar");
    var btnEliminar = Negocio.Utils.$("btnEliminar");
    var btnBuscar = Negocio.Utils.$("btnBuscar");
    var filtrarSexo = Negocio.Utils.$("FiltrarPorSexo");
    var btnLimpiar = Negocio.Utils.$("btnLimpiar");
    var btnFiltrar = Negocio.Utils.$("filtrar");
    btnGuardar.addEventListener("click", Negocio.Utils.TomarDatos);
    btnEliminar.addEventListener("click", Negocio.Utils.EliminarCliente)
    filtrarSexo.addEventListener("change", Negocio.Tabla.MostrarTabla);
    btnBuscar.addEventListener("click",Negocio.Utils.Promedio);
    btnFiltrar.addEventListener("click",Negocio.Tabla.MostrarTabla);
    btnLimpiar.addEventListener("click", ()=>{
        Negocio.Utils.$("id").value = '';
        Negocio.Utils.$("name").value = '';
        Negocio.Utils.$("lastName").value = '';
        Negocio.Utils.$("age").value = '';
        Negocio.Utils.$("ElegirSexo").value = "---- Elegir ----";
    })
})(Negocio || (Negocio = {}));