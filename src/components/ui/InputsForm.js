import React from 'react';

export const TextForm = ({opts}) => (
    opts.required ?
        <textarea 
            className="form-control py-3 px-4" 
            rows={opts.rows || '5'} id={opts.idform} 
            placeholder={opts.placeholder}
            required="required" 
            data-validation-required-message={opts.validationmsg}
        ></textarea>
        :
        <textarea 
            className="form-control py-3 px-4" 
            rows={opts.rows || '5'} id={opts.idform} 
            placeholder={opts.placeholder}
        ></textarea>
);

export const InputForm = ({opts}) => (
    opts.required ?
        <input 
            type={opts.typeform} 
            className="form-control p-4" 
            id={opts.idform} 
            placeholder={opts.placeholder}
            required="required"
            data-validation-required-message={opts.validationmsg} 
        />
        :
        <input 
            type={opts.typeform} 
            className="form-control p-4" 
            id={opts.idform} 
            placeholder={opts.placeholder}
        />
);