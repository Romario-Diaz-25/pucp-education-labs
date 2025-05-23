import { IStudent } from "./interfaces/students/student.interface";

export class Student {
  private id: number;
  private firstName: string;
  private lastName: string;
  private age: number;

  constructor(student: IStudent) {
    this.id = student.id;
    this.firstName = student.firstName;
    this.lastName = student.lastName;
    this.age = student.age;
  }

  public getId(): number {
    return this.id;
  }
  public getFirstName(): string {
    return this.firstName;
  }
  public getLastName(): string {
    return this.lastName;
  }
  public getAge(): number {
    return this.age;
  }
  public setId(id: number): void {
    this.id = id;
  }
  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }
  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }
  public setAge(age: number): void {
    this.age = age;
  }
  public toJSON(): IStudent {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
    };
  }
  public static fromJSON(json: IStudent): Student {
    return new Student(json);
  }
}
