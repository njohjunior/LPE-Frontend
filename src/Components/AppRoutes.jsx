import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from '../Pages/Accueil';
import AppLayout from '../Pages/Layout/AppLayout';
import Contact from '../Pages/Contact';
import Apropos from '../Pages/Apropos';
import NosServices from '../Pages/NosServices';
import Traquer from '../Pages/Traquer';
import Recruitement from '../Pages/Recruitement';
import ClientRegistration from '../Pages/Client/ClientRegistration';
import Login from '../Pages/Admin/Login';
import Dashboard from '../Pages/Admin/Dashboard';
import NotFound from '../Pages/NotFound';
import TrackingResult from '../Pages/TrackingResult';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Accueil />} />
                <Route path="contact" element={<Contact />} />
                <Route path='apropos' element={<Apropos />} />
                <Route path='services' element={<NosServices/> } />
                <Route path='traquer' element={<Traquer />} />
                <Route path='tracking-result' element={<TrackingResult />} />
                <Route path='recruitement' element={<Recruitement />} />
                <Route path='clientregistration' element={<ClientRegistration />} />
                <Route path='lpe-admin' element={<Login />} />
                <Route path='dashboard' element={<Dashboard />} />

                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}
