import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { runCommand } from 'src/utils/run-command';

@Injectable()
export class DevicesService {
  create(createDeviceDto: CreateDeviceDto) {
    return 'This action adds a new device';
  }

  findAll() {
    try {
      const response = runCommand('listdevices')
      return response
    } catch (error) {
      console.log(error)
    }
  }

  findOne(id: string) {
    try {
      const response = runCommand(`deviceinfo --id ${id}`)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return `This action updates a #${id} device`;
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}
