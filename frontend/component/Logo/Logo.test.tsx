import { render } from "@/test-utils";

import { Logo } from './Logo';

describe("Logo test cases", () => {
    it("Render check", () => {
        const { asFragment } = render(<Logo>CoursesBox</Logo>);
    });
    it("render with custom size", () => {
        const { asFragment } = render(<Logo size={10}>CoursesBox</Logo>);
        expect(asFragment()).toMatchSnapshot();
    });
});