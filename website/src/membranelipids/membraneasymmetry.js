import membraneasymmetryimage from "./membraneasymmetry.png";
import { Tooltip } from "@mui/material";
import "../compodents/page.css";
import { useState } from "react";
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
      <PopQuiz />
    </div>
  );
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
                How is asymmetry preserved? Why don't lipids and proteins
                flip-flop through the bilayer?
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
                How is asymmetry preserved? Why don't lipids and proteins
                flip-flop through the bilayer?
              </p>
              <h4>Answer:</h4>
              <p>
                Lipid heads are hydrophilic, as are exposed portions of
                proteins. In other words, on either side of the membrane,
                proteins and lipids interact via hydrogen bonding with water. In
                order to cross the membrane, these molecules would have to first
                relinquish their hydrogen bonds with water.
              </p>
              <p>
                In fact, ANY hydrophilic or partially hydrophilic molecule,
                whether a metabolite, a drug, or an enzyme, must relinquish
                favorable interactions with water in order to cross a membrane.
                The more hydrophilic (and the larger) a molecule, the less
                likely it is to cross via simple diffusion.
              </p>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }
}
