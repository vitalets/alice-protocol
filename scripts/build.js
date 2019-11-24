/**
 * Builds schemas.
 *
 * Run:
 * node scripts/build
 */
const fs = require('fs');
const schema = require('./schema');

const files = [
  {filename: 'response-no-image.json', schema: schema.noImageSchema},
  {filename: 'response-big-image.json', schema: schema.bigImageSchema},
  {filename: 'response-items-list.json', schema: schema.itemsListSchema},
];

main();

function main() {
  files.forEach(writeSchema);
}

function writeSchema({ filename, schema }) {
  const json = JSON.stringify(schema, null, 2);
  fs.writeFileSync(filename, json);
  console.log(`Created: ${filename}`);
}
