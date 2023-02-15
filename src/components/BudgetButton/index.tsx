import { CaretDoubleRight } from "phosphor-react";
import { BudgetButtonContainer } from "./styles";

interface BudgetButtonProps {
  text: string;
}

export function BudgetButton({ text }: BudgetButtonProps) {
  return (
    <>
      <BudgetButtonContainer>
        <a href="">
          {text}
          <CaretDoubleRight size={24} />
        </a>
      </BudgetButtonContainer>
    </>
  );
}
