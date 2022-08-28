const style = getComputedStyle(document.body)
let isDarkTheme = false
let switcher = document.querySelector('.switcher')
switcher.addEventListener('click', () => {
    if (isDarkTheme) {
        document.body.style.setProperty('--color-day-black', '#000000')
        document.body.style.setProperty('--color-day-white', '#FFFFFF')
        document.body.style.setProperty('--color-day-light-blue', '#BAD8F5')
        document.body.style.setProperty('--color-day-white-blue', '#EBF0F5')
        isDarkTheme = false
    } else {
        document.body.style.setProperty('--color-day-black', '#BCC4CC')
        document.body.style.setProperty('--color-day-white', '#2B2D33')
        document.body.style.setProperty('--color-day-light-blue', '#454E52')
        document.body.style.setProperty('--color-day-white-blue', '#171B1F')
        isDarkTheme = true
    }
})