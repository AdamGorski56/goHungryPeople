
import "../style.scss";


const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const upperBoarder = document.querySelector('.upper_boarder_container');
const lowerBoarder = document.querySelector('.lower_boarder_container');


const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    navigation.classList.toggle('navigation--active');
    upperBoarder.classList.toggle('upper_boarder_container--active');
    lowerBoarder.classList.toggle('lower_boarder_container--active');
}

hamburger.addEventListener('click', handleClick);
