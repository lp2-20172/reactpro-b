import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';

import { save, getList } from '../../actions/categoria-action'
import { connect } from 'react-redux'

import {
    Link
} from 'react-router-dom'
import { Redirect } from 'react-router'


class Form extends Component {
    /*
        constructor(props) {
            super(props);
            this.state = {
                d: {
                    codigo: '',
                    nombre: '',
                },
                saving: false
            }
        }*/
    constructor(props) {
        super(props);
        this.state = {
            codigo: '',
            nombre: ''
        };

    }

    componentWillMount() {

    }

    handleChange = (event) => {
        //this.setState({ value: event.target.value });
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        this.props.save(this.state, this.props.history)
        //this.props.history.push('/categorias/list');
        event.preventDefault();
    }

    render() {
        //const { list } = this.props
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            R
                          </Avatar>
                    }
                    title="User Form"
                    subheader="Users Form"
                />
                <CardContent>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Codigo:
                            <input type="text" name="codigo" value={this.state.codigo} onChange={this.handleChange} />
                        </label>
                        <br />

                        <label>
                            Name:
                            <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </CardContent>
            </Card>
        )
    }
}

Form.propTypes = {
    //list: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        data: state.categoria.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        save: (d, h) => { dispatch(save(d, h)) },
        getList: (q) => { dispatch(getList(q)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)