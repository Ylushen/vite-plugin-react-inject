import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import assets from 'postcss-assets'
import injectReact from './plugins/vite-plugin-react-inject'
import replaceScssUrl  from './plugins/vite-plugin-scss-url';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), injectReact(), replaceScssUrl()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {}
  }
})
