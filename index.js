// Написати функцію, яка повертає об'єкт родина з властивостями, які мають вигляд:
// ключ - ім'я члена родини, а значення - хто із членів родини
// (мінімум родина з 3 осіб)
// Інформацію про особу запитувати у користувача.
// Вивести отриманий об'єкт за допомогою for..in

const family = {
  Tim: 'father',
  Adam: 'son',
  Eva: 'mother',
  Reichel: 'daughter',
  Vilyam: 'grandfather',
}

for (const key in family) {
  const inputNameFamily = prompt("enter a family member's name")
  if (inputNameFamily === key) {
    console.log(`${key}:${family[key]}`)
    break
  }
}
