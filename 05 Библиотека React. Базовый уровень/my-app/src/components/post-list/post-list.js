import React from 'react';

import './post-list.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

import PostListItem from '../post-list-item/';

const PostList = ({posts, onDelete, onToggleImportat, onToggleLiked}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem 
                    {...itemProps}
                    onDelete={ () => onDelete(id) }
                    onToggleImportat={() => onToggleImportat(id)}
                    onToggleLiked={() => onToggleLiked(id)} />
            </li>
        )
    })

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;