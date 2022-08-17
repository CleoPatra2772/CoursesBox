import  userEvent  from "@testing-library/user-event";
import { render, screen } from "@/test-utils";
import { Checkbox } from "./Checkbox";

describe("Checkbox test cases", () => {
    it("Render check", () => {
        const onChange = jest.fn();
        jest.spyOn(Math, "random").mockReturnValue(0.9999999999999);

        const { asFragment } = render(<Checkbox onChange={onChange} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("Check onChange Callback", async () => {
        const onChange = jest.fn();

        render(<Checkbox onChange={onChange} />);

        const element = screen.getByRole("checkbox", {hidden: true});

        await userEvent.click(element);

        expect(onChange).toHaveBeenCalled();
    })
})