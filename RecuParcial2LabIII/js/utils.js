var Negocio;
(function (Negocio) {
    Negocio.listaClientes = Array();
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.$ = function (id, setValue) {
            if (setValue === void 0) { setValue = null; }
            var element = document.getElementById(id);
            if (setValue != null) {
                if (element.type == "radio") {
                    element.checked = setValue;
                }
                else {
                    element.value = setValue;
                }
            }
            return element;
        };
        Utils.TomarDatos = function () {
            var tabla = Utils.$("TablaBody");
            var nombre = Utils.$("name").value;
            var apellido = Utils.$("lastName").value;
            var edad = Utils.$("age").value;
            var sexo = Utils.$("ElegirSexo").value;
            var id = Utils.ObtenerID();
            var cliente = new Negocio.Cliente(parseInt(id), nombre, apellido, edad, sexo);
            Negocio.listaClientes.push(cliente);
            Negocio.Tabla.MostrarTabla();
            Utils.Promedio();
        };
        Utils.SeleccionarCliente = function (e) {
            e.target.parentNode.id = "seleccionado";
            var ClienteSeleccionado = e.target.parentNode;
            var id = ClienteSeleccionado.childNodes[0].innerHTML;
            var nombre = ClienteSeleccionado.childNodes[1].innerHTML;
            var apellido = ClienteSeleccionado.childNodes[2].innerHTML;
            var edad = ClienteSeleccionado.childNodes[3].innerHTML;
            var sexo = ClienteSeleccionado.childNodes[4].innerHTML;
            var cliente = new Negocio.Cliente(id, nombre, apellido, edad, sexo);
            Utils.AutoCompletarDiv(cliente);
        };
        Utils.AutoCompletarDiv = function (cliente) {
            Utils.$("id", cliente.id);
            Utils.$("name", cliente.nombre);
            Utils.$("lastName", cliente.apellido);
            Utils.$("age", cliente.edad);
            if (cliente.sexo === "Male") {
                Utils.$("ElegirSexo").value = "Male";
            }
            else {
                Utils.$("ElegirSexo").value = "Female";
            }
            Utils.$("btnEliminar").addEventListener("click", Utils.EliminarCliente);
        };
        Utils.EliminarCliente = function () {
            var tabla = Utils.$("TablaBody");
            var id = Utils.$("id").value;
            
            var trs = document.querySelectorAll("#TablaBody tr");
            trs.forEach(function (tr) {
                
                var td = tr.firstElementChild;
                
                if (td.innerHTML == id) {
                    tabla.removeChild(tr);
                    Negocio.Tabla.EliminarElementoDeLista(id);
                }
            });
            if(Negocio.listaClientes.length == 0){ 
                Negocio.Tabla.CrearTabla();
            }
        };
        Utils.CrearNodos = function (element, value) {
            var nodo = document.createElement(element);
            if (value != null) {
                var texto = document.createTextNode(value);
                nodo.appendChild(texto);
            }
            return nodo;
        };
        Utils.Promedio = function () {
            var sexoFiltrado = Utils.$("FiltrarPorSexo").value;
            console.log(sexoFiltrado);
            var listaFiltrada = Negocio.listaClientes.filter(function (Cliente) {
                if(sexoFiltrado == "Male"){
                    console.log("hola");
                    return Cliente.sexo == "Male";
                }else if(sexoFiltrado == "Female"){
                    return Cliente.sexo == "Female";
                }
                
            });
            var total = listaFiltrada.reduce(function (total, Cliente) {
                return total += parseInt(Cliente.edad);
            }, 0);
            var result = total / listaFiltrada.length;

            Utils.$("txtPromedio", result.toFixed(2));
        };
        Utils.ObtenerID = function () {
            var id = 0;
            if (Negocio.listaClientes.length == 0) { // TODO
                id = 1;
            }
            else {
                /*  var trs = document.querySelectorAll("#TablaBody tr");
                  var ids_1 = [];
                  
                  trs.forEach(function (tr) {
                      var td = tr.firstElementChild;
                      ids_1.push(parseInt(td.innerHTML));
                  });
                  */
                id = Negocio.listaClientes.reduce(function (idDisponible) {
                    return idDisponible + 1;
                }, 1);
            }
            return id.toString();
        };
        return Utils;
    }());
    Negocio.Utils = Utils;
})(Negocio || (Negocio = {}));
