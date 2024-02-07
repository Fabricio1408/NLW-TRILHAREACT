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
        <div className="rounded-md bg-slate-700">

        </div>

        <div className="rounded-md bg-slate-800">

        </div>

        <div className="rounded-md bg-slate-800">

        </div>

      </div>
    </div>
  );
}

export default App;
