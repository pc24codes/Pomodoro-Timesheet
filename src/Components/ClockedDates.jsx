import React from 'react';
import Table from 'react-bootstrap/Table'

export default function TimeTable(){
    return(
        <>
        
        <Table bordered>
        <thead> {/*heading*/}
            <tr> 
            <th>Date</th>
            <th>Clock-in time</th>
            <th>Clock-out time</th>
            <th>Total Hours</th>
            </tr>
        </thead>

        <tbody>
            <tr> {/* 1st row*/ }
                <td>25-01-2024</td>
                <td>09.45</td>
                <td>18:45</td>
                <td>09:25</td>
            </tr>
        </tbody>
        </Table>    
        </>
    )
}