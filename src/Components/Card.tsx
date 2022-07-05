import React, { Children } from 'react';

function Card(props : any) {
    return (
        <div className={'rounded-xl h-52 relative mt-6 lg:mb-12' + props.css }>
            {props.children}
        </div>
    );
}

export default Card;