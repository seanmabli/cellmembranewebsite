import { Tooltip } from "@mui/material";
import "./amphipathicity.css";
import Pagination from "@mui/material/Pagination";
import { useNavigate, useLocation } from "react-router-dom";
import amphipathicity from "./amphipathicity.png";
import { useState } from "react";
 
export function MembraneLipidsAmphipathicity() {
  const [pageNum, setPageNum] = useState(1);
 
  if (pageNum === 1) {
    return (
      <div>
        <div className="paragraphs2">
          <h1>Lipid Tails can be Saturated or Unsaturated</h1>
          <p>
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Phospholipids and glycolipids
              share a similar
              <br />
              structure. They contain a{" "}
              <span style={{ textDecoration: "underline" }}>
                <strong>hydrophilic</strong>
              </span>{" "}
              or polar
              <br />
              "head" and one or two{" "}
              <span style={{ textDecoration: "underline" }}>
                <strong>hydrophobic</strong>
              </span>{" "}
              "tails."
            </p>
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The tails are derived from{" "}
              <span style={{ textDecoration: "underline" }}>
                <strong>fatty acids</strong>
              </span>
              : long,
              <br />
              unbranched hydrocarbon chains with carboxyl
              <br />
              groups at one end. The fatty acid tails may be
              <br />
              <span style={{ textDecoration: "underline" }}>
                <strong>saturated</strong>
              </span>{" "}
              (no double bonds between carbons) or
              <br />
              <span style={{ textDecoration: "underline" }}>
                <strong>unsaturated</strong>
              </span>{" "}
              (contains double bonds), Usually,
              <br />
              one of the two fatty acid chains in a lipid has at
              <br />
              least one double bond. Each double bond is
              <br />
              illustrated here by a single kink in a lipid tail. We
              <br />
              will come back to this important property when
              <br />
              discussing membrane fluidity.
            </p>
          </p>
        </div>
        <img className="image3" src={amphipathicity} />
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
        <div className="paragraphs2">
          <h1>Membrane Lipids are Amphipathic</h1>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; In general,{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>lipids</strong>
            </span>{" "}
            are water-insoluble compounds that serve as fuel stores and
            signaling molecules. Lipids are also the main structural component
            of biological membranes. We will be focusing on the latter function.
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; There are three classes of
            membrane lipids:&nbsp;
            <span style={{ textDecoration: "underline" }}>
              <strong>phospholipids</strong>
            </span>
            ,{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>glycolipids</strong>
            </span>
            , and{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>cholesterol</strong>
            </span>
            . All three of these lipid classes possess the special quality of
            being{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>amphipathic</strong>
            </span>
            . That is, one portion of the lipid is{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>hydrophilic</strong>
            </span>
            , "water loving", and the rest is{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>hydrophobic</strong>
            </span>
            , "water-fearing". The amphipathic nature of lipids is of key
            importance to the structure of membrane bilayers, as we will discuss
            shortly.
          </p>
        </div>
        <img className="image3" src={amphipathicity} />
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
        <div className="paragraphs2">
          <h1>Glycolipids and Cholesterol</h1>
          <p>
            Unlike{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>phospholipids</strong>
            </span>
            ,{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>glycolipids</strong>
            </span>{" "}
            have{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>sugars</strong>
            </span>{" "}
            as part of their head groups. Glycolipids are significantly less
            abundant compared to phospholipids.
          </p>
          <p>
            <span style={{ textDecoration: "underline" }}>
              <strong>Cholesterol</strong>
            </span>{" "}
            is abundant in some{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>eukaryotic</strong>
            </span>{" "}
            cell membranes: up to one molecule for every phospholipid in most
            animal cells, The structure and function of cholesterol will be
            discussed shortly.
          </p>
        </div>
        <img className="image3" src={amphipathicity} />
        <Pagination
          count={3}
          shape="rounded"
          className="pagination1"
          onChange={(e, value) => setPageNum(value)}
        />
      </div>
    );
  }  else {
    return null;
  }
}
 
