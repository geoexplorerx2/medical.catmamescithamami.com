import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../../lib';
import catmamescithammamLogo from '../../assets/logo/catmamescithammamLogo.svg';
import { STEPPER_VIEWS } from '../constants';
import LanguagePicker from '../LanguagePicker/LanguagePicker';

interface MasterHeaderProps {
  stepsState?: any
}

const MasterHeader: FC<MasterHeaderProps> = (props) => {
  const {stepsState} = props;

  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);

  const isLastStep = stepsState?.find((step: any) => step?.view === 'Registry End')?.display

  return (
    <div className={`${ isLastStep ? 'hidden' : '' } z-30 w-full sm:h-[150px] sticky top-0 left-0 backdrop-blur-2xl bg-[#FFFFFF] bg-opacity-70 shadow-md backdrop-filter`}>
        <div className="container flex flex-row items-center justify-between">
            <div className='py-4 sm:py-9'>
              <Logo img= { catmamescithammamLogo }   />
            </div>
            <div className='sm:py-14'>
              <LanguagePicker openDropdownMenu={openDropdownMenu} setOpenDropdownMenu={setOpenDropdownMenu}  />
            </div>
        </div>
    </div>
  )
}

export default MasterHeader;