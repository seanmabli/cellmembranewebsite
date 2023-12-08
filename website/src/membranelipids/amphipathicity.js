import { Tooltip } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import amphipathicity from "./amphipathicity.png";
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

export function MembraneLipidsAmphipathicity() {
  const [pageNum, setPageNum] = useState(1);

  if (pageNum === 1) {
    return (
      <div>
        <div className="text">
          <h1>Membrane Lipids are Amphipathic</h1>
          <p>
            In general,{" "}
            <Tooltip title="one of the three food macromolecules; another term for fats">
              <span style={{ textDecoration: "underline" }}>
                <strong>lipids</strong>
              </span>
            </Tooltip>{" "}
            are water-insoluble compounds that serve as fuel stores and
            signaling molecules. Lipids are also the main structural component
            of biological membranes. We will be focusing on the latter function.
            <p> </p>There are three classes of membrane lipids:&nbsp;
            <Tooltip title="the lipids that makes up the cell membrane bilayer (phosphate group in the 'head' of the molecule)">
              <span style={{ textDecoration: "underline" }}>
                <strong>phospholipids</strong>
              </span>
            </Tooltip>
            ,{" "}
            <Tooltip title="lipids (with a carbohydrate attached) on the cell membrane that facilitate cellular recognition">
              <span style={{ textDecoration: "underline" }}>
                <strong>glycolipids</strong>
              </span>
            </Tooltip>
            , and{" "}
            <Tooltip title="a lipid (steroid) that is crucial in regulation of membrane fluidity">
              <span style={{ textDecoration: "underline" }}>
                <strong>cholesterol</strong>
              </span>
            </Tooltip>
            . All three of these lipid classes possess the special quality of
            being{" "}
            <Tooltip title="a molecule with a hydrophilic 'head' and a hydrophobic 'tail'">
              <span style={{ textDecoration: "underline" }}>
                <strong>amphipathic</strong>
              </span>
            </Tooltip>
            . That is, one portion of the lipid is{" "}
            <Tooltip title="compounds that tend to be attracted to water and soluble in water (polar)">
              <span style={{ textDecoration: "underline" }}>
                <strong>hydrophilic</strong>
              </span>
            </Tooltip>
            , "water loving", and the rest is{" "}
            <Tooltip title="compounds that tend to repel water and are not soluble in water (not polar)">
              <span style={{ textDecoration: "underline" }}>
                <strong>hydrophobic</strong>
              </span>
            </Tooltip>
            , "water-fearing". The amphipathic nature of lipids is of key
            importance to the structure of membrane bilayers, as we will discuss
            shortly.
          </p>
        </div>
        <div className="imagecontainer">
          <img src={amphipathicity} />
        </div>
        <Pagination
          count={3}
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
          <h1>Lipid Tails can be Saturated or Unsaturated</h1>
          <p>
            <p>
              Phospholipids and glycolipids share a similar structure. They
              contain a{" "}
              <Tooltip title="compounds that tend to be attracted to water and soluble in water (polar)">
                <span style={{ textDecoration: "underline" }}>
                  <strong>hydrophilic</strong>
                </span>
              </Tooltip>{" "}
              or polar "head" and one or two{" "}
              <Tooltip title="compounds that tend to repel water and are not soluble in water (not polar)">
                <span style={{ textDecoration: "underline" }}>
                  <strong>hydrophobic</strong>
                </span>
              </Tooltip>{" "}
              "tails."
            </p>
            <p>
              The tails are derived from{" "}
              <Tooltip title="the building blocks of lipids; consist of a carboxyl head at the end of a long hydrocarbon chain">
                <span style={{ textDecoration: "underline" }}>
                  <strong>fatty acids</strong>
                </span>
              </Tooltip>
              : long, unbranched hydrocarbon chains with carboxyl groups at one
              end. The fatty acid tails may be
              <Tooltip title="a fatty acid containing the maximum number of hydrogen atoms in its tail as possible">
                <span style={{ textDecoration: "underline" }}>
                  <strong>saturated</strong>
                </span>
              </Tooltip>{" "}
              (no double bonds between carbons) or
              <Tooltip title="a fatty acid with 'kinks' in the chain caused by double bonds between carbon molecules">
                <span style={{ textDecoration: "underline" }}>
                  <strong>unsaturated</strong>
                </span>
              </Tooltip>{" "}
              (contains double bonds), Usually, one of the two fatty acid chains
              in a lipid has at least one double bond. Each double bond is
              illustrated here by a single kink in a lipid tail. We will come
              back to this important property when discussing membrane fluidity.
            </p>
          </p>
        </div>
        <div className="imagecontainer">
          <img src={amphipathicity} />
        </div>
        <Pagination
          count={3}
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
          <h1>Glycolipids and Cholesterol</h1>
          <p>
            Unlike{" "}
            <Tooltip title="the lipids that makes up the cell membrane bilayer (phosphate group in the 'head' of the molecule)">
              <span style={{ textDecoration: "underline" }}>
                <strong>phospholipids</strong>
              </span>
            </Tooltip>
            ,{" "}
            <Tooltip title="lipids (with a carbohydrate attached) on the cell membrane that facilitate cellular recognition">
              <span style={{ textDecoration: "underline" }}>
                <strong>glycolipids</strong>
              </span>
            </Tooltip>{" "}
            have{" "}
            <Tooltip title="another term for carbohydrates">
              <span style={{ textDecoration: "underline" }}>
                <strong>sugars</strong>
              </span>
            </Tooltip>{" "}
            as part of their head groups. Glycolipids are significantly less
            abundant compared to phospholipids.
          </p>
          <p>
            <Tooltip title="a lipid (steroid) that is crucial in regulation of membrane fluidity">
              <span style={{ textDecoration: "underline" }}>
                <strong>Cholesterol</strong>
              </span>
            </Tooltip>{" "}
            is abundant in some{" "}
            <Tooltip title="a complex cell that has a clear nucleus and complex organelles that assist the cell">
              <span style={{ textDecoration: "underline" }}>
                <strong>eukaryotic</strong>
              </span>
            </Tooltip>{" "}
            cell membranes: up to one molecule for every phospholipid in most
            animal cells, The structure and function of cholesterol will be
            discussed shortly.
          </p>
        </div>
        <div className="imagecontainer">
          <img src={amphipathicity} />
        </div>
        <Pagination
          count={3}
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
              Amphipathic molecules have both polar (hydrophilic) and non-polar
              (hydrophobic) parts. Can you think of the most polar and least
              polar types of bonds found commonly in biological systems?
            </p>
            <h4>Answer:</h4>
            <p>
              In order of decreasing polarity, here are some polar bonds
              commonly found in biological systems: carboxyl (COOH), amino
              (C-NH2), and hydroxyl (C-OH).
            </p>
            <p>
              The carbon-hydrogen (C-H) bond is only barely polar, and the
              carbon-carbon (C-C) bond is not polar at all, so they both act as
              non-polar.
            </p>
            <p>
              Keep in mind that amphipathic molecules usually contain regions
              taht are almost exclusively non-polar (like hydrocarbons, which
              contain only C-C and C-H bonds) as well as regions that are polar
              (featuring, for example, C=O, C-OH, and C-NH2 bonds).
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
