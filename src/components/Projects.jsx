import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/projects`)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Selected Projects</h2>
            <p className="text-slate-300 mt-2">Karya terbaru dari NizarDev</p>
          </div>
          <a href="/admin" className="hidden sm:inline-flex px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white">Tambah</a>
        </div>

        {loading ? (
          <p className="text-slate-400">Memuat...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
                {p.image_url ? (
                  <img src={p.image_url} alt={p.title} className="h-48 w-full object-cover" />
                ) : (
                  <div className="h-48 w-full bg-gradient-to-tr from-blue-600/40 to-purple-600/40" />
                )}
                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <p className="text-slate-300/90 text-sm mt-1 line-clamp-3">{p.description}</p>
                  {p.tags && p.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-200">{t}</span>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex gap-3">
                    {p.live_url && (
                      <a href={p.live_url} target="_blank" className="text-blue-300 hover:text-blue-200 text-sm">Live</a>
                    )}
                    {p.source_url && (
                      <a href={p.source_url} target="_blank" className="text-slate-300 hover:text-slate-200 text-sm">Source</a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects