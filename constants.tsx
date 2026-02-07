
export const BUSINESS_INFO = {
  name: "Nailed It Boutique",
  address: "288 Illawarra Rd, Marrickville NSW 2204",
  phone: "0450 855 828",
  phoneDisplay: "0450 855 828",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=288+Illawarra+Rd+Marrickville+NSW+2204",
  rating: 4.3,
  reviewCount: "85+",
  bookingUrl: "https://book24seven.com/NailedItBoutiques?iframe=1",
  hours: [
    { days: "Mon - Wed, Fri", time: "9:30 AM - 6:00 PM" },
    { days: "Thursday", time: "9:30 AM - 8:00 PM" },
    { days: "Saturday", time: "9:00 AM - 5:00 PM" },
    { days: "Sunday", time: "10:00 AM - 5:00 PM" }
  ]
};

export interface Service {
  title: string;
  description: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    title: "Manicure",
    description: "Expert shaping, cuticle care, and premium polish application for flawlessly beautiful hands.",
    image: "https://images.unsplash.com/photo-1610992015732-2449b0c26670?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Pedicure",
    description: "A rejuvenating treatment including foot soak, exfoliation, and relaxing massage for tired feet.",
    image: "https://images.unsplash.com/photo-1519415510236-855911994636?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Nail Art",
    description: "Express your unique style with our creative, handcrafted designs and detailed custom artistry.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800"
  }
];
