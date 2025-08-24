import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
// import obfuscator from 'rollup-plugin-obfuscator'
import packages from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true, // 开启压缩
    rollupOptions: {
      treeshake: true, // 开启 Tree Shaking，消除未使用的代码，减小最终的包大小
      output: {
        // 根据不同的js库 拆分包，减少index.js包体积
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 指定需要拆分的第三方库或模块
            const dependenciesKeys = Object.keys(packages.dependencies)
            const match = dependenciesKeys.find((item) => {
              return id.includes(item)
            })
            const notSplit = [
              'react',
              'react-dom',
              '@chakra-ui/icons',
              '@chakra-ui/react',
              '@emotion/react',
              '@emotion/styled',
              '@tanstack/react-router',
              'motion',
            ]
            if (match && !notSplit.includes(match)) {
              return match
            }
          }
        },
      },
    },
  },
  plugins: [
    react(),
    TanStackRouterVite(),
    // obfuscator({
    //   global: false,
    //   options: {
    //     compact: true,
    //     controlFlowFlattening: true,
    //     controlFlowFlatteningThreshold: 0.75,
    //     deadCodeInjection: true,
    //     deadCodeInjectionThreshold: 0.4,
    //     debugProtection: false,
    //     debugProtectionInterval: 0,
    //     disableConsoleOutput: true,
    //     identifierNamesGenerator: 'hexadecimal',
    //     log: false,
    //     numbersToExpressions: true,
    //     renameGlobals: false,
    //     selfDefending: true,
    //     simplify: true,
    //     splitStrings: true,
    //     splitStringsChunkLength: 10,
    //     stringArray: true,
    //     stringArrayCallsTransform: true,
    //     stringArrayCallsTransformThreshold: 0.75,
    //     stringArrayEncoding: ['base64'],
    //     stringArrayIndexShift: true,
    //     stringArrayRotate: true,
    //     stringArrayShuffle: true,
    //     stringArrayWrappersCount: 2,
    //     stringArrayWrappersChainedCalls: true,
    //     stringArrayWrappersParametersMaxCount: 4,
    //     stringArrayWrappersType: 'function',
    //     stringArrayThreshold: 0.75,
    //     transformObjectKeys: true,
    //     unicodeEscapeSequence: false,
    //   },
    // }),
  ],
})
