var Negocio;
(function (Negocio) {
    var Tabla = /** @class */ (function () {
        function Tabla() {
        }
        Tabla.MostrarTabla = function () {
            var sexo = Negocio.Utils.$("FiltrarPorSexo").value;
            var listaMasculino;
            var listaFemenino;
            console.log(sexo);
            var tHeaders = Tabla.getValuesofCheckbox();
            if (Negocio.listaClientes.length > 0) {
                Tabla.CrearTabla();
                var tabla = Negocio.Utils.$("TablaBody");
                
                Tabla.CrearCabecera(tHeaders);
                if (sexo == "Male") {
                    
                    listaMasculino = Negocio.listaClientes.filter(function (cliente) {
                        return cliente.sexo == "Male";
                    });
                    listaMasculino.forEach(function (masculino) {
                        Tabla.AgregarElementosATabla(tabla, masculino, tHeaders);
                    });
                }
                else if (sexo == "Female") {
                    
                    listaFemenino = Negocio.listaClientes.filter(function (cliente) {
                        return cliente.sexo == "Female";
                    });
                    listaFemenino.forEach(function (femenino) {
                        Tabla.AgregarElementosATabla(tabla, femenino, tHeaders);
                    });
                }
                else {
                    
                    Negocio.listaClientes.forEach(function (cliente) {
                        Tabla.AgregarElementosATabla(tabla, cliente, tHeaders);
                    });
                }
                tabla.ondblclick = Negocio.Utils.SeleccionarCliente;
            }
        };
        Tabla.CrearTabla = function () {
            var divTabla = Negocio.Utils.$("divTabla");
            while (divTabla.hasChildNodes()) {
                divTabla.removeChild(divTabla.firstElementChild);
            }
            var tabla = Negocio.Utils.CrearNodos("table", null);
            var thead = Negocio.Utils.CrearNodos("thead", null);
            var tbody = Negocio.Utils.CrearNodos("tbody", null);
            tabla.setAttribute("id", "TablaAutos");
            thead.setAttribute("id", "TablaHeader");
            tbody.setAttribute("id", "TablaBody");
            tabla.appendChild(thead);
            tabla.appendChild(tbody);
            divTabla.appendChild(tabla);
        };
        Tabla.getValuesofCheckbox = function () {
            var checkboxes = document.querySelectorAll("input[type=checkbox]");
            var checkedActive = [];
            checkboxes.forEach(function (checkbox) {
                if (checkbox.checked) {
                    checkedActive.push(checkbox.name);
                }
            });
            return checkedActive;
        };
        Tabla.CrearCabecera = function (tHeaders) {
            var tablaHeader = Negocio.Utils.$("TablaHeader");
            var listaDeTH = [];
            
            tHeaders.forEach(function (th) {
                var Header = Negocio.Utils.CrearNodos("th", th);
                listaDeTH.push(Header);
            });
            listaDeTH.forEach(function (th) {
                tablaHeader.appendChild(th);
            });
        };
        Tabla.AgregarElementosATabla = function (tabla, element, headers) {
            var trCliente = document.createElement("tr");
            
            headers.forEach(function (hd) {
                if (element.hasOwnProperty(hd)) {
                    var td = Negocio.Utils.CrearNodos("td", element[hd]);
                    trCliente.appendChild(td);
                }
            });
            tabla.appendChild(trCliente);
        };
        Tabla.EliminarElementoDeLista = function (id) {
            Negocio.listaClientes.forEach(function (cliente) {
                if (cliente.id == id) {
                    var index = Negocio.listaClientes.indexOf(cliente);
                    if (index != -1) {
                        Negocio.listaClientes.splice(index, 1);
                    }
                }
            });
        };
        return Tabla;
    }());
    Negocio.Tabla = Tabla;
})(Negocio || (Negocio = {}));
