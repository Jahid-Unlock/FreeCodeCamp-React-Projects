import Menu from "./Menu"
import Categories from "./Categories"
import { Grid } from "@mui/material";
import items from "./data"
import { useState } from "react";
import "./index.css"

const allCategories = ["all", ...new Set(items.map((item) => item.category))]

console.log(allCategories)

function App() {

  const [menuItems, setMenuItems] = useState(items)
  const [category, setCategory] = useState(allCategories)

  const filterItem = (category) =>{
    if(category === "all"){
      setMenuItems(items)
      return;
    }

    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return ( 
    <div className="container">
      <Grid container >
        <Grid sm={12} item sx={{  display: 'flex', justifyContent: 'center' }}><Categories filteredItem={filterItem} singleCategory={category}/></Grid>
        <Grid sm={12} item><Menu items={menuItems}/></Grid>
     </Grid>
    </div>
   );
}

export default App;