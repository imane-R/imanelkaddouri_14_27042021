import './List.css'
import MaterialTable from "@material-table/core";

const columns = [
    { title: 'First Name', field: 'firstName' },
    { title: 'Last Name', field: 'lastName' },
    { title: 'Date of Birth', field: 'dateOfBirth' },
    { title: 'Start Date', field: 'startDate' },
    { title: 'Street', field: 'street' },
    { title: 'City', field: 'city' },
    { title: 'State', field: 'state' },
    { title: 'Zip Code', field: 'zipCode' },
    { title: 'Department', field: 'department' }
]
/** create list table 
 * @param {object} data
 */
const EmployeeListPage = ({ data }) => {
    return (
        <div className="listContainer">
            <h2>Current Employees</h2>
            <div className="tableList">
                <MaterialTable
                    columns={columns}
                    data={data}
                    title=""
                    options={{
                        headerStyle: {
                            backgroundColor: '#022334',
                            color: 'white'
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default EmployeeListPage;