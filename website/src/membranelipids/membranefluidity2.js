import * as React from "react";
import { Slider } from "@mui/material";
import { Tooltip } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import membranefluidity23 from "./membranefluidity23.png";
import membranefluidity24 from "./membranefluidity24.png";
import membranefluidity25 from "./membranefluidity25.png";
import { useState } from "react";

export function MembraneLipidsMembraneFluidity2() {
  const [tempValue, setTempValue] = React.useState(0);
  const [tailValue, setTailValue] = React.useState(0);
  const [unsaturationValue, setUnsaturationValue] = React.useState(0);
  const [outputValue, setOutputValue] = React.useState(0);

  const handleTempChange = (event, newValue) => {
    setTempValue(newValue);
    setOutputValue((newValue - tailValue + unsaturationValue) / 3);
  };

  const handleTailChange = (event, newValue) => {
    setTailValue(newValue);
    setOutputValue((tempValue - newValue + unsaturationValue) / 3);
  };

  const handleUnsaturationChange = (event, newValue) => {
    setUnsaturationValue(newValue);
    setOutputValue((tempValue - tailValue + newValue) / 3);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "300px", padding: "0px 40px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>Fluidity-O-Meter (Output)</p>
          </div>
          <Slider
            aria-label="Fluidity-O-Meter"
            value={outputValue}
            getAriaValueText={valuetext}
            step={0.01}
            min={-1}
            max={1}
            marks={[
              {
                value: -1,
                label: "Less Fluidity",
              },
              {
                value: 1,
                label: "More Fluidity",
              },
            ]}
            style={{ color: "black" }}
            disabled
          />
        </div>

        <div style={{ width: "300px", padding: "0px 40px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>Temperature (Input)</p>
          </div>
          <Slider
            aria-label="Temperature"
            value={tempValue}
            onChange={handleTempChange}
            getAriaValueText={valuetext}
            step={0.01}
            min={-1}
            max={1}
            marks={[
              {
                value: -1,
                label: "Low",
              },
              {
                value: 1,
                label: "High",
              },
            ]}
            style={{ color: "black" }}
            size="small"
          />
        </div>
        <div style={{ width: "300px", padding: "0px 40px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>Lipid Tail Length (Input)</p>
          </div>
          <Slider
            aria-label="Lipid Tail Length"
            value={tailValue}
            onChange={handleTailChange}
            getAriaValueText={valuetext}
            step={0.01}
            min={-1}
            max={1}
            marks={[
              {
                value: -1,
                label: "Low",
              },
              {
                value: 1,
                label: "High",
              },
            ]}
            style={{ color: "black" }}
            size="small"
          />
        </div>
        <div style={{ width: "300px", padding: "0px 40px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>Degree of Unsaturation (Input)</p>
          </div>
          <Slider
            aria-label="Degree of Unsaturation"
            value={unsaturationValue}
            onChange={handleUnsaturationChange}
            getAriaValueText={valuetext}
            step={0.01}
            min={-1}
            max={1}
            marks={[
              {
                value: -1,
                label: "Low",
              },
              {
                value: 1,
                label: "High",
              },
            ]}
            style={{ color: "black" }}
            size="small"
          />
        </div>
      </div>
      <MembraneFluidity2Pagination />
    </div>
  );
}

function MembraneFluidity2Pagination() {
  const [pageNum, setPageNum] = useState(1);

  if (pageNum === 1) {
    return (
      <div>
        <div className="text">
          <h1>Membrane Fluidity Must be Maintained within Certain Limits</h1>
          <p>
            Membrane functions are significantly impaired when fluidity is
            experimentally increased beyond a certain level. For example, if a
            membrane is too fluid, it will not serve as an adequate barrier.
            Four main factors contribute to{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>membrane fluidity</strong>
              </span>
            </Tooltip>{" "}
            : temperature, membrane lipid tail length, the degree of
            unsaturation of membrane lipid tails, and the amount of cholesterol.
            As temperature changes, some organisms (but not humans) are able to
            compensate by modulating the other three factors. How does each of
            these factors influence membrane fluidity, and why? We will now
            consider each factor in turn.
          </p>
        </div>
        <Pagination
          count={5}
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
          <h1>Membrane Fluidity Increases with Temperature</h1>
          <p>
            The effects of temperature on{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>membrane fluidity</strong>
              </span>
            </Tooltip>{" "}
            membrane fluidity are straight- forward, When it is very cold, the
            lipid bilayer "freezes" into a gel (or solid-like) state, and
            fluidity is drastically reduced. In this solid-like state, lipids
            are tightly packed, and their movement is restricted. By constrast,
            within the normal range of temperatures for most organisms, the
            lipid bilayer adopts a fluid-like state, with greater freedom of
            movement. Generally speaking, the motion of lipids increases with
            temperature, while the{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>van der Waals</strong>
              </span>
            </Tooltip>{" "}
            forces between lipids represent a relatively constant source of
            friction, or drag.
          </p>
        </div>
        <Pagination
          count={5}
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
          <h1>Membrane Fluidity Decreases with Lipid Tail Length</h1>
          <p>
            Lipid tail length affects fluidity, since lipids with longer tails
            exhibit more "drag" as they move around in the membrane. In other
            words, the longer a lipid’s tail, the more attractive{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>van der Waals</strong>
              </span>
            </Tooltip>{" "}
            forces there are between it and other lipids. As a result, membranes
            with longer lipid tails tend to be less fluid.
          </p>
        </div>
        <div className="imagecontainer">
          <img src={membranefluidity23} />
        </div>
        <Pagination
          count={5}
          shape="rounded"
          className="paginationstyle"
          page={pageNum}
          onChange={(e, value) => setPageNum(value)}
        />
      </div>
    );
  } else if (pageNum === 4) {
    return (
      <div>
        <div className="text">
          <h1>Membrane Fluidity Increases with Degree of Unsaturation</h1>
          <p>
            The{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>degree of unsaturation</strong>
              </span>
            </Tooltip>{" "}
            refers to the number of double bonds in a lipid's tails (for
            example, a lipid with one double bond has a degree of unsaturation
            of one). The average degree of unsaturation of a membrane affects
            its fluidity.{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>Unsaturated</strong>
              </span>
            </Tooltip>{" "}
            lipid tails do not pack together as well as{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>saturated</strong>
              </span>
            </Tooltip>{" "}
            lipid tails and are therefore less able to interact with each other
            via attractive{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>van der Waals forces</strong>
              </span>
            </Tooltip>{" "}
            . Therefore, an increasing average degree of unsaturation leads to
            an increase in{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>membrane fluidity</strong>
              </span>
            </Tooltip>{" "}
            .
          </p>
        </div>
        <div className="imagecontainer">
          <img src={membranefluidity24} />
        </div>
        <Pagination
          count={5}
          shape="rounded"
          className="paginationstyle"
          page={pageNum}
          onChange={(e, value) => setPageNum(value)}
        />
      </div>
    );
  } else if (pageNum === 5) {
    return (
      <div>
        <div className="text">
          <h1>Cholestrol Influences Membrane Fluidity</h1>
          <p>
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>Cholestrol</strong>
              </span>
            </Tooltip>{" "}
            is a contributor to membrane fluidity in animals. Like the other
            membrane lipids, cholesterol is also{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>amphipathic</strong>
              </span>
            </Tooltip>{" "}
            , with a polar head and a hydrophobic tail. The polar portion is a
            single hydroxyl (R-OH) group, which interacts with water and the
            heads of other membrane lipids. The hydrophobic tail of cholesterol
            is embedded in the hydrophobic interior of the membrane. Cholesterol
            fits into the gaps between the phospholipid molecules and interacts
            via{" "}
            <Tooltip title="define">
              <span style={{ textDecoration: "underline" }}>
                <strong>van der Waals</strong>
              </span>
            </Tooltip>{" "}
            forces with the lipid tails. At moderate to high temperatures, the
            additional van der Waals forces decrease membrane fluidity. However,
            at low temperatures, cholesterol actually increases fluidity: by
            inserting its bulky structure between phosopholipid tails,
            cholesterol prevents the phospholipids from packing too close
            together and "freezing".
          </p>
        </div>
        <div className="imagecontainer">
          <img src={membranefluidity25} />
        </div>
        <Pagination
          count={5}
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
