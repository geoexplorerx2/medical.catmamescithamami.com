import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../../lib';
import catmamescithammamLogo from '../../assets/logo/catmamescithammamLogo.svg';
import { STEPPER_VIEWS } from '../constants';

interface MasterHeaderProps {
  stepsState?: any
}

const MasterHeader: FC<MasterHeaderProps> = (props) => {
  const {stepsState} = props;
  // @ts-ignore
  const { i18n } = useTranslation();
  const isLastStep = stepsState?.find((step: any) => step?.view === 'Registry End')?.display

  const handleLan = (langID:any) => {
    i18n.changeLanguage(langID);
  };

  return (
    <div className={`${ isLastStep ? 'hidden' : '' } w-full h-[150px] sticky top-0 left-0 backdrop-blur-2xl bg-[#FFFFFF] bg-opacity-70 shadow-md backdrop-filter`}>
        <div className="container flex justify-center">
            <div className='mx-9 p-9'>
              <Logo img= { catmamescithammamLogo }   />
            </div>
        </div>
    </div>
  )
}

export default MasterHeader;