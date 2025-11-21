function Footer(){
  return (
    <footer className="py-10 bg-slate-900 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} NizarDev. All rights reserved.</p>
        <div className="flex gap-4 text-slate-300">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer