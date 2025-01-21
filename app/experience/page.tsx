import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Software Development Engineer",
    company: "Innostax Software Labs Pvt Ltd",
    duration: "04/2022 - Present",
    location: "Gurugram",
    responsibilities: [
      "Led a team of 6 developers in the project, providing guidance, direction, and mentorship.",
      "Conducted code reviews and provided constructive feedback to ensure code quality and maintainability.",
      "Demonstrated exceptional problem-solving skills by identifying and implementing the best and optimal approaches for challenges encountered during the project.",
      "Worked independently on assigned tasks and completed them within the minimum required time frame.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Innostax Software Labs Pvt Ltd",
    duration: "09/2021 - 04/2022",
    location: "Gurugram",
    responsibilities: [
      "Identified web-based user interactions and developed responsive user interface components using VueJS concepts.",
      "Debugged daily issues related to functionalities and components of the application.",
      "Wrote test cases using Cypress to thoroughly test the application's front-end functionalities.",
    ],
  },
]

export default function Experience() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Work Experience</h1>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>{exp.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {exp.duration} | {exp.location}
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="text-sm">
                    {resp}
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

