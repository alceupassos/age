
import React from "react";
import { render, screen } from "@testing-library/react";
// Removed: import { describe, it, expect } from "@jest/globals";
import WeightChart from "../WeightChart";

const mockData = [
  { date: 'Jan 1', weight: 78.5 },
  { date: 'Jan 2', weight: 78.0 },
];

describe("WeightChart", () => {
  it("renders chart with correct title and description", () => {
    render(<WeightChart data={mockData} />);
    
    expect(screen.getByText("Peso")).toBeInTheDocument();
    expect(screen.getByText("Histórico e tendências do seu peso")).toBeInTheDocument();
  });
  
  it("renders info cards correctly", () => {
    render(<WeightChart data={mockData} />);
    
    expect(screen.getByText("Tendência de Redução")).toBeInTheDocument();
    expect(screen.getByText("Meta Próxima")).toBeInTheDocument();
    expect(screen.getByText("Redução gradual de 1.5kg no último mês, mantendo um ritmo saudável.")).toBeInTheDocument();
    expect(screen.getByText("Você está a apenas 2.5kg da sua meta de peso. Continue assim!")).toBeInTheDocument();
  });
});

