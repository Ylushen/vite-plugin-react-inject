import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import assets from 'postcss-assets'
import injectReact from './plugins/vite-plugin-react-inject'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), injectReact()],
  server: {
    port: 8080
  }
})
