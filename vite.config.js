import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import assets from 'postcss-assets'
import injectReact from './plugins/vite-plugin-react-inject'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), injectReact()],
  server: {
    port: 8080
  },
  css: {
    preprocessorOptions: {
      scss: {
        importer: [
          // This importer uses the synchronous API, and can be passed to either
          // renderSync() or render().
          function(url, prev) {
            // This generates a stylesheet from scratch for `@use "big-headers"`.
            console.log('importerimporter', url, prev)
            if (url != "big-headers") return null;
            return null
          },

          // This importer uses the asynchronous API, and can only be passed to
          // render().
          function(url, prev, done) {
            // Convert `@use "foo/bar"` to "node_modules/foo/sass/bar".
            var components = url.split('/');
            var innerPath = components.slice(1).join('/');
            done({
              file: `node_modules/${components.first}/sass/${innerPath}`
            });
          }
        ]
      }
    }
  }
})
