import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const Routes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default Routes;
module.exports = Routes;
