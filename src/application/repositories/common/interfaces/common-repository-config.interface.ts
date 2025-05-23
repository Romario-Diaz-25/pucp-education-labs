import { ISchema } from "../../../../infrastructure/database/mysql/table-builder/interfaces/schema.interface";
import { IDatabase } from "../../../../infrastructure/database/mysql/mysql";

export interface ICommonRepositoryConfig<T, D> {
  db: IDatabase;
  tableName: string;
  tableSchema: ISchema<T>[];
  dto: new (item: T) => D;
}
