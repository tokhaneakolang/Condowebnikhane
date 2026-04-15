'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProjectCard } from '@/components/project-card'
import { projects, categories } from '@/lib/projects'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-card-bg via-background to-background pt-20">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-6">Our Project Portfolio</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our diverse collection of completed projects showcasing excellence in construction and development.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="section-spacing">
          <div className="container-custom">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-4 mb-16 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-accent-warm text-white'
                      : 'bg-card-bg text-gray-400 hover:text-accent-warm border border-gray-800 hover:border-accent-warm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-400 text-lg">No projects found in this category.</p>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="mt-12 text-center text-gray-500">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
