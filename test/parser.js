"use strict";
const scanner_1 = require("../src/scanner");
const parser_1 = require("../src/parser");
const Node = require("../src/ast");
const ast_1 = require("../src/ast");
const { NodeType } = Node;
const scanner = new scanner_1.default();
scanner.source(`
  @param name: () => string
`);
const parser = new parser_1.default(scanner.scan());
const ast = parser.parse();
// console.dir(ast, { depth: null, colors: true });
// console.log(ast.comments);
const leaves = ast_1.traverse(ast);
console.dir(leaves);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7QUFDNUMsMENBQTBDO0FBQzFDLG1DQUFtQztBQUNuQyxvQ0FBcUM7QUFFckMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztBQUcxQixNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFjLEVBQUUsQ0FBQztBQUVyQyxPQUFPLENBQUMsTUFBTSxDQUFDOztDQUVkLENBQUMsQ0FBQztBQUdILE1BQU0sTUFBTSxHQUFHLElBQUksZ0JBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDM0IsbURBQW1EO0FBQ25ELDZCQUE2QjtBQUU3QixNQUFNLE1BQU0sR0FBRyxjQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyJ9