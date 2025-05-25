import { IStudentRepository } from "../../application/model/interfaces/students/student-repository.interface";
import { StudentsRepository } from "../../application/repositories/students/students.repository";
import { IRepositories } from "../../application/model/common/repositories.interfaces";

import { db } from "../database";
import { IStudentCourseRepository } from "../../application/model/interfaces/student-courses/student-course-repository.interface";
import { StudentCourseRepository } from "../../application/repositories/student-courses/student-course.repository";
import { ICourseRepository } from "../../application/model/interfaces/courses/course-repository.interface";
import { CourseRepository } from "../../application/repositories/courses/course.repository";

export class AppContext implements IRepositories {
  studentRepository: IStudentRepository;
  studentCourseRepository: IStudentCourseRepository;
  courseRepository: ICourseRepository;
  constructor() {
    this.studentRepository = new StudentsRepository(db);
    this.studentCourseRepository = new StudentCourseRepository(db);
    this.courseRepository = new CourseRepository(db);
  }
}
