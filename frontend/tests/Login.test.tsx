import { render } from "@/test-utils";
import Login from "@/pages/Login";

describe("Login page", () => {

    it("render check", () =>{
        const { container } = render(<Login />);
        expect(container).toMatchSnapshot();
    });
});