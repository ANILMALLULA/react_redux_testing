import App from "./App";
import { shallow } from "enzyme";
import { findBytestAttr, testStore } from "../Utils";
import React from "react";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Test title",
          desc: "test esc",
        },
        {
          title: "Test title",
          desc: "test esc",
        },
        {
          title: "Test title",
          desc: "test esc",
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  it("Should render withput errors", () => {
    const component = findBytestAttr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });
});
