/* {Tabs.map((item, index) => {
    return (
        <Tab eventKey={item.name} title={item.title}> 
        <Products filter={item.categoryFilter} />
        </Tab>
    );
    })}   

<Tab eventKey="home" title="Menu">  
</Tab>
<Tab eventKey="breakfast" title="Breakfast"> 
</Tab>
<Tab eventKey="hotdrinks" title="Hot Drinks"> 
</Tab>
<Tab eventKey="golddrinks" title="Gold Drinks"> 
</Tab>
<Tab eventKey="extras" title="Extras"> 
</Tab>  */


export const TabsData = [
    {
        name: 'menu',
        title: 'Menu',
        categoryFilter: 'menu' 
    },
    {
        name: 'breakfast',
        title: 'Breakfast',
        categoryFilter: 'breakfast' 
    }, 
    {
        name: 'hotDrinks',
        title: 'Hot Drinks',
        categoryFilter: 'hotDrinks' 
    } , 
    {
        name: 'goldDrinks',
        title: 'Gold Drinks',
        categoryFilter: 'goldDrinks' 
    } , 
    {
        name: 'extras',
        title: 'Extras',
        categoryFilter: 'extras' 
    }  
  ];