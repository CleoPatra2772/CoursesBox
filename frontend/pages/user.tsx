import { useEffect } from "react";
import type { NextPage } from "next";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "@/store";
import { selectUser, logout } from "@/services/userSlice";
import { CenteredTile } from "@/component/Tile";
import { Button } from "@/component/Button";
import { useRouter } from "next/router";

const User: NextPage= () => {
    const router = useRouter();
    const { username, email, error } = useSelector<RootState, RootState["user"]>(
        selectUser
        );

    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
        if(!username || Boolean(error)){
            dispatch(logout());
            router.push("/login");
        }
    }, []);

   const logoutHandler = async () => {
        dispatch(logout());
        router.push("/");
   };

    return (
        username && email ? (<CenteredTile header="Profile">
            <h3>username: {username}</h3>
            <h3>email: {email}</h3>
            <Button onClick={logoutHandler}>Logout</Button>
        </CenteredTile>) : null
    );
};

export default User;