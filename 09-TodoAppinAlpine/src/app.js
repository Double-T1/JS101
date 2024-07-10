import Alpine from 'alpinejs'
import { v4 as uuidv4 } from 'uuid';

Alpine.data("task", () => ({
  task: '',
  tasks: [{id:0, content: "example"}],

  addTask() {
    this.tasks.unshift({id:uuidv4(), content: this.task});
    this.task = '';
  },

  closeTask(e) {
    const target = e.currentTarget.dataset['id'];
    this.tasks = this.tasks.filter(t => {
      return t.id != target;
    })
  }
}))
 
Alpine.start()