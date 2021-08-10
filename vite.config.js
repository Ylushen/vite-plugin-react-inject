import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import assets from 'postcss-assets'
import injectReact from './plugins/vite-plugin-react-inject'
import Fiber from 'fibers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), injectReact()],
  server: {
    port: 8080
  },
  css: {
    preprocessorOptions: {
      scss: {
        fiber: Fiber,
        importer: [
          // This importer uses the synchronous API, and can be passed to either
          // renderSync() or render().
          function(url, prev, done) {
            // This generates a stylesheet from scratch for `@use "big-headers"`.
            console.log('importerimporter', url, prev)
            return null
          },
        ],
      }
    }
  }
})
