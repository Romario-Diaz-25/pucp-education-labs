import { Router } from "express";
import { RouterBase } from "./router-base";
import { StudentController } from "../application/controllers/students.controller";
import { IRepositories } from "../application/model/common/repositories.interfaces";

export class StudentRouter extends RouterBase<StudentController> {
  constructor(context: IRepositories) {
    super(StudentController, context, "students");
  }

  routes(): void {
    this.router
      .route("/")
      .get(this.controller.getStudents.bind(this.controller));
  }
}

export const router = (context: IRepositories): Router =>
  new StudentRouter(context).router;
