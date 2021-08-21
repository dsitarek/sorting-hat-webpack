import { addStudentToArray, expelStudent } from '../data/studentData';
import renderToDOM from './renderToDom';

const showForm = () => {
  document.querySelector('#button-div').innerHTML = '';
  const content = `<div class="card m-3 justify-content-center">
                        <div class="card-body text-center">  
                            <h4>
                                Enter First Year's Name
                            </h4>
                            <div id="error-message"></div>
                            <div class="d-flex col-md-6 offset-md-3">
                                <label for="inlineFormInput">Student: </label>
                                <input type="text" class="form-control mx-3" id="student-name" placeholder="Luna Lovegood" required>
                               <button id="sort" class="btn btn-primary mb-2">Sort!</button>
                            </div>
                        </div>
                    </div>`;
  renderToDOM('#sorting-form', content);
  document.querySelector('#student-name').addEventListener('keyup', addStudentToArray); // this could have easily been accomplished by using a form tag instead of using separate form elements as form submits on enter key press also
};

const domEvents = () => {
  document.querySelector('#start-sorting').addEventListener('click', showForm);
  document
    .querySelector('#sorting-form')
    .addEventListener('click', addStudentToArray);
  document
    .querySelector('#first-years-card-display')
    .addEventListener('click', expelStudent);
};

const loadPage = () => {
  const content = `    <div class="jumbotron text-center">
    <h1 class="display-4">Welcome to Hoggy Hoggy Warts!</h1>
    <p class="lead">
      Stupefy alohomora totalus orchideous inflamarae locomotor momentum
      serpensortia totalus. Patronum kedavra legilimens petrificus expecto
      banishing expecto patronum arania mobilicorpus petrificus.
    </p>
    <hr class="my-4" />
    <p>
      Ennervate serpensortia deletrius evanesco imperio funnunculus
      impedimenta.
    </p>
    <div id="button-div">
      <button id="start-sorting" class="btn btn-primary btn-lg">
        Let's Start Sorting
      </button>
    </div>
    <div id="sorting-form" class="sorting-form"></div>
  </div>
  <div class="cards d-flex p-4">
    <div class="new-student-cards">
      <center><h4>First Year's</h4></center>
      <div
        id="first-years-card-display"
        class="d-flex flex-wrap justify-content-center"
      ></div>
    </div>

    <div class="moldy-voldy-cards">
      <center><h4>He Who Must Not Be Named's Army</h4></center>
      <div
        id="voldermorts-army"
        class="d-flex flex-wrap justify-content-center voldermorts-army mb-5"
      >
        No Death Eaters...yet!
      </div>
    </div>
  </div>`;

  renderToDOM('body', content);
};

export { domEvents, loadPage };
