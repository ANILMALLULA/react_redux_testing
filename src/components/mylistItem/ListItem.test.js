import React from "react";
import { shallow } from "enzyme";
import { findBytestAttr, checkProps } from "../../../Utils";
import ListItem from "./index";

describe("List Item component", () => {
  describe("Checking prop type", () => {
    it("It should not throw error", () => {
      const expectedProps = {
        title: "Test title",
        desc: "test description",
      };

      const propError = checkProps(ListItem, expectedProps);
      expect(propError).toBeUndefined();
    });
  });

  describe("Compoent renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Test title",
        desc: "test description",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Should render without error", () => {
      const compenent = findBytestAttr(wrapper, "listItemComponent");
      expect(compenent.length).toBe(1);
    });

    it("Should render title", () => {
      const title = findBytestAttr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });

    it("Should render desc", () => {
      const desc = findBytestAttr(wrapper, "componentDesc");
      expect(desc.length).toBe(1);
    });
  });

  describe("SHOULD NOT RENDER", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "test description",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Component not rendered", () => {
      const component = findBytestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
