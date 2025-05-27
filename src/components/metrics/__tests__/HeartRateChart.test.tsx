
import React from "react";
import { render, screen } from "@testing-library/react";
// Removed: import { describe, it, expect } from "@jest/globals";
import HeartRateChart from "../HeartRateChart";

const mockData = [
  { date: 'Jan 1', rest: 72, activity: 130 },
  { date: 'Jan 2', rest: 70, activity: 128 },
];

describe("HeartRateChart", () => {
  it("renders chart with correct title and description", () => {
    render(<HeartRateChart data={mockData} />);
    
    expect(screen.getByText("Frequência Cardíaca")).toBeInTheDocument();
    expect(screen.getByText("Histórico e tendências da sua frequência cardíaca")).toBeInTheDocument();
  });
  
  it("renders info cards correctly", () => {
    render(<HeartRateChart data={mockData} />);
    
    expect(screen.getByText("Dentro da Meta")).toBeInTheDocument();
    expect(screen.getByText("Boa Recuperação")).toBeInTheDocument();
    expect(screen.getByText("Sua frequência cardíaca em repouso se mantém na faixa ideal (60-80 bpm).")).toBeInTheDocument();
    expect(screen.getByText("Seu tempo de recuperação após exercícios melhorou em 12% no último mês.")).toBeInTheDocument();
  });
});

