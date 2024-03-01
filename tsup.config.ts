import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['src/index.ts'],
  minify: true,
  splitting: false,
  dts: true,
  clean: true,
});
