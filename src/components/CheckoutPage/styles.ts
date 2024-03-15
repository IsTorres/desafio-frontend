import styled, { keyframes } from "styled-components";

// Animação de rotação
const rotateAnimation = keyframes`
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(180deg);
  }
`;

// Container do cartão
export const CardContainer = styled.div`
  perspective: 1000px;
`;

// Cartão
export const Card = styled.div`
  transform-style: preserve-3d;
  transition: all 300ms;
  animation: ${rotateAnimation} 1s linear;
`;

export const BackCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 280px;
  height: 176px;
  background: linear-gradient(to right, #4b5563, #111827);
  transform: rotateY(180deg);

  .brand-position {
    width: 50%;
    left: 50%;
    bottom: 225%;
    position: relative;
    transform: rotateY(180deg) rotateX(0deg);
  }
`;

export const Stripe = styled.div`
  background-color: #6b7280;
  height: 2.5rem;
  margin-top: 2rem;
`;

export const Cvv = styled.span`
  border: 2px solid #4f46e5;
  border-radius: 0.5rem;
  width: 3.5rem;
  padding: 0.25rem;
  color: white;
  align-self: flex-end;
  margin-right: 1.5rem;
  text-align: center;
`;

export const Brand = styled.div`
  transform: rotateY(180deg);
  margin-bottom: 1rem;
`;

export const FrontCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 280px;
  height: 176px;
  background: linear-gradient(to right, #4b5563, #111827);
  user-select: none;

  .brand-position {
    width: 50%;
    left: 0;
    position: relative;
  }
`;

export const CardNumberWrapper = styled.div`
  display: flex;
  margin: 0 0.75rem;
  border: 2px solid #4f46e5;
  border-radius: 0.5rem;
`;

export const CardNumber = styled.span`
  color: white;
  padding: 0.25rem;
  width: 100%;
  text-align: center;
`;

export const CardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: white;
  margin-top: 0.5rem;
`;

export const CardLabel = styled.label`
  overflow: hidden;
`;

export const CardValue = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  padding-top: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 0 auto;
  padding-bottom: 2.5rem;
`;

export const Asdf = styled.input`
  color: #000;
  margin-bottom: 0.5rem;
  height: 2.5rem;
  width: 100%;
  flex-shrink: 0;
  border-radius: 0.375rem;
  border-width: 2px;
  /* --tw-bg-opacity: 1; */
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  /* --tw-ring-opacity: 1; */
  /* --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity)); */
`;

export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  width: calc(50% - 5px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const SpanError = styled.span`
  color: red;
`;
