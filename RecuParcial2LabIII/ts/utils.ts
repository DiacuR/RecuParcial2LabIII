namespace Negocio{
    export let listaClientes= Array<Cliente>();
    export class Utils{

        static $(id,setValue = null){
            var element = document.getElementById(id);
        
            if(setValue != null){     
        
                if(element.type == "radio"){
        
                    element.checked = setValue;
                } else {
         
                    element.value = setValue;
                }
            }
        
            return element;
        }

        static TomarDatos(){
            var tabla = Utils.$("TablaBody");
            var nombre = Utils.$("name").value;
            var apellido = Utils.$("lastName").value;
            var edad = Utils.$("age").value;
            var sexo = Utils.$("ElegirSexo").value;
            var id = Utils.ObtenerID(tabla);
            
                
            var cliente = new Negocio.Cliente(parseInt(id), nombre, apellido, edad, sexo);
            listaClientes.push(cliente);
            
            
            Negocio.Tabla.MostrarTabla();
            Utils.Promedio();
        }     
        
        static SeleccionarCliente(e){
            e.target.parentNode.id = "seleccionado";
            var Materiaseleccionada = e.target.parentNode;
            var id = Materiaseleccionada.childNodes[4];
            var nombre = Materiaseleccionada.childNodes[0];
            var apellido = Materiaseleccionada.childNodes[1];
            var edad = Materiaseleccionada.childNodes[2];
            var sexo = Materiaseleccionada.childNodes[3];
    
            let cliente = new Negocio.Cliente(parseInt(id),nombre,apellido,edad,sexo);
    
            AutoCompletarDiv(cliente);
        }

        static AutoCompletarDiv(cliente){
        
            $("id",cliente.id);
            $("name",cliente.nombre);
            $("lastName",cliente.apellido);
            $("age",cliente.edad);
            
            
            if(cliente.sexo === Sexo.Male) {
                
                $("ElegirSexo", "Male");
            } else {
                
                $("ElegirSexo", "Female");
            }
        
            
            $("btnEliminar").addEventListener("click",EliminarCliente);
        }

        static EliminarCliente(){
            var tabla = $("TablaBody");
            var id = $("id");
            var trs = document.querySelectorAll("#TablaBody tr");
                
                
            trs.forEach(function (tr) {
                var td = tr.firstElementChild;
                if(td.innerHTML == id){
                    tabla.removeChild(tr);
                    Negocio.Tabla.EliminarElementoDeLista(id);
                }
            }); 
        }
        static CrearNodos(element:string,value:string | null):any{

            var nodo = document.createElement(element);
            if(value != null){
                var texto = document.createTextNode(value);
                nodo.appendChild(texto);
            }

            return nodo;
        }

        

        static Promedio():void {
            var sexoFiltrado = Utils.$("FiltrarPorSexo").value;
            
            var listaFiltrada = listaClientes.filter((Cliente)=>{
                return Cliente.sexo == sexoFiltrado;
            })
            var total = listaFiltrada.reduce((total,Cliente)=>{

                return total += Cliente.edad;
            },0)
            
            var result = total / listaFiltrada.length; 

            console.log(Utils.$("txtPromedio",result.toFixed(2)));
        }

        static ObtenerID(tabla:HTMLElement):string{

            var id = 0;
            if (Negocio.listaClientes.length == 0) {       // TODO
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

                    return idDisponible+1;
                },1);
            }
            
            return id.toString();
        }
    }
}