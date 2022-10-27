import { TaskStatus } from "../task.model";
import { IsEnum } from "class-validator"
export class UpdateTaskStatusDTO {
    @IsEnum(TaskStatus)
    status: TaskStatus
}