import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";
import QuoteForm from "../../accessories/pages/QuoteForm"; 


const CustomSticker = () => {
const [showForm, setShowForm] = useState(false);

  const tags = [
  "CLOTHING ACCESSORIES",
  "CUSTOM",
  "GARMENT TRIMS",
  "HANG TAG STRING",
  "HANG TAGS",
  "TRIMS",
];

  return showForm ? <QuoteForm onBack={() => setShowForm(false)} /> : (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="flex justify-center items-center relative z-0">
          <img
            alt="Customized hang tag string with seal and cord"
            className="w-full md:w-1/2 object-cover h-72 md:h-72 lg:h-80 xl:h-96"
            src="https://storage.googleapis.com/a1aa/image/fd333c08-54a4-46a3-4671-6abbf6215dcf.jpg"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
           Wholesale epoxy dome stickers for brand
          </h1>
          <p className="text-white text-xs mt-2 sm:mt-3 max-w-3xl">
            by Nancy / fasteners, garment accessories, hang tag string, hang tags,
            ideas and inspirations
          </p>
        </div>
      </div>

      {/* Main Container with Sidebar */}
      <div className="bg-white text-gray-900 font-sans max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Main Content */}
          <main className="flex-1 max-w-full lg:max-w-7xl">
            <p className="mb-6 leading-relaxed text-lg font-semibold text-gray-700">
              Wholesale custom epoxy dome stickers with logos and patterns for all kinds of brands, with product LOGO, labels, nameplates. And you can customize and print any brand logo/text and patterns on the adhesive epoxy stickers. We can customize various sizes of crystal glue and self-adhesive. You can add any logos, product sizes, company names, and numbers on it.
            </p>
            <p className="mb-6 leading-relaxed text-base font-medium text-gray-600">
              So, what are the benefits of custom epoxy dome stickers?
            </p>
            <p className="mb-6 leading-relaxed text-lg font-semibold text-gray-700">
          First of all, the surface of this sticker is bright and transparent. And it’s bright in color and easy to paste. The surface is smooth and uniform without bubbles. Second, the clear dome stickers are waterproof, oil-proof, scratch-resistant, and anti-corrosion. Then, these epoxy stickers will not turn yellow and can be soft or hard. Most importantly, it is a kind of 3d resin sticker. This means that the sticker will present a three-dimensional effect. If you want to customize high-end crystal stickers, then this is the right choice.
            </p>

    <div className="mt-16 mb-4 grid grid-cols-1 md:grid-cols-2 gap-6  rounded-md shadow-md">
    <img
      alt="Two white hang tags with string on a white background, standing upright"
      src="https://t3.ftcdn.net/jpg/14/97/30/46/360_F_1497304604_UVKJ9UHkMH6sf2Dyl54d999On2j0p40o.jpg"
      className="w-full object-cover rounded-md"
      height={400}
      width={600}
    />
    <img
      alt="Four blue round buttons with strings on a white background"
      src="https://t3.ftcdn.net/jpg/13/78/73/82/360_F_1378738249_S5aEmM64FlfkJpqe2GN3FC3NeEbgqJya.jpg"
      className="w-full object-cover rounded-md"
      height={400}
      width={600}
    />
  </div>

            <div className="mb-6 p-6 font-bold text-white text-xl sm:text-2xl leading-tight max-w-full bg-gradient-to-r from-[#f9c37e] via-[#e87db9] to-[#5f5fc1] rounded-md">
            Full details about the 3d epoxy dome stickers
            </div>

              <table className="w-full mt-8 border-collapse rounded-md overflow-hidden shadow-sm">
    <tbody>
      <tr className="bg-[#f0f1eb]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
         Front material : 
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
         epoxy glue, PU glue, PVC, PET, PMMA, PC, etc.
        </td>
      </tr>
      <tr className="bg-gradient-to-r from-[#e1f0d9] to-[#5db6bc]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-3 py-4 align-top w-40"
        >
        Substrate material :

        </th>
        <td className="text-base text-[#333333] px-4 py-4">
          synthetic paper, matt silver, brushed silver, brushed gold, bright silver, bright gold, PP/PVC/PET, self-adhesive, transparent, and other printing materials.
        </td>
      </tr>
      <tr className="bg-[#f0f1eb]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
         Epoxy glue :
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
          	epoxy glue, PU glue, soft and hard epoxy resin (AB glue), water glue, oil glue, wire glue
        </td>
      </tr>
      <tr className="bg-gradient-to-r from-[#e1f0d9] to-[#5db6bc]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
         Back glue :
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
      	strong glue, 3M glue
        </td>
      </tr>
      <tr className="bg-[#f0f1eb]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
         Printing :
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
          		screen printing, color printing, machine printing, offset printing;
        </td>
      </tr>
      <tr className="bg-gradient-to-r from-[#e1f0d9] to-[#5db6bc]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
        Backing paper used :
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
   	Copperplate backing paper, PET film backing paper
        </td>
      </tr>
      <tr className="bg-[#f0f1eb]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
         Surface effect : 
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
          light silver, bright silver, transparent, textured bottom, 3D metal
        </td>
      </tr>
      <tr className="bg-gradient-to-r from-[#e1f0d9] to-[#5db6bc]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
        Surface treatment :
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
      		color printing, UV treatment.
        </td>
      </tr>
      <tr className="bg-[#f0f1eb]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
         Shape: 
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
          		round, square, rectangular, oval, regardless of shape, custom shape (design shape provided by customer)
        </td>
      </tr>
      <tr className="bg-gradient-to-r from-[#e1f0d9] to-[#5db6bc]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
        Films used :
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
      	matte film, glossy film.
        </td>
      </tr>
      <tr className="bg-[#f0f1eb]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
         Color :
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
       can be customized; single-color, four-color, full-color printing.
        </td>
      </tr>
      <tr className="bg-gradient-to-r from-[#e1f0d9] to-[#5db6bc]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
        Thickness/Size :
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
      	customized; thickness can be 0.4mm-1.8mm; Normal thickness is 1.5MM.
        </td>
      </tr>
      <tr className="bg-[#f0f1eb]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
         Function : 
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
          		sun protection, waterproof, moisture-proof
        </td>
      </tr>
    </tbody>
  </table>

<div className="bg-white text-gray-900">
  <div className="max-w-6xl mx-auto px-6 py-10">
    <h2
      className="text-white font-bold text-lg text-center py-4 w-full bg-gradient-to-r from-[#fbc47d] via-[#c87ccf] to-[#4a52b8] p-8 rounded-md shadow-md"
    >
      Features and functions of epoxy resin stickers
    </h2>
    <div className="mt-8 text-base md:text-lg font-medium  text-gray-700 leading-relaxed max-w-4xl mx-auto">
      <p className="mb-6">
        Epoxy resin stickers can play a good role in protecting the surface of
        craft products. In addition, it increases the gloss and brightness of
        its surface. In this way, the decorative effect of the surface can be
        further increased. Therefore, this sticker has a wide range of uses.
      </p>
      <div className="flex flex-col md:flex-row md:items-start md:space-x-8 mb-6">
        <p className="md:w-2/3 text-base md:text-lg font-medium  text-gray-700">
          For example, we can use it to paste labels on refrigerators, air
          conditioners, motorcycles, stainless steel products. And furniture,
          home appliances, hardware, daily necessities, etc. All materials meet
          environmental protection standards.
          <br />
          <br />
          Moreover, the stickers we produce have a high gloss and good 3d
          effects.
        </p>
        <img
          alt="Sheet of epoxy resin stickers with numbers 1 and 2 in red on black circular backgrounds"
          className="mt-6 md:mt-0 md:w-80 md:h-auto object-cover"
          height={160}
          src="https://tse4.mm.bing.net/th?id=OIP.JzMUYAG2ObsDQE0Vb4b6TAHaDv&pid=Api&P=0&h=220"
          width={320}
        />
      </div>
      <ol className="list-decimal list-inside space-y-2 max-w-3xl mx-auto text-gray-600 font-medium text-base">
        <li>
          We support various models of customized brand-new glue color stickers.
        </li>
        <li>
          This kind of 3d dome sticker uses special adhesive. It sticks well to
          the surface of the case. Meanwhile, it is also very easy to remove
          without leaving any glue stains.
        </li>
        <li>Sticker sizes can be customized according to customer needs.</li>
        <li>
          The anti-scratch and anti-collision features can effectively protect
          the case from scratches or abrasions.
        </li>
        <li>
          They have a fair degree of flexibility and adhere well to surfaces.
        </li>
        <li>
          Epoxy resin stickers are dustproof, waterproof, and weather-resistant.
          So, we can use them for outdoor products.
        </li>
        <li>
          The patterns are bright, and they have a strong sense of fashion. So,
          it will last for a long time. Moreover, it is not easy to fade. And it
          is more resistant to ultraviolet rays.
        </li>
      </ol>
    </div>
  </div>
</div>

 <h2
      className="text-white font-bold text-lg text-center py-4 w-full bg-gradient-to-r from-[#fbc47d] via-[#c87ccf] to-[#4a52b8] p-8 rounded-md shadow-md"
    >
    We can use epoxy resin stickers on below industries:
    </h2>

            <p className="mb-6 leading-relaxed text-lg font-semibold text-gray-700">
             Acctrims specializes in the production of epoxy resin dome stickers. Besides, the product is crystal clear, bright, and transparent. And the crystal texture is strong. Meanwhile, our epoxy dome stickers are suitable for packaging, and decorations. Such as product logo labels, size labels, nameplates, etc.
            </p>
            {/* More content: second block */}
                <div className="mt-4 ">
<h2 className="text-gray-700 font-bold text-lg text-ellipsis">Include :</h2>
  {/* Info Table */}
  <table className="w-full mt-4 border-collapse rounded-md overflow-hidden shadow-sm">
    <tbody>
      <tr className="bg-[#f0f1eb]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
         Clothing, Footwear, Bags 
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
          	Electronic appliances
        </td>
      </tr>
      <tr className="bg-gradient-to-r from-[#e1f0d9] to-[#5db6bc]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
      Sports Equipment
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
        Communication & digital products
        </td>
      </tr>
      <tr className="bg-[#f0f1eb]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
          Video & Audio
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
          	Consumer Electronics
        </td>
      </tr>
      <tr className="bg-gradient-to-r from-[#e1f0d9] to-[#5db6bc]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
       Toys & Gifts
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
       	Jewelry & Crafts
        </td>
      </tr>
       <tr className="bg-[#f0f1eb]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
         All kinds of labels, nameplates
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
          	Charger, fridge magnet
        </td>
      </tr>
      <tr className="bg-gradient-to-r from-[#e1f0d9] to-[#5db6bc]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
    Epoxy label for motorcycle compartment
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
       	Advertising & promotion
        </td>
      </tr>
    </tbody>
  </table>

              <div className="flex flex-col md:flex-row bg-gradient-to-r from-yellow-50 via-yellow-100 to-cyan-400 p-6 mb-6 rounded-lg shadow-md mt-8">
                <div className="md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
                  <img
                    alt="Close-up of pink tag string seals"
                    className="max-w-full h-auto rounded-md shadow"
                    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/343454244/original/0201f5c3508f21a6bc3cf60dbe1a4e9b7f3c365b/design-creative-and-professional-hang-tag-design.png"
                  />
                </div>
                <div className="md:w-1/2 text-base font-medium text-gray-600 leading-relaxed md:pl-4">
                <p>
                   We can drop epoxy resin on the surface of PVC, PC, stickers, or metal materials. The dripping surface is arc-shaped, high in the middle, and inclined on all four sides.
                </p>
                <p>
                  Epoxy dome stickers are fine in workmanship and easy to post. Moreover, with bright colors and crystal-clear transparency
                </p>
                </div>
              </div>
            </div>



   <section className="mt-10">
        <div className="w-full h-20 bg-gradient-to-r from-[#f9c07f] via-[#d96db3] to-[#4a5bc8] flex items-center px-6 rounded-md shadow-md">
          <h2 className="text-white font-bold text-xl">FAQs</h2>
        </div>
        <div className="mt-8 space-y-6 px-2 sm:px-0">
          <div>
            <h3 className="text-[#f47b6a] font-semibold text-lg mb-2">
         1. What is the price to customize 500pcs epoxy dome stickers for my wireless charger brands?
            </h3>
            <p className="text-sm text-[#1a1a1a]">
             –The price depends on your custom size, color, technics, and quantity. Prices are not fixed. It needs our business expert to calculate according to your specific needs. You can request a free quote via online service, email, or the quote button.
            </p>
          </div>

          <div>
            <h3 className="text-[#f47b6a] font-semibold text-lg mb-2">
              2. What are the mass production time and shipping time?
            </h3>
            <p className="text-sm text-[#1a1a1a]">
              -Mass production time is 15-20 days. Shipping time is 3-6 business days by express.
            </p>
          </div>

          <div>
            <h3 className="text-[#f47b6a] font-semibold text-lg mb-2">
              3. What profile is needed when production?
            </h3>
            <p className="text-sm text-[#1a1a1a]">
              -Please send us your vector design files/logo files, like PDF, AI, ESP, CDR, or original files from PSD. If you have no art file, we offer free design for you
            </p>
          </div>

          <div>
            <h3 className="text-[#f47b6a] font-semibold text-lg mb-2">
              4. What is the order process?
            </h3>
            <p className="text-sm text-[#1a1a1a]">
             –First, we need to discuss basic information with each other. Such as size, color, material, quantity, technics, etc. Then our product expert will give you the price and invoice. Then, you can pay. After you pay, we will make the design for you. After you confirm the design, we can arrange the bulk production. We offer free design and worldwide shipping. 
            </p>
          </div>

        </div>
      </section>

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
      </section>

          </main>

          {/* Right Sidebar */}
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
                  <li key={index} className="hover:text-yellow-600 cursor-pointer">{post}</li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="space-y-2 text-base font-medium text-gray-700">
              {[
                'bags', 'buttons', 'company news', 'fasteners',
                'garment accessories', 'garment trims',"hang tag string", "hang tags", "hangers", "ideas and inspirations", "labels and tags", "leather", "metal accessories", "packaging solutions", "paper bags", "patches", "plastic bags", "project samples", "ribbon & tape & bands", "stickers", "textiles and fabrics", "tissue paper", "woven labels", "zipper pulls",
              ].map((tag, index) => (
                <a key={index} className="block text-yellow-400 hover:underline" href="#">
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

export default CustomSticker;