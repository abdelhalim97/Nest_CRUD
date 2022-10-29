import { Controller, Post, Param, Body } from '@nestjs/common';
import { CreateUserProfile } from 'src/utils/user.types';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
    constructor(private profilesService: ProfilesService) { }
    //realtionship oneToOne
    @Post(':id/profiles')
    async createUserProfile(@Param('id') id: string, @Body() createUserProfile: CreateUserProfile) {
        await this.profilesService.createUserProfile(id, createUserProfile)
    }
}
