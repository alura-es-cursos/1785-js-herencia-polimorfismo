import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta {
    
    constructor(cliente, numero, agencia, saldo) {
        super(cliente,numero,agencia, saldo);
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,2);
    }
}