import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CityTimeInfo from "../src/components/CityTimeInfo";

const setup = () => {
  return render(<CityTimeInfo main={true} />);
};
describe("CityTimeInfo component", () => {
  it("renders the CityTimeInfo - check buttons render", () => {
    setup();
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    const btnText = screen.getByText("Set");
    expect(btnText).toBeInTheDocument();
  });
  it("renders the CityTimeInfo - check input render", () => {
    setup();
    const input = screen.getByPlaceholderText("Enter name of city(place)");
    expect(input).toBeInTheDocument();
  });
  it("typing in input works", () => {
    setup();
    expect(screen.queryByDisplayValue(/test string/i)).toBeNull();
    fireEvent.change(screen.getByPlaceholderText("Enter name of city(place)"), {
      target: { value: "Test String" },
    });
    expect(screen.queryByDisplayValue("Test String")).toBeInTheDocument();
  });
});
