import { Children, isValidElement, useMemo, useState } from 'react'

export function Step({ children }) {
    return <>{children}</>
}

export function Stepper({
    children,
    initialStep = 1,
    onStepChange = () => { },
    onFinalStepCompleted = () => { },
    stepCircleContainerClassName = '',
    stepContainerClassName = '',
    contentClassName = '',
    footerClassName = '',
    backButtonProps = {},
    nextButtonProps = {},
    backButtonText = 'Back',
    nextButtonText = 'Continue',
    disableStepIndicators = false,
    renderStepIndicator,
}) {
    const childSteps = useMemo(
        () => Children.toArray(children).filter((child) => isValidElement(child)),
        [children],
    )

    const totalSteps = childSteps.length
    const safeInitialStep = Math.min(Math.max(initialStep, 1), Math.max(totalSteps, 1))

    const [currentStep, setCurrentStep] = useState(safeInitialStep)

    const goToStep = (stepNumber) => {
        const nextStep = Math.min(Math.max(stepNumber, 1), totalSteps)
        setCurrentStep(nextStep)
        onStepChange(nextStep)
    }

    const goBack = () => {
        if (currentStep > 1) {
            goToStep(currentStep - 1)
        }
    }

    const goNext = () => {
        if (currentStep < totalSteps) {
            goToStep(currentStep + 1)
            return
        }

        onFinalStepCompleted()
    }

    const isLastStep = currentStep === totalSteps

    return (
        <div className="space-y-5">
            <div className={`flex items-center gap-2 ${stepContainerClassName}`}>
                {childSteps.map((_, index) => {
                    const stepNumber = index + 1
                    const isActive = stepNumber === currentStep
                    const isCompleted = stepNumber < currentStep

                    return (
                        <div key={stepNumber} className="flex flex-1 items-center gap-2">
                            <button
                                type="button"
                                onClick={() => !disableStepIndicators && goToStep(stepNumber)}
                                disabled={disableStepIndicators}
                                className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition ${isActive
                                        ? 'border-slate-200 bg-slate-100 text-slate-950'
                                        : isCompleted
                                            ? 'border-emerald-400 bg-emerald-400/20 text-emerald-300'
                                            : 'border-slate-700 bg-slate-800 text-slate-300'
                                    } ${stepCircleContainerClassName}`}
                                aria-current={isActive ? 'step' : undefined}
                                aria-label={`Go to step ${stepNumber}`}
                            >
                                {renderStepIndicator
                                    ? renderStepIndicator({ step: stepNumber, isActive, isCompleted })
                                    : stepNumber}
                            </button>

                            {stepNumber !== totalSteps && (
                                <span
                                    className={`h-px flex-1 ${isCompleted ? 'bg-emerald-400/70' : 'bg-slate-700'}`}
                                    aria-hidden="true"
                                />
                            )}
                        </div>
                    )
                })}
            </div>

            <div className={`rounded-lg border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-200 ${contentClassName}`}>
                {childSteps[currentStep - 1]}
            </div>

            <div className={`flex items-center justify-between gap-3 ${footerClassName}`}>
                <button
                    type="button"
                    onClick={goBack}
                    disabled={currentStep === 1}
                    className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                    {...backButtonProps}
                >
                    {backButtonText}
                </button>

                <button
                    type="button"
                    onClick={goNext}
                    className="rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-white"
                    {...nextButtonProps}
                >
                    {isLastStep ? 'Complete' : nextButtonText}
                </button>
            </div>
        </div>
    )
}
