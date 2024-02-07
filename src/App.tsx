import logo from './assets/Logo.svg'

import React from 'react';

const App: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="Nlw-expert" />
      <form className='w-full'>
        <input type="text" placeholder='Busque em suas notas...' className='bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder: text-slate-500' />
      </form>
      
      <div className='h-px bg-slate-700'/>

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <div className="rounded-md bg-slate-700 p-5 space-y-3">
          <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
          <p className='text-sm leading-6 text-slate-400'>Grave uma nota em áudio que será convertida para texto automaticamente.</p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3">
          <span className='text-sm font-medium text-slate-200'>Há 2 dias</span>
          <p className='text-sm leading-6 text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium qui in libero quidem impedit cum dolorum sapiente, aspernatur vero sit eveniet corporis ea? Explicabo odit ratione rem consequuntur quod repudiandae?</p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3">
          <span className='text-sm font-medium text-slate-200'>Há 4 dias</span>
          <p className='text-sm leading-6 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore alias repellat vero culpa amet molestias minima soluta? Obcaecati doloremque cum doloribus beatae laboriosam commodi aliquid temporibus non consequatur ex.</p>
        </div>
    

      </div>
    </div>
  );
}

export default App;
