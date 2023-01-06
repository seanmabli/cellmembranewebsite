import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

export function Navbar(props) {
    let navigate = useNavigate();

    return(
        <div>
            <Button onClick={() => navigate("/introduction")}>Introduction</Button>
            <Button onClick={() => navigate("/membranelipids")}>Membrane Lipids</Button>
            <Button onClick={() => navigate("/membraneproteins")}>Membrane Proteins</Button>
            <Button onClick={() => navigate("/summary")}>Summary</Button>
        </div>
    )
}