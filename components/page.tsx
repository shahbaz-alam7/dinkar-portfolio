import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Tava App",
    description: "A platform that simplifies online presence management.",
    duration: "09/2022 - 10/2023",
    details: [
      "Developed a dynamic backend with drag-and-drop connectors and dynamic route-based authentication.",
      "Enabled functionality to choose and switch between different databases seamlessly based on application needs.",
      "Implemented dynamic authentication for API routes, enhancing security.",
    ],
  },
  {
    title: "Trip Tava",
    description: "Trip Tava flight booking application.",
    duration: "10/2023 - 04/2024",
    details: [
      "Developed a flight booking application with a responsive UI for multiple screens and implemented backend APIs to handle booking, flight details, and user management.",
      "Created booking API's using Amadeus.",
      "Implemented JWT authentication for API security.",
    ],
  },
  {
    title: "Travel Start",
    description: "A B2B platform for flight bookings.",
    duration: "04/2024 - 12/2024",
    details: ["TravelStart flight consumer application for booking domestic & international flights."],
  },
  {
    title: "Yokeru",
    description: "Give operators the capacity to make thousands of calls in minutes.",
    duration: "12/2024 - Present",
    details: [
      "Implemented Modular Monolith with Gateway Proxy: Configured a central gateway to route requests to modules via proxy, ensuring smooth communication between decoupled services and improving maintainability.",
      "Using advanced AI technology enables monitoring center to schedule and manage thousands of automated proactive calls within minutes.",
      "Streamline operation with and collaborative dashboards for operators. Auto-generate call lists, manual and automated, and gain transparency across your entire service in real time.",
    ],
  },
]

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{project.duration}</p>
              <ul className="list-disc pl-5 space-y-1">
                {project.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

