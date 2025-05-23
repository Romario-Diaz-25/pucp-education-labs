import { IRepositories } from "../model/common/repositories.interfaces";
import { Controller } from "../../infrastructure/interceptors/controller.decorator";
import { StudentService } from "../services/students.service";

@Controller
export class StudentController {
  private studentService: StudentService;

  constructor(context: IRepositories) {
    this.studentService = new StudentService(context);
  }

  async getStudents() {
    try {
      const result = await this.studentService.getStudents();
      return result;
    } catch (error) {
      return error;
    }
  }
}
