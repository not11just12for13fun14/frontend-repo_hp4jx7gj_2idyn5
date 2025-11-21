import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Admin() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    tags: '',
    image_url: '',
    live_url: '',
    source_url: ''
  })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('saving')

    const payload = {
      title: form.title,
      description: form.description,
      tags: form.tags ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
      image_url: form.image_url || undefined,
      live_url: form.live_url || undefined,
      source_url: form.source_url || undefined,
    }

    try {
      const res = await fetch(`${API_BASE}/api/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Gagal menyimpan')
      setStatus('success')
      setForm({ title: '', description: '', tags: '', image_url: '', live_url: '', source_url: '' })
    } catch (e) {
      console.error(e)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-slate-300 hover:text-white">← Kembali</a>
        <h1 className="mt-4 text-3xl font-extrabold text-white">Admin: Tambah Project</h1>
        <p className="text-slate-300/90 mt-2">Masukkan detail project yang akan ditampilkan di beranda.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-5 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div>
            <label className="block text-sm text-slate-300 mb-2">Judul</label>
            <input name="title" value={form.title} onChange={onChange} required className="w-full rounded-lg bg-white/10 text-white px-4 py-3 outline-none border border-white/10 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">Deskripsi</label>
            <textarea name="description" value={form.description} onChange={onChange} rows="4" required className="w-full rounded-lg bg-white/10 text-white px-4 py-3 outline-none border border-white/10 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">Tags (pisahkan dengan koma)</label>
            <input name="tags" value={form.tags} onChange={onChange} className="w-full rounded-lg bg-white/10 text-white px-4 py-3 outline-none border border-white/10 focus:border-blue-500" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-2">Image URL</label>
              <input name="image_url" value={form.image_url} onChange={onChange} className="w-full rounded-lg bg-white/10 text-white px-4 py-3 outline-none border border-white/10 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Live URL</label>
              <input name="live_url" value={form.live_url} onChange={onChange} className="w-full rounded-lg bg-white/10 text-white px-4 py-3 outline-none border border-white/10 focus:border-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">Source URL</label>
            <input name="source_url" value={form.source_url} onChange={onChange} className="w-full rounded-lg bg-white/10 text-white px-4 py-3 outline-none border border-white/10 focus:border-blue-500" />
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">Simpan</button>
            {status === 'saving' && <span className="text-slate-300">Menyimpan...</span>}
            {status === 'success' && <span className="text-green-400">Berhasil disimpan!</span>}
            {status === 'error' && <span className="text-red-400">Terjadi kesalahan.</span>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Admin