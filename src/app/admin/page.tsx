"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";


  export default function AdminPage() {
  const [projects, setProjects] = useState<any[]>([]);
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
  const router = useRouter();

  const [isAuthorized, setIsAuthorized] = useState(false);

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

  const fetchProjects = async () => {
    try {
      const res = await fetch("${process.env.NEXT_PUBLIC_API_URL}/projects");
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      alert("Failed to fetch projects");
    }
  };

  const handleImageUpload = async () => {
    if (!imageFile) return null;

    const formData = new FormData();
    formData.append("file", imageFile);

    const res = await fetch("${process.env.NEXT_PUBLIC_API_URL}/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.imageUrl;
  };

  const resetForm = () => {
    setTitle("");
    setDomain("");
    setDescription("");
    setTechStack("");
    setGithubLink("");
    setLiveLink("");
    setImageFile(null);
    setPreview(null);
    setEditingId(null);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = null;

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
    } catch (error) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this project?"
    );
    if (!confirmDelete) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`, {
      method: "DELETE",
    });

    alert("Deleted Successfully ❌");
    fetchProjects();
  };

  const handleEdit = (project: any) => {
    setEditingId(project.id);
    setTitle(project.title);
    setDomain(project.domain);
    setDescription(project.description);
    setTechStack(project.techStack);
    setGithubLink(project.githubLink || "");
    setLiveLink(project.liveLink || "");
    setPreview(project.imageUrl || null);

    // Auto scroll to form
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isAuthorized) return null;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-10">
      <div className="max-w-6xl mx-auto">

        {/* FORM */}
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
              className="w-full p-3 rounded-xl bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Domain"
              className="w-full p-3 rounded-xl bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
            />

            <textarea
              placeholder="Description"
              className="w-full p-3 rounded-xl bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Tech Stack (comma separated)"
              className="w-full p-3 rounded-xl bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
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

            {/* Image Preview */}
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-48 object-cover rounded-xl border border-gray-700"
              />
            )}

            <div className="flex gap-4">

              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 disabled:opacity-50"
                disabled={loading}
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
                  className="flex-1 bg-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              )}

            </div>
          </form>
        </div>

        {/* PROJECT LIST */}
        <h2 className="text-2xl font-bold mb-6">All Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.domain}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack
                  ?.split(",")
                  .map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => handleEdit(project)}
                  className="bg-yellow-500 px-3 py-1 rounded text-sm hover:opacity-80"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(project.id)}
                  className="bg-red-600 px-3 py-1 rounded text-sm hover:opacity-80"
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