import { CardContainer, CardContent, CardTitle } from "./styled/Card.styled"

export default function CurrentPlan () {
  return (
    <CardContainer style={{ width: 409, height: 108, backgroundColor: "#BC1E4A", borderRadius: "0 0 10px 10px"}}>
      <CardContent>
        <p>{labels.currentPlan.title}</p>
      </CardContent>
    </CardContainer>
  )
}

const labels = {
  currentPlan: {
    title: "Your current plan:"
  }
}