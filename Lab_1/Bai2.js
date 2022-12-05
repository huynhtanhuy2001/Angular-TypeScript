var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this.firstName = firstname;
        this.lastName = lastname;
    }
    Person.prototype.print = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstname, lastname, Age, ScoreHTML, scoreCSS, scoreJS) {
        var _this = _super.call(this, firstname, lastname) || this;
        _this.Age = Age;
        _this.ScoreHTML = ScoreHTML;
        _this.scoreCSS = scoreCSS;
        _this.scoreJS = scoreJS;
        return _this;
    }
    Student.prototype.avgScore = function () {
        return (this.ScoreHTML + this.scoreCSS + this.scoreJS) / 3;
    };
    Student.prototype.print = function () {
        return _super.prototype.print.call(this) + " Age = " + this.Age;
    };
    return Student;
}(Person));
var s1 = new Student("Huynh", "Tan Huy", 21, 8, 8, 8);
var str = "";
str += s1.print() + "gia tri trung binh =" + s1.avgScore();
document.body.textContent = str;
