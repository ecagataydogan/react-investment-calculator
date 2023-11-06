import UserInput from "./UserInput";
export default function UserInputs({ handleChange }) {
  return (
    <section id="user-input">
      <UserInput
        title="initialInvestment"
        handleChange={handleChange}
      >Initial Investment</UserInput>
      <UserInput
        title="annualInvestment"
        handleChange={handleChange}
      >Annual Investment</UserInput>
      <UserInput title="expectedReturn" handleChange={handleChange}>Expected Return</UserInput>
      <UserInput title="duration" handleChange={handleChange}>Duration</UserInput>
    </section>
  );
}
