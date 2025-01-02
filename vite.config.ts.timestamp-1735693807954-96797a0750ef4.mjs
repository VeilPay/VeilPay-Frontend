// vite.config.ts
import legacy from "file:///D:/projects/VeilPay/node_modules/.pnpm/@vitejs+plugin-legacy@6.0.0_terser@5.37.0_vite@5.4.11_@types+node@22.10.2_sass-embedded@1.83._px6oia3ptcs7gqib3lowrzfzma/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import react from "file:///D:/projects/VeilPay/node_modules/.pnpm/@vitejs+plugin-react@4.3.4_vite@5.4.11_@types+node@22.10.2_sass-embedded@1.83.0_sass@1.83.0_terser@5.37.0_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { defineConfig } from "file:///D:/projects/VeilPay/node_modules/.pnpm/vite@5.4.11_@types+node@22.10.2_sass-embedded@1.83.0_sass@1.83.0_terser@5.37.0/node_modules/vite/dist/node/index.js";
import compression from "file:///D:/projects/VeilPay/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.11_@types+node@22.10.2_sass-embedded@1.83.0_sass@1.83.0_terser@5.37.0_/node_modules/vite-plugin-compression/dist/index.mjs";
import { VitePWA } from "file:///D:/projects/VeilPay/node_modules/.pnpm/vite-plugin-pwa@0.21.1_vite@5.4.11_@types+node@22.10.2_sass-embedded@1.83.0_sass@1.83.0_terse_z6ooms4dqhsyrtwhx464gb7hhq/node_modules/vite-plugin-pwa/dist/index.js";
import sitemap from "file:///D:/projects/VeilPay/node_modules/.pnpm/vite-plugin-sitemap@0.7.1/node_modules/vite-plugin-sitemap/dist/index.js";
var __vite_injected_original_dirname = "D:\\projects\\VeilPay";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    sitemap({ hostname: "https://www.usefulpeople.com" }),
    compression({ algorithm: "gzip" }),
    legacy({ targets: ["defaults", "not IE 11"] }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt"],
      manifest: {
        name: "Useful People",
        short_name: "Useful People",
        description: "Online trading platform",
        theme_color: "#2b2738"
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\.(?:js|css|woff2?|png|jpg|jpeg|svg|gif)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-assets",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7
              }
            }
          },
          {
            urlPattern: /^https:\/\/api\.usefulpeople\.com\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24
              }
            }
          }
        ]
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        sassOptions: {
          api: "modern-compiler"
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@app": path.resolve(__vite_injected_original_dirname, "./src/app"),
      "@pages": path.resolve(__vite_injected_original_dirname, "./src/pages"),
      "@widgets": path.resolve(__vite_injected_original_dirname, "./src/widgets"),
      "@features": path.resolve(__vite_injected_original_dirname, "./src/features"),
      "@entities": path.resolve(__vite_injected_original_dirname, "./src/entities"),
      "@shared": path.resolve(__vite_injected_original_dirname, "./src/shared")
    }
  },
  server: {
    port: 3e3,
    proxy: {
      "/api": "https://47b4-2a02-8071-6282-a220-80dd-da05-b18b-ba12.ngrok-free.app/"
      // "/api": {
      //   target: "https://47b4-2a02-8071-6282-a220-80dd-da05-b18b-ba12.ngrok-free.app",
      //   changeOrigin: true,
      //   secure: true,
      //   cookieDomainRewrite: "localhost",
      //   rewrite: path => path.replace(/^\/api/, ""),
      // },
      // "/ws": {
      //   target: "wss://api.codersbud.com",
      //   ws: true,
      //   rewrite: path => path.replace(/^\/ws/, "/chat"),
      //   changeOrigin: true,
      //   rewriteWsOrigin: true,
      //   secure: true,
      // },
    },
    hmr: { overlay: true },
    fs: {
      allow: [".."]
    }
  },
  optimizeDeps: { include: ["react", "react-dom", "workbox-window"] },
  build: {
    target: "esnext",
    outDir: "dist",
    rollupOptions: {
      external: ["workbox-window"],
      input: path.resolve(__vite_injected_original_dirname, "index.html"),
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.split("node_modules/")[1].split("/")[0];
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]"
      }
    },
    sourcemap: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxWZWlsUGF5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxWZWlsUGF5XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm9qZWN0cy9WZWlsUGF5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IGxlZ2FjeSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tbGVnYWN5XCJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIlxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIlxuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiXG5pbXBvcnQgc2l0ZW1hcCBmcm9tIFwidml0ZS1wbHVnaW4tc2l0ZW1hcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHNpdGVtYXAoeyBob3N0bmFtZTogXCJodHRwczovL3d3dy51c2VmdWxwZW9wbGUuY29tXCIgfSksXG4gICAgY29tcHJlc3Npb24oeyBhbGdvcml0aG06IFwiZ3ppcFwiIH0pLFxuICAgIGxlZ2FjeSh7IHRhcmdldHM6IFtcImRlZmF1bHRzXCIsIFwibm90IElFIDExXCJdIH0pLFxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcbiAgICAgIGluY2x1ZGVBc3NldHM6IFtcImZhdmljb24uaWNvXCIsIFwicm9ib3RzLnR4dFwiXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6IFwiVXNlZnVsIFBlb3BsZVwiLFxuICAgICAgICBzaG9ydF9uYW1lOiBcIlVzZWZ1bCBQZW9wbGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiT25saW5lIHRyYWRpbmcgcGxhdGZvcm1cIixcbiAgICAgICAgdGhlbWVfY29sb3I6IFwiIzJiMjczOFwiLFxuICAgICAgfSxcbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgcnVudGltZUNhY2hpbmc6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXFwuKD86anN8Y3NzfHdvZmYyP3xwbmd8anBnfGpwZWd8c3ZnfGdpZikkLyxcbiAgICAgICAgICAgIGhhbmRsZXI6IFwiQ2FjaGVGaXJzdFwiLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBjYWNoZU5hbWU6IFwic3RhdGljLWFzc2V0c1wiLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMTAwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsUGF0dGVybjogL15odHRwczpcXC9cXC9hcGlcXC51c2VmdWxwZW9wbGVcXC5jb21cXC8uKiQvLFxuICAgICAgICAgICAgaGFuZGxlcjogXCJOZXR3b3JrRmlyc3RcIixcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiBcImFwaS1jYWNoZVwiLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogNTAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBzYXNzT3B0aW9uczoge1xuICAgICAgICAgIGFwaTogXCJtb2Rlcm4tY29tcGlsZXJcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICAgIFwiQGFwcFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2FwcFwiKSxcbiAgICAgIFwiQHBhZ2VzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvcGFnZXNcIiksXG4gICAgICBcIkB3aWRnZXRzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvd2lkZ2V0c1wiKSxcbiAgICAgIFwiQGZlYXR1cmVzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvZmVhdHVyZXNcIiksXG4gICAgICBcIkBlbnRpdGllc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2VudGl0aWVzXCIpLFxuICAgICAgXCJAc2hhcmVkXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvc2hhcmVkXCIpLFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gICAgcHJveHk6IHtcbiAgICAgIFwiL2FwaVwiOiAnaHR0cHM6Ly80N2I0LTJhMDItODA3MS02MjgyLWEyMjAtODBkZC1kYTA1LWIxOGItYmExMi5uZ3Jvay1mcmVlLmFwcC8nLFxuICAgICAgLy8gXCIvYXBpXCI6IHtcbiAgICAgIC8vICAgdGFyZ2V0OiBcImh0dHBzOi8vNDdiNC0yYTAyLTgwNzEtNjI4Mi1hMjIwLTgwZGQtZGEwNS1iMThiLWJhMTIubmdyb2stZnJlZS5hcHBcIixcbiAgICAgIC8vICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgLy8gICBzZWN1cmU6IHRydWUsXG4gICAgICAvLyAgIGNvb2tpZURvbWFpblJld3JpdGU6IFwibG9jYWxob3N0XCIsXG4gICAgICAvLyAgIHJld3JpdGU6IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgXCJcIiksXG4gICAgICAvLyB9LFxuICAgICAgLy8gXCIvd3NcIjoge1xuICAgICAgLy8gICB0YXJnZXQ6IFwid3NzOi8vYXBpLmNvZGVyc2J1ZC5jb21cIixcbiAgICAgIC8vICAgd3M6IHRydWUsXG4gICAgICAvLyAgIHJld3JpdGU6IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvd3MvLCBcIi9jaGF0XCIpLFxuICAgICAgLy8gICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAvLyAgIHJld3JpdGVXc09yaWdpbjogdHJ1ZSxcbiAgICAgIC8vICAgc2VjdXJlOiB0cnVlLFxuICAgICAgLy8gfSxcbiAgICB9LFxuICAgIGhtcjogeyBvdmVybGF5OiB0cnVlIH0sXG4gICAgZnM6IHtcbiAgICAgIGFsbG93OiBbXCIuLlwiXSxcbiAgICB9LFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHsgaW5jbHVkZTogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIiwgXCJ3b3JrYm94LXdpbmRvd1wiXSB9LFxuICBidWlsZDoge1xuICAgIHRhcmdldDogXCJlc25leHRcIixcbiAgICBvdXREaXI6IFwiZGlzdFwiLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJ3b3JrYm94LXdpbmRvd1wiXSxcbiAgICAgIGlucHV0OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImluZGV4Lmh0bWxcIiksXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQuc3BsaXQoXCJub2RlX21vZHVsZXMvXCIpWzFdLnNwbGl0KFwiL1wiKVswXVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IFwiYXNzZXRzL1tuYW1lXS1baGFzaF0uanNcIixcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV1cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICB9LFxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQWlQLE9BQU8sWUFBWTtBQUNwUSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGFBQWE7QUFOcEIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUSxFQUFFLFVBQVUsK0JBQStCLENBQUM7QUFBQSxJQUNwRCxZQUFZLEVBQUUsV0FBVyxPQUFPLENBQUM7QUFBQSxJQUNqQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFlBQVksV0FBVyxFQUFFLENBQUM7QUFBQSxJQUM3QyxRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxlQUFlLENBQUMsZUFBZSxZQUFZO0FBQUEsTUFDM0MsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLGdCQUFnQjtBQUFBLFVBQ2Q7QUFBQSxZQUNFLFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUNULFNBQVM7QUFBQSxjQUNQLFdBQVc7QUFBQSxjQUNYLFlBQVk7QUFBQSxnQkFDVixZQUFZO0FBQUEsZ0JBQ1osZUFBZSxLQUFLLEtBQUssS0FBSztBQUFBLGNBQ2hDO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxTQUFTO0FBQUEsY0FDUCxXQUFXO0FBQUEsY0FDWCxZQUFZO0FBQUEsZ0JBQ1YsWUFBWTtBQUFBLGdCQUNaLGVBQWUsS0FBSyxLQUFLO0FBQUEsY0FDM0I7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osYUFBYTtBQUFBLFVBQ1gsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNwQyxRQUFRLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDM0MsVUFBVSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQy9DLFlBQVksS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUNuRCxhQUFhLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUNyRCxhQUFhLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUNyRCxXQUFXLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFnQlY7QUFBQSxJQUNBLEtBQUssRUFBRSxTQUFTLEtBQUs7QUFBQSxJQUNyQixJQUFJO0FBQUEsTUFDRixPQUFPLENBQUMsSUFBSTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjLEVBQUUsU0FBUyxDQUFDLFNBQVMsYUFBYSxnQkFBZ0IsRUFBRTtBQUFBLEVBQ2xFLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxnQkFBZ0I7QUFBQSxNQUMzQixPQUFPLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDM0MsUUFBUTtBQUFBLFFBQ04sYUFBYSxJQUFJO0FBQ2YsY0FBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLG1CQUFPLEdBQUcsTUFBTSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFBQSxVQUNsRDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBLEVBQ2I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
