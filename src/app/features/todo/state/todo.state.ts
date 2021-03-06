import { TodoListService } from 'src/app/api/services/todo-list.service';
import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { TodoListItem } from 'src/app/api/services/TodoListItem';
import { AddTodo, UpdateTodo, RemoveTodo } from './todo.actions';
import { catchError, map, tap } from 'rxjs/operators';
import { patch, append, removeItem, insertItem, updateItem } from '@ngxs/store/operators';

export interface TodoItemsStateModel {
    todoItems: TodoListItem[];
  }

@State<TodoItemsStateModel>({
    name: 'todoItemsState',
    defaults: {
        todoItems: []
    }
})
@Injectable()
export class TodoListItemsState {
    constructor(private todoListService: TodoListService){}

    @Selector([TodoListItemsState])
    static items(state: TodoItemsStateModel) {
        return state.todoItems;
    }

    static item(id: number) {
        return createSelector([TodoListItemsState.items], (items: TodoListItem[]) => {
            return items.find(i => i.id === id);
        })
    }

    @Action(AddTodo)
    addTodo({getState, patchState}: StateContext<TodoItemsStateModel>, {todoItem}: AddTodo) {
    
        return this.todoListService.addItem(todoItem)
        .pipe(
            tap(addedItem => {
                const state = getState()
                console.log("Addtodo action=>", addedItem);
                patchState({
                    todoItems: [...state.todoItems, addedItem]
                })
            }
            ));
    }

    @Action(UpdateTodo)
    updateTodo(ctx: StateContext<TodoItemsStateModel>, {todoItem}: UpdateTodo) {
        
        return this.todoListService.updateItem(todoItem)
        .pipe(
            tap(updatedItem => {
                ctx.setState(
                    patch({
                        todoItems: updateItem<TodoListItem>(i => i?.id === updatedItem.id, updatedItem)
                    })
                )
            })
        );
    }

    @Action(RemoveTodo)
    removeTodo(ctx: StateContext<TodoItemsStateModel>, {id}: RemoveTodo) {
        this.todoListService.removeItem(id);
        ctx.setState(
            patch({
                todoItems: removeItem<TodoListItem>(i => i?.id === id)
            })
        );
    }
}