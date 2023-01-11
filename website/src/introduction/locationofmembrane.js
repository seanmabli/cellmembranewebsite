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
        <Tooltip title="a biological membrane that regulates passage of materials in and out of the cell and provides support and protection of the cell">
          <strong>
            <u>plasma membrane</u>
          </strong>
        </Tooltip>
        , eukaryotic cells possess additional internal membranes that surround
        organelles like the{" "}
        <Tooltip title="directs cell activity ('the information center') and contains chromatin">
          <strong>
            <u>nucleus</u>
          </strong>
        </Tooltip>
        , the{" "}
        <Tooltip title="a netwrok of compartments that create, modify, and transports materials out of the cells via vesicles">
          <strong>
            <u>endoplasmic reticulum</u>
          </strong>
        </Tooltip>
        , the{" "}
        <Tooltip title="a stack of flattened sacs that modify, package, and distribute substances made by the ER">
          <strong>
            <u>Golgi apparatus</u>
          </strong>
        </Tooltip>
        ,{" "}
        <Tooltip title="the site cell respiration and produces the energy of the cell ('the powerhouse of the cell')">
          <strong>
            <u>mitochondria</u>
          </strong>
        </Tooltip>
        , and{" "}
        <Tooltip title="a sac filled with digestive enzymes that break down food, foreign particles, and old organelles in cytoplasm (produced by rER and Golgi apparatus">
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
      </p>
    </div>
    <img className="image2" src={locationofmembraneimage} />
    </>
  );
}
