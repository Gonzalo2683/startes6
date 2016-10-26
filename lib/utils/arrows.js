export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return square(x) + square(y);
}

export function printCoord(x, y) {
    console.log('('+x+', '+y+')');
}

export function printCoord2(x, y) {
    console.log(`(${x}, ${y})`);
}

export function UiComponent() {
    var button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        console.log('CLICK');
        console.log(this, 'click');
        this.ejecuta();
    });
}

UiComponent.prototype.ejecuta = function () {
    console.log(this, "ejecuta");
};

export const obj = {
    foo() {
        console.log("ejecutando foo", this);
    },
    bar() {
        this.foo();
    },
};

export class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distancia(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}