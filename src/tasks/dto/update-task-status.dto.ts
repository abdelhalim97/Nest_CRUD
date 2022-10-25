import { TaskStaus } from "../task.model";
import { IsEnum } from "class-validator"
export class UpdateTaskStatusDTO {
    @IsEnum(TaskStaus)
    status: TaskStaus
}