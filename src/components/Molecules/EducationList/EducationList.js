import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

import './EducationList.css'

const EducationList = ({ title, correct, wrong}) => {

    return (
        <div className="education-list-wrapper">   
            <div>
                <h3>{title}</h3>
                <ul className="education-ul correct-ul">
                    {correct.map((item, index) => {
                        return (
                            <li key={index}><DoneIcon className="icon"/><p>{item}</p></li>
                        )
                    })}
                </ul>
                <ul className="education-ul wrong-ul">
                    {wrong.map((item, index)=>{
                        return (
                            <li key={index}><ClearIcon className="icon"/><p>{item}</p></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default EducationList;