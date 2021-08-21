import cardCreator from '../components/cardCreator';
import errorMessage from './errorMessage';

const studentArray = [];
const voldermortsArmy = [];

const sortStudentsByHouse = (array) => array.sort((a, b) => (a.house > b.house ? 1 : -1));

const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const sortHouse = houses[Math.floor(Math.random() * houses.length)];
  return sortHouse;
};

const addStudentToArray = (e) => {
  if (e.target.id === 'sort' || e.keyCode === 13) {
    const student = document.querySelector('#student-name');
    errorMessage(student.value);

    if (student.value) {
      studentArray.push({
        name: student.value,
        house: sortingHat(),
      });
      student.value = '';
    }

    const sortedArray = sortStudentsByHouse(studentArray);
    cardCreator('#first-years-card-display', sortedArray);
  }
};

const expelStudent = (e) => {
  if (e.target.type === 'button') {
    voldermortsArmy.push(studentArray[e.target.id]);
    studentArray.splice(e.target.id, 1);
    cardCreator('#first-years-card-display', studentArray);
    cardCreator('#voldermorts-army', voldermortsArmy);
  }
};

export { addStudentToArray, expelStudent };
