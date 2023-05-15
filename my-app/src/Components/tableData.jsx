import React from "react";

export default function TableData(props){
    return (
        <div class="row justify-content-around pt-3">
            <div class="col-sm-12 col-md-8 tableData">{props.title}</div>
            <div class="col-sm-12 col-md-4 tableData">{props.unit}{props.data}</div>
        </div>
    );
}