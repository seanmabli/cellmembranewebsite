import * as React from "react";
import { Slider } from "@mui/material";

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
      <div style={{ maxWidth: "200px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Fluidity-O-Meter</h2>
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>Temperature</p>
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>Lipid Tail Length</p>
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>Degree of Unsaturation</p>
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
  );
}
