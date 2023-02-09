import React, { FC } from 'react';
import { Logo } from '../../lib';
import catmamescithammamLogo from '../../assets/logo/catmamescithammamLogo.svg';
import { STEPPER_VIEWS } from '../constants';

interface MasterHeaderProps {
  stepsState?: any
}

const MasterHeader: FC<MasterHeaderProps> = (props) => {
  const {stepsState} = props
  const isLastStep = stepsState?.find((step: any) => step?.view === 'Registry End')?.display
  console.log('isLastStep' ,isLastStep)
  return (
    <div className={`${ isLastStep ? 'hidden' : '' } w-[834px] h-[150px] backdrop-blur-2xl bg-[#FFFFFF] bg-opacity-70 shadow-md backdrop-filter`}>
        <div className="container flex justify-center">
            <div className='mx-9 p-9'>
              <Logo img= { catmamescithammamLogo }   />
            </div>
        </div>
    </div>
  )
}

export default MasterHeader;