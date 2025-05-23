import { IStudentRepository } from "../../application/model/interfaces/students/student-repository.interface";
import { StudentsRepository } from "../../application/repositories/students/students.repository";
import { IRepositories } from "../../application/model/common/repositories.interfaces";

import { db } from "../database";

export class AppContext implements IRepositories {
  studentRepository: IStudentRepository;
  constructor() {
    this.studentRepository = new StudentsRepository(db);
  }
}
