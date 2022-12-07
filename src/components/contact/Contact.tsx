import * as S from "./contact.styles";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <S.Contact id="contact">
      <hr />
      <h3>Entre em contato conosco</h3>
      <div className="divContact">
        <div>
          <AiFillPhone className="icon" />
          <p>
            <span>Ligue para:</span>
            {` (48) 99999-9999`}
          </p>
        </div>
        <div>
          <MdEmail className="icon" />
          <p>
            <span>Envie um email:</span>
            {` contato@mkdigital.com`}
          </p>
        </div>
        <div>
          <FaMapMarkerAlt className="icon" />
          <p>
            <span>Endereço:</span>
            {` Rua Lorem Ipsum - 1314`}
          </p>
        </div>
      </div>
    </S.Contact>
  );
}
