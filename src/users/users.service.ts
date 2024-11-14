import { Injectable } from '@nestjs/common';
import { execSync } from 'child_process'
import { resolve } from 'path'

@Injectable()
export class UsersService {

  async findAll() {

    try {
      const dir = resolve(process.env.MESHCENTER_DIR)
      console.log(dir)
      const response = execSync(`node meshctrl.js  --loginuser ${process.env.MESHCENTER_USERNAME} --loginpass ${process.env.MESHCENTER_PASSWORD} listusers`, { cwd: dir ,encoding:'utf-8' })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

}
