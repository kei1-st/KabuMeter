import './UserInput.css';

export default function UserInput() {
  return (
    <div id="user-input">
      <div class="input-group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input />
        </div>
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input />
        </div>
      </div>
      <div class="input-group">
        <div>
          <label>EXPECTED RETURN</label>
          <input />
        </div>
        <div>
          <label>DURATION</label>
          <input />
        </div>
      </div>
    </div>
  );
}
