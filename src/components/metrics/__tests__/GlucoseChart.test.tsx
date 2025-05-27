
import React from "react";
import { render, screen } from "@testing-library/react";
// Removed: import { describe, it, expect } from "@jest/globals";
import GlucoseChart from "../GlucoseChart";

const mockData = [
  { date: 'Jan 1', glucose: 105 },
  { date: 'Jan 2', glucose: 108 },
];

describe("GlucoseChart", () => {
  it("renders chart with correct title and description", () => {
    render(<GlucoseChart data={mockData} />);
    
    expect(screen.getByText("Glicemia")).toBeInTheDocument();
    expect(screen.getByText("Histórico e tendências da sua glicose sanguínea")).toBeInTheDocument();
  });
  
  it("renders info cards correctly", () => {
    render(<GlucoseChart data={mockData} />);
    
    expect(screen.getByText("Atenção")).toBeInTheDocument();
    expect(screen.getByText("Tendência de Aumento")).toBeInTheDocument();
    expect(screen.getByText("Suas leituras estão na faixa de pré-diabetes (100-125 mg/dL) em 60% das medições.")).toBeInTheDocument();
    expect(screen.getByText("Aumento médio de 8 mg/dL em comparação com o mês anterior. Considere consultar seu médico.")).toBeInTheDocument();
  });
});

