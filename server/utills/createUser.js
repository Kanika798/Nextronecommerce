const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const { nanoid } = require('nanoid');

const prisma = new PrismaClient();

async function createUser() {
  const email = 'kanikasinghal247@gmail.com';
  const password = 'Kanika@123'; // You can change this after logging in
  
  const hashedPassword = await bcrypt.hash(password, 14);
  
  try {
    // Check if user already exists
    const existing = await prisma.user.findFirst({ where: { email } });
    if (existing) {
      console.log('User already exists, updating password...');
      await prisma.user.update({
        where: { id: existing.id },
        data: { password: hashedPassword }
      });
      console.log('Password updated successfully!');
    } else {
      const user = await prisma.user.create({
        data: {
          id: nanoid(),
          email,
          password: hashedPassword,
          role: 'admin',
        }
      });
      console.log('User created successfully!');
      console.log('ID:', user.id);
    }
    console.log('Email:', email);
    console.log('Password: Kanika@123');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();
