import React from 'react';

export function repoItem(props){
    return(
        <li className='list-group-item nav nav-pills nav-justified'>
        <a href={props.owner.html_url}><h3>{props.full_name}</h3></a>
        <img src={props.owner.avatar_url} alt="logo" height="75px"/> <br /> <br />
        <span>Title - {props.name}/{props.full_name}</span><br />
        
        </li>
    )
}
