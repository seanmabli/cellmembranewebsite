import { Tooltip } from "@mui/material";
import "./integralandperipheral.css";
import Pagination from "@mui/material/Pagination";
import { useNavigate, useLocation } from "react-router-dom";
import integralperipheral from "./integralperipheral.png";
import { useState } from "react";

export function MembraneProteinIntegralAndPeripheral() {
  const [pageNum, setPageNum] = useState(1);

  if (pageNum === 1) {
    return (
      <div>
        <div className="paragraphs3">
          <h1>Membrane Proteins are Integral or Peripheral</h1>
          <p>
            &nbsp; &nbsp; &nbsp;Membrane proteins are crucial both for membrane
            <br />
            function and membrane stability. Different membranes
            <br />
            differ radically in their protein content. For example,
            <br />
            the protein content of the{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>plasma membrane</strong>
            </span>{" "}
            is typically
            <br />
            50%, while the protein content of{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>organelle</strong>
            </span>{" "}
            membranes
            <br />
            involved in energy generation (i.e. the internal
            <br />
            membranes of mitochondria and chloroplasts) is
            <br />
            upwards of 75%.
            <br />
            &nbsp; &nbsp; &nbsp;Proteins that are bound to only one side of the
            lipid
            <br />
            bilayer are called{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>peripheral membrane proteins</strong>
            </span>
            .<br />
            Proteins that interact directly with the hydrophobic
            <br />
            portion of membranes are termed{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>integral membrane</strong>
            </span>
            <br />
            <span style={{ textDecoration: "underline" }}>
              <strong>proteins</strong>
            </span>
            . In some cases, these integral membrane
            <br />
            proteins pass completely through a membrane. In other
            <br />
            cases, these proteins interact with the membrane via a<br />
            portion embedded in only one monolayer of the
            <br />
            membrane.
          </p>
        </div>
        <img className="image3" src={integralperipheral} />
        <Pagination
          count={3}
          shape="rounded"
          className="pagination1"
          onChange={(e, value) => setPageNum(value)}
        />
      </div>
    );
  } else if (pageNum === 2) {
    return (
      <div>
        <div className="paragraphs3">
          <h1>Transmembrane Domains are Helices</h1>
          <p>
            &nbsp; &nbsp; &nbsp;Most integral membrane proteins span the lipid
            bilayer
            <br />
            with either a single{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>helix</strong>
            </span>{" "}
            (often called a single-pass
            <br />
            transmembrane proteins) or several helices (multipass
            <br />
            transmembrane proteins). The membrane-spanning
            <br />
            helices, called{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>transmembrane domains</strong>
            </span>
            , interact with
            <br />
            the hydrophobic tails of membrane lipids and anchor
            <br />
            the protein in the membrane. The parts of the protein
            <br />
            that are exposed to water on either side of the
            <br />
            membrane are largely hydrophilic.
          </p>
        </div>
        <img className="image3" src={integralperipheral} />
        <Pagination
          count={3}
          shape="rounded"
          className="pagination1"
          onChange={(e, value) => setPageNum(value)}
        />
      </div>
    );
  } else if (pageNum === 3) {
    return (
      <div>
        <div className="paragraphs3">
          <h1>Proteins are Asymmetric</h1>
          <p>
            &nbsp; &nbsp; &nbsp;In most cases, proteins are asymmetric, and
            their
            <br />
            orientation is critical for their function. For example, a<br />
            protein that interacts with extracellular substances may
            <br />
            have a large region exposed to the outside of the cell but
            <br />
            only a small polypeptide portion exposed to the{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>cytosol</strong>
            </span>
            .<br />
            The particular orientation of a protein is established
            <br />
            during its synthesis. Due to the extensive polar regions
            <br />
            on either side of the membrane, integral membrane
            <br />
            proteins do not flip transversely through the
            <br />
            hydrophobic interior of the membrane. This barrier to
            <br />
            flipping preserves the asymmetry of the membrane.
          </p>
        </div>
        <img className="image4" src={integralperipheral} />
        <Pagination
          count={3}
          shape="rounded"
          className="pagination2"
          onChange={(e, value) => setPageNum(value)}
        />
      </div>
    );
  } else {
    return null;
  }
}
