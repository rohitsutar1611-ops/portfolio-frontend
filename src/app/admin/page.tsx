"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

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

  // Password check (no state inside effect)
  useEffect(() => {
    const password = prompt("Enter Admin Password");

    if (password !== "rohit146") {
      alert("Unauthorized ❌");
      window.location.href = "/";
      return;
    }

    fetchProjects();
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

      resetForm();
      fetchProjects();
      alert("Saved Successfully 🚀");
    } catch {
      alert("Something went wrong");
    }

    setLoading(false);
  }

  async function handleDelete(id: string) {
    const confirmDelete = confirm("Delete this project?");
    if (!confirmDelete) return;

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

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">

        <div ref={formRef} className="bg-gray-900 p-8 rounded-3xl mb-16">
          <h1 className="text-3xl font-bold mb-6 text-center">
            {editingId ? "Edit Project" : "Add New Project"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input type="text" placeholder="Title"
              className="w-full p-3 rounded bg-gray-800"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <input type="text" placeholder="Domain"
              className="w-full p-3 rounded bg-gray-800"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
            />

            <textarea placeholder="Description"
              className="w-full p-3 rounded bg-gray-800"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <input type="text" placeholder="Tech Stack"
              className="w-full p-3 rounded bg-gray-800"
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
              required
            />

            <input type="file"
              className="w-full p-3 rounded bg-gray-800"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setImageFile(file);
                if (file) {
                  setPreview(URL.createObjectURL(file));
                }
              }}
            />

            {preview && (
              <Image
                src={preview}
                alt="Preview"
                width={500}
                height={200}
                className="w-full h-48 object-cover rounded-xl"
              />
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 py-3 rounded"
            >
              {loading ? "Processing..." : "Save"}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}