import { IExam } from "./exam.interface";

export interface IExamRepository {
  create(data: IExam): Promise<{ insertedId: number }>;
  find(): Promise<IExam[]>;
  findById(id: number): Promise<IExam>;
  findOne(params: Partial<IExam>): Promise<IExam>;
  update(id: number, data: Partial<IExam>): Promise<{ modifiedCount: number }>;
  delete(id: number): Promise<{ deletedCount: number }>;
}
