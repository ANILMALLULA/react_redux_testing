import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import RootReducer from "../src/myreducers/index";
import { middlewares } from "../src/createStore";

export const findBytestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propError;
};

export const testStore = () => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(RootReducer);
};
