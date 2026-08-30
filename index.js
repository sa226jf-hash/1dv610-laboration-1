import { createInterface } from 'node:readline'
import figlet from "figlet"

const terminal = createInterface({
  input: process.stdin,
  output: process.stdout
})

const messages = [
  "Det fungerar. Fråga inte varför.",
  "Du kommer hitta buggen precis efter att du slutat leta efter den.",
  "Det finns ingen bugg. Det är en oplanerad feature.",
  "Idag är en bra dag att skriva kod du förstår imorgon.",
  "Din kod ser bättre ut än du tror. Förmodligen.",
  "Glöm inte att spara. Git kan inte läsa dina tankar.",
  "Varje programmerare har någon gång löst ett problem genom att starta om.",
  "Du behöver inte förstå allt på en gång. En rad i taget räcker.",
  "Semikolonet är inte din fiende. Oftast.",
  "Om koden fungerar på första försöket har något gått misstänkt bra.",
  "Buggar trivs bäst när ingen tittar på dem.",
  "Det är inte spagettikod om du kallar det arkitektur.",
  "Du är bara en console.log() från att förstå vad som händer.",
  "När allt annat misslyckas: läs felmeddelandet.",
  "Dagens mål: få datorn att göra något du faktiskt bad den om.",
  "En liten ändring kan skapa en väldigt stor bugg. Det är nästan imponerande.",
  "Du kommer förstå den här koden. Kanske redan idag.",
  "Kom ihåg: datorn gör exakt vad du säger, inte vad du menar.",
  "Den bästa buggen är den du lär dig något av.",
  "Om du inte vet vad koden gör, ändra ingenting och låtsas att du planerar."
]

async function createGreeting(name) {

  const input = name
    .trim()
    .split(/\s+/)
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')

  const welcome = 'Välkommen'
  const greeting = (await figlet.text(`   ${input}!`)).trimEnd().toLowerCase()
  const lines = greeting.split('\n')
  const message = messages[Math.floor(Math.random() * messages.length)]

  const longestLine = Math.max(
    ...lines.map(line => line.trim().length),
    message.length
  )

  const width = longestLine + 6

  const centerLines = (text, width) => {
    return text
      .split('\n')
      .map(line => {
        const trimmedLine = line.trim()
        const space = Math.floor((width - trimmedLine.length) / 2)

        return ' '.repeat(space) + trimmedLine
      })
      .join('\n')
  }

  const centeredWelcome = centerLines(welcome, width)
  const centeredGreeting = centerLines(greeting, width)
  const centeredMessage = centerLines(message, width)

  console.log('')
  console.log('-'.repeat(width))
  console.log('')
  console.log(centeredWelcome)
  console.log(centeredGreeting)
  console.log('')
  console.log(centeredMessage)
  console.log('')
  console.log('-'.repeat(width))
  console.log('')

  terminal.close()
}

terminal.question('Vad heter du? ', createGreeting)
