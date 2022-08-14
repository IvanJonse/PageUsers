import React from 'react';

export default function Paginator ({onPageChanged, pageSum, currentPage}) {

    let pagesCount = Math.ceil(pageSum) 
 
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
       pages.push(i)
    }
   
    
return (
    
        <div className='d-flex mb-3 gap-3' styles={{'width':'100px', 'maxHeight':'40px' }}>

            {pages.map((e, index) => {

                return (

                <button key={index} className={`${currentPage === e ? 'fs-4 border-0 text-info' : 'fs-4 border-0'}`} onClick={ () => onPageChanged(e)}>
                    {e}
                </button>
                
                )
            })}
        
        </div>
    )
}