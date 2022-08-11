import React from 'react';


const DisplayItems = (props) => {



    const List =({datalist}) => {
        if(datalist){
            return datalist.map((data) => {
                return(
                    <div key={data.id}>
                        {data.name}
                    </div>
                )
            })
        }
    }

        return(
            <div> 
                {List(props)}
            </div>
        )
}


export default DisplayItems;