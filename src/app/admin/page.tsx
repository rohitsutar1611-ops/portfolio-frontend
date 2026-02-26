"use client";

import { useState, useEffect, useRef } from "react";

type Project = {
  id: string;
  title: string;
  domain: string;
  description: string;
  techStack: string;
  githubLink?: string;
  liveLink?: string;
  imageUrl?: string;
};

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [authorized, setAuthorized] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState("");
  const [domain, setDomain] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchProjects() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/projects`
      );
      const data: Project[] = await res.json();
      setProjects(data);
    } catch {
      alert("Failed to fetch projects");
    }
  }

  // ✅ FIXED useEffect
  useEffect(() => {
    const password = prompt("Enter Admin Password");

    if (password === "rohit146") {
      setAuthorized(true);
    } else {
      alert("Unauthorized ❌");
      window.location.href = "/";
    }
  }, []);

  // Fetch projects only when authorized
  useEffect(() => {
    if (authorized) {
      fetchProjects();
    }
  }, [authorized]);

  async function handleImageUpload(): Promise<string | null> {
    if (!imageFile) return null;

    const formData = new FormData();
    formData.append("file", imageFile);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.imageUrl;
  }

  function resetForm() {
    setTitle("");
    setDomain("");
    setDescription("");
    setTechStack("");
    setGithubLink("");
    setLiveLink("");
    setImageFile(null);
    setPreview(null);
    setEditingId(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl: string | null = null;

      if (imageFile) {
        imageUrl = await handleImageUpload();
      }

      const method = editingId ? "PUT" : "POST";
      const url = editingId
        ? `${process.env.NEXT_PUBLIC_API_URL}/projects/${editingId}`
        : `${process.env.NEXT_PUBLIC_API_URL}/projects`;

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          domain,
          description,
          techStack,
          githubLink,
          liveLink,
          imageUrl,
        }),
      });

      alert(editingId ? "Project Updated 🚀" : "Project Added 🔥");

      resetForm();
      fetchProjects();
    } catch {
      alert("Something went wrong");
    }

    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure?")) return;

    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
      { method: "DELETE" }
    );

    fetchProjects();
  }

  function handleEdit(project: Project) {
    setEditingId(project.id);
    setTitle(project.title);
    setDomain(project.domain);
    setDescription(project.description);
    setTechStack(project.techStack);
    setGithubLink(project.githubLink || "");
    setLiveLink(project.liveLink || "");
    setPreview(project.imageUrl || null);

    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  if (!authorized) return null;

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">

        <div ref={formRef} className="bg-gray-900 p-8 rounded-2xl mb-16">
          <h1 className="text-3xl font-bold mb-6 text-center">
            {editingId ? "Edit Project" : "Add Project"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input className="w-full p-3 bg-gray-800 rounded"
              value={title} onChange={(e) => setTitle(e.target.value)}
              placeholder="Title" required />

            <input className="w-full p-3 bg-gray-800 rounded"
              value={domain} onChange={(e) => setDomain(e.target.value)}
              placeholder="Domain" required />

            <textarea className="w-full p-3 bg-gray-800 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description" required />

            <input className="w-full p-3 bg-gray-800 rounded"
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
              placeholder="Tech Stack" required />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 py-3 rounded"
            >
              {loading ? "Processing..." : "Save Project"}
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded">
              <h3 className="text-xl mb-2">{project.title}</h3>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleEdit(project)}
                  className="bg-yellow-500 px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(project.id)}
                  className="bg-red-600 px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}