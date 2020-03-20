import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

// with shallow render you search for the react component tag.
it("contains 3 NavLinks via shallow ", function() {
  const numLinks = shallow(<Header />).find("NavLink").length;

  expect(numLinks).toEqual(3);
});

/*
    with mount you search for the final rendered HTML since it generates the final DOM.
    You also need to pull in react router's memoryRouter for testing since the header
    expects to have react routers props passed in.
 */

it("contains 3 anchors via mount", function() {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;

  expect(numAnchors).toEqual(3);
});
