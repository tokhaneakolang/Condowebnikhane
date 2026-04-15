import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProjectCard } from '@/components/project-card'
import { projects } from '@/lib/projects'
import Link from 'next/link'

export default function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card-bg pt-20">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-6">
              Building Excellence,
              <br />
              <span className="text-accent-warm">Creating Futures</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Premium construction and development solutions for modern communities. Transforming visions into architectural masterpieces with innovation and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/portfolio" className="button-primary">
                Explore Our Work
              </Link>
              <Link href="/contact" className="button-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-spacing bg-card-bg">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-16">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Design & Planning",
                  description: "Innovative architectural design and comprehensive project planning to bring your vision to life.",
                },
                {
                  title: "Construction Management",
                  description: "Expert project management ensuring quality, safety, and timely delivery on every project.",
                },
                {
                  title: "Development",
                  description: "Strategic property development leveraging market insights and sustainable practices.",
                },
              ].map((service, index) => (
                <div key={index} className="bg-background p-8 rounded-lg border border-gray-800 hover:border-accent-warm transition-colors">
                  <h3 className="heading-md text-accent-warm mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="heading-lg mb-2">Featured Projects</h2>
                <p className="text-gray-400">Showcasing our latest developments and achievements</p>
              </div>
              <Link href="/portfolio" className="hidden md:block button-secondary">
                View All Projects
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="md:hidden">
              <Link href="/portfolio" className="w-full button-primary block text-center">
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-accent-warm/10 border-t border-b border-accent-warm/20">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Get in touch with our team to discuss your development needs and explore how we can bring your project to life.
            </p>
            <Link href="/contact" className="button-primary">
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
