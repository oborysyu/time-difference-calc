import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CityTimeInfoList from "../src/components/CityTimeInfoList";

describe("CityTimeInfoList component", () => {
  it("renders the CityTimeInfoList - check buttons render", () => {
    render(<CityTimeInfoList timeOffsetReference={0} />);
    const btnAdd = screen.getByText(/add place/i);
    expect(btnAdd).toBeInTheDocument();
    const btnRemove = screen.getByText(/clear list/i);
    expect(btnRemove).toBeInTheDocument();
  });
});
