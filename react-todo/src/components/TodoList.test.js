import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
});


test('can add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Write tests' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Write tests')).toBeInTheDocument();
});




test('can toggle a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
});



test('can delete a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    const deleteButton = screen.getByText('Delete', { selector: 'button' });

    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
});