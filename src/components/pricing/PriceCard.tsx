import * as S from "./pricing.styles";

interface Props {
  id: number;
  name: string;
  description: string;
  item1: string;
  item2: string;
  item3: string;
}

export default function PriceCard(Props: Props) {
  return (
    <S.PriceCard key={Props.id}>
      <h3>{`${Props.name} `}</h3>
      <p>{Props.description}</p>
      <ul>
        <li>{Props.item1}</li>
        <li>{Props.item2}</li>
        <li>{Props.item3}</li>
      </ul>
      <a>CHOOSE</a>
    </S.PriceCard>
  );
}
