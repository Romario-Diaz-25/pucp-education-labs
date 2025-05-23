import { IRepositories } from "../model/common/repositories.interfaces";
import { IStudentRepository } from "../model/interfaces/students/student-repository.interface";

export class StudentService {
  private repository: IStudentRepository;
  constructor(context: IRepositories) {
    this.repository = context.studentRepository;
  }

  async getStudents() {
    try {
      const result = await this.repository.find();
      return result;
    } catch (error) {
      return error;
    }
  }
}
