// React
import React from "react";
// Mui
import { InputLabel, NativeSelect } from "@mui/material";
import { FormControl } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
        color : "black !important",
      },
      '& .css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input' : {
        paddingTop : "20px",
        paddingLeft : "20px",
        paddingRight : "20px"
      },
      '& .MuiInputBase-root' : {
        border : "2px solid #3E5060"
      },
      '& .Mui-focused' : {
        border : "2px solid #1D9BF0",
        color : '#1D9BF0',
      },
      '& .Mui-focused select' : {
        background : "none !important",
        color : "black !important"
      }
    },

    label : {
      marginTop : "30px",
      border : "none !important",
    }
}))

export default function DatePickerComponent({data , selectDay , selectMonth , selectYear,selectType}) {

  const {label , formControl} = useStyles()

  return (
    <div className={selectType}>
      <FormControl fullWidth className = {formControl}> 
        <InputLabel id="labelForDate" className={label} shrink = {true}>{selectType}</InputLabel>
        <NativeSelect onChange = {(e) =>{
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