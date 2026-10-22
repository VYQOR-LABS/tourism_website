export interface FlightSafari {
  id: string;
  title: string;
  region: string;
  duration: string;
  route: string;
  image: string;
  imageAlt: string;
  description: string;
  accommodation: string[];
  itinerary: string[];
  priceForTwo: string;
  priceForFour: string;
  flightBudget?: string;
}

export const flightSafaris: FlightSafari[] = [
  {
    id: "kenya-classic-flying-safari",
    title: "Kenya Classic Flying Safari",
    region: "Kenya",
    duration: "7 days / 6 nights",
    route: "Nairobi – Samburu – Maasai Mara – Amboseli – Nairobi",
    image: "/amboseli-elephants-kilimanjaro.jpg",
    imageAlt: "Elephants in Amboseli with Mount Kilimanjaro behind them",
    description: "A premium flying safari connecting three of Kenya's celebrated wildlife regions.",
    accommodation: [
      "Sheraton Nairobi Hotel",
      "Sarova Shaba Game Lodge or Samburu Intrepids",
      "Sarova Mara Game Camp",
      "Amboseli Serena Safari Lodge",
    ],
    itinerary: [
      "Day 1: Arrive at JKIA, meet your representative and transfer to Nairobi for an overnight stay with breakfast.",
      "Day 2: Fly to Samburu, transfer to the lodge, then enjoy an afternoon game drive and dinner.",
      "Day 3: Morning and afternoon game drives in Samburu National Reserve.",
      "Day 4: Fly via Nairobi to the Maasai Mara for an afternoon game drive.",
      "Day 5: Full-day game viewing in the Maasai Mara, with opportunities to look for the Big Five.",
      "Day 6: Fly to Amboseli for an afternoon game drive beneath Mount Kilimanjaro.",
      "Day 7: Morning game drive, return to Nairobi, refresh at a day room and transfer to JKIA.",
    ],
    priceForTwo: "$6,300",
    priceForFour: "$5,700",
  },
  {
    id: "kenya-to-uganda-gorillas",
    title: "Kenya to Uganda — Gorillas & the Pearl of Africa",
    region: "Uganda",
    duration: "7 days / 6 nights",
    route: "Nairobi – Entebbe – Bwindi – Queen Elizabeth National Park – Entebbe",
    image: "/bwindi-mountain-gorilla.jpg",
    imageAlt: "Mountain gorilla in Uganda's Bwindi forest",
    description: "Fly from Nairobi to Uganda for a gorilla trek, wildlife viewing and a Kazinga Channel boat cruise.",
    accommodation: [
      "Kampala Serena Hotel",
      "A premium Bwindi-area forest lodge",
      "Mweya Safari Lodge",
    ],
    itinerary: [
      "Day 1: Fly from Nairobi to Entebbe and transfer to Kampala for an overnight stay.",
      "Day 2: Travel through scenic highlands to southwestern Uganda.",
      "Day 3: Gorilla trekking in Bwindi Impenetrable National Park, subject to permit availability.",
      "Day 4: Travel to Queen Elizabeth National Park.",
      "Day 5: Morning game drive and a boat cruise along the Kazinga Channel.",
      "Day 6: Return toward Entebbe, with an optional cultural stop.",
      "Day 7: Take the return flight to Nairobi.",
    ],
    priceForTwo: "$4,250",
    priceForFour: "$3,850",
    flightBudget: "Approximately $350–$500 return per person.",
  },
  {
    id: "kenya-to-tanzania-zanzibar",
    title: "Kenya to Tanzania — Safari & Zanzibar Beach Escape",
    region: "Tanzania",
    duration: "7 days / 6 nights",
    route: "Nairobi – Kilimanjaro – Serengeti – Ngorongoro – Zanzibar",
    image: "/serengeti-sunrise.jpg",
    imageAlt: "Sunrise over the Serengeti",
    description: "Combine a Serengeti and Ngorongoro safari with time on Zanzibar's Indian Ocean coast.",
    accommodation: [
      "Arusha Serena Hotel",
      "Serengeti Serena Safari Lodge",
      "Ngorongoro Serena Safari Lodge",
      "A premium beachfront resort in Zanzibar",
    ],
    itinerary: [
      "Day 1: Fly from Nairobi to Kilimanjaro Airport and transfer to Arusha.",
      "Day 2: Travel to Serengeti National Park for an afternoon game drive.",
      "Day 3: Full-day wildlife viewing in the Serengeti.",
      "Day 4: Travel to the Ngorongoro Conservation Area and enjoy crater-area scenery.",
      "Day 5: Fly or transfer to Zanzibar, depending on the confirmed flight schedule.",
      "Day 6: Relax on the beach, with optional snorkelling or a Stone Town excursion.",
      "Day 7: Transfer to Zanzibar Airport and fly back to Nairobi, subject to flight connections.",
    ],
    priceForTwo: "$4,950",
    priceForFour: "$4,350",
    flightBudget: "Approximately $400–$650 return for the Nairobi–Tanzania international sector; domestic flights may be additional.",
  },
  {
    id: "kenya-to-rwanda-akagera-volcanoes",
    title: "Kenya to Rwanda — Kigali, Akagera & Volcanoes",
    region: "Rwanda",
    duration: "6 days / 5 nights",
    route: "Nairobi – Kigali – Akagera National Park – Volcanoes National Park – Kigali",
    image: "/volcanoes-rwanda-gorilla.jpg",
    imageAlt: "Mountain gorilla habitat in Rwanda's Volcanoes region",
    description: "A Rwanda journey pairing Akagera wildlife with the volcanic highlands near Volcanoes National Park.",
    accommodation: [
      "Kigali Serena Hotel",
      "Ruzizi Tented Lodge",
      "A premium lodge in the Volcanoes National Park region",
    ],
    itinerary: [
      "Day 1: Fly from Nairobi to Kigali and transfer to Kigali Serena Hotel.",
      "Day 2: Travel to Akagera National Park for wildlife viewing and an afternoon game drive.",
      "Day 3: Early game drive and optional Lake Ihema boat excursion, then return toward Kigali.",
      "Day 4: Travel to Musanze and the Volcanoes National Park region.",
      "Day 5: Choose a guided nature walk or gorilla trek, subject to permit availability and budget.",
      "Day 6: Return to Kigali and fly back to Nairobi.",
    ],
    priceForTwo: "$3,950",
    priceForFour: "$3,500",
    flightBudget: "Approximately $500–$750 return per person; fares vary considerably by date.",
  },
];

export const flightPackageInclusions = [
  "Airport meet-and-greet services and scheduled transfers.",
  "Accommodation at the listed hotels and safari lodges.",
  "Meals as specified in the confirmed itinerary.",
  "International and domestic flights where expressly listed in the confirmed package.",
  "Park entrance and conservation fees where specified.",
  "Scheduled game drives, guided excursions and professional local driver-guides.",
  "Boat trips and cultural experiences where specified.",
  "Emergency evacuation cover, subject to insurer terms and eligibility.",
  "Hotel taxes and government levies where included in the final quotation.",
];

export const flightPackageExclusions = [
  "International flights not specifically listed as included.",
  "Gorilla and chimpanzee permits unless explicitly included.",
  "Visas, tips, gratuities and travel insurance beyond stated evacuation cover.",
  "Optional activities, premium beverages and personal expenses.",
  "Single-room supplements and seasonal surcharges.",
];
