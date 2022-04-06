const chalk = require('chalk')
const { prompt, Scale } = require('enquirer')
const semver = require('semver')
const fs = require('fs')
const path = require('path')
const execa = require('execa')
const preId = 'beta'
const versionIncrements = [
  'patch',
  'minor',
  'major',
  ...(preId ? ['prepatch', 'preminor', 'premajor', 'prerelease'] : [])
]
async function main() {
  const { stdout } = await execa('echo', ['unicorns'])
  console.log(stdout)
  // const pa = path.resolve(__dirname, './test.json')
  // console.log(pa)
  // const res = fs.readFileSync(pa, { encoding: 'utf-8' })
  // const pkg =  JSON.parse(res)
  // pkg.version += '0'
  // fs.writeFileSync(pa, JSON.stringify(pkg, null, 2) + '\n')
  // console.log(res);
  // console.log(pkg);
  // const inc = (type) => semver.inc('1.2.3', type, preId)
  // const res = versionIncrements.map((type) => inc(type))
  // console.log(res)
  //   const res2 = await prompt({
  //     type: 'select',
  //     name: 'release',
  //     message: 'Select release type',
  //     result: (str) => {
  //       return str.match(/\((.+)\)/)[1]
  //     },
  //     // validate: (str) => {
  //     //       if(!semver.valid(str)) return chalk.red(`版本号不符合 semver 规范: ${str}`)
  //     //     },
  //     choices: versionIncrements.map((i) => `${i} (${inc(i)})`).concat(['custom'])
  //   })
  // console.log(res2)
  // const res = (
  //   await prompt({
  //     type: 'input',
  //     name: 'version',
  //     message: '输入要发布的版本号'
  //   })
  // ).version
  // console.log(res)
  return
  // input
  const response = await prompt({
    type: 'Select',
    name: 'color',
    message: 'Pick a flavor',
    choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange']
  })

  // const response = await prompt({
  //   type: 'confirm',
  //   name: 'aa',
  //   message: 'fdfd'
  // })
  console.log(response)
}

main().catch((err) => {
  console.log(err)
})
