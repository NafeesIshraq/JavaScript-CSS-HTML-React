import PropTypes from 'prop-types'



function List(props){
    
    const itemList = props.items
    const category = props.category



    const list = itemList.map(itemList => <li> {itemList.name} : <b>{itemList.calories}</b></li>);             




    return(
        <>
            <h3 className = "list-category">{category}</h3>
            <ol className = "listItems">{list}</ol>
        
        
        </>
        

        
    );


    //we are setting default props for the lists. 
    List.propTypes = {
        category: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, 
                                                    name:PropTypes.string,
                                                    calories: PropTypes.number}))
    }



    List.defaultProps = {
        category : "Category",
        items : []

    }

}

export default List