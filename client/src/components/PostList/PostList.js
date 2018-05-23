import React from 'react';
import PropTypes from 'prop-types';
import {Image, Panel} from "react-bootstrap";
import config from '../../config';
import dialog from '../../assets/image/dialog.png';
import Moment from "react-moment";
import {Link} from "react-router-dom";

const PostList = props => {

    let image = dialog;

    if (props.image) {
        image = config.apiUrl + '/uploads/' + props.image;
    }

    return (
        <Panel>
            <Panel.Body>
                <p>
                    <Moment format="YYYY-MM-DD HH:mm">
                        {props.dateTime}
                    </Moment> by  <strong>{props.user}</strong></p>
                <Image style={{width: '80px', height: 'auto', float: 'left'}} src={image} thumbnail/>
                <div  style={{paddingLeft: '100px'}}>
                    <p>
                        <Link to={"/posts/" +   props.id}>{props.title}</Link>
                    </p>
                    <p>{props.description}</p>
                </div>
            </Panel.Body>
        </Panel>
    );
};

PostList.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    user: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired
};

export default PostList;