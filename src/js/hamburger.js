const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const upperBoarder = document.querySelector('.middle_container__upper_boarder_container');
const lowerBoarder = document.querySelector('.middle_container__lower_boarder_container');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    navigation.classList.toggle('navigation--active');
    upperBoarder.classList.toggle('middle_container__upper_boarder_container--active');
    lowerBoarder.classList.toggle('middle_container__lower_boarder_container--active');
}

hamburger.addEventListener('click', handleClick);