import React from "react";
import { findBytestAttr, checkProps } from "../../../Utils";
import { shallow } from "enzyme";
import SharedButton from "./index";

describe("Shared Button Component", () => {
  describe("Checking Proptypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        buttonText: "Example test",
        emitEvent: () => {},
      };

      const propError = checkProps(expectedProps, SharedButton);
      expect(propError).toBeUndefined();
    });
  });

  describe("Renders button", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();

      const props = {
        buttonText: "Example test",
        emitEvent: mockFunc,
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("Should render button", () => {
      const button = findBytestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findBytestAttr(wrapper, "buttonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
