import labelHierarchy from "@/components/pages/label/data/labelHierarchy";

export function generateSlug(title) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}


export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ /g, '-')        
    .replace(/[^\w-]+/g, '');  



    
// const slugifys = (str) =>
//   str.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

// labelHierarchy.forEach((group) => {
//   group.categories.forEach((cat) => {
//     cat.image = `../assets/web-img/${slugifys(cat.category)}.jpg`;
//   });
// });
