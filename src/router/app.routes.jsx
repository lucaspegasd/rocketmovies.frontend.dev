import { Routes, Route } from 'react-router-dom';

import { Preview } from '../pages/Preview';
import { CreateMovie } from '../pages/CreateMovie';
import { Home } from '../pages/home';
import { Profile } from '../pages/profile';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateMovie />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/preview" element={<Preview />} />
        </Routes>
    )
}