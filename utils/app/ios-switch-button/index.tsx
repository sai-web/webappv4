import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IOSButtonProps {
    checked: boolean
    setState: (state: boolean) => void
}

export const IOSButton: React.FC<IOSButtonProps> = ({
    checked,
    setState
}) => {
    const toggleSwitch = () => {
        setState(!checked)
    };

    return (
        <div
            className="switch"
            onClick={toggleSwitch}
            style={{
                backgroundColor: checked ? "#4D6FFF" : "rgba(255, 255, 255, 0.4)",
                position: "absolute",
                right: "50px",
                justifyContent: checked ? "flex-end" : "flex-start"
            }}
        >
            <motion.div
                className="handle"
                layout
                transition={spring}
            />
        </div>
    );
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};