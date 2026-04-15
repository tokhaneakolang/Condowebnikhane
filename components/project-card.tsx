import Image from 'next/image'
import { Project } from '@/lib/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg bg-card-bg hover:shadow-2xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden bg-gray-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
          <div>
            <p className="text-accent-warm text-sm font-semibold mb-1">{project.category}</p>
            <h3 className="font-serif text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Year: {project.year}</span>
          <span className="text-accent-warm hover:text-yellow-500 font-semibold transition-colors">
            View Details →
          </span>
        </div>
      </div>
    </div>
  )
}
