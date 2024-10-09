import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import ItemList from './ItemList';

const Content = ({items,  handleCheck, handleDelete, fetchError, isLoading}) => {


   

    return (
        <main>
            {isLoading && <p>The content is loading...</p>}
            
            {fetchError && <p style = { {color: 'red'} } >{`Error: ${fetchError}`}</p>}

           
            {!fetchError &&  !isLoading && (
                items.length ? (
                    <ItemList
                        items = {items}
                        handleCheck = {handleCheck}
                        handleDelete = {handleDelete}
                    />
                    ) : (
                    <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
                    )
                )
            }
       
        </main>
    )
}

export default Content