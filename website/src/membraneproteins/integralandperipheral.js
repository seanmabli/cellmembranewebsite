import { Tooltip } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import integralperipheral from "./integralperipheral.png";
import { useState } from "react";
import "../compodents/page.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "#6FF6FF",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const styleButton = {
  color: "black",
  borderColor: "black",
  margin: "5px",
  marginLeft: "50%",
  "&:hover": {
    borderColor: "black",
  },
};

export function MembraneProteinIntegralAndPeripheral() {
  const [pageNum, setPageNum] = useState(1);

  if (pageNum === 1) {
    return (
      <div>
        <div className="text">
          <h1>Membrane Proteins are Integral or Peripheral</h1>
          <p>
            Membrane proteins are crucial both for membrane function and
            membrane stability. Different membranes differ radically in their
            protein content. For example, the protein content of the{" "}
            <Tooltip title="a biological membrane that regulates passage of materials in and out of the cell and provides support and protection of the cell">
              <span style={{ textDecoration: "underline" }}>
                <strong>plasma membrane</strong>
              </span>
            </Tooltip>{" "}
            is typically 50%, while the protein content of{" "}
            <Tooltip title="areas of the cell enclosed by a biological membrane to execute different functions needed for the cell to live">
              <span style={{ textDecoration: "underline" }}>
                <strong>organelle</strong>
              </span>
            </Tooltip>{" "}
            membranes involved in energy generation (i.e. the internal membranes
            of mitochondria and chloroplasts) is upwards of 75%.
            <p> </p>Proteins that are bound to only one side of the lipid
            bilayer are called{" "}
            <Tooltip title="these proteins are only on one side of the membrane and thus are hydrophilic">
              <span style={{ textDecoration: "underline" }}>
                <strong>peripheral membrane proteins</strong>
              </span>
            </Tooltip>
            . Proteins that interact directly with the hydrophobic portion of
            membranes are termed{" "}
            <Tooltip title="a membrane that passes through the bilayer and thus, the part of the protein inside the bilayer is hydrophobic and the parts of the membrane outside the bilayer are hydrophilic">
              <span style={{ textDecoration: "underline" }}>
                <strong>integral membrane proteins</strong>
              </span>
            </Tooltip>
            . In some cases, these integral membrane proteins pass completely
            through a membrane. In other cases, these proteins interact with the
            membrane via a portion embedded in only one monolayer of the
            membrane.
          </p>
        </div>
        <div className="imagecontainer">
          <img src={integralperipheral} />
        </div>
        <Pagination
          count={3}
          shape="rounded"
          className="paginationstyle"
          page={pageNum}
          onChange={(e, value) => setPageNum(value)}
        />
        <PopQuiz />
      </div>
    );
  } else if (pageNum === 2) {
    return (
      <div>
        <div className="text">
          <h1>Transmembrane Domains are Helices</h1>
          <p>
            Most integral membrane proteins span the lipid bilayer with either a
            single{" "}
            <Tooltip title="a characteristic of the secondary structure of a protein shaped by hydrogen bonds between the bases of the amino acids">
              <span style={{ textDecoration: "underline" }}>
                <strong>helix</strong>
              </span>
            </Tooltip>{" "}
            (often called a single-pass transmembrane proteins) or several
            helices (multipass transmembrane proteins). The membrane-spanning
            helices, called{" "}
            <Tooltip title="the parts of the protein that are in the bilayer itself and thus interact with the hydrophobic tails of the membrane">
              <span style={{ textDecoration: "underline" }}>
                <strong>transmembrane domains</strong>
              </span>
            </Tooltip>
            , interact with the hydrophobic tails of membrane lipids and anchor
            the protein in the membrane. The parts of the protein that are
            exposed to water on either side of the membrane are largely
            hydrophilic.
          </p>
        </div>
        <div className="imagecontainer">
          <img src={integralperipheral} />
        </div>
        <Pagination
          count={3}
          shape="rounded"
          className="paginationstyle"
          page={pageNum}
          onChange={(e, value) => setPageNum(value)}
        />
        <PopQuiz />
      </div>
    );
  } else if (pageNum === 3) {
    return (
      <div>
        <div className="text">
          <h1>Proteins are Asymmetric</h1>
          <p>
            In most cases, proteins are asymmetric, and their orientation is
            critical for their function. For example, a protein that interacts
            with extracellular substances may have a large region exposed to the
            outside of the cell but only a small polypeptide portion exposed to
            the{" "}
            <Tooltip title="the gel that is located inside the cell but outside the organelles that contain water and other biological molecules">
              <span style={{ textDecoration: "underline" }}>
                <strong>cytosol</strong>
              </span>
            </Tooltip>
            . The particular orientation of a protein is established during its
            synthesis. Due to the extensive polar regions on either side of the
            membrane, integral membrane proteins do not flip transversely
            through the hydrophobic interior of the membrane. This barrier to
            flipping preserves the asymmetry of the membrane.
          </p>
        </div>
        <div className="imagecontainer">
          <img src={integralperipheral} />
        </div>
        <Pagination
          count={3}
          shape="rounded"
          className="paginationstyle"
          page={pageNum}
          onChange={(e, value) => setPageNum(value)}
        />
        <PopQuiz />
      </div>
    );
  } else {
    return null;
  }
}

function PopQuiz() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [answer, setAnswer] = useState(false);

  if (!answer) {
    return (
      <div>
        <Button sx={styleButton} onClick={handleOpen}>
          Pop Quiz
        </Button>
        <Modal
          open={open}
          onClose={() => {
            setAnswer(false);
            setOpen(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h4>Pop Quiz:</h4>
              <p>
                How could you identify a transmembrane helix just by examining
                the amino acid sequence of a protein?
              </p>
              <h4>Answer:</h4>
              <Button sx={styleButton} onClick={() => setAnswer(true)}>
                Show Answer
              </Button>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  } else {
    return (
      <div>
        <Button sx={styleButton} onClick={handleOpen}>
          Pop Quiz
        </Button>
        <Modal
          open={open}
          onClose={() => {
            setAnswer(false);
            setOpen(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h4>Pop Quiz:</h4>
              <p>
                How could you identify a transmembrane helix just by examining
                the amino acid sequence of a protein?
              </p>
              <h4>Answer:</h4>
              <p>
                Transmembrane helices can often be identified from a protein's
                sequence as characteristic stretches of two-dozen or so
                hydrophobic amino acids (or, more appropriately, amino acids
                with hydrophobic side chains; these are glycine, alanine,
                phenylalanine, leucine, valine, and isoleucine).
              </p>
              <p>
                A cautionary note: transmembrane domains are not always entirely
                composed of hydrophobic amino acids. Hydrophilic residues are
                often present; one use for such residues is to line the inside
                of channels and pores in order to allow hydrophilic molecules to
                pass through the membrane.
              </p>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }
}
