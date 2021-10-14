import { Button } from "@mui/material";

function Categories({filteredItem, singleCategory, isActive}) {
    return ( 
    <>
      {
          singleCategory.map((category, index)=>{
              return(
                  <Button 
                  sx={{ m: 3 }}
                  variant="contained"
                  olor="success"
                  key={index}
                  onClick={()=>filteredItem(category)}
                  > {category} </Button>
              );
          })
      }
      </>
     );
}

export default Categories;