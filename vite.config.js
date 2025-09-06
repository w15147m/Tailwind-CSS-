import {
    defineConfig
} from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.jsx' // Changed from app.js to app.jsx for React
            ],
            refresh: true,
        }),
        react(), // Added React plugin
        tailwindcss(),
    ],
    server: {
        cors: true,
    },
});
