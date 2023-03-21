class Person {
  private firstName: string;
  private lastName: string;
  constructor(firstname: string, lastname: string) {
    this.firstName = firstname;
    this.lastName = lastname;
  }
  print(): string {
    return this.firstName + " " + this.lastName;
  }
}
class Student extends Person {
  private Age: number;
  private ScoreHTML: number;
  private scoreJS: number;
  private scoreCSS: number;
  constructor(
    firstname: string,
    lastname: string,
    Age: number,
    ScoreHTML: number,
    scoreCSS: number,
    scoreJS: number
  ) {
    super(firstname, lastname);
    this.Age = Age;
    this.ScoreHTML = ScoreHTML;
    this.scoreCSS = scoreCSS;
    this.scoreJS = scoreJS;
  }
  avgScore(): number {
    return (this.ScoreHTML + this.scoreCSS + this.scoreJS) / 3;
  }
  print(): string {
    return super.print() + " Age = " + this.Age;
  }
}
let s1 = new Student("Huynh", "Tan Huy", 21, 8, 8, 8);
var str: string = "";
str += s1.print() + "gia tri trung binh =" + s1.avgScore();

document.body.textContent = str;
