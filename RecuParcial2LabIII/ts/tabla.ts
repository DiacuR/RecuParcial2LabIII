namespace Negocio{
    export class Tabla{

        static MostrarTabla(){
            var sexo = Negocio.Utils.$("FiltrarPorSexo").value;
            
            var listaMasculino;
            var listaFemenino;
            var tHeaders = Tabla.getValuesofCheckbox();
            if(Negocio.listaClientes.length > 0){
                Tabla.CrearTabla();
                var tabla = Negocio.Utils.$("TablaBody");
                console.log(tHeaders);
                Tabla.CrearCabecera(tHeaders);
                if (sexo == "Male") {
                    listaMasculino = Negocio.listaClientes.filter(function (cliente) {
                        return cliente.sexo == Sexo.Male;
                    });
                    listaMasculino.forEach(function (masculino) {
                        Tabla.AgregarElementosATabla(tabla, masculino,tHeaders);
                    });
                } else if(sexo == "Female") {
                    listaFemenino = Negocio.listaClientes.filter(function (cliente) {
                        return cliente.sexo == Sexo.Female;
                    });
                    listaFemenino.forEach(function (femenino) {
                        Tabla.AgregarElementosATabla(tabla, femenino,tHeaders);
                    });
                } else {
                    Negocio.listaClientes.forEach(function (cliente) {
                        Tabla.AgregarElementosATabla(tabla, cliente,tHeaders);
                    });
                }

                tabla.ondblclick = Negocio.Utils.SeleccionarCliente;
            }

        }

        static CrearTabla(){
            var divTabla = Negocio.Utils.$("divTabla");
            
            while (divTabla.hasChildNodes()) {
                    
                divTabla.removeChild(divTabla.firstElementChild);
                
            }

            var tabla = Negocio.Utils.CrearNodos("table",null);
            var thead = Negocio.Utils.CrearNodos("thead",null);
            var tbody = Negocio.Utils.CrearNodos("tbody",null);
            tabla.setAttribute("id","TablaAutos");
            thead.setAttribute("id","TablaHeader");
            tbody.setAttribute("id","TablaBody");
            tabla.appendChild(thead);
            tabla.appendChild(tbody);
            divTabla.appendChild(tabla);
        }

        static getValuesofCheckbox(){

            var checkboxes = document.querySelectorAll("input[type=checkbox]");
            let checkedActive = [];
            
            checkboxes.forEach((checkbox) => {
                if(checkbox.checked){
                    checkedActive.push(checkbox.name);
                }
            })
            
            return checkedActive;
        }
        
        static CrearCabecera(tHeaders:string[]):void{
            var tablaHeader = Negocio.Utils.$("TablaHeader");
            var idHeader = Negocio.Utils.CrearNodos("th", "Id");
            var listaDeTH = [];
            listaDeTH.push(idHeader);
            tHeaders.forEach(th => {
                var Header = Negocio.Utils.CrearNodos("th",th);
                listaDeTH.push(Header);
            });
            
            
            tablaHeader.appendChild(idHeader);
            listaDeTH.forEach(th => {
            
                tablaHeader.appendChild(th);
            })
            
        }

        static AgregarElementosATabla(tabla:HTMLElement, element:any,headers:string[]){
            var trCliente = document.createElement("tr");
            var tdId = Negocio.Utils.CrearNodos("td", element.id.toString());
            trCliente.appendChild(tdId);

            headers.forEach(hd => {
                        
                if (element.hasOwnProperty(hd)) {
                    console.log(element[hd]);
                    var td = Negocio.Utils.CrearNodos("td",element[hd])
                    trCliente.appendChild(td);
                }
            
            });
            tabla.appendChild(trCliente);
        }

        static EliminarElementoDeLista(id):void {
            
            Negocio.listaClientes.forEach(cliente => {
                if(cliente.id == id){
                    var index = Negocio.listaClientes.indexOf(cliente);
                    if(index != -1){
                        Negocio.listaClientes.splice(index, 1);
                    }
                }
            });
        }
    }
}