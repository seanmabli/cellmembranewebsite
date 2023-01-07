import "./locationofmembrane.css";
import { Tooltip } from "@mui/material";

export function IntroductionLocationOfMembrane() {
  return (
    <>
      <h1>Where are Membranes Found?</h1>
      <p>
        While all cells are surrounded by a{" "}
        <Tooltip title="A biological membrane that separates and protects the interior of all cells from the outside environment">
          <strong>
            <u>plasma membrane</u>
          </strong>
        </Tooltip>
        , eukaryotic cells possess additional internal membranes that surround
        organelles like the{" "}
        <Tooltip title="The structure in a cell that contains the chromosomes">
          <strong>
            <u>nucleus</u>
          </strong>
        </Tooltip>
        , the{" "}
        <Tooltip title="A continuous membrane system that forms a series of flattened sacs within the cytoplasm of eukaryotic cells and serves multiple functions, being important particularly in the synthesis, folding, modification, and transport of proteins">
          <strong>
            <u>endoplasmic reticulum</u>
          </strong>
        </Tooltip>
        , the{" "}
        <Tooltip title="A complex of vesicles and folded membranes within the cytoplasm of most eukaryotic cells and is involved in secretion and intracellular transport">
          <strong>
            <u>Golgi apparatus</u>
          </strong>
        </Tooltip>
        ,{" "}
        <Tooltip title="An organelle found in large numbers in most cells, in which the biochemical processes of respiration and energy production occur">
          <strong>
            <u>mitochondria</u>
          </strong>
        </Tooltip>
        , and{" "}
        <Tooltip title="An organelle in the cytoplasm of eukaryotic cells containing degradative enzymes enclosed in a membrane">
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
    </>
  );
}
