
import React from "react";
import { render, screen } from "@testing-library/react";
// Removed: import { describe, it, expect } from "@jest/globals"; // This line is removed
import HealthMetric from "../../ui/HealthMetric";

describe("HealthMetric", () => {
  const defaultProps = {
    icon: <span data-testid="test-icon">Icon</span>,
    title: "Test Metric",
    value: "100",
    unit: "units",
    status: "normal" as const,
    change: {
      value: "+5",
      direction: "up" as const
    }
  };

  it("renders with all props correctly", () => {
    render(<HealthMetric {...defaultProps} />);
    
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
    expect(screen.getByText("Test Metric")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("units")).toBeInTheDocument();
    expect(screen.getByText("Normal")).toBeInTheDocument();
    expect(screen.getByText("+5")).toBeInTheDocument();
  });

  it("renders with different status colors", () => {
    const { rerender } = render(<HealthMetric {...defaultProps} />);
    
    // Normal status (default from defaultProps)
    let statusIndicator = screen.getByText("Normal").previousSibling;
    expect(statusIndicator).toHaveClass("w-1.5");
    
    // Warning status
    rerender(<HealthMetric {...defaultProps} status="warning" />);
    statusIndicator = screen.getByText("Atenção").previousSibling;
    expect(statusIndicator).toHaveClass("w-1.5");
    
    // Alert status
    rerender(<HealthMetric {...defaultProps} status="alert" />);
    statusIndicator = screen.getByText("Alerta").previousSibling;
    expect(statusIndicator).toHaveClass("w-1.5");
  });

  it("renders with different change directions", () => {
    const { rerender } = render(<HealthMetric {...defaultProps} />);
    
    // Up direction (default from defaultProps)
    let changeValue = screen.getByText("+5");
    expect(changeValue).toHaveClass("text-red-400");
    
    // Down direction
    rerender(<HealthMetric 
      {...defaultProps} 
      change={{ value: "-5", direction: "down" }} 
    />);
    changeValue = screen.getByText("-5");
    expect(changeValue).toHaveClass("text-green-400");
    
    // Neutral direction
    rerender(<HealthMetric 
      {...defaultProps} 
      change={{ value: "0", direction: "neutral" }} 
    />);
    changeValue = screen.getByText("0");
    expect(changeValue).toHaveClass("text-gray-500");
  });

  it("renders without optional props", () => {
    render(<HealthMetric 
      title="Simple Metric"
      value="75"
    />);
    
    expect(screen.getByText("Simple Metric")).toBeInTheDocument();
    expect(screen.getByText("75")).toBeInTheDocument();
    expect(screen.getByText("Normal")).toBeInTheDocument(); // Default status
    expect(screen.queryByText("+5")).not.toBeInTheDocument(); // Change is optional
  });
});

