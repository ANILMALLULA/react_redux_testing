import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findBytestAttr } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline component", () => {
  describe("Have props", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "Test hheader",
        desc: "Test desc",
      };
      wrapper = setUp(props);
    });

    it("It should renders witout errors", () => {
      const component = findBytestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("It should renders H1", () => {
      const h1 = findBytestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("It should renders paragraph", () => {
      const p = findBytestAttr(wrapper, "desc");
      expect(p.length).toBe(1);
    });
  });

  describe("Do not have props", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUp();
    });

    it("It should not render", () => {
      const component = findBytestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
