import { generateSlug } from "../../../lib/slugify"; 

  const BlogProducts = [
  {
    id: 1,
    title: 'Black baseball cap',
    price: 12,
    image: 'https://storage.googleapis.com/a1aa/image/95514d06-5f74-46d5-af8c-27ce876abe11.jpg',
    bg: '',
    badge: null,
    description: `This stylish black baseball cap is perfect for everyday wear. 
- Durable and breathable material
- Adjustable strap for a custom fit
- Suitable for all head sizes
- Ideal for sun protection
- Comes with a branded carry pouch.`,
    sizeAndFit: `One size fits all. Adjustable strap at the back ensures a snug fit.`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 2,
    title: 'Iridescent iPhone case',
    price: 19,
    image: 'https://storage.googleapis.com/a1aa/image/f0e9b45e-4c01-42bc-efb5-d5728ce3865a.jpg',
    bg: '',
    badge: 'New',
    description: `This iridescent phone case with a silver chain is a perfect choice for any lady looking for quality phone protection. 
- Bright & lightweight
- Fits any phone or smartphone
- Offers full protection
- Has additional inside pockets
- Comes with a branded dust bag.`,
    sizeAndFit: `Universal fit for all standard-sized smartphones.`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 3,
    title: 'Black analogue watch',
    price: 43,
    image: 'https://storage.googleapis.com/a1aa/image/c941ca74-026c-4b01-76b5-d6441955ad0e.jpg',
    bg: '',
    badge: null,
    description: `Elegant black analogue watch with a timeless design. 
- Water-resistant
- Quartz movement
- Comfortable leather strap
- Scratch-resistant glass
- Minimalist dial.`,
    sizeAndFit: `Adjustable strap fits wrist sizes from 6" to 9".`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 4,
    title: 'Ombré vinyl backpack',
    price: 29,
    image: 'https://storage.googleapis.com/a1aa/image/948030d8-a4dc-40c3-b9c5-f309f5d64004.jpg',
    bg: '',
    originalPrice: 37,
    badge: '-22%',
    description: `Trendy ombré vinyl backpack with functional design. 
- Spacious compartments
- Durable waterproof material
- Stylish ombré finish
- Comfortable shoulder straps
- Ideal for daily use or travel.`,
    sizeAndFit: `Fits up to 15" laptops with plenty of storage space.`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 5,
    title: 'Golden earrings',
    price: 25,
    image: 'https://tse2.mm.bing.net/th?id=OIP.yYcDeE_2ElRZvMYnu_L1JgHaHa&pid=Api&P=0&h=220',
    bg: '',
    badge: null,
    description: `Elegant golden earrings for all occasions. 
- Hypoallergenic metal
- Lightweight & comfortable
- Timeless design
- Suitable for sensitive ears
- Comes with a gift box.`,
    sizeAndFit: `One size. Approx. length: 2.5cm.`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
].map(product => ({
	...product,
	slug : generateSlug(product.title),
}))


export default BlogProducts; 

