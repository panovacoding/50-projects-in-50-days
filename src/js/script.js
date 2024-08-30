document.addEventListener('DOMContentLoaded', () => {
	expandingCardsInit()
	progressStepsInit()
    rotatingNavigation()
})

const expandingCardsInit = () => {
	const cards = document.querySelectorAll('.expand-card')
	const clearActiveCards = () => {
		cards.forEach((card) => card.classList.remove('expand-card_active'))
	}
	const changeActiveCard = (card) => (e) => {
		clearActiveCards()
		if (!card.classList.contains('expand-card_active')) {
			card.classList.add('expand-card_active')
		}
	}
	cards.forEach((card) => {
		card.addEventListener('click', changeActiveCard(card))
	})
}

const progressStepsInit = () => {
    const steps = document.querySelectorAll('.step');
    if(!steps.length) return;
    const btnNext = document.getElementById("step-next");
    const btnPrev = document.getElementById("step-prev");
    const progressBar = document.querySelector(".steps-container__progress");
    let activeStep = document.querySelector(".step_active");

    const disableStepButtons = (progressBarWidth) => {
        switch(progressBarWidth) {
            case 0:
                btnPrev.setAttribute("disabled", true);
                break;
            case 100: 
                btnNext.setAttribute("disabled", true);
                break;
            default:
                btnPrev.removeAttribute("disabled");
                btnNext.removeAttribute("disabled");
        }
    }

    const updateProgressBarWidth = () => {
        const activeSteps = document.querySelectorAll(".step_active");
        const currentWidth = ((activeSteps.length - 1) / (steps.length - 1)) * 100;
      
        progressBar.style.width = `${currentWidth}%`;

        disableStepButtons(currentWidth);
    }

    const btnNextClickHandler = () => {
        activeStep = activeStep.nextElementSibling;
        activeStep.classList.add("step_active");
        updateProgressBarWidth();
    }

    const btnPrevClickHandler = () => {
      activeStep.classList.remove("step_active");
      activeStep = activeStep.previousElementSibling;
      updateProgressBarWidth();
    }
    
    btnNext.addEventListener("click", btnNextClickHandler);
    btnPrev.addEventListener("click", btnPrevClickHandler);
}

const rotatingNavigation = () => {
    const navButton = document.querySelector('.rotating-nav-button');
    const section = document.querySelector('.rotating-navigation');
    navButton.addEventListener('click', () => {
        navButton.classList.toggle('rotating-nav-button_rotate');
        section.classList.toggle('rotating-navigation_open');
    })

}