import * as S from "./services.styles";

interface Props {
  id: number;
  name: string;
  description: string;
}

export default function ServiceCard({ id, name, description }: Props) {
  return (
    <S.ServiceCard key={id}>
      <h3>{name}</h3>
      <p>{description}</p>
    </S.ServiceCard>
  );
}
