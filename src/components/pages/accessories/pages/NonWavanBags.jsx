import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";
import QuoteForm from "./QuoteForm"; // Assume this form already exists
const NonWavanBags = () => {
   const [showForm, setShowForm] = useState(false);

  const tags = [
    "NON-WOVEN BAGS",
    "ECO-FRIENDLY PACKAGING",
    "REUSABLE",
    "CUSTOM PRINTING",
    "BAGS FOR BRANDS",
    "SHOPPING BAGS",
  ];

  return showForm ? (
    <QuoteForm onBack={() => setShowForm(false)} />
  ) : (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="flex justify-center items-center relative z-0">
          <img
            alt="Custom non-woven bags"
            className="w-full  object-cover h-72 md:h-72 lg:h-80 xl:h-96"
            src="https://miro.medium.com/v2/resize:fit:1000/1*1kadL_tIgHHDBo4Tf-UiYQ.jpeg"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
            Custom Printed Non-Woven Bags for Eco-Friendly Brands
          </h1>
          <p className="text-white text-xs mt-2 sm:mt-3 max-w-3xl">
            Durable | Reusable | Personalized with your logo
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white text-gray-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Main Column */}
          <main className="flex-1">
            <p className="mb-6 text-lg font-medium text-gray-700">
              Our custom non-woven bags are the perfect solution for eco-conscious brands. Made with durable and reusable fabric, they support your green initiatives while serving as a walking billboard for your company.
            </p>

            <img
              alt="Colorful custom printed non-woven bags"
              src="https://5.imimg.com/data5/SELLER/Default/2023/1/BT/MG/AA/161886004/colored-non-woven-bags-500x500.png"
              className="w-full object-cover rounded-md shadow-md mb-6"
            />
            <table className="w-full mt-4 border-collapse rounded-md overflow-hidden shadow-sm">
   <tbody>
  <tr className="bg-[#f0f1eb]">
    <th scope="row" className="text-left font-bold text-sm px-4 py-4 align-top w-40">
      Shopping bag size:
    </th>
    <td className="text-base text-[#333333] px-4 py-4">
      <div>Small size: about 10 x 8 x 4 inches</div>
      <div>Medium size: about 12 x 10 x 6 inches</div>
      <div>Large size: about 16 x 14 x 8 inches</div>
    </td>
  </tr>
  <tr className="bg-gradient-to-r from-[#e1f0d9] to-[#5db6bc]">
    <th scope="row" className="text-left font-bold text-sm px-4 py-4 align-top w-40">
      Gift bag size:
    </th>
    <td className="text-base text-[#333333] px-4 py-4">
      <div>Small size: probably 5 x 7 inches</div>
      <div>Medium size: probably 8 x 10 inches</div>
      <div>Large size: probably 10 x 13 inches</div>
    </td>
  </tr>
  <tr className="bg-[#f0f1eb]">
    <th scope="row" className="text-left font-bold text-sm px-4 py-4 align-top w-40">
      Backpack size:
    </th>
    <td className="text-base text-[#333333] px-4 py-4">
      <div>Small: 12 x 14 inches or so</div>
      <div>Medium: 14 x 16 inches or so</div>
      <div>Large: 16 x 18 inches or so</div>
    </td>
  </tr>
  <tr className="bg-gradient-to-r from-[#e1f0d9] to-[#5db6bc]">
    <th scope="row" className="text-left font-bold text-sm px-4 py-4 align-top w-40">
      Wine bag size:
    </th>
    <td className="text-base text-[#333333] px-4 py-4">
      <div>Single bottle bag: around 4 x 4 x 14 inches</div>
      <div>Double bottle bag: around 7 x 4 x 14 inches</div>
      <div>Multi-Bottle Bag: around 7 x 7 x 14 inches</div>
    </td>
  </tr>
  <tr className="bg-[#f0f1eb]">
    <th scope="row" className="text-left font-bold text-sm px-4 py-4 align-top w-40">
      Advertising bag size:
    </th>
    <td className="text-base text-[#333333] px-4 py-4">
      <div>Small: 8 x 10 inches</div>
      <div>Medium: 12 x 14 inches</div>
      <div>Large: 14 x 16 inches</div>
      <div>Custom size: the size is customized according to your specific needs, and we will discuss it with you to determine size</div>
    </td>
  </tr>
</tbody>

  </table>


            <div className="mb-3 mt-8 p-4 font-bold text-white text-xl sm:text-2xl bg-gradient-to-r from-[#f9c37e] via-[#e87db9] to-[#5f5fc1] rounded-md">
              Product Highlights
            </div>

            <ul className="list-disc list-inside text-gray-700 text-base font-medium mb-6">
              <li>Material: Non-woven polypropylene (custom GSM available)</li>
              <li>Eco-friendly, recyclable & reusable</li>
              <li>Custom sizes, colors, and styles</li>
              <li>Logo printing: screen print, heat transfer, or digital</li>
              <li>Handles: D-cut, W-cut, loop handles, or drawstring</li>
            </ul>

            <img
              src="https://5.imimg.com/data5/BO/NE/TT/ANDROID-9944831/product-jpeg-500x500.jpeg"
              alt="Non-woven tote bags"
              className="w-full object-cover rounded-md shadow-md mb-4"
            />

            <div className="text-lg font-semibold text-gray-800 mb-4">
              Application Industries
            </div>
            <ul className="list-inside list-disc text-gray-700 font-medium">
              <li>Retail & supermarkets</li>
              <li>Corporate giveaways</li>
              <li>Events & exhibitions</li>
              <li>Pharmaceutical & grocery stores</li>
              <li>Apparel packaging</li>
            </ul>

          
 <section className="max-w-7xl mx-auto mt-10">
        <section
          className="flex flex-col items-center justify-center px-6 py-12 rounded-md"
          style={{ background: "linear-gradient(90deg, #f9f6d1 0%, #3a9ea7 100%)" }}
        >
          <p className="text-xs font-bold mb-3 text-center max-w-[600px]">
            Free Design | Free storage service |{" "}
            <span className="font-extrabold">One-Stop Purchasing</span>
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-center max-w-[600px] mb-6">
            Custom hang tag string suppliers &amp; wholesaler | Sunrise
          </h2>
          <button
      className="font-bold text-white text-sm sm:text-base rounded-full px-10 py-3 bg-gradient-to-r from-[#f9a96e] via-[#a15ed9] to-[#4a4dbf] hover:opacity-90 transition-opacity"
      type="button"
      onClick={() => setShowForm(true)} // 👈 Add this
    >
      Get Free Quote
    </button>
        </section>
      <div className="flex flex-wrap items-center gap-3 mt-8 px-2 sm:px-0">
  <span className="text-sm text-gray-700 mr-2">Tags :</span>
  {tags.map((tag) => (
    <span
      key={tag}
      className="bg-[#f9a94e] text-white text-xs font-semibold rounded px-2 py-1"
    >
      {tag}
    </span>
  ))}
</div>
 <section className="mt-10">
  <div className="w-full h-20 bg-gradient-to-r from-[#f9c07f] via-[#d96db3] to-[#4a5bc8] flex items-center px-6 rounded-md shadow-md">
    <h2 className="text-white font-bold text-xl">FAQs</h2>
  </div>
  <div className="mt-8 space-y-6 px-2 sm:px-0">

    <div>
      <h3 className="text-[#f47b6a] font-semibold text-lg mb-2">
        1. What’s the price of the custom non woven drawstring bags with my logos?
      </h3>
      <p className="text-sm text-[#1a1a1a]">
        –The price depends on your custom size, color, technics, and quantity. You can send us your art file, and we’ll create a free design for you.
      </p>
    </div>

    <div>
      <h3 className="text-[#f47b6a] font-semibold text-lg mb-2">
        2. What is the bulk production time and shipping time?
      </h3>
      <p className="text-sm text-[#1a1a1a]">
        –Bulk production takes about 10 to 20 days. Shipping time is 3–6 business days via express delivery.
      </p>
    </div>

    <div>
      <h3 className="text-[#f47b6a] font-semibold text-lg mb-2">
        3. What profile is needed for production?
      </h3>
      <p className="text-sm text-[#1a1a1a]">
        –Please send us vector logo files like PDF, AI, EPS, CDR, or original PSD files. If you don’t have an art file, we offer free design assistance.
      </p>
    </div>

    <div>
      <h3 className="text-[#f47b6a] font-semibold text-lg mb-2">
        4. Can we get free samples?
      </h3>
      <p className="text-sm text-[#1a1a1a]">
        –Yes, our samples are free. You only need to cover the shipping cost.
      </p>
    </div>

    <div>
      <h3 className="text-[#f47b6a] font-semibold text-lg mb-2">
        5. What is the order process for customized non woven bags?
      </h3>
      <p className="text-sm text-[#1a1a1a]">
        –First, we’ll discuss basic details like size, color, material, quantity, and printing techniques. Then, our product expert will provide the price and invoice. After payment, we will prepare the design for your approval. Once confirmed, we will start bulk production (takes 5–15 business days). We provide free design service and ship globally.
      </p>
    </div>

  </div>
</section>

      </section>
          </main>

          {/* Sidebar */}
           <aside className="w-full max-w-xs lg:max-w-sm flex-shrink-0 ml-6">
                   {/* Search Form */}
                   <form className="mb-6">
                     <label className="sr-only" htmlFor="search">Search for...</label>
                     <div className="relative text-gray-400 focus-within:text-gray-600">
                       <input
                         className="block w-full rounded border border-gray-300 py-2 pl-3 pr-10 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                         id="search"
                         name="search"
                         placeholder="Search for..."
                         type="search"
                       />
                       <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                         <FiSearch className="text-gray-500" />
                       </span>
                     </div>
                   </form>
       
                   {/* Hot Products */}
                   <div className="mb-8">
                     <h2 className="font-semibold text-gray-900 mb-3">Hot Products</h2>
                     <ul className="text-[#f79433] text-base font-medium space-y-2 leading-tight">
                       {[
                         'Leather tags', 'Metal tags', 'Hem tags', 'Damask woven labels',
                         'Silicone heat transfer labels', 'PVC labels', 'Iron on patches',
                         'Woven patches', 'Elastic band', 'Aglets for shoelaces and hoodies',
                         'Faux leather labels', 'Luxury hang tags', 'Custom price tags',
                         'Epoxy dome stickers', 'Wrapping paper', 'Velvet pouches',
                         'Ziplock bags', 'Metal eyelets', 'Rubber buttons', 'Brand labels',
                       ].map((item, index) => (
                         <li key={index}>
                           <a className="hover:underline" href="#">{item}</a>
                         </li>
                       ))}
                     </ul>
                   </div>
       
                   {/* Recent Posts */}
                   <div className="mb-8">
                     <h2 className="font-bold text-base mb-2">Recent Posts</h2>
                     <ul className="text-base font-medium leading-relaxed text-gray-700 space-y-3">
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
                   <div className="space-y-2 text-base font-medium text-gray-700">
                     {[
                       'bags', 'buttons', 'company news', 'fasteners',
                       'garment accessories', 'garment trims',"hang tag string", "hang tags", "hangers", "ideas and inspirations", "labels and tags", "leather", "metal accessories", "packaging solutions", "paper bags", "patches", "plastic bags", "project samples", "ribbon & tape & bands", "stickers", "textiles and fabrics", "tissue paper", "woven labels", "zipper pulls",
                     ].map((tag, index) => (
                       <a key={index} className="block text-orange-400 hover:underline" href="#">
                         {tag}
                       </a>
                     ))}
                   </div>
       
                   {/* Contact Form */}
                   <form
                     action="#"
                     className="space-y-6 mt-10"
                     encType="multipart/form-data"
                     method="POST"
                     noValidate
                   >
                     <div>
                       <label
                         className="block font-semibold text-sm text-gray-900 mb-1"
                         htmlFor="firstName"
                       >
                         Name <span className="text-red-600">*</span>
                       </label>
                       <div className="flex space-x-4">
                         <input
                           className="border border-gray-300 rounded px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                           id="firstName"
                           name="firstName"
                           placeholder="First"
                           required
                           type="text"
                         />
                         <input
                           className="border border-gray-300 rounded px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                           id="lastName"
                           name="lastName"
                           placeholder="Last"
                           required
                           type="text"
                         />
                       </div>
                     </div>
                     <div>
                       <label
                         className="block font-semibold text-sm text-gray-900 mb-1"
                         htmlFor="email"
                       >
                         Email <span className="text-red-600">*</span>
                       </label>
                       <input
                         className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                         id="email"
                         name="email"
                         placeholder="Email address"
                         required
                         type="email"
                       />
                     </div>
                     <div>
                       <label
                         className="block font-semibold text-sm text-gray-900 mb-1"
                         htmlFor="phone"
                       >
                         Phone
                       </label>
                       <input
                         className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                         id="phone"
                         name="phone"
                         placeholder="Phone number"
                         type="tel"
                       />
                     </div>
                     <div>
                       <label
                         className="block font-semibold text-sm text-gray-900 mb-1"
                         htmlFor="message"
                       >
                         Message
                       </label>
                       <textarea
                         className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                         id="message"
                         name="message"
                         placeholder="Message"
                         rows={3}
                       ></textarea>
                     </div>
                     <div>
                       <button
                         className="w-full bg-[#f79433] text-white font-bold py-2 rounded hover:bg-[#d5792b] transition"
                         type="submit"
                       >
                         Send
                       </button>
                     </div>
                   </form>
                 </aside>
        </div>
      </div>
    </>
  );
};

export default NonWavanBags;
