import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Tile } from './Tile';
import { expect } from "@storybook/jest";
import { screen } from "@testing-library/react";

export default {
    title: "Content/Tile",
    component: Tile,
} as ComponentMeta<typeof Tile>;

export const BasicTile: ComponentStoryObj<typeof Tile> = {
    play: async ({ args }) => {
        await expect(screen.getByRole('heading')).toBeInTheDocument();
},



    args: {
        header: "Hello World This is Cleo",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
};