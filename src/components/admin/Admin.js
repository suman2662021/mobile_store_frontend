import { Box, Heading } from '@chakra-ui/react';
import ProductTable from "./ProductTable";
import AddProduct from './AddProduct'
 

const Admin = () => {
    return ( 
        <Box p={4}>
            <Heading textAlign={'center'} >ADMIN SECTION</Heading>
            <Box m={4}>
                <ProductTable />
            </Box>
            <Box m={4}>
                <AddProduct />
            </Box>
        
        </Box >
     );
}
 
export default Admin;