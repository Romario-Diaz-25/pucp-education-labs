import { randomUUID } from "crypto";
import { ICommonRepositoryConfig } from "./interfaces/common-repository-config.interface";
import { ISchemaChecks } from "../../../infrastructure/database/mysql/table-builder/interfaces/schema-checks.interface";
import { AppDate } from "../../../infrastructure/lib/app-date";
import { errorHandler } from "../../../infrastructure/lib/error-handler";
import { lang } from "../../../infrastructure/lib/lang";
import {
  notFoundError,
  notModifiedError,
} from "../../../infrastructure/lib/handler-error";
import { IDatabase } from "../../../infrastructure/database/mysql/mysql";
import { ISchema } from "../../../infrastructure/database/mysql/table-builder/interfaces/schema.interface";

export class CommonRepository<T extends object, U, D> {
  public tableName: string;
  public selectableProps: string[] = [];
  readonly db: IDatabase;
  public dto: new (item: T) => D;
  public cache?: ISchemaChecks;
  private tableSchema: ISchema<T>[];

  constructor({
    db,
    tableName,
    tableSchema,
    dto,
  }: ICommonRepositoryConfig<T, D>) {
    this.db = db;
    this.tableName = tableName;
    this.tableSchema = tableSchema;
    this.dto = dto;
    this.buildSelectableProps();
  }

  buildSelectableProps() {
    for (const column of this.tableSchema) {
      this.selectableProps.push(
        `${this.tableName}.${String(column.columnName)}`
      );
    }
  }

  async create(data: U): Promise<{ insertedId: number }> {
    try {
      const newItem = {
        ...data,
        id: randomUUID(),
        created_at: new AppDate().toMYSQLDatetime(),
      } as any;

      const [insertedId] = await this.db.insert(newItem);

      if (!insertedId)
        throw notModifiedError(
          lang.__("common.error.notModified", {
            value: this.tableName,
          })
        );

      return { insertedId };
    } catch (error) {
      throw errorHandler(error, lang.__("internalServerError"));
    }
  }

  async find(filters?: Partial<T>): Promise<D[]> {
    try {
      const query = this.db.select(this.selectableProps).where({ ...filters });

      const result = await query;

      return result.map((res) => new this.dto(res as any));
    } catch (error) {
      throw errorHandler(error, lang.__("internalServerError"));
    }
  }

  async findById(id: number): Promise<D> {
    try {
      const query = await this.db
        .select(this.selectableProps)
        .where({ id })
        .first();

      if (!query)
        throw notFoundError(
          lang.__("common.error.notFound", { value: this.tableName })
        );

      return new this.dto(query as any);
    } catch (error) {
      throw errorHandler(error, lang.__("internalServerError"));
    }
  }

  async findOne(params: Partial<T>) {
    try {
      const query = await this.db
        .select(this.selectableProps)
        .where({ ...params })
        .first();

      if (!query) throw notFoundError(lang.__("common.error.notFound"));

      return new this.dto(query as any);
    } catch (error) {
      throw errorHandler(error, lang.__("internalServerError"));
    }
  }

  async update(
    id: number,
    data: Partial<T>
  ): Promise<{ modifiedCount: number }> {
    try {
      const updateItem = {
        ...data,
        updDatetime: new AppDate().toMYSQLDatetime(),
      } as any;

      const updateResult = await this.db
        .update(updateItem)
        .where({ id })
        .whereNull("delDatetime");

      if (!updateResult)
        throw notModifiedError(
          lang.__("common.error.notModified", { value: this.tableName })
        );

      return { modifiedCount: updateResult };
    } catch (error) {
      throw errorHandler(error);
    }
  }

  async delete(id: number): Promise<{ deletedCount: number }> {
    try {
      const deleteItem: any = { delDatetime: new AppDate().toMYSQLDatetime() };

      const deleteResult = await this.db.update(deleteItem).where({ id });

      if (!deleteResult)
        throw notModifiedError(
          lang.__("common.error.notModified", { value: this.tableName })
        );

      return { deletedCount: deleteResult };
    } catch (error) {
      throw errorHandler(error, lang.__("internalServerError"));
    }
  }
}
