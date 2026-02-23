import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
    label: string;
    value: string | boolean;
    onChange: (value: string | boolean) => void;
    type?: string;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, type = "text" }) => {
    const isCheckBox = type === "checkbox";
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const newVal = isCheckBox ? e.target.checked : e.target.value;
       onChange(newVal);
    }
    return (
        <div className={styles.inputContainer}>
            <label>{label}</label>
            <input type={type} onChange={handleChange} {...(isCheckBox ? { checked: !!value } : { value: value as string })} />
        </div>
    );
};

export default Input;