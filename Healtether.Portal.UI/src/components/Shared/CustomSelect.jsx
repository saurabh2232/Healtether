import React, {useEffect} from "react";
import {Select, initTE} from "tw-elements";
initTE({Select});

const CustomSelect = (props) => {
    const inputSizeLg = props.customclass.inputSizeLg;
    const containerid=props.containerid+'select';
    const options = [];
    props
        .options
        .forEach(item => {
            options.push(
                <option key={item.key} value={item.key}>{item.value}</option>
            );
        });
    useEffect(() => {
        console.log("select is pre")
       // initTE({Select});
        const selectEl = document.getElementById(containerid);
        Select.getOrCreateInstance(selectEl);
    }, []);

    return (
        <div>
            <select id={containerid}
                data-te-select-init
                data-te-select-size="lg"
                data-te-select-container={props.containerid}
                data-te-class-select-input-size-lg={inputSizeLg}>
                {options}
            </select>
            <label data-te-select-label-ref>{props.placeholdertext}</label>
        </div>

    )
};

export default CustomSelect;