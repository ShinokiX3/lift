import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' 
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
      alias: {
        app: path.resolve(__dirname, './src/app'),
        api: path.resolve(__dirname, './src/api'),
        features: path.resolve(__dirname, './src/features'),
        hooks: path.resolve(__dirname, './src/hooks'),
        screen: path.resolve(__dirname, './src/screen'),
        shared: path.resolve(__dirname, './src/shared'),
        store: path.resolve(__dirname, './src/store'),
        styles: path.resolve(__dirname, './src/styles'),
        widgets: path.resolve(__dirname, './src/widgets'),
      },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "styles/index.scss";
        `,
      },
    },
  },
})