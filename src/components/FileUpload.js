import React, { useState } from "react";
import axios from "axios";
export default function FileUpload() {
    const handleFileUpload = (e) => {
        let file = e.target.files[0];
        // Create an object of formData
        let formData = new FormData();
        //TODO - add 3rd arg, unique filename to avoid being overwritten whilst in temp server folder
        formData.append("file", file);
        for (var pair of formData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }

        // let reader = new FileReader();

        // reader.readAsText(file);

        // reader.onload = function () {};

        // reader.onerror = function () {
        //     console.log(reader.error);
        // };

        // send file to backend

        axios
            .post("http://localhost:5000/convert", formData, {
                // xhrFields: { withCredentials: true },
            })
            .then((res) => {
                console.log(res);
            });
    };
    return (
        <div>
            <input
                onChange={(e) => handleFileUpload(e)}
                type="file"
                accept=".csv"
            />
        </div>
    );
}
