
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid"

function Menu({items}) {
    return ( 
        <Grid container spacing={2} >
       {
           items.map((item)=>{
               const {price, id, category,img,desc,title} = item;

               return(
                    <Grid item sm={6} md={4}  key={id}>
                        <img src={img} alt={title} width="100%"/>
                        <Typography
                        variant="h5"
                        color="primary"

                        >
                        {title} - {category}
                        </Typography>
                        <Typography
                        variant="h6"
                        color="secondary"

                        >
                        Price : {price} 
                        </Typography>
                        <Typography paragraph>
                            {desc}
                        </Typography>
                    </Grid>
               );
           })
       }
       </Grid>
     );
}

export default Menu;