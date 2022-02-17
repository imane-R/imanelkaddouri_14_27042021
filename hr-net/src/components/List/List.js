import './List.css'
import MaterialTable from "@material-table/core";

const columns= [
        { title: 'First Name', field: 'firstName' },
        { title: 'Last Name', field: 'lastName' },
        { title: 'Start Date', field: 'startDate' },
        { title: 'Date of Birth', field: 'dateOfBirth' },
        { title: 'Street', field: 'street' },
        { title: 'City', field: 'city' },
        { title: 'Department', field: 'department' },
        { title: 'State', field: 'state' },
        { title: 'Zip Code', field: 'zipCode' },
]

const EmployeeListPage = ({data}) => {
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
                    backgroundColor: '#202023',
                    color: 'white'
                },
                
                }}
                />
                
            </div>
        </div>
    )
}

export default EmployeeListPage;