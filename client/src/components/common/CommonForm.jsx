import React from 'react'
import { SelectContent } from '@radix-ui/react-select';
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
                    />
                    );
                break;
            }
            //for select tag
            case 'select' :{
                element = (
                    <Select>
                        <SelectTrigger className='w-full'>
                            <SelectValue placeholder={getControlItem.placeholder}>

                            </SelectValue>
                            <SelectContent>
                                {
                                    getControlItem.options &&
                                    getControlItem.options.length > 0 ?
                                    getControlItem.options.map(optionItem => <SelectItem key={optionItem.id} value={optionItem.label}>

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