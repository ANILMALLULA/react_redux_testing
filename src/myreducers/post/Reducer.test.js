import { types } from "./../../actions/types";
import postsReducer from "./reducer";

describe("Posts Reducer", () => {
  it("Should return default state", () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual({ posts: [] });
  });

  it("Should return new state if it receives valid type", () => {
    const data = {
      posts: [{ title: "Test 1" }, { title: "Test 2" }, { title: "Test 3" }],
    };

    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: data.posts,
    });

    expect(newState.posts).toEqual(data.posts);
  });
});
