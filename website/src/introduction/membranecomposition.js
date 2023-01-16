import membranecompositionimage from "./membranecomposition.png";
import { Tooltip } from "@mui/material";
import "../compodents/page.css";

export function IntroductionMembraneComposition() {
  return (
    <div>
      <div className="text">
        <h1>Membrane Composition</h1>
        <p>
          <Tooltip title="a layer that separates a cell or compartment of a cell from the exterior environement that consists of a lipid bilayer">
            <strong>
              <u>Biological membranes</u>
            </strong>
          </Tooltip>{" "}
          are sheet-like structures composed mainly of lipids and proteins. All
          biological membranes have a similar general structure.{" "}
          <Tooltip title="fat molecules used in a membrane: phospholipids, glycolipids, and cholesterol">
            <strong>
              <u>Membrane lipids</u>
            </strong>
          </Tooltip>{" "}
          are organized in a bilayer (two sheets of lipids making up a single
          membrane) that is approximately 60 to 100 <u>&Aring;</u> thick. The
          proteins, on the other hand, are scattered throughout the bilayer and
          perform most membrane functions. Membranes are two-dimensional fluids:
          both lipids and proteins are constantly in motion.
          <br />
          <p> </p>
          The{" "}
          <Tooltip title="a method of representing cell membrane structure and composition">
            <strong>
              <u>fluid-mosaic model</u>
            </strong>
          </Tooltip>{" "}
          encompasses our current understanding of membrane structure. It
          describes both the "mosaic" arrangement of proteins embedded
          throughout the lipid bilayer as well as the "fluid" movement of lipids
          and proteins alike. You will learn about the details of this model as
          you proceed through the tutorial.
        </p>
      </div>
      <div className="imagecontainer">
        <img className="image" src={membranecompositionimage} />
      </div>
    </div>
  );
}
