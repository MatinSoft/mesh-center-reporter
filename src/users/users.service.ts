import { Injectable } from '@nestjs/common';
import { runCommand } from 'src/utils/run-command';


@Injectable()
export class UsersService {

  async findAll() {

    try {
      const response = runCommand('listusers')
      return response
    } catch (error) {
      console.log(error)
    }
  }

  findOne(id: string) {
    try {
      const response = runCommand(`userinfo --id ${id}`)
      return response
    } catch (error) {
      console.log(error)
    }
  }

}
