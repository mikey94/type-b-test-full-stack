import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
    return (
        <button className={styles.buttonContainer} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;