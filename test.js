import fs from 'fs';

const listKata = JSON.parse(fs.readFileSync('./Kata-Kata.json', 'utf-8'));
console.log(listKata);

for (const [index, datanya] of listKata.entries()) {
  console.log(index, datanya);
}
