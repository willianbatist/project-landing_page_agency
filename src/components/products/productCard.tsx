import * as S from "./products.styles";

interface Props {
  id: number;
  img: string;
  name: string;
  tag: string;
  description: string;
}

export default function ProductCard({
  id,
  img,
  name,
  tag,
  description,
}: Props) {
  return (
    <S.ProductCard key={id}>
      <div>
        <img alt={name} src={img} />
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
