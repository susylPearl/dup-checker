import * as babelTraverse from "@babel/traverse";
const traverse = babelTraverse.default;

const extractIdentifiers = (ast) => {
  const identifiers = [];

  traverse.default(ast, {
    VariableDeclarator(path) {
      // Check if it's array destructuring (e.g., const [a, b] = useState(...))
      if (path.node.id.type === "ArrayPattern") {
        path.node.id.elements.forEach((element) => {
          if (element && element.type === "Identifier") {
            identifiers.push({ variable: element.name });
          } else {
            console.log(
              "Unhandled element type in ArrayPattern:",
              element?.type
            );
          }
        });
      } else if (path.node.id.type === "Identifier") {
        identifiers.push({ variable: path.node.id.name });
      }
    },
    FunctionDeclaration(path) {
      identifiers.push({ function: path.node.id.name });
    },
  });

  return identifiers;
};

export { extractIdentifiers };
