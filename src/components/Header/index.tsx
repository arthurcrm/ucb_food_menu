import { FiPlusSquare } from "react-icons/fi";

import { HeaderProps } from "../../common/types";

import { Container } from "./styles";
import Logo from "../../assets/logo.svg";

export const Header = ({ openModal }: HeaderProps) => {
  return (
    <Container>
      <header>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>UCB Food</h1>
          <span>Seu menu online</span>
        </div>
        <nav>
          <div>
            <button type="button" onClick={openModal}>
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
};
