import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";
import QuoteForm from "./QuoteForm"; 


const HangTangString = () => {
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
            How to select custom hang tag string suppliers for your business?
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
              “Sunrise” is custom <strong>hang tag string suppliers</strong> and manufacturer for swing hang tags hung on clothing. We supply durable and high-end tag string rope & thread. Here you can customize any color, size, or string style for your clothing.
            </p>
            <p className="mb-6 leading-relaxed text-lg font-semibold text-gray-700">
              Then, string seals are the middle snap lock pin. They are loop fasteners or hook ties made from plastic, metal, or epoxy material. You can engrave or print your logo on the seal for brand visibility.
            </p>
            <p className="mb-6 leading-relaxed text-base font-medium text-gray-600">
              So, how to select hang tag string suppliers for your business? This article will tell you the answer.
            </p>

            <div className="mb-6 p-6 font-bold text-white text-xl sm:text-2xl leading-tight max-w-full bg-gradient-to-r from-[#f9c37e] via-[#e87db9] to-[#5f5fc1] rounded-md">
              How to select hang tag string suppliers for your business?
            </div>

            <p className="mb-6 leading-relaxed text-lg font-semibold text-gray-700">
              First of all, you should choose hang tag string suppliers that integrate design, development, and production.
            </p>

            {/* Info + Image Block */}
            <div className="bg-[#d1d9e0] p-6 flex flex-col md:flex-row gap-6 rounded-md shadow-sm">
              <p className="text-sm md:text-lg font-semibold text-gray-700 leading-relaxed md:w-1/2">
                It is recommended to choose a supplier that can provide a one-stop purchasing service. Such as Sunrise. Here, you can customize the hang tags with the brand logo. Also, you can order custom hang tag string with logos, price stickers, safety pins, and other accessories related to clothing tag rope. Ordering a whole string of clothing tags will greatly save you time and costs.
              </p>
              <img
                alt="Tag strings with fasteners"
                className="md:w-1/2 w-full h-[280px] object-cover rounded"
                src="https://storage.googleapis.com/a1aa/image/d3474916-9450-49c4-c539-df82fc9d8a42.jpg"
              />
            </div>

            {/* More content: second block */}
            <div className="mt-10">
              <p className="mb-6 text-lg font-semibold text-gray-700">
                Second, you need to choose hang tag string suppliers that can supply different materials to suit your needs.
              </p>

              <div className="flex flex-col md:flex-row bg-gradient-to-r from-yellow-50 via-green-100 to-cyan-400 p-6 mb-6 rounded-lg shadow-md">
                <div className="md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
                  <img
                    alt="Close-up of pink tag string seals"
                    className="max-w-full h-auto rounded-md shadow"
                    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/343454244/original/0201f5c3508f21a6bc3cf60dbe1a4e9b7f3c365b/design-creative-and-professional-hang-tag-design.png"
                  />
                </div>
                <div className="md:w-1/2 text-lg font-semibold text-gray-700 leading-relaxed md:pl-6">
                  At Sunrise, string seals are available in plastic, metal, zinc alloy, ABS, epoxy, and aluminum. Tag rope also has many different materials. For example, plastic ropes, ribbon ropes, cotton ropes, velvet/polyester/grosgrain/elastic ropes, jute, wax cotton, etc.
                </div>
              </div>

              <p className="mb-6 text-lg font-semibold text-gray-700">
                In addition, it’s best to choose suppliers and manufacturers who can <strong>customize swing tag strings</strong> for you.
              </p>

              <div className="flex flex-col md:flex-row bg-slate-200 p-6 rounded-lg shadow-md gap-2">
                <div className="md:w-1/2 text-base leading-relaxed md:text-lg font-semibold text-gray-700 mb-4 md:mb-0">
                  Especially for small companies, cutting-edge designer brands, and new brand startups, companies that can customize brand logos are the most suitable. A custom logo can expose your brand to many potential customers. This will virtually bring you more potential customers.
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                  <img
                    alt="Black tag string seals with anchor logo"
                    className="max-w-full h-auto rounded-md shadow"
                    src="https://img.alicdn.com/imgextra/i3/6000000002471/O1CN01KM08IW1U7lOSjI8Ty_!!6000000002471-0-tbvideo.jpg"
                  />
                </div>
              </div>

             {/* Product lists and images */}
<div className="mt-8 bg-gradient-to-r from-[#d3e7c9] to-[#4ba9b3] p-6 rounded-md">
  <ul className="list-disc list-inside text-black text-base leading-relaxed space-y-1">
    <li>Wax rope strings</li>
    <li>Epoxy strings</li>
    <li>Alloy strings</li>
    <li>Universal strings (no logo)</li>
    <li>Online stock strings</li>
    <li>Ribbon strings</li>
    <li>Hot-stamped gold/silver strings</li>
    <li>Bullet strings</li>
    <li>Cylindrical strings</li>
    <li>ABS seal strings</li>
    <li>Aluminum strings</li>
    <li>Clear logo strings</li>
    <li>Leather hang tag string</li>
  </ul>
</div>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <img
                    alt="Polyester hang tag string with plastic seals and embossed logos on gray background"
                    className="w-full rounded-md"
                    height={400}
                    src="https://www.clothingtags.cn/wp-content/uploads/2022/03/hang-tag-string-1197-768x512.jpg"
                    width={600}
                  />
                  <p className="text-gray-700 text-base font-medium mt-2">
                    Polyester hang tag string with plastic seals and embossed logos
                  </p>
                </div>
                <div>
                  <img
                    alt="Black satin hang tag strings with epoxy seals and gold logos on white background"
                    className="w-full rounded-md"
                    height={400}
                    src="https://www.clothingtags.cn/wp-content/uploads/2022/03/hang-tag-string-1188-768x512.jpg"
                    width={600}
                  />
                  <p className="text-gray-700 text-base font-medium mt-2">
                    Black satin hang tag strings with epoxy seals and gold logos
                  </p>
                </div>
              </div>
            </div>


  {/* Heading Section */}
  <div className="mt-16 ">
  <div className="w-full bg-gradient-to-r from-[#fbc47d] via-[#c87ccf] to-[#4a52b8] p-8 rounded-md shadow-md">
    <h2 className="text-white font-bold text-xl md:text-2xl leading-snug max-w-3xl">
      Details you should know about hang tag string suppliers
    </h2>
  </div>

  {/* Info Table */}
  <table className="w-full mt-8 border-collapse rounded-md overflow-hidden shadow-sm">
    <tbody>
      <tr className="bg-[#f0f1eb]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
          Seal Shape
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
          Rectangle, cylindrical, square, round, etc; customized shape; any
          shape is available by your need;
        </td>
      </tr>
      <tr className="bg-gradient-to-r from-[#e1f0d9] to-[#5db6bc]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
          <div>LOGO</div>
          <div>technics</div>
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
          3D embossing; laser engraving; gold/silver hot-stamping; screen
          printing; epoxy, etc;
        </td>
      </tr>
      <tr className="bg-[#f0f1eb]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
          Color
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
          Pink, black, white, red, grey, yellow, blue, green, etc; customized
          color; Pantone color
        </td>
      </tr>
      <tr className="bg-gradient-to-r from-[#e1f0d9] to-[#5db6bc]">
        <th
          scope="row"
          className="text-left font-bold text-sm px-4 py-4 align-top w-40"
        >
          MOQ
        </th>
        <td className="text-base text-[#333333] px-4 py-4">
          No MOQ! The MOQ is determined by the style. Some have no MOQ! Some
          styles have MOQ(1000pcs)!
        </td>
      </tr>
    </tbody>
  </table>

  {/* Images Section */}
  <div className="mt-16 bg-[#d1d9e0] grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-md shadow-md">
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


   <section className="mt-10">
        <div className="w-full h-20 bg-gradient-to-r from-[#f9c07f] via-[#d96db3] to-[#4a5bc8] flex items-center px-6 rounded-md shadow-md">
          <h2 className="text-white font-bold text-xl">FAQs</h2>
        </div>
        <div className="mt-8 space-y-6 px-2 sm:px-0">
          <div>
            <h3 className="text-[#f47b6a] font-semibold text-lg mb-2">
              1. What is the price to customize hang tag string with logos?
            </h3>
            <p className="text-sm text-[#1a1a1a]">
              -The price depends on your custom size, color, technics, and quantity. So, you can send us your design art file, we make a free design for you.
            </p>
          </div>

          <div>
            <h3 className="text-[#f47b6a] font-semibold text-lg mb-2">
              2. Can the hang tag string be customized together with the hang tags? Are they a set?
            </h3>
            <p className="text-sm text-[#1a1a1a]">
              -Yes. They can be customized together. In this way, the color and size of hang tags and strings can be unified. It also saves time and costs. However, at Sunrise, you can also order individual hang tags or tag ropes.
            </p>
          </div>

          <div>
            <h3 className="text-[#f47b6a] font-semibold text-lg mb-2">
              3. What is the bulk production time and shipping time?
            </h3>
            <p className="text-sm text-[#1a1a1a]">
              -Bulk goods are about 10 to 20 days. Shipping time is 3-6 business days by express.
            </p>
          </div>

          <div>
            <h3 className="text-[#f47b6a] font-semibold text-lg mb-2">
              4. What profile is needed when production?
            </h3>
            <p className="text-sm text-[#1a1a1a]">
              -Please send us vector logo files, like PDF, AI, EPS, CDR, or original files from PSD. If you have no art file, we offer free design for you.
            </p>
          </div>

          <div>
            <h3 className="text-[#f47b6a] font-semibold text-lg mb-2">
              5. Can we get free samples?
            </h3>
            <p className="text-sm text-[#1a1a1a]">
              -Yes, you can. Our samples are free, you just need to pay the shipping cost.
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
</div>
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

export default HangTangString;
