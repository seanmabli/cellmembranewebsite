export function Simulation() {
  return (
    <div>
      <h1>Simulation</h1>
      <p>
        Controls: press "a" for new water, press "b" for new phospholipid, press
        "c" for new oil, press "x" over a molecule to delete, press "shift + x"
        to clear
      </p>
      <iframe
        src="https://embedcellmembranetutorial.web.app/"
        width="900px"
        height="600px"
        style={{ border: "0px" }}
      ></iframe>
    </div>
  );
}
