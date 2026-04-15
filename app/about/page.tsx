import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-card-bg via-background to-background pt-20">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-6">About Condowebnikhane</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leading the construction industry with innovation, integrity, and excellence.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-lg mb-6 text-center">Our Story</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Founded with a vision to transform urban landscapes, Condowebnikhane has established itself as a premier construction and development company. With over two decades of experience, we&apos;ve successfully delivered numerous landmark projects that define modern living and working spaces.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Our commitment to quality, sustainability, and customer satisfaction has earned us the trust of thousands of clients and investors. We believe in building not just structures, but communities that thrive and inspire.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Every project represents our dedication to excellence, innovative design, and careful attention to detail. We take pride in delivering developments that stand the test of time and enhance the quality of life for their residents and users.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-spacing bg-card-bg">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-16">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "We embrace cutting-edge technologies and creative solutions to deliver unique and forward-thinking projects.",
                },
                {
                  title: "Quality",
                  description: "Excellence is non-negotiable. Every detail is carefully crafted to meet the highest standards.",
                },
                {
                  title: "Sustainability",
                  description: "We are committed to environmentally responsible practices and green building initiatives.",
                },
                {
                  title: "Integrity",
                  description: "Transparency and honesty guide our relationships with clients, partners, and stakeholders.",
                },
                {
                  title: "Community",
                  description: "We create spaces where communities flourish and people build meaningful connections.",
                },
                {
                  title: "Excellence",
                  description: "We strive for perfection in every aspect of our work, from design to execution.",
                },
              ].map((value, index) => (
                <div key={index} className="bg-background p-8 rounded-lg border border-gray-800 hover:border-accent-warm transition-colors">
                  <h3 className="heading-md text-accent-warm mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-16">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { name: "Ahmed Hassan", role: "Chief Executive Officer", expertise: "Strategic Vision & Operations" },
                { name: "Fatima Al-Mansouri", role: "Chief Development Officer", expertise: "Project Development & Portfolio" },
                { name: "Mohammad Khalil", role: "Chief Operations Officer", expertise: "Construction Management & Quality" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-accent-warm to-yellow-600 rounded-lg flex items-center justify-center">
                    <div className="text-white font-serif text-4xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="heading-md mb-2">{member.name}</h3>
                  <p className="text-accent-warm font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-400">{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
