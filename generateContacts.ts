import * as fs from 'fs'
import { faker } from '@faker-js/faker'

type Contact = {
  id: number
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
    category: faker.helpers.arrayElement(['family', 'friends', 'work', 'all']),
    classification: null, // Opcional
    priority: null // Opcional
  }

  contacts.push(contact)
}

fs.writeFileSync('db.json', JSON.stringify({ contacts }, null, 2))
console.log('Fake contacts generated successfully!')
