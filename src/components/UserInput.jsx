export default function UserInput({ title, handleChange }) {
  return (
    <div id="input-group">
      <label htmlFor="">{title}</label>
      <input type="value" onChange={(event) => handleChange(event, title)} />
    </div>
  );
}
