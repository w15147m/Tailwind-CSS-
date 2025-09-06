import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.jsx', // For your React app
                'resources/js/alpine.js', // For Alpine.js
            ],
            refresh: true,
        }),
        react(),
    ],
});
