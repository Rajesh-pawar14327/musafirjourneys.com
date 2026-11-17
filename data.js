/* =========================================================
   MUSAFIR JOURNEYS — EDITABLE CONTENT
   Change packages, prices, destinations, photos and reviews
   here. No need to touch index.html or script.js.
   NOTE: prices / itineraries below are SAMPLE placeholders —
   replace with your real rates before going live.
   ========================================================= */

const U = (id) => `img/${id}.jpg`;

window.MJ = {
  whatsapp: "918390609646",
  phone: "+91 83906 09646",

  /* Prices are kept below but HIDDEN while rates are being finalised.
     Set to true to show "From ₹…" on destinations and packages again. */
  showPrices: false,

  /* Short promises shown above the packages (edit freely — keep only what you can deliver). */
  promises: ["Free itinerary in 24 hours", "No booking fees", "Pay only when you love the plan", "Real people on WhatsApp, 9 AM – 9 PM"],

  /* ---------- Trending Destinations ----------
     1) `destinations` = every destination card (id, name, tagline, region, sample "from" price, photo).
     2) `topLists` = the ranked TOP 10 shown in each tab, by id. Reorder / swap ids to change a tab.
     Each tab shows the first `destinationsInitial` cards; "See more" reveals the rest.
     Ranking based on 2026 travel reports (Booking.com, Skyscanner, MakeMyTrip, Wise, Agoda). */
  destinationsInitial: 6,

  destinations: [
    // ---- India ----
    { id: "kashmir",    name: "Kashmir",             tag: "Paradise on Earth",          region: "india", best: "Mar–Jun · Dec–Feb", days: "5–7 days", from: "₹18,999",   img: U("photo-1595815771614-ade9d652a65d", 900) },
    { id: "kerala",     name: "Kerala",              tag: "God's Own Country",          region: "india", best: "Sep–Mar", days: "5–6 days", from: "₹15,999",   img: U("photo-1602216056096-3b40cc0c9944", 900) },
    { id: "goa",        name: "Goa",                 tag: "Sun, Sand & Sundowners",     region: "india", best: "Nov–Feb", days: "3–5 days", from: "₹12,999",   img: U("photo-1614082242765-7c98ca0f3df3", 900) },
    { id: "rajasthan",  name: "Rajasthan",           tag: "Jaipur · Udaipur · Jodhpur", region: "india", best: "Oct–Mar", days: "6–8 days", from: "₹14,999",   img: U("photo-1477587458883-47145ed94245", 900) },
    { id: "himachal",   name: "Himachal",            tag: "Manali · Shimla Hills",      region: "india", best: "Mar–Jun", days: "5–7 days", from: "₹13,999",   img: U("photo-1597167231350-d057a45dc868", 900) },
    { id: "ladakh",     name: "Ladakh",              tag: "Roof of the World",          region: "india", best: "Jun–Sep", days: "6–8 days", from: "₹24,999",   img: U("photo-1626621341517-bbf3d9990a23", 900) },
    { id: "andaman",    name: "Andaman",             tag: "Turquoise Island Escapes",   region: "india", best: "Oct–May", days: "5–7 days", from: "₹22,999",   img: U("photo-1586359716568-3e1907e4cf9f", 900) },
    { id: "rishikesh",  name: "Rishikesh",           tag: "Yoga Capital · Ganga Aarti", region: "india", best: "Sep–Apr", days: "3–4 days", from: "₹9,999",    img: U("photo-1720819029162-8500607ae232", 900) },
    { id: "darjeeling", name: "Sikkim & Darjeeling", tag: "Himalayan Tea Trails",       region: "india", best: "Mar–May · Oct–Dec", days: "6–8 days", from: "₹16,999",   img: U("photo-1622308644420-b20142dc993c", 900) },
    { id: "varanasi",   name: "Varanasi",            tag: "Spiritual Heart of India",   region: "india", best: "Oct–Mar", days: "2–3 days", from: "₹8,999",    img: U("photo-1561359313-0639aad49ca6", 900) },
    { id: "manali",     name: "Manali",              tag: "Snowy Hill Romance",         region: "india", best: "Oct–Jun", days: "4–6 days", from: "₹14,999",   img: U("photo-1712388430474-ace0c16051e2", 900) },
    { id: "udaipur",    name: "Udaipur",             tag: "City of Lakes",              region: "india", best: "Sep–Mar", days: "3–4 days", from: "₹17,999",   img: U("photo-1615836245337-f5b9b2303f10", 900) },
    // ---- International ----
    { id: "thailand",   name: "Thailand",            tag: "Land of Smiles",             region: "intl", best: "Nov–Mar", days: "5–7 days",  from: "₹34,999",   img: U("photo-1528181304800-259b08848526", 900) },
    { id: "dubai",      name: "Dubai",               tag: "City of Gold",               region: "intl", best: "Nov–Mar", days: "4–5 days",  from: "₹44,999",   img: U("photo-1512453979798-5ea266f8880c", 900) },
    { id: "bali",       name: "Bali",                tag: "Island of Gods",             region: "intl", best: "Apr–Oct", days: "6–7 days",  from: "₹45,999",   img: U("photo-1537996194471-e657df975ab4", 900) },
    { id: "singapore",  name: "Singapore",           tag: "The Lion City",              region: "intl", best: "All year", days: "4–5 days",  from: "₹52,999",   img: U("photo-1508964942454-1a56651d54ac", 900) },
    { id: "vietnam",    name: "Vietnam",             tag: "Ha Long Bay · Hanoi",        region: "intl", best: "Oct–Apr", days: "7–9 days",  from: "₹39,999",   img: U("photo-1528127269322-539801943592", 900) },
    { id: "japan",      name: "Japan",               tag: "Fuji · Kyoto · Tokyo",       region: "intl", best: "Mar–May · Oct–Nov", days: "7–10 days",  from: "₹1,09,999", img: U("photo-1526481280693-3bfa7568e0f3", 900) },
    { id: "malaysia",   name: "Malaysia",            tag: "Truly Asia",                 region: "intl", best: "Dec–Apr", days: "4–6 days",  from: "₹36,999",   img: U("photo-1596422846543-75c6fc197f07", 900) },
    { id: "maldives",   name: "Maldives",            tag: "Overwater Villas",           region: "intl", best: "Nov–Apr", days: "4–5 days",  from: "₹79,999",   img: U("photo-1514282401047-d79a71a590e8", 900) },
    { id: "europe",     name: "Europe",              tag: "Paris · Swiss Alps",         region: "intl", best: "Apr–Sep", days: "10–14 days",  from: "₹1,49,999", img: U("photo-1499856871958-5b9627545d1a", 900) },
    { id: "srilanka",   name: "Sri Lanka",           tag: "Pearl of the Indian Ocean",  region: "intl", best: "Dec–Apr", days: "6–8 days",  from: "₹32,999",   img: U("photo-1566296314736-6eaac1ca0cb9", 900) },
    { id: "mauritius",  name: "Mauritius",           tag: "Lagoons & Luxury",           region: "intl", best: "May–Dec", days: "6–7 days",  from: "₹74,999",   img: U("photo-1513415277900-a62401e19be4", 900) },
    { id: "switzerland",name: "Switzerland",         tag: "Alpine Romance",             region: "intl", best: "May–Sep", days: "7–9 days",  from: "₹1,39,999", img: U("photo-1530122037265-a5f1f91d3b99", 900) },
    { id: "krabi",      name: "Phuket & Krabi",      tag: "Island-Hopping Bliss",       region: "intl", best: "Nov–Apr", days: "5–6 days",  from: "₹42,999",   img: U("photo-1686238349945-82074ce9f02f", 900) },
  ],

  topLists: {
    all:       ["thailand", "dubai", "bali", "kashmir", "goa", "kerala", "maldives", "singapore", "vietnam", "rajasthan"],
    india:     ["kashmir", "kerala", "goa", "rajasthan", "himachal", "ladakh", "andaman", "rishikesh", "darjeeling", "varanasi"],
    intl:      ["thailand", "dubai", "bali", "singapore", "vietnam", "japan", "malaysia", "maldives", "europe", "srilanka"],
    honeymoon: ["maldives", "bali", "mauritius", "switzerland", "krabi", "kashmir", "kerala", "andaman", "manali", "udaipur"],
  },

  packages: [
    {
      title: "Kashmir — Heaven Unveiled", perks: ["hotel","meals","cab","tours"], idealFor: "Couples & families", place: "Srinagar · Gulmarg · Pahalgam", nights: "5N / 6D",
      price: "₹21,999", badge: "Bestseller",
      img: U("photo-1598091383021-15ddea10925d"),
      highlights: ["Shikara ride on Dal Lake", "Gondola ride in Gulmarg", "Betaab & Aru valley", "Houseboat night stay"],
      days: ["Arrive Srinagar, houseboat check-in & Shikara ride", "Mughal gardens & local market", "Day trip to Gulmarg (Gondola optional)", "Transfer to Pahalgam — Betaab & Aru valleys", "Sonamarg excursion", "Departure"],
      inc: ["4★ hotels + 1 night houseboat", "Daily breakfast & dinner", "Private cab for all transfers", "All sightseeing as per itinerary"],
    },
    {
      title: "Kerala Backwater Bliss", perks: ["hotel","meals","cab","tours"], idealFor: "Honeymooners & couples", place: "Munnar · Thekkady · Alleppey", nights: "4N / 5D",
      price: "₹17,499", badge: "Honeymoon pick",
      img: U("photo-1602216056096-3b40cc0c9944"),
      highlights: ["Private houseboat in Alleppey", "Tea gardens of Munnar", "Periyar wildlife & spice walk", "Kathakali show"],
      days: ["Arrive Kochi, drive to Munnar", "Munnar tea estates & Eravikulam", "Thekkady — spice plantation & boating", "Alleppey houseboat overnight", "Departure from Kochi"],
      inc: ["Handpicked resorts", "Breakfast daily, all meals on houseboat", "Private AC vehicle", "Candle-light dinner for couples"],
    },
    {
      title: "Bali Island Escape", perks: ["hotel","meals","cab","visa"], idealFor: "Couples & friends", place: "Ubud · Kintamani · Nusa Penida", nights: "6N / 7D",
      price: "₹48,999", badge: "International",
      img: U("photo-1537996194471-e657df975ab4"),
      highlights: ["Ubud swing & rice terraces", "Nusa Penida day cruise", "Sunset at Tanah Lot", "Private pool villa option"],
      days: ["Arrive Bali, villa check-in", "Ubud — monkey forest, rice terraces, swing", "Kintamani volcano view & coffee plantation", "Nusa Penida island tour", "Leisure / water sports", "Uluwatu temple & Kecak dance", "Departure"],
      inc: ["4★ resorts / pool villa", "Daily breakfast", "Private transfers & tours", "Visa-on-arrival assistance"],
    },
    {
      title: "Royal Rajasthan Trail", perks: ["hotel","meals","cab","tours"], idealFor: "Families & culture lovers", place: "Jaipur · Jodhpur · Udaipur", nights: "6N / 7D",
      price: "₹24,999", badge: "Heritage",
      img: U("photo-1477587458883-47145ed94245"),
      highlights: ["Amber Fort & Hawa Mahal", "Mehrangarh Fort", "Lake Pichola boat ride", "Stay in a heritage haveli"],
      days: ["Arrive Jaipur", "Jaipur city palace & forts", "Drive to Jodhpur via Pushkar", "Mehrangarh & blue city walk", "Drive to Udaipur via Ranakpur", "Udaipur palaces & lake cruise", "Departure"],
      inc: ["Heritage & 4★ hotels", "Daily breakfast", "Private AC car with driver", "Monument entry assistance"],
    },
    {
      title: "Dubai Luxe Getaway", perks: ["hotel","meals","visa","tours"], idealFor: "Families & first-timers abroad", place: "Dubai · Abu Dhabi", nights: "4N / 5D",
      price: "₹52,999", badge: "Family favourite",
      img: U("photo-1512453979798-5ea266f8880c"),
      highlights: ["Burj Khalifa 124th floor", "Desert safari with BBQ dinner", "Dhow cruise at Marina", "Abu Dhabi Grand Mosque"],
      days: ["Arrive Dubai, evening Dhow cruise", "City tour + Burj Khalifa", "Desert safari", "Abu Dhabi day trip", "Shopping & departure"],
      inc: ["4★ hotel", "Daily breakfast", "Dubai visa", "All transfers & tours on SIC/private"],
    },
    {
      title: "Ladakh High Passes", perks: ["hotel","meals","cab","permits"], idealFor: "Adventurers & road-trippers", place: "Leh · Nubra · Pangong", nights: "6N / 7D",
      price: "₹27,999", badge: "Adventure",
      img: U("photo-1626621341517-bbf3d9990a23"),
      highlights: ["Khardung La pass", "Camel ride in Nubra dunes", "Night at Pangong Lake", "Monasteries of Leh"],
      days: ["Arrive Leh — rest & acclimatise", "Leh local sightseeing", "Leh → Nubra via Khardung La", "Nubra → Pangong", "Pangong → Leh", "Sham valley", "Departure"],
      inc: ["Hotels & camps", "Breakfast & dinner", "Innova/Xylo for all transfers", "Inner line permits"],
    },
  ],

  gallery: [
    { img: U("photo-1506905925346-21bda4d32df4", 1000), cap: "Himalayan sunrise" },
    { img: U("photo-1514282401047-d79a71a590e8", 1000), cap: "Maldives lagoon" },
    { img: U("photo-1524492412937-b28074a5d7da", 1000), cap: "Taj Mahal, Agra" },
    { img: U("photo-1528181304800-259b08848526", 1000), cap: "Temples of Thailand" },
    { img: U("photo-1476514525535-07fb3b4ae5f1", 1000), cap: "Alpine lakes" },
    { img: U("photo-1499856871958-5b9627545d1a", 1000), cap: "Paris evenings" },
    { img: U("photo-1493246507139-91e8fad9978e", 1000), cap: "Lakeside escapes" },
    { img: U("photo-1512453979798-5ea266f8880c", 1000), cap: "Dubai skyline" },
  ],

  testimonials: [
    { name: "Priya & Rohan", trip: "Kashmir Honeymoon", text: "Every single detail was taken care of — from the houseboat surprise to the snow in Gulmarg. It felt like travelling with family who knew exactly what we'd love.", stars: 5 },
    { name: "Mehta Family",  trip: "Dubai, family of 4", text: "Travelling with two kids is never easy, but the planning was so smooth. The desert safari was the highlight. Quick replies on WhatsApp even at midnight!", stars: 5 },
    { name: "Ankit S.",      trip: "Ladakh Road Trip", text: "Honest pricing, great driver, perfectly paced itinerary for acclimatisation. Pangong at night under the stars — unforgettable. Booking again for Spiti.", stars: 5 },
    { name: "Sneha K.",      trip: "Bali Girls' Trip", text: "They customised everything around our budget and still got us a pool villa. The Nusa Penida day was magic. Highly recommend Musafir Journeys!", stars: 5 },
  ],

  faqs: [
    { q: "Can I customise a package?", a: "Absolutely. Every package is just a starting point. Change the hotels, the number of days, add activities or remove them — we'll rebuild the itinerary and price around you." },
    { q: "How do I book and pay?", a: "Once you're happy with the itinerary, confirm with a small advance via UPI or bank transfer. The balance is due before travel. You'll receive all vouchers on WhatsApp and email." },
    { q: "Do you help with visas and flights?", a: "Yes. We assist with tourist visas for popular destinations (Dubai, Thailand, Bali, Europe and more) and can book flights at the best available fares." },
    { q: "What is your cancellation policy?", a: "Cancellation charges depend on the hotels and airlines involved and how close to travel you cancel. We share the exact policy in writing before you pay anything." },
    { q: "Is support really available 24/7?", a: "Yes — once you're travelling, your trip planner and our support line are available on WhatsApp and phone around the clock." },
  ],
};
