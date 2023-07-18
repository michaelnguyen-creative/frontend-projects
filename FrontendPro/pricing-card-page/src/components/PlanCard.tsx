import { CardContainer, CardTitle, CardContent } from './styled/Card.styled'
import { Plan } from '../data/plans'
import { Button } from './styled/Botton.styled'

interface PlanCardProps {
  data: Plan
}

export default function PlanCard({ data }: PlanCardProps) {
  return (
    <CardContainer style={{ backgroundColor: '#22262C', width: 375, height: 608, borderRadius: "10px" }}>
      <CardTitle style={{  }}>{data.planName}</CardTitle>
      <CardContent>
        <h2>{data.price?.amount ?? labels.enterprise.h2}</h2>
        <ul>
          {data.benefits.map((benefit: string, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <Button>
          {data.planName.match(/enterprise/i)
            ? labels.enterprise.button
            : labels.others.button}
        </Button>
      </CardContent>
    </CardContainer>
  )
}

const labels = {
  enterprise: {
    h2: "let's talk",
    button: 'Contact us',
  },
  others: {
    button: 'Choose plan',
  },
}
