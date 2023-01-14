import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Item } from "./Item";
import { List } from "./List";

function Store({ match }) {
    let { id } = match.params;
    const imageHasLoaded = true;

    return (
        <>
            <List selectedId={id} />
            <AnimatePresence>
                {id && imageHasLoaded && <Item id={id} key="item" />}
            </AnimatePresence>
        </>
    );
}
