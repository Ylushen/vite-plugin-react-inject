import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import assets from 'postcss-assets'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  server: {
    port: 8080
  }
})
