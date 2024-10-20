import { Input } from '../ui/input';
import { Label } from '../ui/label'
import React from 'react'

const CommonForm = ({formControls}) => {

    const renderInputsByComponent = (getControlItem) =>{
        let element = null;
        switch(getControlItem.componentType) {
            case 'input' :{
                element = <Input
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.name}
                type={getControlItem.type}
                />
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
        return element;

    }

  return (
    <form>
        <div className="flex flex-col gap-3">
            {
                formControls.map(controlItem=> 
                    <div className='grid w-full gap-1.5' key={controlItem.name}> 
                        <Label className='mb-1' >{controlItem.label}</Label>
                    </div>
                )
            }
        </div>

    </form>
  )
}

export default CommonForm;