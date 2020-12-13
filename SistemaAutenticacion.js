export class SistemaAutenticacion {
    static login(usuario,clave) {
        if ("autenticable" in usuario 
            && usuario.autenticable instanceof Function)
            return usuario.autenticable(clave);
        else
            return false;
    }
}