import './UserInput.css';

export default function UserInput() {
  return (
    <div id="user-input">
      <div class="input-group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input type="number"/>
        </div>
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input type="number"/>
        </div>
      </div>
      <div class="input-group">
        <div>
          <label>EXPECTED RETURN</label>
          <input type="number"/>
        </div>
        <div>
          <label>DURATION</label>
          <input type="number"/>
        </div>
      </div>
    </div>
  );
}
