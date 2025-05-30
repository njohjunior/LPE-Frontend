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

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Accueil />} />
                <Route path="contact" element={<Contact />} />
                <Route path='apropos' element={<Apropos />} />
                <Route path='services' element={<NosServices/> } />
                <Route path='traquer' element={<Traquer />} />
                <Route path='recruitement' element={<Recruitement />} />
                <Route path='clientregistration' element={<ClientRegistration />} />
            </Route>
        </Routes>
    )
}
