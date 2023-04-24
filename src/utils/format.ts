export const numToDp = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;

export const getImageUrl = (path: string) => {
  if (!path.includes('/src/assets')) {
    return path;
  }
  // handle dynamic assets here
  // https://vitejs.dev/guide/assets.html
  const assetPath = path.replace(/^\/src\/assets\//, '');
  return new URL(`../assets/${assetPath}`, import.meta.url).href;
};
