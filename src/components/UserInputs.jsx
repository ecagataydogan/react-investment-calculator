import UserInput from "./UserInput";
export default function UserInputs({ handleChange }) {
  return (
    <section id="user-input">
      <UserInput
        title="initialInvestment"
        handleChange={handleChange}
      ></UserInput>
      <UserInput
        title="annualInvestment"
        handleChange={handleChange}
      ></UserInput>
      <UserInput title="expectedReturn" handleChange={handleChange}></UserInput>
      <UserInput title="duration" handleChange={handleChange}></UserInput>
    </section>
  );
}
