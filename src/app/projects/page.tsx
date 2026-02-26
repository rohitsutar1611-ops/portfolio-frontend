import Link from "next/link";
import Image from "next/image";

async function getProjects() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-12 text-center">
        My Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project: any) => (
          <div key={project.id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">

            {project.imageUrl && (
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                {project.title}
              </h2>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <Link
                href={`/projects/${project.id}`}
                className="text-blue-400 hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}