const fs = require('fs')
const f = fs.readdirSync('./apis')
let a = ['- [首页](/README.md)']
f.map(x => {
  a.push(`- [${x}](/apis/${x}/${x})`)
})
fs.writeFileSync('_sidebar.md', a.join('\n'))
