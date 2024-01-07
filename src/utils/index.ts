export const checkImageURL = (url: string): boolean => {
  const pattern = /^https?:\/\/.+(\.(png|jpg|jpeg|bmp|gif|webp))$/i;
  return !!url && pattern.test(url);
};
