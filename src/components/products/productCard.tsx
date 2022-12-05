import * as S from "./products.styles";

interface Props {
  id: number;
  img: string;
  name: string;
  tag: string;
  description: string;
  key: number;
}

export default function ProductCard({
  id,
  img,
  name,
  tag,
  description,
  key,
}: Props) {
  return (
    <S.ProductCard key={key}>
      <div>
        <img className="apagarIsso" alt={name} src={img} />
      </div>
      <h4>
        <a href="#">{name}</a>
        <span>{tag}</span>
      </h4>
      <p>{description}</p>
      <a href="#">READ MORE</a>
    </S.ProductCard>
  );
}
