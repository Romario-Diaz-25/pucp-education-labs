import { IDatabase } from "../../../infrastructure/database/mysql/mysql";
import { StudentDTO } from "../../model/dtos/students/student.dto";
import { IStudentRepository } from "../../model/interfaces/students/student-repository.interface";
import { IStudent } from "../../model/interfaces/students/student.interface";
import { CommonRepository } from "../common/common.repository";
import { StudentSchema } from "./student.schema";

export class StudentsRepository
  extends CommonRepository<IStudent, IStudent, IStudent>
  implements IStudentRepository
{
  constructor(readonly mysql: IDatabase) {
    super({
      db: mysql,
      tableName: "students",
      tableSchema: StudentSchema,
      dto: StudentDTO,
    });
  }
}
