import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data'; // عدل المسار الصحيح

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  // إضافة المنتجات
  await prisma.product.createMany({ data: sampleData.products });

  // إضافة المستخدمين مع تشفير كلمات المرور إذا تريد
  await Promise.all(
    sampleData.users.map(async (user) => {
      await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          password: user.password, // أو مشفّر حسب الحاجة
          role: user.role,
        },
      });
    })
  );

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
