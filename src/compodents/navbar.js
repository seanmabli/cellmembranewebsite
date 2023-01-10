import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./navbar.css";

export const SubsectionButton = styled(Button)({
  color: "black",
  borderColor: "black",
  margin: "5px",
  "&:hover": {
    borderColor: "black",
  },
});

export function Navbar() {
  let navigate = useNavigate();
  const location = useLocation();

  const subsections = {
    introduction: ["Home", "Membrane Composition", "Location of Membrane"],
    membranelipids: [
      "Amphipathicity",
      "Lipid Structure ",
      "Membrane Fluidity",
      "Membrane Asymmetry",
    ],
    membraneproteins: ["Integral and Peripheral"],
    summary: ["Summary", "Simulation"],
  };

  return (
    <>
      <div className="container" style={{ marginTop: "10px" }}>
        <SubsectionButton
          variant={
            location.pathname.split("/")[1] === "introduction" ? "outlined" : ""
          }
          onClick={() => navigate("/introduction")}
        >
          <b>Introduction</b>
        </SubsectionButton>
        <SubsectionButton
          variant={
            location.pathname.split("/")[1] === "membranelipids"
              ? "outlined"
              : ""
          }
          onClick={() => navigate("/membranelipids")}
        >
          <b>Membrane Lipids</b>
        </SubsectionButton>
        <SubsectionButton
          variant={
            location.pathname.split("/")[1] === "membraneproteins"
              ? "outlined"
              : ""
          }
          onClick={() => navigate("/membraneproteins")}
        >
          <b>Membrane Proteins</b>
        </SubsectionButton>
        <SubsectionButton
          variant={
            location.pathname.split("/")[1] === "summary" ? "outlined" : ""
          }
          onClick={() => navigate("/summary")}
        >
          <b>Summary</b>
        </SubsectionButton>
      </div>
      <div className="container">
        {subsections[location.pathname.split("/")[1]].map((buttonName) => {
          return (
            <SubsectionButton
              onClick={() =>
                navigate(
                  "/" +
                    location.pathname.split("/")[1] +
                    "/" +
                    buttonName.toLowerCase().replace(/\s/g, "")
                )
              }
              variant={
                location.pathname.split("/")[2] ===
                buttonName.toLowerCase().replace(/\s/g, "")
                  ? "outlined"
                  : ""
              }
            >
              <b>{buttonName}</b>
            </SubsectionButton>
          );
        })}
      </div>
    </>
  );
}
