import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TopBrands } from "@/components/top-brands"

export default function FAQPage() {
  const faqs = [
    {
      question: "Are used engines good?",
      answer:
        "Firstly, the money you are willing to spend. Used engines can be a great deal, but they may also come with some hidden costs. Second is to consider is the source of the used engine. If you're buying from a reputable dealer, you're likely to get a quality product. Finally, consider the reliability. Because used engines are rigorously examined before being sold, their reliability is far greater than that of new engines.",
    },
    {
      question: "Is a used engine worth buying?",
      answer:
        "To begin, make sure the engine is compatible with your car. Second, check to see if the engine is in working order. Finally, make sure you're getting a reasonable price for the engine. Used engines might be a great option for anyone looking to save money on car maintenance. You should, however, undertake extensive research to verify that you are choosing a high-quality, long-lasting engine.",
    },
    {
      question: "Which is better rebuilt or used engine?",
      answer:
        "Both used and remanufactured engines have advantages and disadvantages. Although a used engine is less expensive, it may have greater wear and tear. The cost of a rebuilt engine is higher, but it will last longer and be more dependable. In the end, it all boils down to what's most important to you. If you're looking to save money, a used engine is the best choice. A refurbished engine is a superior alternative if reliability is your primary priority.",
    },
    {
      question: "Is it better to buy a used or rebuilt transmission?",
      answer:
        "The first concern is price. Although used transmissions are less expensive, they may not survive as long as rebuilt transmissions. Although rebuilding a transmission is more expensive, it may provide a longer-lasting solution. The source is the second factor to evaluate. A used transmission purchased from a reliable source should survive longer than one purchased from a less reputable one. However, even a respectable used transmission may not survive as long as a rebuilt one.",
    },
    {
      question: "How can I get a cheap transmission?",
      answer:
        "There are a few choices available for obtaining a low-cost transmission. One option is to purchase a used engine from a salvage yard or an individual. Another option is to find a transmission rebuilder that may save you money by repairing your existing transmission rather than replacing it. Finally, you might attempt negotiating a reduced price on a new transmission with your mechanic or dealership.",
    },
    {
      question: "How can you get a warranty on a used transmission?",
      answer:
        "One approach to get a warranty is to buy a secondhand transmission from a salvage yard or a private seller. Many salvage yards, as well as many individual merchants, offer guarantees on their used parts. Before you buy something, check the warranty's terms and conditions to see what's covered and what isn't.",
    },
    {
      question: "Free shipping",
      answer:
        "ARC Auto Part offers free shipping all across the USA. So, there is no extra charge, you pay only for the engine. Order your desired used low mileage engines and get them shipped to your house completely free. So, not only you don't have to go and get the parts yourself, but you can get them shipped to your desired location… and without paying any penny for that.",
    },
    {
      question: "Warranty from the dealers",
      answer:
        "After purchasing a used engine, you will get a 30-180 days' warranty directly from the junkyard and salvage yard dealers. Here you can get only high-quality engines, that are guaranteed to work without any issues for a long period. But in case of any maintenance problems, you get a warranty and until it's valid, you can contact the suppliers anytime you feel the need.",
    },
    {
      question: "What engines can you get?",
      answer:
        "At ARC Auto Part, you can find high performance used engines for all types of vehicles – a van, sedan, jeep or else. Here you can get gasoline, diesel and hybrid engines with low mileage –that are ready to serve you for years. So, these are worth all the penny you pay for them.",
    },
    {
      question: "Return available",
      answer:
        "In case if you are not satisfied with the used auto part you can easily return it. It's very simple, if you do not like what you ordered, or maybe it is not the part that you needed you can easily send it back. If you have any questions just get in touch with us through our toll-free number (888) 929-0045.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">Call (888) 929-0045 (Toll-Free) To Talk With Our Mechanic</p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {index + 1}) {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-primary/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-4">
                Our expert mechanics are here to help you find the right parts for your vehicle.
              </p>
              <a
                href="tel:8885086192"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Call (888) 929-0045
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Top Brands Section */}
      <TopBrands />

      <Footer />
    </div>
  )
}
