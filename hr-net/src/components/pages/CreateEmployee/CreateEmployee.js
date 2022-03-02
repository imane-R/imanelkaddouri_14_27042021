import "./CreateEmployee.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react'
import { states, departments } from "../../../data/Data";
import Select from 'react-select';
import { Modal } from 'react-modal-ib'




const CreateEmployee = ({ addEmployee }) => {
    
    const [showModel, setShowModel] = useState(false);
    const [form, setForm] = useState({
        firstName: {
            value: "",
            hasError: false,
            errorMessage: ''
        },
        lastName: {
            value: "",
            hasError: false,
            errorMessage: ''
        },
        startdate: {
            value: "",
            hasError: false,
            errorMessage: ''
        },
        birthdate: {
            value: "",
            hasError: false,
            errorMessage: ''
        },
        street: {
            value: "",
            hasError: false,
            errorMessage: ''
        },
        city: {
            value: "",
            hasError: false,
            errorMessage: ''
        },
        state: {
            value: states[0].value,
            hasError: false,
            errorMessage: ''
        },
        zipCode: {
            value: "",
            hasError: false,
            errorMessage: ''
        },
        department: {
            value: departments[0].value,
            hasError: false,
            errorMessage: ''
        },

        hasError: false
    })

    //handle form state change
    const handleChange = (evt) => {
        let newForm = { ...form };
        newForm[evt.target.name] = {
            value: evt.target.value,
            hasError: false
        }
        setForm(newForm);
    }
    const handleChangebirthdate = (date) => {
        let newForm = { ...form };
        newForm.birthdate = {
            value: date,
            hasError: false
        }
        setForm(newForm);
    }

    const handleChangestartdate = (date) => {
        let newForm = { ...form };
        newForm.startdate = {
            value: date,
            hasError: false
        }
        setForm(newForm);
    }

    const handleChangeState = (option) => {
        let newForm = { ...form };
        newForm.state = {
            value: option.value,
            hasError: false
        }
        setForm(newForm);
    }

    const handleChangeDepartment = (option) => {
        let newForm = { ...form };
        newForm.department = {
            value: option.value,
            hasError: false
        }
        setForm(newForm);
    }


    const formValidate = (e) => {
        e.preventDefault();
        let newForm = { ...form }
        newForm.hasError = false;

        if (newForm.firstName.value.length < 2 || !newForm.firstName.value.match(/^[a-zA-Z\s]*$/)) {
            newForm.firstName.hasError = true;
            newForm.hasError = true;
            newForm.firstName.errorMessage = 'First Name must have at least 2 caracters';
        }

        if (newForm.lastName.value.length < 2 || !newForm.lastName.value.match(/^[a-zA-Z\s]*$/)) {
            newForm.lastName.hasError = true;
            newForm.hasError = true;
            newForm.lastName.errorMessage = 'Last Name must have at least 2 caracters';
        }

        if (newForm.birthdate.value.length < 2) {
            newForm.birthdate.hasError = true;
            newForm.hasError = true;
            newForm.birthdate.errorMessage = 'Please add a birth date';
        }

        if (newForm.startdate.value.length < 2) {
            newForm.startdate.hasError = true;
            newForm.hasError = true;
            newForm.startdate.errorMessage = 'Please add a start date';
        }

        if (newForm.street.value.length < 2 || !newForm.street.value.match(/^[a-zA-Z\s]*$/)) {
            newForm.street.hasError = true;
            newForm.hasError = true;
            newForm.street.errorMessage = 'Street must have at least 2 caracters';
        }

        if (newForm.city.value.length < 2 || !newForm.city.value.match(/^[a-zA-Z\s]*$/)) {
            newForm.city.hasError = true;
            newForm.hasError = true;
            newForm.city.errorMessage = 'City must have at least 2 caracters';
        }

        if (newForm.zipCode.value.length < 2 || !newForm.zipCode.value.match(/^[0-9]+$/)) {
            newForm.zipCode.hasError = true;
            newForm.hasError = true;
            newForm.zipCode.errorMessage = 'Zip Code must have at least 2 numbers';
        }
        setForm(newForm);
        if (!newForm.hasError) {
            saveEmployee();
        }

    }
    //form submit
    const saveEmployee = () => {
        const form_data = {
            id: Math.floor(Math.random() * 100),
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            startDate: form.startdate.value.toLocaleDateString('en-US'),
            department: form.department.value,
            dateOfBirth: form.birthdate.value.toLocaleDateString('en-US'),
            street: form.street.value,
            city: form.city.value,
            state: form.state.value,
            zipCode: form.zipCode.value
        }
        setShowModel(true);
        addEmployee(form_data);
    }

    const closeModal = () => {
        setShowModel(!showModel);
    }

    return (
        <div>
            <div className="CreateEmployee">
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name </label>
                    <input required className={'input-field ' + (form.firstName.hasError ? 'error' : '')} type="text" name="firstName" id="first-name" value={form.firstName.value} onChange={handleChange} />
                    {form.firstName.hasError ? <span className="errorMessage">{form.firstName.errorMessage}</span> : ''}

                    <label htmlFor="last-name">Last Name</label>
                    <input className={'input-field ' + (form.lastName.hasError ? 'error' : '')} required type="text" name="lastName" id="last-name" value={form.lastName.value} onChange={handleChange} />
                    {form.lastName.hasError ? <span className="errorMessage">{form.lastName.errorMessage}</span> : ''}

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker  selected={form.birthdate.value} className='input-field ' dateFormat="dd/MM/yyyy" onChange={handleChangebirthdate}/>
                    {form.birthdate.hasError ? <span className="errorMessage">{form.birthdate.errorMessage}</span> : ''}

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker className={ (form.startdate.hasError ? 'error' : '')} selected={form.startdate.value}  dateFormat="dd/MM/yyyy" onChange={handleChangestartdate}  />
                    {form.startdate.hasError ? <span className="errorMessage">{form.startdate.errorMessage}</span> : ''}

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input className="input-field" required type="text" name="street" id="street" value={form.street.value} onChange={handleChange} />
                        {form.street.hasError ? <span className="errorMessage">{form.street.errorMessage}</span> : ''}

                        <label htmlFor="city">City</label>
                        <input className="input-field" required type="text" name="city" id="city" value={form.city.value} onChange={handleChange} />
                        {form.city.hasError ? <span className="errorMessage">{form.city.errorMessage}</span> : ''}

                        <label htmlFor="state">State</label>
                        <Select aria-label="state" id="state" required defaultValue={states[0]} options={states} onChange={handleChangeState} />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input className="input-field" required type="number" name="zipCode" id="zip-code" value={form.zipCode.value} onChange={handleChange} />
                        {form.zipCode.hasError ? <span className="errorMessage">{form.zipCode.errorMessage}</span> : ''}
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <Select aria-label="department" defaultValue={departments[0]} options={departments} onChange={handleChangeDepartment} />
                </form>
                <div className="wrapper">
                    <button type="submit" className="btn" onClick={formValidate}>Save</button>
                </div>
            </div>
            {showModel && <Modal modalmessage="Employee Created!" buttonContent="close" modalClose={closeModal} />}
        </div>
    )
}

export default CreateEmployee