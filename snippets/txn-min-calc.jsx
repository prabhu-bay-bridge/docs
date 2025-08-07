export const TxnMinCalc = () => {
  // logic remains the same
  return (
    <div className="container">
      <div className="group">
        <legend>Select Transfer Details</legend>
        <div className="row">
          <div className="field">
            <label htmlFor="sourceCurrency">Source Currency</label>
            <select id="sourceCurrency" />
          </div>
          <div className="field">
            <label htmlFor="sourceRail">Source Rail</label>
            <select id="sourceRail" />
          </div>
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor="destCurrency">Destination Currency</label>
            <select id="destCurrency" />
          </div>
          <div className="field">
            <label htmlFor="destRail">Destination Rail</label>
            <select id="destRail" />
          </div>
        </div>
        <div className="button-row">
          <button id="calculateBtn" disabled>Calculate Minimum</button>
          <button id="resetBtn" type="button">Reset</button>
        </div>
        <div id="result">Minimum required: —</div>
      </div>
      <style jsx>{`
        .container {
          max-width: 640px;
          margin: 0 auto;
          font-family: sans-serif;
        }
        .row {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }
        .field {
          flex: 1;
        }
        label {
          font-weight: bold;
          display: block;
          margin-bottom: 4px;
        }
        select, button {
          width: 100%;
          padding: 8px;
          font-size: 1rem;
        }
        button {
          margin-top: 10px;
          cursor: pointer;
        }
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        #result {
          margin-top: 20px;
          font-weight: bold;
        }
        .group {
          border: 1px solid #ccc;
          padding: 15px;
          border-radius: 6px;
          margin-bottom: 20px;
        }
        .group legend {
          font-weight: bold;
          padding: 0 8px;
        }
        .button-row {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </div>
  );
};