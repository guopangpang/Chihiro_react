import React from 'react';
import './swiper.css'
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper(props) {
    // console.log('props',props);
    const tutorialSteps = [
        {
            label: 'San Francisco – Oakland Bay Bridge, United States',
            imgPath:
                'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
            label: 'Bird',
            imgPath:
                'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
            label: 'Bali, Indonesia',
            imgPath:
                'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
            label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
            imgPath:
                'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
            label: 'Goč, Serbia',
            imgPath:
                'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        },
    ];
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    function handleNext() {
        if(activeStep!==maxSteps - 1){
            setActiveStep(activeStep + 1);
        }
    }

    function handleBack() {
        if(activeStep!==0){
            setActiveStep(activeStep - 1);
        }
    }

    function handleStepChange(step) {
        setActiveStep(step);
    }

    return (
        <div className={'swiper_container'}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img className={'img'} src={step.imgPath} alt={step.label} />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <div className={'left'} onClick={handleBack}>11111</div>
            <div className={'right'} onClick={handleNext}>22222</div>

            <MobileStepper
                className={'bottom_dots'}
                steps={maxSteps}
                position="static"
                variant="dots"
                activeStep={activeStep}
            />
        </div>
    );
}

export default SwipeableTextMobileStepper;