import styled from 'styled-components';
import { cores } from '../../styles';
import { TagContainer } from '../Tag/styles';
import { ButtonProduct } from '../Button/styles';
import fechar from '../../assets/images/close.png';
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;
export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonProduct} {
    max-width: 100%;
    width: 100%;
    cursor: pointer;
  }
`;
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branco};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.fundo};
  }
`;

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.rosa};
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.fundo};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }
  h3 {
    color: ${cores.rosa};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    font-size: 14px;
    color: ${cores.rosa};
    font-weight: bold;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
    cursor: pointer;
  }
`;
