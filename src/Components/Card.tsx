import React, { Children } from 'react';

function Card(props : any) {
    return (
        <div className={'rounded-xl h-52 relative mt-6 ' + props.height +' '+ props.shadow}>
            {props.children}
        </div>
    );
}

export default Card;