import React from "react";
import styles from "./FormsControls.module.css";


const FormCotrol = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormCotrol {...props}><textarea {...input} {...restProps} /></FormCotrol>
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormCotrol {...props}><input {...input} {...restProps} /></FormCotrol>
};