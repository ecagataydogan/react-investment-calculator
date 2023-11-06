export default function UserInput({ title, handleChange, children }) {
  return (
    <div id="input-group">
      <label htmlFor="">{children}</label>
      <input type="value" onChange={(event) => handleChange(event, title)} />
    </div>
  );
}
