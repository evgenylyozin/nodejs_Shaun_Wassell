import fsBase from 'fs'
const fs = fsBase.promises
import path from 'path'

/* fs.readFile(path.resolve('./read_and_write/example.txt'), 'utf-8')
  .then( data => console.log(data))
  .catch( err => console.log(err)) */

const data = await fs.readFile(path.resolve('./read_and_write/example.txt'), 'utf-8')
console.log(data)

// fs.writeFileSync(path.resolve('./read_and_write/new-txt-example.txt'), 'Hello', 'utf-8')


// fs.appendFileSync(path.resolve('./read_and_write/new-txt-example.txt'), 'Hello', 'utf-8')

// fs.appendFileSync(path.resolve('./read_and_write/new-json-example.json'), JSON.stringify({name: 'Evgeny', surname: 'Lyozin'}))

// fs.unlinkSync(path.resolve('./read_and_write/new-txt-example.txt'))

// fs.mkdirSync(path.resolve('./read_and_write/new-dir'))

// fs.rmdirSync(path.resolve('./read_and_write/new-dir'))

// fs.mkdirSync(path.resolve('./read_and_write/new-dir/inside-dir'), { recursive: true })

/* const fileExists = fs.existsSync(path.resolve('./read_and_write/new-json-example.json'))

console.log(fileExists) */

/* console.log(fs.readdirSync(path.resolve('./read_and_write')))

console.log(fs.lstatSync(path.resolve('./read_and_write')))

console.log(fs.lstatSync(path.resolve('./read_and_write')).isFile())

console.log(fs.lstatSync(path.resolve('./read_and_write')).isDirectory()) */
