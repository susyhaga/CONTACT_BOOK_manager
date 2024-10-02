import * as fs from 'fs'
import { faker } from '@faker-js/faker'

type Contact = {
  id: number
  photo: string
  name: string
  email: string
  phone: string
  category?: string
  classification?: string | null
  priority?: string | null
}

const contacts: Contact[] = []

for (let i = 1; i <= 800; i++) {
  const contact: Contact = {
    id: i,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    // Utilizando replaceSymbols para formatar o número
    phone: faker.helpers.replaceSymbols('## ## #####-####'),
    photo: `https://randomuser.me/api/portraits/${
      i % 2 === 0 ? 'men' : 'women'
    }/${i % 100}.jpg`,
    category: faker.helpers.arrayElement(['family', 'friends', 'work', 'all']),
    classification: null, // Opcional
    priority: null // Opcional
  }

  contacts.push(contact)
}

fs.writeFileSync('db.json', JSON.stringify({ contacts }, null, 2))
console.log('Fake contacts generated successfully!')
