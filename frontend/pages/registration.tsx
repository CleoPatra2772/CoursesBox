import type { NextPage } from "next";
import styled from "@emotion/styled";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux';

import { RootState, AppDispatch } from "@/store";
import { selectUser, 
        registration,
        RegistrationData} from '@/services/userSlice';
import { useForm } from 'react-hook-form';
import { CenteredTile } from "@/component/Tile";
import { Input } from "@/component/Input";
import { ConditionalFeedback } from "@/component/Input/Feedback";
import { Button } from "@/component/Button";
import { StyledLink } from "@/component/StyledLink";
import Link from "next/link";


const StyledInput = styled(Input)`
margin-bottom: 1rem;
`;

// export type RegistrationForm = {
//     username: string;
//     email: string;
//     password: string;
// };

const Registration: NextPage = () => {
    const{
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm<RegistrationData>();
    const router = useRouter();

    const dispatch = useDispatch<AppDispatch>();
    const { jwt, error } = useSelector<RootState, RootState["user"]>(selectUser);

    if(Boolean(jwt) && !error){
        router.push("/user");
    }

    const onSubmit = (data: RegistrationData) => {
        dispatch(registration(data));
    }
    return (
    <form onSubmit = {handleSubmit(onSubmit)}>
    <CenteredTile header="Create an account">
        <h3>
            <ConditionalFeedback>{error?.message}</ConditionalFeedback>
        </h3>
    <StyledInput 
    label='username' 
    placeholder="username"
    role="textbox"
    feedback={
     <ConditionalFeedback>
        {errors.username?.message}
        </ConditionalFeedback>
    }
    {...register("username" , {
        required: "Required field!",
        minLength: { value: 6, message: "Min length 6!"},
        pattern: {
            value: /^[\w\d\s]+$/,
            message: "Only letters, numbers and spaces!",
        }
    })} />

<StyledInput 
    label="email"
    type="email"
    role="textbox"
    placeholder="email"
    feedback={
     <ConditionalFeedback>
        {errors.email?.message}
        </ConditionalFeedback>
    }
    {...register("email" , {
        required: "Required field!",
        pattern: {
            value: /^\S+@\S+$/,
            message: "Invalid email!",
        }
    })} />

<StyledInput 
    label="password"
    type="password"
    role="textbox"
    placeholder="password"
    minLength={6}
    feedback={
     <ConditionalFeedback>
        {errors.password?.message}
        </ConditionalFeedback>
    }
    {...register("password" , {
        required: "Required field!",
        minLength: { value: 8, message: "Min length 8!"},
    })} />

    <Button type="submit">Sign Up</Button>
    <h3>
        <Link href="/login" passHref>
            <StyledLink underline>Login</StyledLink>
        </Link>
    </h3>

    </CenteredTile>
    </form>
    
    );
};

export default Registration;