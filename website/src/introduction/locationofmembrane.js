import "./locationofmembrane.css";
import locationofmembraneimage from "./locationofmembrane.png";
import { Tooltip } from "@mui/material";

export function IntroductionLocationOfMembrane() {
  return (
    <>
    <div className="paragraphs">
      <h1>Where are Membranes Found?</h1>
      <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; While all cells are surrounded by a{" "}
        <Tooltip title="defintion">
          <strong>
            <u>plasma membrane</u>
          </strong>
        </Tooltip>
        , eukaryotic cells possess additional internal membranes that surround
        organelles like the{" "}
        <Tooltip title="defintion">
          <strong>
            <u>nucleus</u>
          </strong>
        </Tooltip>
        , the{" "}
        <Tooltip title="definition">
          <strong>
            <u>endoplasmic reticulum</u>
          </strong>
        </Tooltip>
        , the{" "}
        <Tooltip title="definition">
          <strong>
            <u>Golgi apparatus</u>
          </strong>
        </Tooltip>
        ,{" "}
        <Tooltip title="definition">
          <strong>
            <u>mitochondria</u>
          </strong>
        </Tooltip>
        , and{" "}
        <Tooltip title="definition">
          <strong>
            <u>lysosomes</u>
          </strong>
        </Tooltip>
        . The plasma membrane keeps a cell intact by holding all of the cellular
        components inside. It also keeps many unwanted molecules outside of the
        cell. Internal membranes are crucial for creating micro-environments
        containing sequestered enzymes or high concentrations of hydrogen ions
        (low pH). Five general categories of membrane function are illustrated
        in the next section.{" "}
        <p> </p> 
        <Tooltip title = 'The answer to this is needed; not in slideshow'>
          <strong>
            <u>Extra Info: Which two internal membranes are one and the same?</u>
          </strong>
        </Tooltip> 
      </p>
    </div>
    <img className="image2" src={locationofmembraneimage} />
    </>
  );
}
