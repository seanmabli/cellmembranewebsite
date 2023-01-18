import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import simulation from "./simulation.png"

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
  "&:hover": {
    borderColor: "black",
  },
};

export function Simulation() {
  return (
    <div>
      <h1>Simulation</h1>
      <p>
        Controls: press "a" for new water, press "b" for new phospholipid, press
        "c" for new oil, press "x" over a molecule to delete, press "shift + x"
        to clear
      </p>
      <ExtraInfo />
      <iframe
        src="https://embedcellmembranetutorial.web.app/"
        width="900px"
        height="600px"
        style={{ border: "0px" }}
      ></iframe>
    </div>
  );
}

function ExtraInfo() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={styleButton} onClick={handleOpen}>
        Extra Info
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h4>Extra Info:</h4>
            <p>This simulation is taking liberties. Can you guess how?</p>
            <h4>Answer:</h4>
            <p>
              Actual lipid bilayers are self-sealing, meaning that in aqueous
              solution, "edges" are rapidly eliminated. The force behind this
              process is the same hydrophobic effect that formed the bilayer in
              the first place.
            </p>
            <div className="imagecontainer"><img src={simulation}/></div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
