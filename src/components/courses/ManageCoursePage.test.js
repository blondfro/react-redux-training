import React from "react";
import { mount } from "enzyme";
import { authors, newCourse, courses } from "../../../tools/mockData";
import { ManageCoursesPage } from "./ManageCoursePage";

function render(args) {
  const defaultProps = {
    authors,
    courses,
    /*
        passed from react router in real app so stubbing in for test.
        could also make use of memory Router as before.
        or wrap with react router, depending on whether I need to test
        react router related behavior.
       */
    history: {},
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    course: newCourse,
    match: {}
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageCoursesPage {...props} />);
}

it("set error when attempting to save an empty title field", function() {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  console.log("test");
  expect(error.text()).toBe("Title is required.");
});
