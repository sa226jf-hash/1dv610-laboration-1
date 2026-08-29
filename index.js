import { createInterface }  from 'node:readline'
const terminal = createInterface({
  input: process.stdin,
  output: process.stdout
})

terminal.question('Vad heter du? ', (name) => {
  console.log(`Hej ${name}!`)
  terminal.close()
})
