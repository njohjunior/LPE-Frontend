import React, { useState, useEffect } from 'react';
import Accueil from './dashboard/Accueil';
import GestionCourses from './dashboard/GestionCourses';
import GestionLivreurs from './dashboard/GestionLivreurs';
import GestionClients from './dashboard/GestionClients';
import Parametres from './dashboard/Parametres';

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('accueil');
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const storedAdmin = localStorage.getItem('adminInfo');
    if (storedAdmin) setAdmin(JSON.parse(storedAdmin));
  }, []);

  const renderContent = () => {
    switch (activeMenu) {
      case 'gestionLivreurs': return <GestionLivreurs />;
      case 'gestionCourses': return <GestionCourses />;
      case 'gestionClients': return <GestionClients />;
      case 'parametres': return <Parametres admin={admin} setAdmin={setAdmin} />;
      default: return <Accueil />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-wine text-white flex flex-col">
        <div className="p-6 text-center border-b border-white/20">
          <h2 className="text-xl font-bold uppercase">Admin Panel</h2>
          {admin && <p className="text-sm mt-2">{admin.email}</p>}
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button className={`block w-full text-left px-4 py-2 rounded hover:bg-white/20 ${activeMenu==='accueil'?'bg-white/20':''}`} onClick={()=>setActiveMenu('accueil')}>Accueil</button>
          <button className={`block w-full text-left px-4 py-2 rounded hover:bg-white/20 ${activeMenu==='gestionCourses'?'bg-white/20':''}`} onClick={()=>setActiveMenu('gestionCourses')}>Gestion des courses</button>
          <button className={`block w-full text-left px-4 py-2 rounded hover:bg-white/20 ${activeMenu==='gestionClients'?'bg-white/20':''}`} onClick={()=>setActiveMenu('gestionClients')}>Gestion des clients</button>
          <button className={`block w-full text-left px-4 py-2 rounded hover:bg-white/20 ${activeMenu==='gestionLivreurs'?'bg-white/20':''}`} onClick={()=>setActiveMenu('gestionLivreurs')}>Gestion des livreurs</button>
          <button className={`block w-full text-left px-4 py-2 rounded hover:bg-white/20 ${activeMenu==='parametres'?'bg-white/20':''}`} onClick={()=>setActiveMenu('parametres')}>Paramètres</button>
        </nav>
      </div>
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
}
