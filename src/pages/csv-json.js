import React from "react";
import Editor from "@/components/Editor";
import FileUpload from "@/components/FileUpload";
import CodeWindow from "@/components/CodeWindow";
export default function CSVJson() {
    return (
        <div>
            <FileUpload />
            <CodeWindow />
            <Editor />
        </div>
    );
}
