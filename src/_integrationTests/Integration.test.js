import moxios from "moxios";
import { testStore } from "../../Utils";
import { fetchPosts } from "../actions";

describe("Testing fetch posts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "Test tile1",
        body: "test desc",
      },
      {
        title: "Test tile1",
        body: "test desc",
      },
      {
        title: "Test tile1",
        body: "test desc",
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
