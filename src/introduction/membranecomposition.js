import "./membranecomposition.css";
import membranecompositionimage from "./a.png";

export function IntroductionMembraneComposition() {
  return (
    <div>
      <div className="paragraphs">
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <strong>
            <u>Biological membranes</u>
          </strong>{" "}
          are sheet-like structures composed mainly of lipids and proteins. All
          biological membranes have a similar general structure.{" "}
          <strong>
            <u>Membrane lipids</u>
          </strong>{" "}
          are organized in a bilayer (two sheets of lipids making up a single
          membrane) that is approximately 60 to 100 <u>&Aring;</u> thick. The
          proteins, on the other hand, are scattered throughout the bilayer and
          perform most membrane functions. Membranes are two-dimensional fluids:
          both lipids and proteins are constantly in motion.
          <br />
          <p> </p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The{" "}
          <strong>
            <u>fluid-mosaic model</u>
          </strong>{" "}
          encompasses our current understanding of membrane structure. It
          describes both the "mosaic" arrangement of proteins embedded
          throughout the lipid bilayer as well as the "fluid" movement of lipids
          and proteins alike. You will learn about the details of this model as
          you proceed through the tutorial.
        </p>
      </div>
      <div className="image">
        <img src={membranecompositionimage} /> 
      </div>
    </div>
  );
}
