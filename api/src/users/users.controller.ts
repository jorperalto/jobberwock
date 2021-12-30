import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "src/dto/create-user.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { UsersService } from "./users.service";

@Controller('api/users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(`POST to api/users received.`);
    return await this.usersService.create(createUserDto);
  }

	@UseGuards(JwtAuthGuard)
  @Get()
  async getUser(@Request() req) {
    return await this.usersService.findOne(req.user.userId);
  }
}
