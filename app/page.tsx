import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle,
  Target,
  Recycle,
  Award,
  Zap,
  DollarSign,
  Users,
  Building,
  TrendingUp,
  BarChart3,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renovex-88bPA3EP3dkDs6LVqeRkzNEc5Olo4Z.png"
              alt="Renovex Industries Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#products"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="#solutions"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#market"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Market
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Get in Touch
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
          <button className="md:hidden text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="absolute inset-0 opacity-20 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OIP-YlDCZ9XvxaDFpRQFOtDPaF7kXexUAa.jpeg')] bg-cover bg-center"></div>
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transforming Waste Tires into
                <span className="text-orange-500">
                  {" "}
                  Premium Rubber Products
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Renovex Industries LLP specializes in recycling waste tires into
                high-quality crumb rubber powder in 10, 20, 30, and 40 MESH
                sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#products"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium text-lg inline-flex items-center justify-center transition-colors"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#about"
                  className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-md font-medium text-lg inline-flex items-center justify-center transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  About Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Pioneering Sustainable Rubber Recycling Solutions
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  RENOVEX INDUSTRIES LLP specializes in the recycling of waste
                  tires from trucks and buses, converting them into high-quality
                  crumb rubber powder. Our core activities include the
                  procurement of used tires, processing them using advanced
                  technologies, and producing premium rubber powder for various
                  industrial applications.
                </p>
                <p className="text-gray-600 mb-8 text-lg">
                  Our operations focus on maximizing production efficiency,
                  maintaining superior quality, and meeting the growing demand
                  for sustainable rubber products in the market.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Advanced Technology
                      </h4>
                      <p className="text-gray-600">
                        Cutting-edge recycling processes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Premium Quality
                      </h4>
                      <p className="text-gray-600">
                        Consistent, high-grade output
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Eco-Friendly
                      </h4>
                      <p className="text-gray-600">
                        Reducing environmental impact
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Cost-Effective
                      </h4>
                      <p className="text-gray-600">
                        Affordable alternative to virgin rubber
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OIP-YlDCZ9XvxaDFpRQFOtDPaF7kXexUAa.jpeg"
                    alt="Crumb Rubber Powder"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-5UA27LcQl5bw34nwN19O1eYGuNI6Fu.jpeg"
                    alt="Rubber Powder in Hand"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-09%20at%2013.22.41-ROpXSxEZavbRy1n3qnyqeAKjwGJtq1.jpeg"
                    alt="Renovex Industries Logo"
                    width={800}
                    height={300}
                    className="w-full h-full object-contain bg-white p-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Vision & Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Our Vision & Mission
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500">
                <Target className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-lg">
                  To be a leading innovator in the rubber recycling industry,
                  transforming waste into high-quality, sustainable products.
                  RENOVEX INDUSTRIES LLP envisions a future where our reclaimed
                  rubber products set new standards for environmental
                  responsibility, contributing to a cleaner planet and a more
                  efficient, circular economy.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500">
                <Recycle className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-lg">
                  Our mission is to leverage advanced recycling technologies to
                  process waste tires into premium rubber products that meet the
                  highest industry standards. We are committed to continuous
                  improvement, ensuring the quality of our products while
                  driving growth through sustainable practices, innovative
                  solutions, and strong customer relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems & Solutions */}
        <section id="solutions" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Problems & Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Industry Challenges We Solve
              </h2>
              <p className="text-gray-600 text-lg">
                We address critical issues in the rubber industry with
                innovative, sustainable solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="bg-red-100 text-red-500 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">
                    !
                  </span>
                  Problems
                </h3>

                <div className="space-y-6">
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-2">
                      High Waste Accumulation
                    </h4>
                    <p className="text-gray-600">
                      Excessive accumulation of used tires, leading to
                      environmental pollution and waste management challenges.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Limited Recycling Options
                    </h4>
                    <p className="text-gray-600">
                      Insufficient recycling facilities for rubber waste,
                      resulting in a high demand for effective tire recycling
                      solutions.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Costly Raw Materials
                    </h4>
                    <p className="text-gray-600">
                      Rising costs of raw materials in the rubber industry,
                      creating a need for cost-effective, recycled alternatives.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Supply Chain Gaps
                    </h4>
                    <p className="text-gray-600">
                      Inconsistent supply of high-quality reclaimed rubber
                      products, affecting the production processes of industries
                      reliant on rubber.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="bg-green-100 text-green-500 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">
                    ✓
                  </span>
                  Solutions
                </h3>

                <div className="space-y-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Efficient Recycling Process
                    </h4>
                    <p className="text-gray-600">
                      We convert waste tires into high-quality crumb rubber
                      powder, reducing environmental impact and waste
                      accumulation.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Cost-Effective Products
                    </h4>
                    <p className="text-gray-600">
                      Our recycled rubber products offer a more affordable
                      alternative to virgin rubber, helping industries reduce
                      material costs.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-2">
                      High-Quality Output
                    </h4>
                    <p className="text-gray-600">
                      We ensure the production of premium rubber powder that
                      meets industry standards, filling the gap in the supply of
                      consistent, reliable reclaimed rubber.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Sustainable Practices
                    </h4>
                    <p className="text-gray-600">
                      Our operations contribute to a circular economy by
                      repurposing waste materials, aligning with environmental
                      regulations and sustainability goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USP Section */}
        <section className="py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                What Sets Us Apart
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Unique Selling Propositions
              </h2>
              <p className="text-gray-300 text-lg">
                Discover what makes Renovex Industries the leader in tire
                recycling and rubber powder production.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 rounded-xl p-8 border-b-4 border-orange-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
                <Zap className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Innovative Recycling</h3>
                <p className="text-gray-300">
                  We utilize advanced technologies to transform waste tires into
                  high-quality crumb rubber powder, setting us apart from
                  traditional recycling methods.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border-b-4 border-orange-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
                <Award className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Focus on Reclaim Rubber
                </h3>
                <p className="text-gray-300">
                  Our unique process focuses on producing reclaim rubber,
                  providing a more durable and versatile product than standard
                  recycled rubber.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border-b-4 border-orange-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
                <CheckCircle className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Superior Quality Assurance
                </h3>
                <p className="text-gray-300">
                  We prioritize stringent quality control measures, ensuring our
                  products consistently meet and exceed industry standards.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border-b-4 border-orange-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
                <Recycle className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Environmentally Responsible
                </h3>
                <p className="text-gray-300">
                  Our commitment to sustainability drives our operations, making
                  our products an eco-friendly choice in the market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Products
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                High-Quality Recycled Rubber Products
              </h2>
              <p className="text-gray-600 text-lg">
                We offer premium rubber powder in various mesh sizes (10, 20,
                30, 40 MESH) to meet diverse industry needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OIP-YlDCZ9XvxaDFpRQFOtDPaF7kXexUAa.jpeg"
                    alt="Crumb Rubber Powder"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    Crumb Rubber Powder
                  </h3>
                  <p className="text-gray-600 mb-4">
                    High-quality, recycled rubber powder made from processed
                    waste tires, suitable for various industrial applications.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                      10 MESH
                    </span>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                      20 MESH
                    </span>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                      30 MESH
                    </span>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                      40 MESH
                    </span>
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
                  >
                    Request Information
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-5UA27LcQl5bw34nwN19O1eYGuNI6Fu.jpeg"
                    alt="Reclaimed Rubber"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    Reclaimed Rubber
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A versatile product created from crumb rubber, used in
                    manufacturing durable rubber goods, including tires and
                    automotive parts.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                      High Durability
                    </span>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                      Cost-Effective
                    </span>
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
                  >
                    Request Information
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium text-lg inline-flex items-center justify-center transition-colors"
              >
                Request Custom Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Market Size Section */}
        <section id="market" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Market Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Market Size & Opportunity
              </h2>
              <p className="text-gray-600 text-lg">
                India's rubber and tire recycling industry presents a
                significant growth opportunity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  ₹35 Billion
                </h3>
                <p className="text-gray-500 font-medium uppercase text-sm tracking-wider">
                  Total Addressable Market
                </p>
                <p className="text-gray-600 mt-4">
                  The current estimated size of India's rubber and tire
                  recycling industry.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  ₹4.2 Billion
                </h3>
                <p className="text-gray-500 font-medium uppercase text-sm tracking-wider">
                  Serviceable Available Market
                </p>
                <p className="text-gray-600 mt-4">
                  The portion of the market that our services can realistically
                  target.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  ₹50.4 Million
                </h3>
                <p className="text-gray-500 font-medium uppercase text-sm tracking-wider">
                  Serviceable Obtainable Market
                </p>
                <p className="text-gray-600 mt-4">
                  Our projected market share based on our capacity and growth
                  strategy.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    Growth Potential
                  </h3>
                  <p className="text-gray-600 mb-6">
                    The industry is expected to grow substantially, potentially
                    reaching up to ₹350 billion in the coming years, reflecting
                    the robust growth prospects and escalating market demand for
                    sustainable recycling solutions.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-full w-[10%]"></div>
                    </div>
                    <span className="text-gray-600 font-medium">Current</span>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-full w-[90%]"></div>
                    </div>
                    <span className="text-gray-600 font-medium">Potential</span>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-4">
                      Key Growth Drivers
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          Increasing automotive sector demand
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          Rising environmental awareness
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          Government regulations promoting recycling
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          Cost advantages of recycled materials
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Customers */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Customers
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Target Customers
              </h2>
              <p className="text-gray-600 text-lg">
                We serve a diverse range of industries that benefit from our
                high-quality recycled rubber products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                <Building className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Rubber Product Manufacturers
                </h3>
                <p className="text-gray-600">
                  Companies that produce rubber-based products and require
                  high-quality crumb rubber as a raw material.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                <Users className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Automotive Industry
                </h3>
                <p className="text-gray-600">
                  Businesses involved in the production of tires, belts, and
                  other automotive parts seeking sustainable and cost-effective
                  rubber alternatives.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                <Building className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Construction Sector
                </h3>
                <p className="text-gray-600">
                  Industries using rubber products for building materials,
                  flooring, and insulation, looking for durable and eco-friendly
                  options.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                <Recycle className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Recycling Companies
                </h3>
                <p className="text-gray-600">
                  Organizations focused on waste management and recycling that
                  need reliable sources of reclaimed rubber.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
                Our Market Strategy
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-8">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-orange-100 text-orange-500 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">
                      1
                    </span>
                    Targeted Marketing
                  </h4>
                  <p className="text-gray-600">
                    Focus on reaching industrial clients who require
                    high-quality reclaimed rubber for their production
                    processes.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-orange-100 text-orange-500 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">
                      2
                    </span>
                    Online Presence
                  </h4>
                  <p className="text-gray-600">
                    Leverage platforms like IndiaMart and other online
                    marketplaces to expand our customer base and increase
                    visibility.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-orange-100 text-orange-500 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">
                      3
                    </span>
                    Direct Sales Approach
                  </h4>
                  <p className="text-gray-600">
                    Employ a dedicated sales team to engage directly with
                    potential customers and distributors across India.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-orange-100 text-orange-500 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">
                      4
                    </span>
                    Strategic Partnerships
                  </h4>
                  <p className="text-gray-600">
                    Form alliances with key players in the rubber and recycling
                    industries to strengthen our market position and expand
                    distribution channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scale-Up Strategy */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Growth Plan
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Our Scale-Up Strategy
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  We have a comprehensive plan to expand our operations and
                  increase our market presence.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-500 rounded-full w-10 h-10 inline-flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Increase Production Capacity
                      </h4>
                      <p className="text-gray-600">
                        Expand manufacturing facilities to enhance production
                        capacity and meet growing market demand.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-500 rounded-full w-10 h-10 inline-flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Invest in Technology
                      </h4>
                      <p className="text-gray-600">
                        Implement advanced recycling technologies to improve
                        efficiency and product quality.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-500 rounded-full w-10 h-10 inline-flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Strengthen Market Presence
                      </h4>
                      <p className="text-gray-600">
                        Develop strategic partnerships and increase presence in
                        online and offline marketplaces to reach a broader
                        customer base.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-500 rounded-full w-10 h-10 inline-flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Expand Distribution Channels
                      </h4>
                      <p className="text-gray-600">
                        Build relationships with key distributors and explore
                        new market segments to enhance product availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">
                    Growth Potential
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our strategic expansion plan focuses on sustainable growth
                    through technological advancement, market expansion, and
                    operational excellence.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Continuous Innovation
                        </h4>
                        <p className="text-gray-600">
                          Investing in cutting-edge recycling technologies
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Market Expansion
                        </h4>
                        <p className="text-gray-600">
                          Reaching new industries and geographical regions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Quality Enhancement
                        </h4>
                        <p className="text-gray-600">
                          Continuous improvement in product quality and
                          consistency
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Model */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Business Model
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Our Revenue Model
              </h2>
              <p className="text-gray-600 text-lg">
                We have established a sustainable business model to ensure
                long-term growth and profitability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                <DollarSign className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Direct Sales
                </h3>
                <p className="text-gray-600">
                  Generate revenue through direct sales of crumb rubber powder
                  and reclaimed rubber to industrial clients and manufacturers.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                <Users className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Bulk Orders
                </h3>
                <p className="text-gray-600">
                  Focus on large-scale orders, catering to high-volume needs in
                  industries like automotive and construction.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                <TrendingUp className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Long-Term Contracts
                </h3>
                <p className="text-gray-600">
                  Establish long-term supply agreements with key customers to
                  ensure steady revenue streams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Get In Touch
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Contact Us
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Interested in our products or have questions? Reach out to us
                  today.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <p className="text-gray-300">+91 6351037798</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-gray-300">
                        renovexindustriesllp@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-09%20at%2013.22.41-ROpXSxEZavbRy1n3qnyqeAKjwGJtq1.jpeg"
                    alt="Renovex Industries Logo"
                    width={240}
                    height={80}
                    className="h-16 w-auto"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 text-gray-800">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <form
                  id="contact-form"
                  action="https://formspree.io/f/mgvarezg"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium text-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renovex-88bPA3EP3dkDs6LVqeRkzNEc5Olo4Z.png"
                alt="Renovex Industries Logo"
                width={180}
                height={60}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 max-w-md">
                RENOVEX INDUSTRIES LLP specializes in recycling waste tires into
                high-quality crumb rubber powder for various industrial
                applications.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Renovex Industries LLP. All
                rights reserved.
              </p>
              <div className="mt-4">
                <a
                  href="mailto:renovexindustriesllp@gmail.com"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  renovexindustriesllp@gmail.com
                </a>
              </div>
              <div className="mt-2">
                <a
                  href="tel:+916351037798"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  +91 6351037798
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
