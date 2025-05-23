import { IStudent } from "./student.interface";

export interface IStudentRepository {
  create(data: IStudent): Promise<{ insertedId: number }>;
  find(): Promise<IStudent[]>;
  findById(id: number): Promise<IStudent>;
  findOne(params: Partial<IStudent>): Promise<IStudent>;
  update(
    id: number,
    data: Partial<IStudent>
  ): Promise<{ modifiedCount: number }>;
  delete(id: number): Promise<{ deletedCount: number }>;
}
