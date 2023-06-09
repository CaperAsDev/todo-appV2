import React from 'react';

type TodoListProps = {
  children: React.ReactNode
};

export default function TodoList({ children } : TodoListProps) {
  return (
    <ul className="tasks-list">
      {children}
    </ul>
  );
}
