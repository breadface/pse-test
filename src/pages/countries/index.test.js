import React from "react";
import { act } from "react-dom/test-utils";
import { shallow, mount } from "enzyme";
import Countries from "./index";

describe("Fetches list of countries", () => {
  let url = "https://restcountries.eu/rest/v2/region/Africa";

  beforeEach(() => {
    global.fetch = jest.fn(async (url, options) => {
      return {
        json: async () => {
          return [];
        }
      };
    });
  });

  it("Should fetch countries in the specified region", async () => {
    act(() => {
      mount(
        <Countries
          match={{
            params: { id: "Africa" },
            path: "/",
            url: "/"
          }}
        />
      );
    });

    expect(global.fetch).toHaveBeenCalledWith(url);
  });
});

describe("Renders without crashing", () => {
  it("Shows list of countries", () => {
    const table = shallow(<Countries />);
    expect(table).toMatchSnapshot();
  });
});
