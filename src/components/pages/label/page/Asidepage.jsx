import React from 'react'
import { FiSearch } from "react-icons/fi";
import labelHierarchy from '../data/labelHierarchy';
import { Link } from 'react-router-dom';

const Asidepage = () => {
  return (
    <div>
		     {/* Hot Products */}
		  {/* Explore Labels */}
<div className="mb-8">
  <h2 className="text-lg font-semibold mb-4">Explore Labels</h2>
  <div className="space-y-4">
    {labelHierarchy.map((group, index) => (
      <div key={index}>
        <h3 className="text-base font-bold text-orange-500 mb-1">{group.group}</h3>
        <ul className="ml-3 list-disc space-y-1 text-sm text-gray-700">
          {group.categories.map((category, i) => (
            <li key={i}>
              <Link
                to={`/label/${group.slug}/${category.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:underline hover:text-orange-600"
              >
                {category.category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

		     {/* Recent Posts */}
		     {/* <div className="mb-8">
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
		     </div> */}
	
		     {/* Tags */}
		     {/* <div className="space-y-2 text-base font-medium text-gray-700 mb-10">
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
		     </div> */}
	
    </div>
  )
}

export default Asidepage;