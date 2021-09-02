import React,{useEffect,useState} from "react";
import SideBar from "../components/SideBar";
import { MenuAlt4Icon,SearchIcon} from "@heroicons/react/solid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle';
// import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';

const PageOne = (props) => {
  const [coinList,setCoinList] = useState([])
  const [events,setEvents] = useState([])  

  const getCoinList =()=>{
    return axios.get('https://api.coingecko.com/api/v3/coins/list')
  }

  const getEvents=()=>{
   return axios.get('https://api.coingecko.com/api/v3/events?upcoming_events_only=true')
  }

    useEffect(()=>{
       Promise.allSettled(
          [
              getCoinList(),
              getEvents()
          ]
       ).then((results)=>{
           console.log(results[0],results[1])
           let [coins,eventsList]= results
           console.log(eventsList.value.data.data[0].description.substring(0,49),'events')
           let paginatedCoins;
           
           if (coins.status!=='rejected') {
            paginatedCoins = coins.value.data.splice(0,8)
            console.log(paginatedCoins)
            setCoinList([...coinList,...paginatedCoins])
           }

           if (eventsList.status!=='rejected') {
             
              setEvents([...events,...eventsList.value.data.data])
           }
           
          
       })
    },[])

  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-background ">
      <div className="h-screen">
        <div className="rounded-lg bg-black-light h-10 w-14 ml-20 mt-4 ">
          <div className="pt-2">
            <MenuAlt4Icon className="h-4 w-10 text-lg text-icon  ml-2" />
          </div>
        </div>

        <div className="rounded-xl bg-black-light h-5/6 md:w-14 mt-4 ml-20">
          <SideBar url={props.match.url} />
        </div>
      </div>

      <div className="md:w-10/12  h-full">
        <section className="md:w-11/12 ml-8 mt-4">
          {/* <div className="md:w-10/12 rounded-lg border-searchbar border p-4 mb-6 "> */}
          {/* <span className='flex '>
              <SearchIcon className="h-3 w-3 text-icon " />
              <p className="text-white pl-0 text-xs">Search</p>
            </span> */}
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
            style={{width:'80%',marginRight:'20%',marginBottom:'2%',color:'white'}}
          />

          {/* </div> */}
        </section>
        <section className="flex flex-col  md:flex-row w-full h-5/6 ml-4 bg-pink">
          <div className="md:w-7/12 bg-red ml-8 mr-8 h-5/6">
            <div
              className="text-black-light rounded-lg bg-black-light h-60 mb-4"
              style={{ color: "white" }}
            >
              <h1 className="text-left pl-4 pt-4 text-3xl">Market Leaders</h1>
            </div>
            <div
              className="rounded-lg bg-black-light text-white h-60  "
              style={{ color: "white" }}
            >
              <h1 className="text-left pl-4 pt-4 text-3xl">All Coins</h1>
              <div className=" grid grid-cols-4 gap-4">
              {coinList.length?coinList.map(coin=>(
               
                  <div className="rounded-lg bg-box w-full h-5/6 mt-2">
                  <h3>{`${coin.name}(${coin.symbol})`}</h3>
                  
                 </div>
                  
                
              )):''}
             
              { coinList.length?  <p className="text-center text white">View More</p> :''}
              </div>
              { !coinList.length?  <div className="mx-auto w-6/12"><CircularProgress /></div> :''}
            </div>
          </div>
          <div
            className="rounded-xl bg-black-light w-2/12 "
            style={{ color: "white" }}
          >
            <h1 className="text-left pl-4 pt-4 text-lg">Events</h1>
            {events?events.map(event=>(
                 <div className="rounded-lg bg-box w-full h-1/6 mt-2">
                     <h3>{event.title}</h3>
                     <p className="text-xs">{`${event.description.substring(0,49)}...`}</p>
                 </div>
            )):<CircularProgress />}
           { !events.length?  <div className="mx-auto w-6/12"><CircularProgress /></div> :''}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PageOne;
