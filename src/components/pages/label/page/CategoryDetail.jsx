import React from 'react';
import { useParams, Link } from 'react-router-dom';
import labelHierarchy from '../data/labelHierarchy';
import labelCategoryDetails from '../data/labelCategoryDetails';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Form from './Form';

const CategoryDetail = () => {
  const { groupSlug, categorySlug } = useParams();
  const decodedGroup = decodeURIComponent(groupSlug).toLowerCase();
  const decodedCategory = decodeURIComponent(categorySlug).toLowerCase();

  // Match the group from slug
  const groupData = labelHierarchy.find(
    (group) => group.slug.toLowerCase() === decodedGroup
  );

  const categoryKey = decodedCategory.replace(/[^a-z0-9-]/gi, '').toLowerCase();

  const categoryData = labelCategoryDetails[categoryKey];

  if (!groupData || !categoryData) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Category not found</h2>
        <Link to="/label" className="text-blue-500 underline">Back to Labels</Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full mt-14">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src={"https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg"}
          alt={groupData.group}
          className="w-full object-cover h-64 sm:h-72 md:h-80 lg:h-96"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl">
            {categoryData.title}
          </h1>
          <p className="text-white text-sm sm:text-base mt-2 max-w-3xl">
            Explore premium label categories
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white text-gray-900 font-sans max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left Content */}
          <div className="w-full max-w-4xl mx-auto lg:mx-0">
            <Link to={`/label/${groupData.slug}`} className="text-blue-500 hover:underline mb-4 inline-block">
              ← Back to {groupData.group}
            </Link>

            <h2 className="text-2xl font-bold mb-6 text-orange-600">{categoryData.title}</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">{categoryData.intro}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Key Features:</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                {categoryData.features?.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Applications & Best For */}
            {categoryData.applications && (
              <p className="mb-3"><strong>Applications:</strong> {categoryData.applications}</p>
            )}
            {categoryData.bestFor && (
              <p className="mb-10"><strong>Best For:</strong> {categoryData.bestFor}</p>
            )}


	        <div className="mt-10">
              <Form />
            </div>

          </div>

            {/* Right Sidebar */}
		     <aside className="w-full lg:max-w-sm mt-10 lg:mt-0">
			{/* Search */}
			<form className="mb-6">
			  <div className="relative text-gray-400 focus-within:text-gray-600">
			    <input
			      type="search"
			      name="search"
			      placeholder="Search for..."
			      className="w-full rounded border border-gray-300 py-2 pl-3 pr-10 text-sm placeholder-gray-400 focus:ring focus:ring-gray-400"
			    />
			    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
			      <FiSearch />
			    </span>
			  </div>
			</form>
	  
			{/* Hot Products */}
			<div className="mb-8">
			  <h2 className="text-lg font-semibold mb-3">Hot Products</h2>
			  <ul className="text-[#f79433] text-base space-y-2">
			    {[
			      'Leather tags', 'Metal tags', 'Hem tags', 'Damask woven labels',
			      'Silicone heat transfer labels', 'PVC labels', 'Iron on patches',
			      'Woven patches', 'Elastic band', 'Aglets for shoelaces and hoodies',
			      'Faux leather labels', 'Luxury hang tags', 'Custom price tags',
			      'Epoxy dome stickers', 'Wrapping paper', 'Velvet pouches',
			      'Ziplock bags', 'Metal eyelets', 'Rubber buttons', 'Brand labels',
			    ].map((item, index) => (
			      <li key={index}><a href="#" className="hover:underline">{item}</a></li>
			    ))}
			  </ul>
			</div>
	  
			{/* Recent Posts */}
			<div className="mb-8">
			  <h2 className="text-base font-bold mb-2">Recent Posts</h2>
			  <ul className="text-base text-gray-700 space-y-3">
			    {[
			      'Clothing name labels for business branding',
			      'White paper bags for brand business',
			      'Stock size: plastic PE packaging bags',
			      'Custom packaging boxes for business',
			      'Branded Custom Poly Mailers Make a Lasting Impression',
			      'In-stock size courier bags',
			      'Wholesale cotton drawstring bags for brands',
			      'Custom Logo Stickers to Elevate Your Brand Identity',
			      'Wholesale transparent plastic bags with personalized logos',
			      'Supply custom rigid boxes for brands'
			    ].map((post, index) => (
			      <li key={index} className="hover:text-orange-600 cursor-pointer">{post}</li>
			    ))}
			  </ul>
			</div>
	  
			{/* Tags */}
			<div className="space-y-2 text-base font-medium text-gray-700 mb-10">
			  {[
			    'bags', 'buttons', 'company news', 'fasteners', 'garment accessories',
			    'garment trims', 'hang tag string', 'hang tags', 'hangers',
			    'ideas and inspirations', 'labels and tags', 'leather',
			    'metal accessories', 'packaging solutions', 'paper bags',
			    'patches', 'plastic bags', 'project samples',
			    'ribbon & tape & bands', 'stickers', 'textiles and fabrics',
			    'tissue paper', 'woven labels', 'zipper pulls'
			  ].map((tag, index) => (
			    <a key={index} href="#" className="block text-orange-400 hover:underline">
			      {tag}
			    </a>
			  ))}
			</div>
	  
			{/* Contact Form (Optional - already have Form component below images) */}
			{/* You can remove if duplicate */}
		     </aside>
		   </div>
		 </div>
      <Footer />
    </>
  );
};

export default CategoryDetail;





















// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import labelHierarchy from '../data/labelHierarchy';
// import labelCategoryDetails from '../data/labelCategoryDetails';
// import Navbar from '../../navbar/Navbar';
// import Footer from '../../footer/Footer';
// import Form from './Form';
// import { FiSearch } from 'react-icons/fi';

