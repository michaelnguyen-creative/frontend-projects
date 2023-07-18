import PlanCard from "../components/PlanCard";
import CurrentPlan from "../components/CurrentPlan";
import plans from "../data/plans";

export default function HomePage() {
  return (
    <>
      <CurrentPlan />
      {plans.map((plan) => (
        <PlanCard key={plan.planName} data={plan} />
      ))}
    </>
  );
}