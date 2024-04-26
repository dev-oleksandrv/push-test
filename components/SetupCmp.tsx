"use client"

import {useLayoutEffect} from "react";

export const SetupCmp = () => {
    useLayoutEffect(() => {
        (window as any).WonderPush = (window as any).WonderPush || [];
        (window as any).WonderPush.push(["init", {
            webKey: "c659bc5984cf8ddb1f5c0ceeab978155ab2763f7ee6ae023d57a622c36a4512c",
        }]);
    }, []);

    return null;
}