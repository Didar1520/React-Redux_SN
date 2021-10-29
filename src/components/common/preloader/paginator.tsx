import { useState } from "react";
import cn from "classnames";

type PropsType ={
    totalUsersCount:number
    pageSize:number
    currentPage:number
    onPageChanged: (pageNumber: number)=>void
    portionSize?:number
}

const Paginator: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize=10})=>{



    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    const portionCount = Math.ceil(pagesCount/portionSize);
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionNumber = (portionNumber - 1) * portionSize+1;
    const rightPortionNumber = portionNumber * portionSize
    return(
        
        <div>
            {portionNumber > 1 &&
            <button onClick={()=> {setPortionNumber(portionNumber-1)}}>назад</button> 
             }
            
            
            {
                pages.filter(p=> p >= leftPortionNumber && p<=rightPortionNumber)
                .map(p => {
                    return <span
                        onClick={(e) => {
                            { onPageChanged(p) }
                        }}
                        className={currentPage === p && "usersPage UsersPageActive" || "usersPage"}>{p}
                    </span>
                })
            }
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
            
        </div>
    )
}


export default Paginator