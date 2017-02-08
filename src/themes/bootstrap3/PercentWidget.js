import React from 'react'
import classNames from 'classnames'
import { Field } from 'redux-form'

const renderInput = field => {
    const className = classNames([
        'form-group',
        { 'has-error' : field.meta.touched && field.meta.error }
    ])
    return (
        <div className={className}>
            <label className="control-label" htmlFor={'field-'+field.name}>{field.label}</label>
            <div className="input-group">
            <input {...field.input} type="number" className="form-control" id={'field-'+field.name} required={field.required} placeholder={field.placeholder}/>
            <span className="input-group-addon"> %</span>
            </div>
            {field.meta.touched && field.meta.error && <span className="help-block">{field.meta.error}</span>}
            {field.description && <span className="help-block">{field.description}</span>}
        </div>
    )
}


const Widget = props =>  {
    return (
        <Field
            component={renderInput}
            label={props.label}
            name={props.fieldName}
            required={props.required}
            id={'field-'+props.fieldName}
            placeholder={props.schema.default}
            description={props.schema.description}
        />
    )
}

Widget.propTypes = {
    schema: React.PropTypes.object.isRequired,
    fieldName: React.PropTypes.string,
    label: React.PropTypes.string,
    theme: React.PropTypes.object,
    multiple: React.PropTypes.bool,
    required: React.PropTypes.bool,
}

export default Widget
