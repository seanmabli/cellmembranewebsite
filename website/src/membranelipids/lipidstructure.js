import lipidstructureimage from "./lipidstructure.png";
import { Tooltip } from "@mui/material";
import "./lipidstructure.css"

export function MembraneLipidsLipidStruture() {
    return (
        <>
        <div className="text">
          <h1>Phosphoglycerides are a Type of Phospholipid</h1>
          <p>
            <Tooltip title="the lipids that makes up the cell membrane bilayer (phosphate group in the 'head' of the molecule)">
              <strong>
                <u>Phospholipids</u>
              </strong>
            </Tooltip>
            {" "}are the major class of membrane lipids—they are abundant in all biological membranes. The general structure of phospholipids is shown at left. Phospholipids are derived from either{" "}
            <Tooltip title="a compound primarily made of 3 carbons and an alcohol">
              <strong>
                <u>glycerol</u>
              </strong>
            </Tooltip>
            {" "}(a three-carbon alcohol) or{" "}
            <Tooltip title="a complicated kind of alcohol with an 18-carbon hydrocarbon chain">
              <strong>
                <u>sphingosine</u>
              </strong>
            </Tooltip>
            {" "}(a more complex alcohol). We will focus here on the glycerol-derived phospholipids, called{" "}
            <Tooltip title="a more specific type of phospholipids, specifically derived from glycerol">
              <strong>
                <u>phosphoglycerides</u>
              </strong>
            </Tooltip>
            <p> </p>
            Phosphoglycerides have the following components: a glycerol backbone, two fatty acid chains, a phosphate group, and (usually) an alcohol. The polar head portion of the molecule is comprised of the glycerol backbone and the phosphorylated alcohol (or phosphate alone). The fatty acid "tails" in phosphoglycerides usually have an even number of carbon atoms, averaging 14 to 24, with 16 and 18 being the most common numbers.
          </p>
        </div>
        <div className="imagecontainer">
        <img className="image" src={lipidstructureimage} />
        </div>
        </>
      );
}