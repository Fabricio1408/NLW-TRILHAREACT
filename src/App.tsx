import logo from './assets/Logo.svg'

import React from 'react';

const App: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl my-12">
      <img src={logo} alt="Nlw-expert" />
      <form className='w-full'>
        <input type="text" placeholder='Busque em suas notas...' className='bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder: text-slate-500' />
      </form>
    </div>
  );
}

export default App;
