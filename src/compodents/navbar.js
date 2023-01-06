import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export function Navbar() {
  let navigate = useNavigate();
  const location = useLocation();

  const subsections = {
    introduction: ["Home", "Membrane Composition", "Location of Membrane"],
    membranelipids: [
      "Amphipathicity",
      "Lipid Structure 1",
      "Membrane Asymmetry",
      "Membrane Fluidity",
    ],
    membraneproteins: ["Integral and Peripheral"],
    summary: ["Summary"],
  };

  return (
    <div>
      <Button onClick={() => navigate("/introduction")}>Introduction</Button>
      <Button onClick={() => navigate("/membranelipids")}>
        Membrane Lipids
      </Button>
      <Button onClick={() => navigate("/membraneproteins")}>
        Membrane Proteins
      </Button>
      <Button onClick={() => navigate("/summary")}>Summary</Button>
      <br />
      {subsections[location.pathname.split("/")[1]].map((buttonName) => {
        return (
          <Button
            onClick={() =>
              navigate(buttonName.toLowerCase().replace(/\s/g, ""))
            }
          >
            {buttonName}
          </Button>
        );
      })}
    </div>
  );
}
