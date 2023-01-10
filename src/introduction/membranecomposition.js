import "./membranecomposition.css";
import membranecompositionimage from "./membranecomposition.png";
import { Tooltip } from "@mui/material";

export function IntroductionMembraneComposition() {
  return (
    <div>
      <div className="paragraphs">
        <h1>Membrane Composition</h1>
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Tooltip title = 'definition'>
            <strong>
              <u>Biological membranes</u>
            </strong>
          </Tooltip>
          {" "}are sheet-like structures composed mainly of lipids and proteins. All
          biological membranes have a similar general structure.{" "}
          <Tooltip title = 'definition'>
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
          <Tooltip title = 'definition'>
            <strong>
              <u>fluid-mosaic model</u>
            </strong>
          </Tooltip>
          {" "}encompasses our current understanding of membrane structure. It
          describes both the "mosaic" arrangement of proteins embedded
          throughout the lipid bilayer as well as the "fluid" movement of lipids
          and proteins alike. You will learn about the details of this model as
          you proceed through the tutorial.
          <p> </p> 
          <Tooltip title = 'The answer to this is needed; not in slideshow'>
            <strong>
              <u>Extra Info: How do we know that membranes are composed of two layers of lipids, not just one?</u>
            </strong>
        </Tooltip> 
        </p>
      </div>
      <img className="image2" src={membranecompositionimage} />
    </div>
  );
}
