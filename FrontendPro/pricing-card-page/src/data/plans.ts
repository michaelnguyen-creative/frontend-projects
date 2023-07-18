interface Price {
  billingCycle: "monthly" | "annually";
  amount: number;
  currency: "USD"
}
export interface Plan {
  planName: string;
  price?: Price;
  benefits: string[];
}


const plans: Plan[] = [
  {
    planName: "starter",
    price: {
      billingCycle: "monthly",
      amount: 99,
      currency: "USD"
    },
    benefits: [
      "500 MAUs",
      "3 projects",
      "Unlimited guides",
      "Unlimited flows",
      "Unlimited branded themes",
      "Email support"
    ]
  },
  {
    planName: "pro",
    price: {
      billingCycle: "monthly",
      amount: 99,
      currency: "USD"
    },
    benefits: [
      "All starter features, plus:",
      "Unlimited projects",
      "Unlimited fully customizable themes",
      "A dedicated Customer Success Manager"
    ]
  },
  {
    planName: "enterprise",
    benefits: [
      "All Pro features",
      "Unlimited MAUs",
      "Dedicated environment",
      "Enterprise account administration",
      "Premium support and services"
    ]
  }
];

export default plans;