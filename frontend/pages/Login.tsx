import type { NextPage } from "next";
import { CenteredTile } from "../component/Tile";
import { Input } from "@/component/Input";
import { Button } from "@/component/Button";

const Login: NextPage = () => {
    const onSubmit = () => {};
    return (
   
    <form onSubmit={onSubmit}>
         <CenteredTile header="Login">
        <Input label="Identifier" placeholder="username or email"/>
        <Input label="password" type="password" placeholder="password" />
        <Button type="submit">Sign In</Button>
        </CenteredTile>
    </form>
    
    );
};

export default Login;