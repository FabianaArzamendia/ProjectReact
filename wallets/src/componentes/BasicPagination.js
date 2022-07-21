import * as React from 'react';
import { Pagination } from "@material-ui/lab";
//import {Stack} from '@material-ui/core';

export default function BasicPagination() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }} >


      <Pagination count={10} color="secondary" />

    </div>


  );
}