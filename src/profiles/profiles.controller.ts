import { Controller, Post, Param, Body } from '@nestjs/common';
import { CreateUserProfile } from 'src/utils/user.types';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
    constructor(private profilesService: ProfilesService) { }
    //realtionship oneToOne

}
