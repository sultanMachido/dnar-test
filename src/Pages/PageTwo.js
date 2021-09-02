import React from "react";
import SideBar from "../components/SideBar";
import { MenuAlt4Icon, SearchIcon } from "@heroicons/react/solid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const PageTwo = (props) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-background ">
      <div className="h-screen">
        <div className="rounded-lg bg-black-light h-10 w-14 ml-20 mt-4 ">
          <div className="pt-2">
            <MenuAlt4Icon className="h-4 w-10 text-lg text-icon  ml-2" />
          </div>
        </div>

        <div className="rounded-xl bg-black-light h-screen md:w-14 mt-4 ml-20">
          <SideBar url={props.match.url} />
        </div>
      </div>

      <div className="md:w-10/12  h-full mt-4">
       
        <section className="flex flex-col  md:flex-row w-full h-5/6 ml-4 bg-pink">
          <div className="md:w-7/12 bg-red ml-8 mr-8 h-5/6">
            <div className="w-full justify-between flex">
              <div className="w-8/12">
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon className="h-3 w-3 text-icon " />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                  fullWidth
                  id="outlined-search"
                  placeholder="Search"
                  variant="outlined"
                  className="text-white"
                  style={{
                    width: "90%",
                    marginRight: "20%",
                    marginBottom: "2%",
                    color: "white",
                  }}
                />
              </div>

              <div className="w-3/12 flex justify-evenly content-center text-black-light rounded-xl bg-black-light  ">
                  <CalendarTodayIcon style={{color:'#3F6EFF',marginTop:'12px',fontSize:'14px'}}/>
                  <p className="text-white text-xs pt-3 ">Nov. 2020 - July 2021</p>
                  <KeyboardArrowDownIcon style={{color:'#3F6EFF',marginTop:'12px',fontSize:'14px'}}/>
              </div>
            </div>
            <div
              className="text-black-light rounded-lg bg-black-light h-3/6 mb-4 mt-2"
              style={{ color: "white" }}
            >
              <h1 className="text-left pl-4 pt-4 text-3xl">Market Leaders</h1>
            </div>
            <div
              className="rounded-lg bg-black-light text-white h-3/6 "
              style={{ color: "white" }}
            >
              <h1 className="text-left pl-4 pt-4 text-3xl">All Coins</h1>
            </div>
          </div>
          <div
            className="rounded-xl bg-black-light w-2/12 "
            style={{ color: "white" }}
          >
            <h1 className="text-left pl-4 pt-4 text-lg">Info Card</h1>
            <div className="rounded-lg bg-box w-full h-1/6 mt-2"></div>
            <div className="rounded-lg bg-box w-full h-1/6 mt-2"></div>
            <div className="rounded-lg bg-box w-full h-1/6 mt-2"></div>
            <div className="rounded-lg bg-box w-full h-1/6 mt-2"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PageTwo;
