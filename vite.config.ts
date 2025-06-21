import { defineConfig } from 'vite';
import { nodeExternals } from 'rollup-plugin-node-externals';

export default defineConfig({
  plugins: [
    nodeExternals({
      deps: false,
    }),
  ],
  build: {
    target: 'esnext',
    lib: {
      entry: {
        index: './milvus/index.ts',
      },

      formats: ['es'],
    },
    outDir: 'dist/milvus',
  },
});
