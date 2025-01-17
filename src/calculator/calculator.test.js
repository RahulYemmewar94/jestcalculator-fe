import { render, screen, fireEvent } from "@testing-library/react";
import CalculatorWithJestTestCases from "./calculator";

describe("Calculator Test Cases", () => {
    test("Addition", async () => {
      render(<CalculatorWithJestTestCases />);
      
      fireEvent.click(screen.getByText("2"));
      fireEvent.click(screen.getByText("1"));
      fireEvent.click(screen.getByText("+"));
      fireEvent.click(screen.getByText("6"));
      fireEvent.click(screen.getByText("1"));
      fireEvent.click(screen.getByText("5"));
      fireEvent.click(screen.getByText("="));
      
      const result = await screen.findByTestId("result"); 
      expect(result).toHaveTextContent("636"); 
    });
    test("Subtraction", async () => {
        render(<CalculatorWithJestTestCases />);
        
        fireEvent.click(screen.getByText("8"));
        fireEvent.click(screen.getByText("-"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("="));
        
        const result = await screen.findByTestId("result"); 
        expect(result).toHaveTextContent("6");  
      });
      test("Multiplication", async () => {
        render(<CalculatorWithJestTestCases />);
        
        fireEvent.click(screen.getByText("8"));
        fireEvent.click(screen.getByText("*"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("="));
        
        const result = await screen.findByTestId("result"); 
        expect(result).toHaveTextContent("16");  
      });
  });