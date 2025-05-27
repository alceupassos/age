
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// Removed: import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import Metrics from "../../pages/Metrics";

// Mock the MainLayout component since we're testing Metrics component in isolation
jest.mock("@/components/layout/MainLayout", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => <div data-testid="main-layout">{children}</div>,
  };
});

// Mock child components to simplify testing Metrics page structure
jest.mock("@/components/metrics/AddMetricForm", () => () => <button>Nova Medição</button>);
jest.mock("@/components/metrics/MetricsSummary", () => () => <div>Metrics Summary Mock</div>);
jest.mock("@/components/metrics/BloodPressureChart", () => () => <div>Blood Pressure Chart Mock</div>);
jest.mock("@/components/metrics/GlucoseChart", () => () => <div>Glucose Chart Mock</div>);
jest.mock("@/components/metrics/HeartRateChart", () => () => <div>Heart Rate Chart Mock</div>);
jest.mock("@/components/metrics/WeightChart", () => () => <div>Weight Chart Mock</div>);


describe("Metrics Page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Metrics />
      </BrowserRouter>
    );
  });

  it("renders the metrics page title", () => {
    expect(screen.getByText("Métricas de Saúde")).toBeInTheDocument();
    expect(screen.getByText("Monitore seus indicadores de saúde e visualize tendências")).toBeInTheDocument();
  });

  it("renders the period selector", () => {
    // The actual combobox might be complex. Check for its label or a distinctive part.
    // Using getByRole might be too generic if there are multiple.
    // Let's assume there's a label "Período" associated with it or a visible text.
    expect(screen.getByText("Período")).toBeInTheDocument(); 
  });

  it("renders the add metric button", () => {
    expect(screen.getByRole("button", { name: /nova medição/i })).toBeInTheDocument();
  });

  it("renders the metrics summary section", () => {
    expect(screen.getByText("Metrics Summary Mock")).toBeInTheDocument();
  });

  it("renders the tabs for different metrics", () => {
    const tabs = screen.getAllByRole("tab");
    // Based on the Metrics page, there are 4 tabs
    expect(tabs).toHaveLength(4); 
    expect(tabs[0]).toHaveTextContent("Pressão Arterial");
    expect(tabs[1]).toHaveTextContent("Glicemia");
    expect(tabs[2]).toHaveTextContent("Freq. Cardíaca");
    expect(tabs[3]).toHaveTextContent("Peso");
  });

  it("displays the blood pressure tab content by default", () => {
    // Check for the content of the default active tab
    expect(screen.getByText("Blood Pressure Chart Mock")).toBeInTheDocument();
  });
});