// // Utility function to convert a string to a slug
// const toSlug = (str) =>
//   str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/gi, '');

// const CategoryDetail = () => {
//   const { groupSlug, categorySlug } = useParams();
//   const decodedGroup = decodeURIComponent(groupSlug).toLowerCase();
//   const decodedCategory = decodeURIComponent(categorySlug).toLowerCase();

//   // Match group using slug
//   const groupData = labelHierarchy.find(
//     (group) => group.slug.toLowerCase() === decodedGroup
//   );

//   // Find matching category detail by slugified title
//   const categoryEntry = Object.entries(labelCategoryDetails).find(
//     ([key, detail]) => toSlug(detail.title) === decodedCategory
//   );

//   const categoryData = categoryEntry?.[1];

//   if (!groupData || !categoryData) {
//     return (
//       <div className="py-12 text-center">
//         <h2 className="text-2xl font-semibold mb-4">Category not found</h2>
//         <Link to="/label" className="text-blue-500 underline">Back to Labels</Link>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <div className="relative w-full mt-14">
//         <div className="absolute inset-0 bg-black/50 z-10"></div>
//         <img
//           src={"https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg"}
//           alt={groupData.group}
//           className="w-full object-cover h-64 sm:h-72 md:h-80 lg:h-96"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
//           <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl">
//             {categoryData.title}
//           </h1>
//           <p className="text-white text-sm sm:text-base mt-2 max-w-3xl">
//             Explore premium label categories
//           </p>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="bg-white text-gray-900 font-sans max-w-7xl mx-auto px-4 py-10">
//         <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
//           {/* Left Content */}
//           <div className="w-full max-w-4xl mx-auto lg:mx-0">
//             <Link to={`/label/${groupData.slug}`} className="text-blue-500 hover:underline mb-4 inline-block">
//               ← Back to {groupData.group}
//             </Link>

//             <h2 className="text-2xl font-bold mb-6 text-orange-600">{categoryData.title}</h2>
//             <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">{categoryData.intro}</p>

//             {/* Features */}
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-2 text-gray-800">Key Features:</h3>
//               <ul className="list-disc ml-5 space-y-1 text-gray-700">
//                 {categoryData.features?.map((feature, i) => (
//                   <li key={i}>{feature}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Applications & Best For */}
//             {categoryData.applications && (
//               <p className="mb-3"><strong>Applications:</strong> {categoryData.applications}</p>
//             )}
//             {categoryData.bestFor && (
//               <p className="mb-10"><strong>Best For:</strong> {categoryData.bestFor}</p>
//             )}

//             <div className="mt-10">
//               <Form />
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <aside className="w-full lg:max-w-sm mt-10 lg:mt-0">
//             {/* Search */}
//             <form className="mb-6">
//               <div className="relative text-gray-400 focus-within:text-gray-600">
//                 <input
//                   type="search"
//                   name="search"
//                   placeholder="Search for..."
//                   className="w-full rounded border border-gray-300 py-2 pl-3 pr-10 text-sm placeholder-gray-400 focus:ring focus:ring-gray-400"
//                 />
//                 <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                   <FiSearch />
//                 </span>
//               </div>
//             </form>

//             {/* Hot Products */}
//             <div className="mb-8">
//               <h2 className="text-lg font-semibold mb-3">Hot Products</h2>
//               <ul className="text-[#f79433] text-base space-y-2">
//                 {[
//                   'Leather tags', 'Metal tags', 'Hem tags', 'Damask woven labels',
//                   'Silicone heat transfer labels', 'PVC labels', 'Iron on patches',
//                   'Woven patches', 'Elastic band', 'Aglets for shoelaces and hoodies',
//                   'Faux leather labels', 'Luxury hang tags', 'Custom price tags',
//                   'Epoxy dome stickers', 'Wrapping paper', 'Velvet pouches',
//                   'Ziplock bags', 'Metal eyelets', 'Rubber buttons', 'Brand labels',
//                 ].map((item, index) => (
//                   <li key={index}><a href="#" className="hover:underline">{item}</a></li>
//                 ))}
//               </ul>
//             </div>

//             {/* Recent Posts */}
//             <div className="mb-8">
//               <h2 className="text-base font-bold mb-2">Recent Posts</h2>
//               <ul className="text-base text-gray-700 space-y-3">
//                 {[
//                   'Clothing name labels for business branding',
//                   'White paper bags for brand business',
//                   'Stock size: plastic PE packaging bags',
//                   'Custom packaging boxes for business',
//                   'Branded Custom Poly Mailers Make a Lasting Impression',
//                   'In-stock size courier bags',
//                   'Wholesale cotton drawstring bags for brands',
//                   'Custom Logo Stickers to Elevate Your Brand Identity',
//                   'Wholesale transparent plastic bags with personalized logos',
//                   'Supply custom rigid boxes for brands'
//                 ].map((post, index) => (
//                   <li key={index} className="hover:text-orange-600 cursor-pointer">{post}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Tags */}
//             <div className="space-y-2 text-base font-medium text-gray-700 mb-10">
//               {[
//                 'bags', 'buttons', 'company news', 'fasteners', 'garment accessories',
//                 'garment trims', 'hang tag string', 'hang tags', 'hangers',
//                 'ideas and inspirations', 'labels and tags', 'leather',
//                 'metal accessories', 'packaging solutions', 'paper bags',
//                 'patches', 'plastic bags', 'project samples',
//                 'ribbon & tape & bands', 'stickers', 'textiles and fabrics',
//                 'tissue paper', 'woven labels', 'zipper pulls'
//               ].map((tag, index) => (
//                 <a key={index} href="#" className="block text-orange-400 hover:underline">
//                   {tag}
//                 </a>
//               ))}
//             </div>
//           </aside>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default CategoryDetail;


