import * as S from "./pricing.styles";
import PriceCard from "./PriceCard";
import { apiPricing } from "../../services/services";

export default function Pricing() {
  return (
    <S.Pricing>
      {apiPricing.map((e) => (
        <PriceCard
          id={e.id}
          name={e.name}
          price={e.price}
          description={e.description}
          item1={e.item1}
          item2={e.item2}
          item3={e.item3}
        />
      ))}
    </S.Pricing>
  );
}
