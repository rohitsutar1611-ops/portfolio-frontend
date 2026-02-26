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
  const [isAuthorized, setIsAuthorized] = useState(false);

  // ✅ Declare FIRST (fix hoisting issue)
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

  useEffect(() => {
    const password = prompt("Enter Admin Password");

    if (password === "rohit146") {
      setIsAuthorized(true);
      fetchProjects();
    } else {
      alert("Unauthorized ❌");
      window.location.href = "/";
    }
  }, []);

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

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
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
    const confirmDelete = confirm(
      "Are you sure you want to delete this project?"
    );
    if (!confirmDelete) return;

    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
      {
        method: "DELETE",
      }
    );

    alert("Deleted Successfully ❌");
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

  if (!isAuthorized) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-10">
      <div className="max-w-6xl mx-auto">

        <div
          ref={formRef}
          className="bg-gray-900 p-8 rounded-3xl shadow-2xl mb-16 border border-gray-800"
        >
          <h1 className="text-3xl font-bold mb-6 text-center">
            {editingId ? "Edit Project" : "Add New Project"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              className="w-full p-3 rounded-xl bg-gray-800"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Domain"
              className="w-full p-3 rounded-xl bg-gray-800"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
            />

            <textarea
              placeholder="Description"
              className="w-full p-3 rounded-xl bg-gray-800"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Tech Stack (comma separated)"
              className="w-full p-3 rounded-xl bg-gray-800"
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="GitHub Link"
              className="w-full p-3 rounded-xl bg-gray-800"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
            />

            <input
              type="text"
              placeholder="Live Link"
              className="w-full p-3 rounded-xl bg-gray-800"
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
            />

            <input
              type="file"
              className="w-full p-3 rounded-xl bg-gray-800"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setImageFile(file);
                if (file) {
                  setPreview(URL.createObjectURL(file));
                }
              }}
            />

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-48 object-cover rounded-xl"
              />
            )}

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl"
              >
                {loading
                  ? "Processing..."
                  : editingId
                  ? "Update Project"
                  : "Add Project"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-gray-700 py-3 rounded-xl"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <h2 className="text-2xl font-bold mb-6">All Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.domain}
              </p>

              <div className="flex justify-between">
                <button
                  onClick={() => handleEdit(project)}
                  className="bg-yellow-500 px-3 py-1 rounded text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(project.id)}
                  className="bg-red-600 px-3 py-1 rounded text-sm"
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