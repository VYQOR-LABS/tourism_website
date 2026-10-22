import Container from "@/components/ui/container";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import TermsSidebar from "@/components/terms/terms-sidebar";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata({
  title: "Safariman Expeditions Tour Booking Terms & Payment Conditions",
  description: "Safariman Expeditions tour booking terms, payment conditions, cancellation charges and travel information.",
  path: "/terms",
});

const sections = [
  {
    id: "safari-tour-cancellation-charges",
    title: "Safari Tour Cancellation Charges:",
    paragraphs: [
      "Safariman booking / cancellation conditions are determined by the fact that once hotel , Safari lodge/ camps , local domestic airlines or services are booked on your behalf, we shall incur a cancellation fee if we are required to cancel the booking. We try to keep such cancellation charges to a minimum and they apply as follows calculated as a percentage of the total price:",
    ],
    subheading: "Safari invoice cancellation charges for both Kenya & Tanzania Safaris.",
    bullets: [
      "Cancellation up to 60 days prior to commencement of the safari: Zero cancellation charges.",
      "Cancellation up to 35 days prior to commencement of the safari : 20% cancellation charges",
      "Cancellation up to 15 days prior to commencement of the safari : 50% cancellation charges",
      "Cancellation less than 15 days or more days prior to safari start : 70% cancellation charges",
      "Cancellation 10 days or less before commencement of safari – Zero refund, 100% cancellation charges apply.",
      "Refunds due to you in the event of safari cancellation can only be credited to the original credit / debit card used in making of initial payment, if within 6-months of refund payment.",
      "In the event of a cancellation, a 5% administrative fee will be levied to account for transaction charges. ** Please note that the refund will be completed within 30 days from the date of official cancellation notification.",
      "The refund amount due will be less administrative costs and shall comply with the refund policies of the respective suppliers we have contracted.",
      "Certain suppliers have more stringent cancellation policies, the details of which will be made available on the quotation if applicable and which Safariman Expeditions general cancellation policy is subject to. In the event of such more stringent cancellation policy being applicable, the client will be liable for such more stringent cancellation policy to Safariman.",
    ],
    closing: "Cancellation terms for Uganda & Rwanda shall be shared on request.",
  },
  {
    id: "safari-tour-payment-deposit-and-balance",
    title: "Safari / tour Payment: Deposit and balance:",
    subheading: "Payment terms:",
    bullets: [
      "0% deposit per person for one day safari / tours.",
      "20% deposit per person for 2-3 day safari / tours",
      "30% deposit per person for 4-6 day safari / tours",
      "40% deposit per person for 7-12 day safari tours",
      "50% deposit per person for combined Kenya/ Tanzania safari tours",
    ],
    paragraphs: [
      "Balance due within 15-30 days prior to commencement of your safari arrangements.",
      "Payments (deposit & final balance) are preferred by credit card online.",
      "For persons from overseas, payments are to be made is USD as quoted. Payments in other convertible world currencies can only be made to us subject to prior agreement and current exchange rate.",
    ],
  },
  {
    id: "website-safari-prices-and-surcharges",
    title: "Website Safari prices and surcharges:",
    paragraphs: [
      "All prices published on www.safariman.co.ke are per person (unless otherwise stated) and quoted in US Dollars (USD$). Cost of obtaining passports or visas, border taxes (if applicable), tips for guide, driver and hotel staff, insurances, additional excursions or personal expenses are not included in the itinerary cost. All prices on the website should be used as a guideline only. Safariman Expeditions Limited cannot be held responsible for any changes or pricing errors. We shall provide actual costs in its quotation proposals.",
      "Matters influencing a surcharge would include, but are not limited to, increases in transportation costs (e.g. fuel, scheduled airfares and any other airline surcharges, taxes or fees payable for services such as landing taxes, or embarkation or disembarkation fees at ports or airports), increases in park fees, reserve fees or concession fees, or exchange rates which are relevant to the travel package. The price of your itinerary will be based on the known costs at the time the itinerary is issued.",
      "We reserve the right to make changes to and correct errors in advertised prices at any time if the increment is big and can’t be absorbed.",
    ],
  },
  {
    id: "payment-by-credit-debit-cards",
    title: "Payment by credit / debit cards:",
    paragraphs: [
      "To our esteemed visitors and clients that we highly discourage cash transactions on our platform. For extras this can only be made on ground / arrival to Kenya or on your destination using our POS Machine to Safariman Authorized Staff.",
      "We prefer payment by credit card on-line (Visa , Amex or Mastercard) through our secure online payment system.",
      "Once your booking is confirmed and your sales consultant / Tour manager has emailed you the invoice, you will then receive an email from Safariman with a link that directs you to our secure online payment system, where you can key in your details and process your payment. No transaction fee is added by us for payment of the deposit by debit or credit card.",
      "There is also no transaction fee charged if the full invoice amount is paid at once by credit card. However your credit card company may add their own handling fee for processing a payment outside your home country.",
      "If the final balance is paid by credit card there shall be no extra transaction fee charged. Payment can also be made by debit card in the same way as credit cards. In this case again, no transaction fee is charged.",
    ],
  },
  {
    id: "payment-by-bank-transfer-rtgs",
    title: "Payment by Bank Transfer (RTGS):",
    subheading: "Please Note:",
    paragraphs: [
      "Please note that all our official company bank accounts are exclusively based in Nairobi, Kenya. Safariman does not maintain or operate any bank accounts in any other cities within Kenya or in any foreign countries.",
      "For your security and to avoid fraud, kindly ensure that all payments are made only through the shared link or to the verified bank accounts provided by our official representatives. If you are ever in doubt, please contact us directly through our official communication channels before making any payment.",
    ],
  },
  {
    id: "general-booking-terms",
    title: "General Booking Terms:",
    paragraphs: [
      "We do our best to provide you an enjoyable, trouble-free safari tour but occasionally even the best-laid plans can go wrong.",
      "In the event of a problem whilst you are on a safari tour with us, please inform your tour planning manager via email or WhatsApp ,Lodge Camp Manager if accommodation related and your tour driver / guide immediately. This gives us the opportunity to correct the issue on the spot so that it does not spoil your Safari. If the matter cannot be resolved immediately, please send details of your complaint to us in writing within 20 days of your return from your holiday.",
      "It is therefore a condition of this contract that you communicate any problem to the authority in question whilst on tour. If you fail to follow this simple procedure we cannot accept liability as we have been deprived of the opportunity to investigate and rectify the problem on site.",
    ],
  },
  {
    id: "seasonal-factors-and-resort-facilities",
    title: "Seasonal Factors and Resort Facilities:",
    paragraphs: [
      "Some factors are not under our control and early and late in the season some tourist facilities may not operate. Likewise, swimming pools have to be cleaned and sometimes emptied and maintenance work can affect the availability of certain amenities.",
      "Public holidays and religious festivals throughout the year (particularly Christmas & Ramadhan) may have an impact on the ambience of a destination and the reliability of shops, banks and other facilities.",
    ],
  },
  {
    id: "wild-animals",
    title: "Wild Animals:",
    paragraphs: [
      "Please be aware that on any African safari, your clients may be taken into close contact with wild animals. Attacks by wild animals are rare, but no safari into the African wilderness can guarantee that this will not occur.",
      "Neither Safariman, nor its employees, nor its suppliers can be held responsible for any injury or incident on the safari. Please note that many safari camps are unfenced and animals are able to wander through the camps at all times of the day and night.",
    ],
  },
  {
    id: "important-travel-insurance",
    title: "Important -Travel Insurance:",
    paragraphs: [
      "It is of importance that each Safari / Tour member in your party has adequate and comprehensive travel insurance covering cancellation or curtailment, as well as medical expenses, emergency travel, personal accident, personal baggage and money loss.",
      "This should be arranged at the time of confirmation and deposit payment to cover you for cancellation from the time of booking. Please note that it is your responsibility to take out insurance, with the cost for your account, and that Safariman Expeditions Ltd cannot be liable in any way whatsoever you should fail to do so.",
      "If you are coming to East Africa from overseas, we request that you provide us with your insurance provider’s name, together with the policy number and the insurance company’s emergency contact telephone number in case of any emergency whilst you are traveling.",
    ],
  },
  {
    id: "responsibility",
    title: "Responsibility:",
    paragraphs: [
      "Safari adventure travel in Africa carries some measure of inherent risk including, but not limited to, the hazards of traveling in underdeveloped areas where road conditions and other facilities may be poor or lacking; the forces of nature; and accident or illness in remote regions without means of rapid evacuation. However all our Clients enjoy a free Flying Doctors cover through AMREF Kenya.",
      "Bookings are accepted on the specific condition that Safariman Expeditions Ltd and its team of independent overseas Safari Consultants act only as agents of the passenger in all matters relating to hotels, sightseeing tours, restaurants, all forms of transportation and other services which may be included in these tours. Safariman Expeditions Ltd may purchase these services from suppliers and other independent contractors, without warranties and representations from them and thus such services are not subject to its control.",
      "The right is reserved to substitute hotels of comparable status and to make any changes in the itinerary where deemed necessary or caused as a result of adverse road or weather conditions, disruptions to airline schedules or any other valid reason.",
      "While all precautions are taken to ensure the passenger’s safety and enjoyment on these tours, Safariman Expeditions Ltd and/or its agents and suppliers shall not be liable for death, injury, delay, loss or damage arising from any cause and in any manner whatsoever or change of itinerary or act, including any acts of terrorism, acts of God and government, neglect, accident, error or omission caused by any of these suppliers or independent contractors, their employees, representatives or any event beyond the control of Safariman Expeditions Ltd.",
      "As much as we take utmost precautions please note that all baggage are carried at the passenger’s own risk, and Safariman Expeditions Ltd reserves the right to exclude certain baggage at its discretion.",
      "The airlines used to provide flights within Kenya are subject to international air conventions limiting their liability; the limitations of liability are contained on the reverse side of the airline ticket and form part of the terms and conditions of this package.",
    ],
  },
  {
    id: "safari-transport",
    title: "Safari Transport:",
    paragraphs: [
      "It should be noted that the types of vehicles used for safari transport on rough roads in East Africa are different from tour vehicles on the highways in developed countries and normally they do not have air-conditioning other than the standard ventilation fan.",
      "The Safari Land Cruisers 4X4 used throughout East Africa for overland road safaris on the main highways beyond the parks are of a standardized design with sliding passenger windows.",
      "Open-sided safari viewing vehicles may be used inside the game reserves and conservancies by visitors on fly-in safari packages.",
    ],
  },
  {
    id: "electricity",
    title: "Electricity:",
    paragraphs: [
      "In most of the safari lodges where electricity is provided by a generator, these are turned off late at night until early morning the following day.",
      "In Kenya the general voltage is 240 and the frequency is 50 Hz. The British three rectangular blade plugs are common. Some lodges and camps only have power in the early mornings and evenings. Batteries may be recharged in camps during the day but it is wise to double check with the camp manager.",
      "As the sockets may vary, a ‘Travelers Adaptor Set’ is recommended. Voltage sometimes fluctuates and whilst power cuts are rare, they are not unknown. It is useful to carry a torch or a flash light.",
    ],
  },
  {
    id: "water",
    title: "Water:",
    paragraphs: [
      "Water from taps in bathrooms is not suitable for drinking and bottled water is provided for drinking and cleaning teeth.",
    ],
  },
  {
    id: "roads",
    title: "Roads:",
    paragraphs: [
      "We have relatively good road network in the City and Towns but the roads to the parks and remote places are rough bumpy.",
    ],
  },
  {
    id: "law-and-jurisdiction",
    title: "Law and Jurisdiction:",
    paragraphs: [
      "All terms and conditions of this agreement shall be governed by and construed in accordance to the laws of Kenya, and any litigation necessary to resolve disputes between the parties shall be held in the courts located in Kenya where such a dispute can be solved through arbitration.",
    ],
  },
  {
    id: "issues-complaints-on-safari",
    title: "Issues/Complaints on Safari",
    paragraphs: [
      "While every effort shall be made to provide the best services to each guest, any Complaint / Dissatisfaction that may arise during safari travel should be communicated immediately to your Tour manager / Consultant (in writing via Guest relation through email (info@safariman.co.ke or Whatsapp) for on-site attention, verification, and immediate address.",
      "A summary of the complaint issues (in case not addressed on-location) should be communicated to the company in writing within 30 days of completion of the safari tour for necessary action.",
      "The complaints/issues raised will be investigated and addressed within 30 days of receipt of a formal complaint. Genuine Compensations / Settlements shall be made within 30 Days of the official complaint receipt.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fbfcfa]">
        <section className="border-b border-[#e6ebe5] bg-[#fbfcfa] py-12 text-[#173c36] sm:py-16">
          <Container>
            <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Safariman Expeditions Tour Booking Terms &amp; Payment Conditions;
            </h1>
          </Container>
        </section>

        <section className="py-8 sm:py-12">
          <Container>
            <div className="grid items-start gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-12">
              <TermsSidebar sections={sections} />

              <div className="min-w-0 space-y-5">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    aria-labelledby={`${section.id}-heading`}
                    className="scroll-mt-36 rounded-3xl border border-[#e1e8e0] bg-white p-6 shadow-[0_12px_32px_rgba(16,28,25,0.04)] sm:p-9"
                  >
                    <div className="mb-6 flex items-start gap-4 border-b border-[#e8eee7] pb-5">
                      <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf3ef] text-sm font-bold text-[#1b4d43]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 id={`${section.id}-heading`} className="pt-1 text-2xl font-bold leading-snug text-[#1b221e] sm:text-3xl">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-5 text-lg font-medium leading-8 text-[#344740] sm:text-xl sm:leading-9">
                      {section.paragraphs?.map((paragraph, paragraphIndex) => (
                        <p key={`${section.id}-paragraph-${paragraphIndex}`}>{paragraph}</p>
                      ))}
                      {section.subheading ? (
                        <h3 className="pt-1 text-xl font-bold leading-8 text-[#263b35] sm:text-2xl">{section.subheading}</h3>
                      ) : null}
                      {section.bullets ? (
                        <ul className="space-y-3">
                          {section.bullets.map((bullet, bulletIndex) => (
                            <li key={`${section.id}-bullet-${bulletIndex}`} className="flex gap-3 rounded-xl bg-[#f5f8f3] px-4 py-3 leading-8">
                              <span aria-hidden="true" className="mt-[0.85rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b08d57]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {section.closing ? <p>{section.closing}</p> : null}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
