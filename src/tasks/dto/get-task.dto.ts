import { TaskStaus } from "../task.model";
import { IsEnum, IsOptional, IsString } from "class-validator";
export class GetTaskDTO {
    @IsOptional()
    @IsEnum(TaskStaus)
    status?: TaskStaus;
    @IsOptional()
    @IsString()
    search?: string;
}