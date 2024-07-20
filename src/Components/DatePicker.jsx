import React from 'react';
import Card from 'react-bootstrap/Card';

export default function DatePicker(props){
    return(
        <div className='pt-3'>
        <Card className="datepicker--comp" style={{width: "15rem"}}>
            <Card.Body>
                {`This ${props.time}`} 
                <Card.Text>
                    {`${props.hours} Hrs`}
                </Card.Text>
            </Card.Body>
            
        </Card>
        </div>
        
    )
}
