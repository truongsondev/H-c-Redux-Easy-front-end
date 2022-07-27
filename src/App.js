import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
    return (
        <div className="photo-app">
            <Suspense fallback={<div>Loading ...</div>}>
                <BrowserRouter>
                    <Header />
                    {/* TODO: Remove after testing */}
                    {/* <ul>
                        <li>
                            <Link to="/photos">Go to photo page</Link>
                        </li>
                        <li>
                            <Link to="/photos/add">Go to Add new photo page</Link>
                        </li>
                        <li>
                            <Link to="/photos/123">Go to Edit photo page</Link>
                        </li>
                    </ul> */}

                    <Routes>
                        <Route path="/photos/*" element={<Photo />} />
                        <Route path="/" element={<Navigate replace to="/photos" />} />
                        <Route component={NotFound} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
