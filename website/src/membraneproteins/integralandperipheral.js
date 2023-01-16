import { Tooltip } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import integralperipheral from "./integralperipheral.png";
import { useState } from "react";
import "../compodents/page.css";

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
            <span style={{ textDecoration: "underline" }}>
              <strong>plasma membrane</strong>
            </span>{" "}
            is typically 50%, while the protein content of{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>organelle</strong>
            </span>{" "}
            membranes involved in energy generation (i.e. the internal membranes
            of mitochondria and chloroplasts) is upwards of 75%.
            <p> </p>Proteins that are bound to only one side of the lipid
            bilayer are called{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>peripheral membrane proteins</strong>
            </span>
            . Proteins that interact directly with the hydrophobic portion of
            membranes are termed{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>integral membrane</strong>
            </span>
            <span style={{ textDecoration: "underline" }}>
              <strong>proteins</strong>
            </span>
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
            <span style={{ textDecoration: "underline" }}>
              <strong>helix</strong>
            </span>{" "}
            (often called a single-pass transmembrane proteins) or several
            helices (multipass transmembrane proteins). The membrane-spanning
            helices, called{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>transmembrane domains</strong>
            </span>
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
            <span style={{ textDecoration: "underline" }}>
              <strong>cytosol</strong>
            </span>
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
      </div>
    );
  } else {
    return null;
  }
}
