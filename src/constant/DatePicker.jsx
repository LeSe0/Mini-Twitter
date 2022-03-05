// React
import React, { useState } from "react";
// Mui
import { styled } from "@mui/system";
import { InputLabel, MenuItem, NativeSelect, Select } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) =>({
    formControl : {
      '& .MuiInputBase-root:before' : {
        border : "none !important",
      },
      '& .MuiInputBase-root:after' : {
        border : "none !important",
      },
      '& .MuiInput-formControl' : {
        marginTop : "0",
        paddingTop : "16px",
        paddingLeft : "5px",
        paddingRight : "5px",
        color : "black !important",
      },
      '& .MuiInputBase-root' : {
        border : "2px solid #3E5060"
      },
      '& .Mui-focused' : {
        border : "2px solid #1D9BF0",
        color : '#1D9BF0',
      },
      '& .Mui-focused select' : {
        background : "none !important"
      }
    },

    label : {
      marginTop : "5px",
      marginLeft : "5px",
      border : "none !important",
    }
}))

export default function DatePickerComponent({data , selectDay , selectMonth , selectYear,selectType}) {

  const {label , formControl} = useStyles()

  return (
    <div className={selectType}>
      <FormControl fullWidth className = {formControl}> 
        <InputLabel id="labelForDate" className={label}>{selectType}</InputLabel>
        <NativeSelect onChange = {(e) =>{
          console.log(e);
          selectType == "Day" && selectDay(e.target.value)
          selectType == "Month" && selectMonth(e.target.value)
          selectType == "Year" && selectYear(e.target.value)
        }}>
          {data.map((el, i) => {
            return <option value={el} key = {selectType + i}>{el}</option>;
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

{/* <CustomSelect sx = {{
  paddingTop : "20px"
}}>
  {yearsForChoose.map((el, i) => {
    return <StyledOption value={i * 10 + ""}>{el}</StyledOption>;
  })}
</CustomSelect> */}