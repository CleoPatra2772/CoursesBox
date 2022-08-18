import type { NextPage } from "next";
import { CenteredTile } from "@/component/Tile";
import { Button } from "@/component/Button";

const User: NextPage= () => {
   const userMock = { username: "Harry Potter", email: "harry@potter.com"};
   const logoutHandler = async () => {
    console.log("logout");
   };

    return (
        <CenteredTile header="Profile">
            <h3>username: {userMock.username}</h3>
            <h3>email: {userMock.email}</h3>
            <Button onClick={logoutHandler}>Logout</Button>
        </CenteredTile>
    )
};

export default User;