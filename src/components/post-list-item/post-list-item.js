import React , {Component} from 'react';
import {AiFillStar , AiFillHeart} from 'react-icons/ai';
import {BsFillTrash3Fill} from 'react-icons/bs';

import './post-list-item.css';


export default class PostListItem extends Component{
    
    

    render(){
        const {label , onDelete , onToggleImportant , onToggleLiked , important , like} = this.props;

        let classNames = 'app-list-item d-flex justify-content-between'
        if(important){
             classNames += ' important'
        }
        if(like){
            classNames += ' like'
        }

        return(
            <div className={classNames}>
               <span  className="app-list-item-label"
               onClick={onToggleLiked}>
                {label}
               </span>
               <div className="d-flex justify-content-center align-items-center">
               <button onClick={onToggleImportant}   type="button" className="btn-star btn-sm">
                  <AiFillStar/>
               </button>
               <button onClick = {onDelete} type="button" className="btn-trash btn-sm">
                  <BsFillTrash3Fill/>
               </button>
               <i className="fa fa-heart" ></i>
               </div>
         </div>
        )
    }
}
