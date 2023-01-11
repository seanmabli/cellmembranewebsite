import "./summary.css";
import { Tooltip } from "@mui/material";

export function Summary() {
  return (
    <div>
      <h1 className="title">Summary</h1>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <Tooltip title = 'A selectively permeable membrane that separates the interior of a cell from the external environment or creates intracellular compartments by serving as a boundary between one part of the cell and another'>
          <strong>
            <u>Biological membranes</u>
          </strong>
        </Tooltip>
        {" "}are sheet-like structures composed mainly of lipids and proteins. All
        biological membranes have a similar general structure.{" "}
        <Tooltip title = 'A group of compounds which form the double-layered surface of all cells (the three major classes of membrane lipids are phospholipids, glycolipids, and cholesterol)'>
          <strong>
            <u>Membrane lipids</u>
          </strong>
        </Tooltip>
        {" "}are organized in a bilayer (two sheets of lipids making up a single
        membrane) that is approximately 60 to 100 <u>&Aring;</u> thick. The
        proteins, on the other hand, are scattered throughout the bilayer and
        perform most membrane functions. Membranes are two-dimensional fluids:
        both lipids and proteins are constantly in motion.
        <br />
        <p> </p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The{" "}
        <Tooltip title = 'A model stating that the components of a membrane such as proteins or glycolipids, form a mobile mosaic in the fluid-like environment created by a sea of phospholipids'>
          <strong>
            <u>fluid-mosaic model</u>
          </strong>
        </Tooltip>
        {" "}encompasses our current understanding of membrane structure. It
        describes both the "mosaic" arrangement of proteins embedded
        throughout the lipid bilayer as well as the "fluid" movement of lipids
        and proteins alike. You will learn about the details of this model as
        you proceed through the tutorial.
      </p>
    </div>
  );
}
