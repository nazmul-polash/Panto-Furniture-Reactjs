function getImgUrl(image) {
   if (!image) {
      return '';
   }
   return new URL(`../assets/products/${image}`, import.meta.url).href;
}

export {getImgUrl}