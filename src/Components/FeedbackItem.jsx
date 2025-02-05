import React from 'react'
import Card from './Shared/Card'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import { FaTimes, FaEdit } from 'react-icons/fa'

function FeedbackItem({item}){
const {deleteFeedback,editFeedback}=useContext(FeedbackContext)

    return(
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button onClick={()=>deleteFeedback(item.id)} className='close'>
                <FaTimes color='purple'/>
            </button>
            <button className='edit'>
                <FaEdit color='Purple'/>
            </button>
            <button onClick={()=>editFeedback(item)} className='edit'>
            <FaEdit color='Purple'/>
            
            </button>
<div className='text-display'>{item.text}</div>
        
        </Card>
    )
}
FeedbackItem.propTypes = {
    item:PropTypes.object.isRequired,
}
export default FeedbackItem
  
