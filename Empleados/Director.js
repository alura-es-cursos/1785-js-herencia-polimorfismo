import {Empleado} from './Empleado.js';

export class Director extends Empleado {
    constructor(nombre,dni,salario) {
        super(nombre,dni,salario);
    }

    verBonificion() {
        const bono = 10;
        return super._verBonificion(bono);
    }
}