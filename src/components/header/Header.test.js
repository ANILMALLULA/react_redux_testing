import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findBytestAttr } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header component", () => {
  let component;

  beforeEach(() => {
    component = setUp(); 
  });

  it("It should render without errors", () => {
    const wrapper = findBytestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("It should render an logo", () => {
    const logo = findBytestAttr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
