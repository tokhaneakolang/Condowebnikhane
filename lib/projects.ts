export interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  year: number
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Condo Complex",
    category: "Residential",
    description: "Modern luxury condominium development with premium amenities and smart home features.",
    image: "/images/project-1.jpg",
    year: 2023,
  },
  {
    id: 2,
    title: "Commercial Hub",
    category: "Commercial",
    description: "State-of-the-art commercial space with flexible office layouts and green building certification.",
    image: "/images/project-2.jpg",
    year: 2023,
  },
  {
    id: 3,
    title: "Mixed-Use Development",
    category: "Mixed-Use",
    description: "Integrated community space combining residential, retail, and recreational facilities.",
    image: "/images/project-3.jpg",
    year: 2022,
  },
  {
    id: 4,
    title: "Waterfront Residences",
    category: "Residential",
    description: "Exclusive waterfront properties with panoramic views and premium finishes.",
    image: "/images/project-4.jpg",
    year: 2022,
  },
  {
    id: 5,
    title: "Tech Park Development",
    category: "Commercial",
    description: "Modern technology park with collaborative spaces and innovation hubs.",
    image: "/images/project-5.jpg",
    year: 2021,
  },
  {
    id: 6,
    title: "Urban Living Complex",
    category: "Residential",
    description: "Contemporary urban residential complex with sustainable design principles.",
    image: "/images/project-6.jpg",
    year: 2021,
  },
]

export const categories = ["All", "Residential", "Commercial", "Mixed-Use"]
