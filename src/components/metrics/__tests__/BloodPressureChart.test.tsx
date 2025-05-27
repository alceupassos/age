
import React from "react";
import { render, screen } from "@testing-library/react";
// Removed: import { describe, it, expect } from "@jest/globals";
import BloodPressureChart from "../BloodPressureChart";

const mockData = [
  { date: 'Jan 1', systolic: 120, diastolic: 80 },
  { date: 'Jan 2', systolic: 118, diastolic: 78 },
];

describe("BloodPressureChart", () => {
  it("renders chart with correct title and description", () => {
    render(<BloodPressureChart data={mockData} />);
    
    expect(screen.getByText("Pressão Arterial")).toBeInTheDocument();
    expect(screen.getByText("Histórico e tendências da sua pressão arterial")).toBeInTheDocument();
  });
  
  it("renders info cards correctly", () => {
    render(<BloodPressureChart data={mockData} />);
    
    // Updated text to match component
    expect(screen.getByText("Tendência Positiva")).toBeInTheDocument();
    expect(screen.getByText("Recomendação")).toBeInTheDocument();
    expect(screen.getByText("Redução de 15 pontos na pressão sistólica comparado aos níveis de 30 dias atrás.")).toBeInTheDocument();
    expect(screen.getByText("Mantenha o monitoramento regular e continue com sua medicação conforme prescrito.")).toBeInTheDocument();
  });
});

