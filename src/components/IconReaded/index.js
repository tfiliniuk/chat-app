import React from "react";
import PropTypes from "prop-types";

import readedSvg from "assets/img/readed.svg"
import noreadedSvg from "assets/img/noreaded.svg"

const IconReaded = ({ isMe, isReaded }) =>  
    isMe && (isReaded ? (<img className="message__icon-readed"
    src={readedSvg}
    alt="Checked Icon"
    />
    ) : (
        <img className="message__icon-readed message__icon-readed--no"
            src={noreadedSvg}
            alt="Checked Icon"
        />
    ));

IconReaded.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
}
export default IconReaded;