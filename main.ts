import fs from 'node:fs';

const line = 'Every night a second plate waits beside mine, and every morning it is empty, though I have lived alone since the funeral.';

fs.writeFileSync('/output/entry.txt', line, 'utf8');
