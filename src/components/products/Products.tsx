import * as S from "./products.styles";
import { apiProducts } from "../../services/services";
import ProductCard from "./productCard";

export default function Products() {
  return (
    <S.Products>
      <div className="divTextProducts">
        <h2>Latest Products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor
          incididunt ut laboret dolore magna aliqua enim minim veniam exercitation
        </p>
      </div>
      <div className="divProductsCard">{
        apiProducts.map((e) => (
          <ProductCard
            key={e.id}
            id={e.id}
            img={e.img}
            name={e.name}
            tag={e.tag}
            description={e.description}
          />
        ))
        }</div>
    </S.Products>
  );
}
