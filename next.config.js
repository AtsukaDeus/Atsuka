/** @type {import('next').NextConfig} */

export const target = 'static';
export async function exportPathMap() {
    return {
        '/': { page: '/' },
        // Agrega aquí otras rutas que desees exportar
    };
}
