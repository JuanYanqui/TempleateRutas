import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import Access from './pages/Access';
import Landing from './pages/Landing';
import Documentation from './components/Documentation';
import MessagesDemo from './components/MessagesDemo';

const AppWrapper = (props) => {
    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes>
            <Route path="/rsap/*">
                <Route path="login" element={<Login />} />
                <Route path="error" element={<Error />} />
                <Route path="notfound" element={<NotFound />} />
                <Route path="access" element={<Access />} />
                <Route path="landing" element={<Landing />} />
                <Route path="api/*" element={<App />}>
                    <Route path="documentation" element={<Documentation />} />
                    <Route path="uikit/message" element={<MessagesDemo />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AppWrapper;