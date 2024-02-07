export function NoteCard() {
    return (
        <button className="text-left rounded-md bg-slate-800 p-5 space-y-3 relative overflow-hidden hover:ring-2 hover:ring-slate-600 outline-none focus:ring-2">
            <span className='text-sm font-medium text-slate-400'>Há 2 dias</span>
            <p className='text-sm leading-6 text-slate-400'>Lorem ipsum dolor sit, amet condolor sit, amet condolor sit, amet consdolor sit, amet consdolor sit, amet conssdolor sit, amet consdolor sit, amet consdolor sit, amet conssectetur adipisicing elit. Laudantium qui in libero quidem impedit cum dolorum sapiente, aspernatur vero sit eveniet corporis ea? Explicabo odit ratione rem consequuntur quod repudiandae?</p>
            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0' />
        </button>
    )
  }
  