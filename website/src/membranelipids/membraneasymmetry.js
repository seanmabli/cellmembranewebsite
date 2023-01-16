import membraneasymmetryimage from "./membraneasymmetry.png";
import { Tooltip } from "@mui/material";
import "../compodents/page.css";

export function MembraneLipidsMembraneAsymmetry() {
  return (
    <div>
      <div className="text">
        <h1>Membrane Asymmetry is Functionally Important</h1>
        <p>
          The compositions of the two lipid layers of the membranes are
          strikingly different. This asymmetry is functionally important. In the{" "}
          <Tooltip title="a biological membrane that regulates passage of materials in and out of the cell and provides support and protection of the cell">
            <strong>
              <u>plasma membranes</u>
            </strong>
          </Tooltip>
          ,{" "}
          <Tooltip title="lipids (with a carbohydrate attached) on the cell membrane that facilitate cellular recognition">
            <strong>
              <u>glycolipids</u>
            </strong>
          </Tooltip>{" "}
          are found exclusively in the outer leaflet, where they have important
          roles in interactions of the cell with its surroundings. A particular{" "}
          <Tooltip title="the lipids that makes up the cell membrane bilayer (phosphate group in the 'head' of the molecule)">
            <strong>
              <u>phospholipid</u>
            </strong>
          </Tooltip>
          , phosphatidyl inositol, is concentrated in the inner leaflet of the
          plasma membrane, where it plays a role in signal transduction.
        </p>
      </div>
      <div className="imagecontainer">
        <img src={membraneasymmetryimage} />
      </div>
    </div>
  );
}
