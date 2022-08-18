import type { NextPage } from "next";
import Link from "next/link";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

import { CenteredTile } from "../component/Tile";
import { Input} from "@/component/Input";
import { Feedback } from "@/component/Input/Feedback";
import { Button } from "@/component/Button";
import { StyledLink } from "@/component/StyledLink";

const StyledInput = styled(Input)`
margin-bottom: 1rem;
`;

export type LoginForm = {
    identifier: string;
    password: string;
};


const Login: NextPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();


    const onSubmit = (data: LoginForm) => {
        console.log(data);
    };
    return (
   
    <form onSubmit={handleSubmit(onSubmit)}>
         <CenteredTile header="Login">
        <StyledInput 
        label="Identifier" 
        placeholder="username or email"
        feedback = {
            errors.identifier ? <Feedback>Min Length 6!</Feedback> : <>&nbsp;</>}
        height={8}
        {...register("identifier", {
            required: true,
            minLength: 6,
        })}
        />
        <StyledInput 
        label="Password" 
        type="password" 
        placeholder="password"
        feedback = {
            errors.password ? <Feedback>Min Length 6!</Feedback> : <>&nbsp;</>}
        height={8} 
        {...register("password", {
            required: true,
            minLength: 6,
        })}
        />
        <Button type="submit">Sign In</Button>
        <h3>
            <Link href="/registration" passHref>
                <StyledLink underline>Create account</StyledLink>
            </Link>
        </h3>
        </CenteredTile>
    </form>
    
    );
};

export default Login;