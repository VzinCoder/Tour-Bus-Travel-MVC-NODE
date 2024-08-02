
const sidebarElement = document.querySelector('[data-js="sidebar"]')
const targetsDropdown = document.querySelectorAll('[data-target-dropdown]')



const hiddenElements = (...elements) => {
    elements.forEach((element) => {
        element.classList.add('hidden-sidebar')
    })
}

const showElements = (...elements) => {
    elements.forEach((element) => {
        element.classList.remove('hidden-sidebar')
    })
}

const toggleSidebar = (event) => {
    const txtIconsElement = document.querySelectorAll('[data-js="hidden-element"]')
    const dropdowns = document.querySelectorAll('[data-dropdown]')
    const { type } = event

    if (type === 'mouseleave') {
        hiddenElements(...dropdowns, ...txtIconsElement)
        return
    }

    showElements(...txtIconsElement)
}

const toggleDropdown = (element) => {
    const idDropdown = element.dataset.targetDropdown
    const dropdown = document.querySelector(`[data-dropdown="${idDropdown}"]`)
    dropdown.classList.toggle('hidden-sidebar')
}

const addEventToggleDropdown = (targetDropdown) => {
    const wrapperToggleDropdown = () => toggleDropdown(targetDropdown)
    targetDropdown.addEventListener('click', wrapperToggleDropdown)
}




targetsDropdown.forEach(addEventToggleDropdown)
sidebarElement.addEventListener('mouseenter', toggleSidebar)
sidebarElement.addEventListener('mouseleave', toggleSidebar)
