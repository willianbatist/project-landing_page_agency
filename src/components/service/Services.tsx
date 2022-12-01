import * as S from "./services.styles";
import ServiceCard from "./ServiceCard";
import { apiServices } from "../../services/services";

export default function Services() {
  return(
    <S.Services>
      { apiServices.map((e) => (
        <ServiceCard
          id={e.id}
          name={e.name}
          description={e.description}
        />
      )) }
    </S.Services>
  );
}
