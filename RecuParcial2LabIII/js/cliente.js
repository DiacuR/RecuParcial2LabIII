var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Negocio;
(function (Negocio) {
    var Sexo;
    (function (Sexo) {
        Sexo[Sexo["Male"] = 0] = "Male";
        Sexo[Sexo["Female"] = 1] = "Female";
    })(Sexo = Negocio.Sexo || (Negocio.Sexo = {}));
    ;
    var Cliente = /** @class */ (function (_super) {
        __extends(Cliente, _super);
        function Cliente(id, nombre, apellido, edad, sexo) {
            var _this = _super.call(this, id, nombre, apellido) || this;
            _this.edad = edad;
            _this.sexo = sexo;
            return _this;
        }
        return Cliente;
    }(Negocio.Persona));
    Negocio.Cliente = Cliente;
})(Negocio || (Negocio = {}));