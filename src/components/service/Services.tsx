import * as S from "./services.styles";
import ServiceCard from "./ServiceCard";
import { apiServices } from "../../services/services";

export default function Services() {
  return (
    <S.Services id="service">
      <div className="divApiServices">
        {apiServices.map((e) => (
          <ServiceCard id={e.id} name={e.name} description={e.description} />
        ))}
      </div>
    </S.Services>
  );
}
