export default class Calculadora {

    static sumar(a, b){
        return a + b;
    }

    static restar(a, b){
        return a - b;
    }

    static anchoVentana () {
        return window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
    }

}