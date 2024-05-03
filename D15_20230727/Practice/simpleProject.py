class Task:
    def __init__(self, description):
        self.description = description
        self.completed = False

    def complete(self):
        self.completed = True

class TaskManager:
    def __init__(self):
        self.tasks = []

    def add_task(self, description):
        task = Task(description)
        self.tasks.append(task)

    def complete_task(self, index):
        self.tasks[index].complete()

    def remove_task(self, index):
        del self.tasks[index]

    def view_tasks(self):
        if not self.tasks:
            print("No tasks")
            return

        for i, task in enumerate(self.tasks):
            status = "Completed" if task.completed else "Pending"
            print(f"{i + 1}. {task.description} - {status}")

def main():
    task_manager = TaskManager()

    while True:
        print("\nTask Manager")
        print("1. Add Task")
        print("2. Complete Task")
        print("3. Remove Task")
        print("4. View Tasks")
        print("5. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            description = input("Enter task description: ")
            task_manager.add_task(description)
        elif choice == "2":
            index = int(input("Enter task number to complete: ")) - 1
            task_manager.complete_task(index)
        elif choice == "3":
            index = int(input("Enter task number to remove: ")) - 1
            task_manager.remove_task(index)
        elif choice == "4":
            task_manager.view_tasks()
        elif choice == "5":
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
