import "./integralandperipheral.css";
import { Tooltip } from "@mui/material";

export function MembraneProteinsIntegralAndPeripheral() {
  return (
    <div>
      <div className="paragraphs">
        <h1>The Hydrophobic Effect Holds the Bilayer Together</h1>
        <p>
        
          A major difference between membrane
            lipids and oil is that while oil is non-polar
            , membrane lipids are {""}<Tooltip title = 'define'><strong><u>amphipathic</u></strong></Tooltip>{""}. {""}
          
            
     
          
         The {""} <Tooltip title = 'definition'><strong><u>hydrophobic</u></strong></Tooltip> {""}lipid tails are excluded by water, while the {" "}<Tooltip title = 'define'><strong><u>hydrophilic</u></strong></Tooltip>{" "}
 
         
    
            lipid heads are attracted to water. Membrane lipids
            overcome this conflict by forming the lipid
            bilayer. The bilayer allows the hydrophilic lipid
            heads to face out (interacting with water
            molecules), while the hydrophobic tails face
            inward (where they are shielded from water).
        </p>
      </div>

    </div>
  );
}
