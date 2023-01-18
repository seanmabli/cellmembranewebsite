import { Tooltip } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import membranefluidity12 from "./membranefluidity12.png";
import membranefluidity14 from "./membranefluidity14.png";
import membranefluidity15 from "./membranefluidity15.png";
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

export function MembraneLipidsMembraneFluidity1() {
  const [pageNum, setPageNum] = useState(1);

  if (pageNum === 1) {
    return (
      <div>
        <div className="text">
          <h1>The Hydrophobic Effect Holds the Bilayer Together</h1>
          <p>
            When lipids are added to water, lipid bilayer sheets{" "}
            <Tooltip title="the method by which phospholipids create a bilayer by maximizing the number of hydrogen bonds between the head of the phospholipids and the water molecules outside and inside the cell">
              <span style={{ textDecoration: "underline" }}>
                <strong>self-assemble</strong>
              </span>
            </Tooltip>{" "}
            rapidly and spontaneously. Why? You may recall that protein folding
            is driven by the clustering of hydrophobic residues in the core of
            the protein, such that they do not contact water. This phenomenon is
            called the hydrophobic effect, and it also drives the formation and
            stabilization of membranes.
          </p>
        </div>
        <div className="imagecontainer">
          <iframe
            style={{ marginTop: "50px" }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lm-dAvbl330"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <Pagination
          count={5}
          shape="rounded"
          className="paginationstyle"
          page={pageNum}
          onChange={(e, value) => setPageNum(value)}
        />
        <ExtraInfo />
      </div>
    );
  } else if (pageNum === 2) {
    return (
      <div>
        <div className="text">
          <h1>The Hydrophobic Effect Holds the Bilayer Together</h1>
          <p>
            The hydrophobic effect can be thought of as "the Jaw of maximization
            of{" "}
            <Tooltip title="the bonds formed between two polar molecules and the force that initiates the self assembly of phospholipids">
              <span style={{ textDecoration: "underline" }}>
                <strong>hydrogen bonding</strong>
              </span>
            </Tooltip>{" "}
            in water.” This is the same effect that causes oil to separate from
            water. When oil and water are mixed, oil molecules intercalate
            between water molecules, reducing the total number of hydrogen
            bonds. As water molecules are attracted to each other via hydrogen
            bonding, more and more hydrogen bonds are formed. Each time a new
            hydrogen bond is formed, an oil molecule is pushed away, or
            excluded. This process explains why{" "}
            <Tooltip title="a characteristic of a molecule in which the covalent bonds between atoms aren't equal and one atom is more 'greedy' for the electrons being shared">
              <span style={{ textDecoration: "underline" }}>
                <strong>polar</strong>
              </span>
            </Tooltip>{" "}
            molecules are soluble in water while non-polar molecules are not:
            polar molecules can hydrogen bond with water, preventing water from
            excluding them.
          </p>
        </div>
        <div className="imagecontainer">
          <img src={membranefluidity12} />
        </div>
        <Pagination
          count={5}
          shape="rounded"
          className="paginationstyle"
          page={pageNum}
          onChange={(e, value) => setPageNum(value)}
        />
        <ExtraInfo />
      </div>
    );
  } else if (pageNum === 3) {
    return (
      <div>
        <div className="text">
          <h1>The Hydrophobic Effect Holds the Bilayer Together</h1>
          <p>
            A major difference between membrane lipids and oil is that while oil
            is non-polar, membrane lipids are{" "}
            <Tooltip title="a molecule with a hydrophilic 'head' and a hydrophobic 'tail'">
              <span style={{ textDecoration: "underline" }}>
                <strong>amphipathic</strong>
              </span>
            </Tooltip>{" "}
            . The{" "}
            <Tooltip title="compounds that tend to repel water and are not soluble in water (not polar)">
              <span style={{ textDecoration: "underline" }}>
                <strong>hydrophobic</strong>
              </span>
            </Tooltip>{" "}
            lipid tails are excluded by water, while the{" "}
            <Tooltip title="compounds that tend to be attracted to water and soluble in water (polar)">
              <span style={{ textDecoration: "underline" }}>
                <strong>hydrophilic</strong>
              </span>
            </Tooltip>{" "}
            lipid heads are attracted to water. Membrane lipids overcome this
            conflict by forming the lipid bilayer. The bilayer allows the
            hydrophilic lipid heads to face out (interacting with water
            molecules), while the hydrophobic tails face inward (where they are
            shielded from water).
          </p>
        </div>
        <div className="imagecontainer">
          <img src={membranefluidity12} />
        </div>
        <Pagination
          count={5}
          shape="rounded"
          className="paginationstyle"
          page={pageNum}
          onChange={(e, value) => setPageNum(value)}
        />
        <ExtraInfo />
      </div>
    );
  } else if (pageNum === 4) {
    return (
      <div>
        <div className="text">
          <h1>The Hydrophobic Effect Holds the Bilayer Together</h1>
          <p>
            This figure overlay demonstrates how{" "}
            <Tooltip title="the bonds formed between two polar molecules and the force that initiates the self assembly of phospholipids">
              <span style={{ textDecoration: "underline" }}>
                <strong>hydrogen bonding</strong>
              </span>
            </Tooltip>{" "}
            is maximized by the lipid bilayer. In a random mixture of lipids and
            water, lipid tails intercalate between water molecules, interfering
            with hydrogen bonding. The formation of the{" "}
            <Tooltip title="the membrane that consistes of a ring of phospholipids with the heads pointing out and a ring of phospholipids with the heads pointing in that encompasses a cell">
              <span style={{ textDecoration: "underline" }}>
                <strong>lipid bilayer</strong>
              </span>
            </Tooltip>{" "}
            minimizes this interference.
          </p>
          <p>
            Once lipid bilayers have formed, the membrane lipids are made more
            cohesive by weak{" "}
            <Tooltip title="bonds between atoms that do not involve the sharing of atoms">
              <span style={{ textDecoration: "underline" }}>
                <strong>noncovalent</strong>
              </span>
            </Tooltip>{" "}
            forces:{" "}
            <Tooltip title="very weak interactions between nonpolar molecules that are caused by the slight attractions of synced up electrons on different molecules">
              <span style={{ textDecoration: "underline" }}>
                <strong>van der Waals</strong>
              </span>
            </Tooltip>{" "}
            attractive forces are at work among the hydrocarbon tails, and{" "}
            <Tooltip title="charges caused by the difference in electron charge of different molecules">
              <span style={{ textDecoration: "underline" }}>
                <strong>electrostatic</strong>
              </span>
            </Tooltip>{" "}
            and hydrogen boiding attractions take place between the head groups
            and water.
          </p>
        </div>
        <div className="imagecontainer">
          <img src={membranefluidity14} />
        </div>
        <Pagination
          count={5}
          shape="rounded"
          className="paginationstyle"
          page={pageNum}
          onChange={(e, value) => setPageNum(value)}
        />
        <ExtraInfo />
      </div>
    );
  } else if (pageNum == 5) {
    return (
      <div>
        <div className="text">
          <h1>The Lipid Bilayer is a Two-Dimensional Fluid</h1>
          <p>
            Since the forces holding the bilayer together are weak non-covalent
            interactions, the lipids and many of the associated proteins in the
            membrane are not rigidly held in place and can move around quite
            easily within the same plane. This movement is referred to as{" "}
            <Tooltip title="a measure of the extent to which the phospholipids of the bilayer are loose">
              <span style={{ textDecoration: "underline" }}>
                <strong>membrane fluidity</strong>
              </span>
            </Tooltip>
            . There are no barriers against lateral diffusion and rotation.
            However, transverse movement, or "flip- flop" from one side of the
            bilayer to the other, is energetically unfavorable and therefore
            rare. Thus, the fluidity of cell membranes is confined to two
            dimensions.
          </p>
          <Tooltip title="Yes">
            <p>
              <strong>Can membrane lipids rotate? </strong>
            </p>
          </Tooltip>
          <Tooltip title="No">
            <p>
              <strong>Can membrane lipids flip-flop? </strong>
            </p>
          </Tooltip>
          <Tooltip title="Yes">
            <p>
              <strong>Can membrane lipids move laterally? </strong>
            </p>
          </Tooltip>
        </div>
        <div className="imagecontainer">
          <img src={membranefluidity15} />
        </div>
        <Pagination
          count={5}
          shape="rounded"
          className="paginationstyle"
          page={pageNum}
          onChange={(e, value) => setPageNum(value)}
        />
        <ExtraInfo />
      </div>
    );
  } else {
    return null;
  }
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
            <p>
              Which common household product is composed of molecules whose
              function depends on their amphipathic nature?
            </p>
            <h4>Answer:</h4>
            <p>
              Soap is made up of fatty acids, which are amphipathic. The fatty
              acids in soap have a single charged head group (for example, a
              carboxyl group) and a long hydrocarbon tail. In water, fatty acid
              molecules tend to form micelles. The micelle, like the bilayer, is
              a compromise between the hydrophilic lipid head and the
              hydrophobic lipid tail. Lipids whose heads are far wider than
              their tails are more prone to forming micelles instead of
              bilayers.
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
