import React from 'react'
import { FiSearch } from "react-icons/fi";

const Asidepage = () => {
  return (
    <div>
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
	
    </div>
  )
}

export default Asidepage;