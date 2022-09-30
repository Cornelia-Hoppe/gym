import React from "react";
import { ReactDOM } from "react-dom";
import { NavFilter } from "../GetLink";
import { isTsAnyKeyword} from "@babel/types"

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render()
    ReactDOM.render({NavFilter})
})