export function generateSlug(title) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}


export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ /g, '-')        
    .replace(/[^\w-]+/g, '');  
