import { IExamSchema } from "./interfaces/exams/exam-schema.interface";
import { IExam } from "./interfaces/exams/exam.interface";

export class Exam {
  private id: number;
  private title: string;
  private description: string;
  private maxScore: number;
  private minimumScoreToApprove: number;

  constructor(data: IExam) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.maxScore = data.maxScore;
    this.minimumScoreToApprove = data.minimumScoreToApprove;
  }

  public getId(): number {
    return this.id;
  }
  public getTitle(): string {
    return this.title;
  }
  public getDescription(): string {
    return this.description;
  }
  public getMaxScore(): number {
    return this.maxScore;
  }
  public getMinimumScoreToApprove(): number {
    return this.minimumScoreToApprove;
  }
  public setId(id: number): void {
    this.id = id;
  }
  public setTitle(title: string): void {
    this.title = title;
  }
  public setDescription(description: string): void {
    this.description = description;
  }
  public setMaxScore(maxScore: number): void {
    this.maxScore = maxScore;
  }
  public setMinimumScoreToApprove(minimumScoreToApprove: number): void {
    this.minimumScoreToApprove = minimumScoreToApprove;
  }
  public toJSON(): IExam {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      maxScore: this.maxScore,
      minimumScoreToApprove: this.minimumScoreToApprove,
    };
  }
  public toSchema(): IExamSchema {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      maxScore: this.maxScore,
      minimumScoreToApprove: this.minimumScoreToApprove,
    };
  }
  public static fromJSON(json: IExam): Exam {
    return new Exam(json);
  }
}
