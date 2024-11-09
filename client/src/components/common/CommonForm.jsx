import React from 'react'
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const CommonForm = ({formControls, formData, setFormData, onSubmit, buttonText}) => {


    const renderInputsByComponent = (getControlItem) =>{
        let element = null;
        const value = formData[getControlItem.name]
        switch(getControlItem.componentType) {
            //for input tag
            case 'input' :{
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange={event => setFormData({
                            ...formData,
                            [getControlItem.name] : event.target.value
                        })}
                    />
                    );
                break;
            }
            //for select tag
            case 'select' :{
                element = (
                    <Select onValueChange={(value) =>setFormData({
                        ...formData,
                        [getControlItem.name] : value
                    })} value={value} >
                        <SelectTrigger className='w-full'>
                            <SelectValue placeholder={getControlItem.label}>
                            </SelectValue>
                            <SelectContent className="bg-white">
                                {
                                    getControlItem.options &&
                                    getControlItem.options.length > 0 ?
                                    getControlItem.options.map(optionItem => <SelectItem className="hover:bg-slate-100" key={optionItem.id} value={optionItem.label}>
                                        {optionItem.label}
                                    </SelectItem>) : null
                                }
                            </SelectContent>
                        </SelectTrigger>
                    </Select>
                );
                break;
            }
            //for textarea tag
            case 'textarea' :{
                element = (
                    <Textarea
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        value={value}
                        onChange={event => setFormData({
                            ...formData,
                            [getControlItem.name] : event.target.value
                        })}
                    />
                );
                break;
            }
            default:{
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange={event => setFormData({
                            ...formData,
                            [getControlItem.name] : event.target.value
                        })}
                        
                    />
                );
                break;
        }
        }
        return element;

    }

  return (
    <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-3">
            {
                formControls.map(controlItem=> 
                    <div className='grid w-full gap-1.5' key={controlItem.name}> 
                        <Label className='mb-1' >{controlItem.label}</Label>
                        {renderInputsByComponent(controlItem)}
                    </div>
                )
            }
        </div>
        <Button type={'submit'} className={'mt-3 w-full'} >{buttonText || 'Submit'}</Button>
    </form>
  )
}

export default CommonForm;