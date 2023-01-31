import {BrowserRouter, Routes, Route,  AdminDash} from "./index.js"

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<AdminDash />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default PageRoutes;