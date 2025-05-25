import { ICourseRepository } from "../interfaces/courses/course-repository.interface";
import { IStudentCourseRepository } from "../interfaces/student-courses/student-course-repository.interface";
import { IStudentRepository } from "../interfaces/students/student-repository.interface";

export interface IRepositories {
  studentRepository: IStudentRepository;
  studentCourseRepository: IStudentCourseRepository;
  courseRepository: ICourseRepository;
}
