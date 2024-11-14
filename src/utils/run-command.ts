import { execSync } from 'child_process'
import { resolve } from 'path'

export const runCommand = (commad: string) => {

    const dir = resolve(process.env.MESHCENTER_DIR)
    const response = execSync(`node meshctrl.js  --loginuser ${process.env.MESHCENTER_USERNAME} --loginpass ${process.env.MESHCENTER_PASSWORD} ${commad}`, { cwd: dir, encoding: 'utf-8' })
    return response
}