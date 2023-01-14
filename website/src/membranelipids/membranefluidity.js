import { Tooltip } from "@mui/material";
import "./amphipathicity.css";
import Pagination from "@mui/material/Pagination";
import membranefluidity11 from "./membranefluidity11.mp4";
import membranefluidity12 from "./membranefluidity12.png";
import membranefluidity14 from "./membranefluidity14.png";
import { useState } from "react";
import { Player } from 'video-react';
import "./page.css"

export function MembraneLipidsMembraneFluidity1() {
  const [pageNum, setPageNum] = useState(1);

  if (pageNum === 1) {
    return (
      <div>
        <div className="paragraphs2">
          <h1>The Hydrophobic Effect Holds the Bilayer Together</h1>
          <p>
            When lipids are added to water, lipid bilayer sheets{" "}
            <Tooltip title="define">
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
        {/* 
    <Player>
      <source src={membranefluidity11} />
    </Player>*/}

        <Pagination
          count={4}
          shape="rounded"
          className="pagination1"
          page={pageNum}
          onChange={(e, value) => setPageNum(value)}
        />
      </div>
    );
  } else if (pageNum === 2) {
    return (
      <div>
        <div className="paragraphs2">
          <h1>The Hydrophobic Effect Holds the Bilayer Together</h1>
          <p>
            The hydrophobic effect can be thought of as "the Jaw of maximization
            of{" "}
            <Tooltip title="define">
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
            <Tooltip title="define">
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
        <img  src={membranefluidity12} />
    </div>
        <Pagination
          count={4}
          shape="rounded"
          className="pagination1"
          page={pageNum}
          onChange={(e, value) => setPageNum(value)}
        />
      </div>
    );
  } else if (pageNum === 3) {
    return (
      <div>
        <div className="paragraphs2">
          <h1>The Hydrophobic Effect Holds the Bilayer Together</h1>
          <p>
            A major difference between membrane lipids and oil is that while oil
            is non-polar, membrane lipids are{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>amphipathic</strong>
              </span>
            </Tooltip>{" "}
            . The{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>hydrophobic</strong>
              </span>
            </Tooltip>{" "}
            lipid tails are excluded by water, while the{" "}
            <Tooltip title="define">
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
          count={4}
          shape="rounded"
          className="pagination1"
          page={pageNum}
          onChange={(e, value) => setPageNum(value)}
        />
      </div>
    );
  } else if (pageNum === 4) {
    return (
      <div>
        <div className="paragraphs2">
          <h1>The Hydrophobic Effect Holds the Bilayer Together</h1>
          <p>
            This figure overlay demonstrates how{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>hydrogen bonding</strong>
              </span>
            </Tooltip>{" "}
            is maximized by the lipid bilayer. In a random mixture of lipids and
            water, lipid tails intercalate between water molecules, interfering
            with hydrogen bonding. The formation of the{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>lipid bilayer</strong>
              </span>
            </Tooltip>{" "}
            minimizes this interference.
          </p>
          <p>
            Once lipid bilayers have formed, the membrane lipids are made more
            cohesive by weak{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>noncovalent</strong>
              </span>
            </Tooltip>{" "}
            forces:{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>van der Waals</strong>
              </span>
            </Tooltip>{" "}
            attractive forces are at work among the hydrocarbon tails, and{" "}
            <Tooltip title="define">
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
          count={4}
          shape="rounded"
          className="pagination1"
          page={pageNum}
          onChange={(e, value) => setPageNum(value)}
        />
      </div>
    );
  } else {
    return null;
  }
}