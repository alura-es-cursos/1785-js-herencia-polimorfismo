export class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;    
    #clave;

    constructor(nombreCliente, dniCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = '';
    }

    asignarClave(clave) {
        this.#clave = clave;
    }

    autenticable(clave) {
        return true;
    }
}