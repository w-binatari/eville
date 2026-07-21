import type { Linter } from "eslint";

const config: Linter.Config[] = [
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
];

export default config;
