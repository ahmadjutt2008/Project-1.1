import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        inventory: resolve(__dirname, 'inventory.html'),
        detail: resolve(__dirname, 'car-detail.html'),
        services: resolve(__dirname, 'services.html'),
        booking: resolve(__dirname, 'booking.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        testimonials: resolve(__dirname, 'testimonials.html'),
        contact: resolve(__dirname, 'contact.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
      },
    },
  },
})
