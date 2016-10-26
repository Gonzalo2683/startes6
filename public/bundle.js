/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _calculadora = __webpack_require__(298);

	var _calculadora2 = _interopRequireDefault(_calculadora);

	var _arrows = __webpack_require__(299);

	var _Animal = __webpack_require__(300);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var esto = _calculadora2.default.sumar(3, 4); //import 'babel-polyfill';

	console.log(esto);
	console.log(_calculadora2.default.anchoVentana(), "ancho ventana");
	console.log((0, _arrows.diag)(3, 6));
	console.log((0, _arrows.printCoord)(3, 6));
	console.log((0, _arrows.printCoord2)(3, 6));

	_arrows.obj.bar();

	//UiComponent();

	var p1 = new _arrows.Punto(5, 5);
	var p2 = new _arrows.Punto(10, 10);

	console.log(p1);
	console.log(p2);

	console.log(_arrows.Punto.distancia(p1, p2));

	var p = new _Animal.Gato('Mitzie');
	var c = new _Animal.Gato('Gatin', 23);
	p.hablar();
	c.hablar();

/***/ },

/***/ 298:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Calculadora = function () {
	    function Calculadora() {
	        _classCallCheck(this, Calculadora);
	    }

	    _createClass(Calculadora, null, [{
	        key: "sumar",
	        value: function sumar(a, b) {
	            return a + b;
	        }
	    }, {
	        key: "restar",
	        value: function restar(a, b) {
	            return a - b;
	        }
	    }, {
	        key: "anchoVentana",
	        value: function anchoVentana() {
	            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	        }
	    }]);

	    return Calculadora;
	}();

	exports.default = Calculadora;

/***/ },

/***/ 299:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.square = square;
	exports.diag = diag;
	exports.printCoord = printCoord;
	exports.printCoord2 = printCoord2;
	exports.UiComponent = UiComponent;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function square(x) {
	    return x * x;
	}
	function diag(x, y) {
	    return square(x) + square(y);
	}

	function printCoord(x, y) {
	    console.log('(' + x + ', ' + y + ')');
	}

	function printCoord2(x, y) {
	    console.log('(' + x + ', ' + y + ')');
	}

	function UiComponent() {
	    var _this = this;

	    var button = document.getElementById('myButton');
	    button.addEventListener('click', function () {
	        console.log('CLICK');
	        console.log(_this, 'click');
	        _this.ejecuta();
	    });
	}

	UiComponent.prototype.ejecuta = function () {
	    console.log(this, "ejecuta");
	};

	var obj = exports.obj = {
	    foo: function foo() {
	        console.log("ejecutando foo", this);
	    },
	    bar: function bar() {
	        this.foo();
	    }
	};

	var Punto = exports.Punto = function () {
	    function Punto(x, y) {
	        _classCallCheck(this, Punto);

	        this.x = x;
	        this.y = y;
	    }

	    _createClass(Punto, null, [{
	        key: 'distancia',
	        value: function distancia(a, b) {
	            var dx = a.x - b.x;
	            var dy = a.y - b.y;

	            return Math.sqrt(dx * dx + dy * dy);
	        }
	    }]);

	    return Punto;
	}();

/***/ },

/***/ 300:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Animal = exports.Animal = function () {
	    function Animal(nombre) {
	        var edad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "No tiene referencia";

	        _classCallCheck(this, Animal);

	        this.nombre = nombre;
	        this.edad = edad;
	    }

	    _createClass(Animal, [{
	        key: 'hablar',
	        value: function hablar() {
	            console.log(this.nombre + ' hace un ruido.');
	        }
	    }]);

	    return Animal;
	}();

	var Perro = exports.Perro = function (_Animal) {
	    _inherits(Perro, _Animal);

	    function Perro() {
	        _classCallCheck(this, Perro);

	        return _possibleConstructorReturn(this, (Perro.__proto__ || Object.getPrototypeOf(Perro)).apply(this, arguments));
	    }

	    _createClass(Perro, [{
	        key: 'hablar',
	        value: function hablar() {
	            console.log(this.nombre + ' ladra.');
	        }
	    }]);

	    return Perro;
	}(Animal);

	var Gato = exports.Gato = function (_Animal2) {
	    _inherits(Gato, _Animal2);

	    function Gato() {
	        _classCallCheck(this, Gato);

	        return _possibleConstructorReturn(this, (Gato.__proto__ || Object.getPrototypeOf(Gato)).apply(this, arguments));
	    }

	    _createClass(Gato, [{
	        key: 'hablar',
	        value: function hablar() {
	            console.log(this.nombre + ' maulla muchoo. y su edad es ' + this.edad);
	        }
	    }]);

	    return Gato;
	}(Animal);

/***/ }

/******/ });