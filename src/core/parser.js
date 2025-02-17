import fs from 'fs';
import * as parser from '@babel/parser';

const parseFile = (filePath) => {
  const code = fs.readFileSync(filePath, "utf-8");
  return parser.parse(code, {
    sourceType: "module",
    plugins: [
        'jsx',               // For JSX support in React components
        'classProperties',   // For class fields if you have class components
        'optionalChaining',  // For optional chaining syntax (?.)
        'nullishCoalescingOperator', // For nullish coalescing (??)],
    ]
  });
};

export { parseFile };
