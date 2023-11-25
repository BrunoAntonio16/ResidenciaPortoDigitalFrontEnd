import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import FormLogin from "./components/FormLogin/FormLogin";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Table from "./components/table/Table";

function AppRoutes() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<FormLogin/>}></Route>
                    <Route path="/Lista" element={<Table/>}></Route>
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}

export default AppRoutes