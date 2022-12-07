import * as S from "./products.styles";
import { apiProducts } from "../../services/services";
import ProductCard from "./productCard";

export default function Products() {
  return (
    <S.Products id="products">
      <div className="divTextProducts">
        <h2 className="h2SProducts">Serviços mais procurados</h2>
        <p className="pSProducts">
          Conheça os principais serviços para começar a engajar o público no seu
          conteúdo.
        </p>
      </div>
      <div className="divProductsCard">
        {apiProducts.map((e) => (
          <ProductCard
            key={e.id}
            id={e.id}
            img={e.img}
            name={e.name}
            tag={e.tag}
            description={e.description}
          />
        ))}
      </div>
    </S.Products>
  );
}
