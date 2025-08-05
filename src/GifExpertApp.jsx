import { useState } from 'react';
import { AddCategory,GifGrid } from './components';

  export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);
    // const onAddCategory = () => {
    //     console.log('agrega')
    //     let categoriesadd = categories
      
    //     console.log(categoriesadd)
    //     setCategories(['Valorant',...categories])
    // };
    const onAddCategory =(newCategory=>{
        if(categories.includes(newCategory)) return;
      
        
        setCategories([newCategory,...categories])
    });
   
    
    return (
      
      <>

          <h1>GifExpertApp</h1>

          <AddCategory 
            onNewCategory={onAddCategory}
           //setCategories = {setCategories}
           />


           
    
            {
                categories.map(category => (
                    <GifGrid
                         key={ category }
                         category = { category }
                    />
                ))  
            }
  
    
               
      </>
    )
}
