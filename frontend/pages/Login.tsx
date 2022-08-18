import type { NextPage } from "next";
import Link from "next/link";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

import { CenteredTile } from "../component/Tile";
import { Input} from "@/component/Input";
import { ConditionalFeedback } from "@/component/Input/Feedback";
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
         <CenteredTile header="login">
        <StyledInput 
        label="Identifier" 
        placeholder="username or email"
        role="textbox"
        feedback = { 
        <ConditionalFeedback>
            {errors.identifier?.message}
        </ConditionalFeedback>
        }   
        height={8}
        {...register("identifier", {
            required: "Required field!",
            minLength: { value: 6, message: "Min length 6!"},
        })}
        />
        <StyledInput 
        label="Password" 
        type="password" 
        placeholder="password"
        role="textbox"
        feedback = {
            <ConditionalFeedback>
            {errors.password?.message}
        </ConditionalFeedback>
            }
        height={8} 
        {...register("password", {
            required: "Required field!",
            minLength: { value: 8, message: "Min length 8!"},
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