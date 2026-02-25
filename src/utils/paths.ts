export const getAssetPath = (path: string) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    if (!path) return '';
    if (path.startsWith('http') || path.startsWith('data:')) return path;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${cleanPath}`;
};
