import React, { Component } from 'react';
import "./addEmployee.scss";

class AddEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: {
                    value: ''
                },
                desig: {
                    value: ''
                },
                salary: {
                    value: 0
                },
                image: {
                    value: ''
                },
                imageVisible: {
                    value: false
                }
            }
        }
    }

    ChangeHandler = event => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            form: { ...this.state.form, [name]: { ...this.state.form[name], value }}
        });

        this.setState({
            name: event.target.value
        });
    }

    SubmitHandler = event => {
        event.preventDefault();
        console.dir(this.state.form);
    }

    render() {
        return (
            <form onSubmit={this.SubmitHandler} className="add-employee">
                <div className="form-group">
                    <label htmlFor="empName">Name</label>
                    <input type="text" name="name" className="form-control" id="empName" value={this.state.form.name.value} onChange={this.ChangeHandler}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="desig">Designation</label>
                    <input type="text" name="desig" className="form-control" id="desig" value={this.state.form.desig.value} onChange={this.ChangeHandler}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="salary">Salary</label>
                    <input type="text" name="salary" className="form-control" id="salary" value={this.state.form.salary.value} onChange={this.ChangeHandler}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image Path</label>
                    <input type="text" name="image" className="form-control" id="image" value={this.state.form.image.value} onChange={this.ChangeHandler}></input>
                </div>
                
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="imageVisible" name="imageVisible" checked={this.state.form.imageVisible.value} onChange={this.ChangeHandler} />
                    <label className="form-check-label" htmlFor="imageVisible">Image visible</label>
                </div>
                <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default AddEmployee;